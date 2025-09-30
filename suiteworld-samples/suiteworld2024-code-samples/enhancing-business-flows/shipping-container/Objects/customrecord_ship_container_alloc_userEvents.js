/**
 *@NApiVersion 2.1
 *@NScriptType UserEventScript
 */
 define(["N/record"], function(recordService) {
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
    const FieldId = {
        CONTAINER: 'custrecord_scalloc_container'
    };

    /**
     * When new Shipping Container Allocation is created for Shipping Container, Shipping Container status
     * is switched to status Allocating, and its Current Allocation is set.
     */
    function afterSubmit(context) {
        if (context.type !== context.UserEventType.CREATE)
            return;

        let newRecord = context.newRecord;
        let containerId = newRecord.getValue({ fieldId: FieldId.CONTAINER });
        let container = recordService.load({ type: Container.TYPE, id: containerId });
        container.setValue({ fieldId: Container.FieldId.STATUS, value: Container.Status.ALLOCATING });
        container.setValue({ fieldId: Container.FieldId.CURRENT_ALLOCATION, value: newRecord.id });
        container.save();
    }

    return {
        afterSubmit: afterSubmit
    };
});