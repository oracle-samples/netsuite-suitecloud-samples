/**
 *@NApiVersion 2.1
 *@NScriptType ClientScript
 */
 define(['N/ui/message', 'N/query', 'N/error'], function(message, query, error) {

    /**
     * Container allocations storage.
     */
    const CONTAINER_DATA_MAP = new Map();

    /**
     * SuiteQL query selecting current container allocation. If Shipping Container Allocation record does not exist yet, returns
     * container capacity regardless.
     */
    const CONTAINER_DATA_QUERY = "SELECT cont.id id, cont.custrecord_shipcont_capacity_weight capacity, nvl(alloc.custrecord_scalloc_current_weight, 0.0) allocated "
    + "FROM CUSTOMRECORD_SHIP_CONTAINER cont "
    + "LEFT JOIN CUSTOMRECORD_SHIP_CONTAINER_ALLOC alloc ON cont.custrecord_shipcont_allocation = alloc.id "
    + "WHERE cont.id = ?";

    /**
     * Reacts to following field changes on Item sublist:
     *   - custcol_soi_perunittake and/or quantity - in order to recalculate custcol_soi_conttake value, {@link calculateItemAllocation},
     *   - custcol_soi_container - in order to lazy load selected container data, {@link initContainerData}.
     * @param {Object} scriptingContext
     * @param {currentRecord.CurrentRecord} scriptingContext.currentRecord the current record
     * @param {string} scriptingContext.sublistId id of sublist field of which changed
     * @param {string} scriptingContext.fieldId id of a changed field
     */
    function fieldChanged(context) {
        let currentRecord = context.currentRecord;
        if (context.sublistId === 'item'
            && (context.fieldId === 'custcol_soi_perunittake' || context.fieldId === 'quantity')) {
            calculateItemAllocation(currentRecord);
        } else if (context.sublistId === 'item' && context.fieldId === 'custcol_soi_container') {
            initContainerData(currentRecord);
        }
    }

    /**
     * For current Item line, calculates container allocation as "item weight * quantity"
     * @param {currentRecord.CurrentRecord} currentRecord 
     */
    function calculateItemAllocation(currentRecord) {
        let perUnitTake = currentRecord.getCurrentSublistValue({
            sublistId: 'item', fieldId: 'custcol_soi_perunittake'
        });
        let quantity = currentRecord.getCurrentSublistValue({
            sublistId: 'item', fieldId: 'quantity'
        });
        currentRecord.setCurrentSublistValue({
            sublistId: 'item',
            fieldId: 'custcol_soi_conttake',
            value: perUnitTake * quantity
        });
    }

    /**
     * For current sublist line selected container, initializes container allocation data.
     * @param {currentRecord.CurrentRecord} currentRecord 
     */
    function initContainerData(currentRecord) {
        let containerId = currentRecord.getCurrentSublistValue({
            sublistId: 'item', fieldId: 'custcol_soi_container'
        });
        if (containerId) {
            getContainerData(containerId);
        }
    }

    /**
     * For given container id, returns container allocation data.
     * @param {string} containerId ID of a selected container.
     * @returns container allocation data as a tuple of container capacity, already allocated weight and free container capacity.
     * @throws {SuiteScriptError} error in case container allocation data cannot be loaded.
     */
    function getContainerData(containerId) {
        if (CONTAINER_DATA_MAP.has(containerId)) {
            return CONTAINER_DATA_MAP.get(containerId);
        } else {
            let data = loadContainerData(containerId);
            if (data !== null) {
                CONTAINER_DATA_MAP.set(containerId, data);
                return data;
            } else
                throw error.create({
                    name: "UNABLE_TO_LOAD_CONTAINER_DATA",
                    message: "Unable to load data for selected container."
                });
        }
    }

    /**
     * Performs load of data related to capacity allocation for requested container. Utilizes N/query.
     * @param {string} containerId ID of a selected container.
     * @returns tuple of container capacity, already allocated weight and free container capacity, or null.
     */
    function loadContainerData(containerId) {
        let results = query.runSuiteQL({
            query: CONTAINER_DATA_QUERY,
            params: [containerId]
        }).results;
        if (results.length === 1) {
            let asMap = results[0].asMap();
            return {
                totalCapacity: asMap.capacity,
                allocated: asMap.allocated,
                freeCapacity: asMap.capacity - asMap.allocated
            };
        }
        return null;
    }

    /**
     * Performs validation of Item line that is being committed: container capacity must not be exceeded by adding this line.
     * @param {Object} context 
     * @param {currentRecord.CurrentRecord} context.currentRecord the current record
     * @param {string} context.sublistId id of sublist field of which changed
     * @param {string} context.fieldId id of a changed field
     * @param {string} context.line id of a current sublist line
     * @returns true in case line is valid, false otherwise.
     */
    function validateLine(context) {
        let currentRecord = context.currentRecord;
        if (context.sublistId === 'item') {
            let containerId = currentRecord.getCurrentSublistValue({ sublistId: 'item', fieldId: 'custcol_soi_container' });
            if (containerId) {
                let capacityNeed = currentRecord.getCurrentSublistValue({ sublistId: 'item', fieldId: 'custcol_soi_conttake' });
                let remainingCapacity = getRemainingCapacity(context, containerId);
                if (remainingCapacity < capacityNeed) {
                    message.create({
                        title: 'Container capacity exceeded',
                        message: 'Selection of container on current line would exceed its capacity.\n'
                        + 'Capacity available: ' + remainingCapacity + '\n'
                        + 'Capacity need for current line: ' + capacityNeed,
                        type: message.Type.ERROR
                    }).show(10000);
                    return false;
                }
            }
        }
        return true;
    }

    function getRemainingCapacity(context, containerId) {
        let containerData = getContainerData(containerId);
        let currentAllocation = getCurrentSOAllocation(context, containerId);
        return containerData.freeCapacity - currentAllocation;
    }

    /**
     * @param {Object} context 
     * @param {currentRecord.CurrentRecord} context.currentRecord the current record
     * @param {string} context.sublistId id of sublist field of which changed
     * @param {string} context.fieldId id of a changed field
     * @param {string} context.line id of a current sublist line
     * @returns current Sales Order allocation of a container specified by containerId. Excludes currently edited line.
     */
    function getCurrentSOAllocation(context, containerId) {
        let currentRecord = context.currentRecord;
        let lineCount = currentRecord.getLineCount({ sublistId: 'item'});
        let currentLine = context.line;
        let containerSOAllocation = 0.0;
        for (let i = 0; i < lineCount; i++) {
            let lineContainer = currentRecord.getSublistValue({ sublistId: 'item', fieldId: 'custcol_soi_container', line: i });
            if (i !== currentLine && lineContainer === containerId) {
                containerSOAllocation += currentRecord.getSublistValue({ sublistId: 'item', fieldId: 'custcol_soi_conttake', line: i });
            }
        }
        return containerSOAllocation;
    }
    
    return {
        fieldChanged: fieldChanged,
        validateLine: validateLine
    };
});