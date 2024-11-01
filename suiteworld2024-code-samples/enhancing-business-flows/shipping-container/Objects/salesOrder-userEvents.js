/**
 *@NApiVersion 2.1
 *@NScriptType UserEventScript
 */
 define(["N/record", "N/query"], function(recordService, query) {
    /**
     * SuiteQL query selecting current container allocation. If Shipping Container Allocation record does not exist yet, returns
     * container capacity regardless.
     */
    const CONTAINER_CAPACITY_QUERY = "SELECT cont.id id, cont.custrecord_shipcont_capacity_weight capacity, nvl(alloc.custrecord_scalloc_current_weight, 0.0) allocated, alloc.id allocation "
    + "FROM CUSTOMRECORD_SHIP_CONTAINER cont "
    + "LEFT JOIN CUSTOMRECORD_SHIP_CONTAINER_ALLOC alloc ON cont.custrecord_shipcont_allocation = alloc.id "
    + "WHERE cont.id = ?";

    const Alloc = {
        TYPE: 'customrecord_ship_container_alloc',
        FieldId: {
            CONTAINER: 'custrecord_scalloc_container',
            CURRENT_LOAD: 'custrecord_scalloc_current_weight'
        }
    };

    const Container = {
        TYPE: 'customrecord_ship_container',
        FieldId: {
            STATUS: 'custrecord_shipcont_status',
            CURRENT_ALLOCATION: 'custrecord_shipcont_allocation'
        },
        Status: {
            ALLOCATING: '2'
        }
    };

    /**
     * Computes container allocation data for each container selected on Item lines, and updates (or creates) Shipping Container Allocation
     * records.
     * @see computeContainerDataForLine
     * @see updateContainerAllocations
     * @param {Object} context beforeSubmit context
     */
    function beforeSubmit(context) {
        let record = context.newRecord;

        let containerAllocations = new Map();
        let lineCount = record.getLineCount({ sublistId: 'item' });
        for (let i = 0; i < lineCount; i++) {
            let containerId = record.getSublistValue({
                sublistId: 'item', fieldId: 'custcol_soi_container', line: i
            });
            if (containerId) {
                computeContainerDataForLine(containerId, containerAllocations, record, i);
            }
        }

        updateContainerAllocations(containerAllocations, record);
    }

    /**
     * For a given container and line, updates container allocation.
     * !!! In this example, for the sake of simplicity, we trust the data in custcol_soi_conttake as submitted
     * from the client. This field however expects its computation in Client Scripts - and value will be missing
     * if record is created with Shipping containers outside of UI -> in production example, the field value
     * should not be trusted, and calculated in UE scripts.
     * @param {string} containerId ID of a container on a current line
     * @param {Map} containerAllocations map of containerId -> container allocations data
     * @param {string} lineId current line id
     */
    function computeContainerDataForLine(containerId, containerAllocations, record, lineId) {
        let containerData;
        if (!containerAllocations.has(containerId)) {
            containerData = loadContainerData(containerId);
        } else {
            containerData = containerAllocations.get(containerId);
        }

        let lineAllocation = record.getSublistValue({
            sublistId: 'item', fieldId: 'custcol_soi_conttake', line: lineId
        });
        containerData.soAllocated += lineAllocation;
        if (!containerData.allocationId) {
            containerData.linesWoAllocation.push(lineId);
        }
        containerAllocations.set(containerId, containerData);
    }

    /**
     * Iteration of container allocations data, for each executes {@link updateContainerAllocation}.
     * After related Shipping Container Allocations are created/updated, custbody_so_scallocs field is synchronized.
     * @param {Map} containerAllocations map of containerId -> container allocations data
     */
    function updateContainerAllocations(containerAllocations, record) {
        let allocations = new Set();
        containerAllocations.forEach((containerData, containerId) => {
            allocations.add(updateContainerAllocation(containerId, containerData));
        });
        record.setValue({ fieldId: 'custbody_so_scallocs', value: Array.from(allocations) });
    }

    /**
     * In case Shipping Container Allocation exists, it is updated based on calculated data.
     * Otherwise, new Shipping Container Allocation is created with calculated data.
     * !!! As this example is simplified, the logic within this script does NOT consider data from other
     * Sales Orders. This would need to be fixed for fully functional product!
     */
    function updateContainerAllocation(containerId, containerData) {
        if (containerData.allocationId) {
            updateAllocation(containerData);
            return containerData.allocationId;
         } else {
             let allocationId = createAllocation(containerId, containerData);
             updateLinesWithAllocation(record, containerData.linesWoAllocation, allocationId);
             return allocationId;
         }
    }

    /**
     * Update of a related Shipping Container Allocation record.
     */
    function updateAllocation(containerData) {
        let allocationRecord = recordService.load({
            type: Alloc.TYPE, id: containerData.allocation });
        allocationRecord.setValue({
            fieldId: Alloc.FieldId.CURRENT_LOAD,
            value: containerData.allocated + containerData.soAllocated
        });
        allocationRecord.save();
    }

    /**
     * Create of a related Shipping Container Allocation record.
     * This function also updates Shipping Container, in order to set its newly created Allocation.
     * Note that this is done here because when in context of User Event script, nested User Event scripts
     * (in this case for Shipping Container Allocation) do NOT get executed. Compensation of this is required,
     * otherwise Shipping Container status would not be in a consistent state.
     */
    function createAllocation(containerId, containerData) {
        let allocationRecord = recordService.create({ type: Alloc.TYPE });
        allocationRecord.setValue({ fieldId: Alloc.FieldId.CONTAINER, value: containerId });
        allocationRecord.setValue({ fieldId: Alloc.FieldId.CURRENT_LOAD, value: containerData.soAllocated });
        let allocationId = allocationRecord.save();

        // following update on Shipping Container is necessary in order to compensate not run UEs on Shipping Container Allocation.
        let container = recordService.load({ type: Container.TYPE, id: containerId });
        container.setValue({ fieldId: Container.FieldId.STATUS, value: Container.Status.ALLOCATING });
        container.setValue({ fieldId: Container.FieldId.CURRENT_ALLOCATION, value: allocationId });
        container.save();

        return allocationId;
    }

    function updateLinesWithAllocation(record, linesToUpdate, allocationId)
    {
        linesToUpdate.forEach((lineId) => {
            record.setSublistValue({ sublistId: 'item', fieldId: 'custcol_soi_scalloc', line: lineId, value: allocationId });
        });
    }

    /**
     * @param {string} containerId ID of a shipping container
     * @returns tuple of container allocation data: container capacity, currently allocated capacity,
     * this SO allocation (init), Shipping Container Allocation ID, lines that do not have allocation yet (empty array);
     * null is returned when container data were not possible to load.
     */
    function loadContainerData(containerId) {
        let results = query.runSuiteQL({
            query: CONTAINER_CAPACITY_QUERY,
            params: [containerId]
        }).results;
        if (results.length === 1) {
            let asMap = results[0].asMap();
            return {
                capacity: asMap.capacity,
                allocated: asMap.allocated,
                soAllocated: 0.0,
                allocationId: asMap.allocation,
                linesWoAllocation: []
            };
        }
        return null;
    }

    return {
        beforeSubmit: beforeSubmit
    };
});
