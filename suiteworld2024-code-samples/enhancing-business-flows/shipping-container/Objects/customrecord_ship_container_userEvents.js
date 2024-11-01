/**
 *@NApiVersion 2.1
 *@NScriptType UserEventScript
 */
 define(["N/record"], function(recordService) {
    const FieldId = {
        STATUS: 'custrecord_shipcont_status',
        CURRENT_ALLOCATION: 'custrecord_shipcont_allocation'
    };

    const Status = {
        AVAILABLE: '1',
        ALLOCATED: '3'
    };

    const Alloc = {
        TYPE: 'customrecord_ship_container_alloc',
        FieldId: {
            STATUS: 'custrecord_scalloc_status'
        },
        Status: {
            ALLOCATED: '2',
            FINISHED: '3'
        }
    };

    /**
     * When change of Container status is detected, and set to status "Available", Current Allocation field
     * needs to be cleared (no current allocation exists for initial state).
     */
    function beforeSubmit(context) {
        if (context.type !== context.UserEventType.EDIT)
            return;

        let newRecord = context.newRecord;
        let oldStatus = context.oldRecord.getValue({ fieldId: FieldId.STATUS });
        let newStatus = newRecord.getValue({ fieldId: FieldId.STATUS });
        if (newStatus !== oldStatus) {
            if (newStatus === Status.AVAILABLE) {
                newRecord.setValue({ fieldId: FieldId.CURRENT_ALLOCATION, value: '' });
            }
        }
    }

    /**
     * When change of Container status is detected, and:
     *   - set to "Allocated" status, Current Allocation must be updated to "Allocated" status as well. This will disallow
     *     further use of Shipping Container on new Sales Orders, until its processing is finished.
     *   - set to "Available" status, Current Allocation must be updated to "Finished" status, as its processing has been
     *     also completed.
     * Note that this example is utilizing {@link context.oldRecord}, because {@link context.newRecord} (specifically
     * Current Allocation field) might have changed in beforeSubmit.
     */
    function afterSubmit(context) {
        if (context.type !== context.UserEventType.EDIT)
            return;

        let oldRecord = context.oldRecord;
        let oldStatus = oldRecord.getValue({ fieldId: FieldId.STATUS });
        let newStatus = context.newRecord.getValue({ fieldId: FieldId.STATUS });
        let allocationId = oldRecord.getValue({ fieldId: FieldId.CURRENT_ALLOCATION });
        if (newStatus !== oldStatus) {
            if (newStatus === Status.ALLOCATED) {
                updateAllocationStatus(allocationId, Alloc.Status.ALLOCATED);
            }
            if (newStatus === Status.AVAILABLE) {
                updateAllocationStatus(allocationId, Alloc.Status.FINISHED);
            }
        }
    }

    function updateAllocationStatus(allocationId, status) {
        let allocation = recordService.load({ type: Alloc.TYPE, id: allocationId });
        allocation.setValue({ fieldId: Alloc.FieldId.STATUS, value: status });
        allocation.save();
    }

    return {
        beforeSubmit: beforeSubmit,
        afterSubmit: afterSubmit
    };
});