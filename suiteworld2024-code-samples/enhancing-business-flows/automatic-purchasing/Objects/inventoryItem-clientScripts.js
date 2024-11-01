/**
 *@NApiVersion 2.1
 *@NScriptType ClientScript
 */
 define([], function() {
    function pageInit(context) {
        let currentRecord = context.currentRecord;
        configureMandatoryLimit(currentRecord);
    }

    /**
     * If Allow Automatic Purchase field is checked, Auto-purchase When Below field becomes mandatory.
     * @param {currentRecord} currentRecord 
     */
    function configureMandatoryLimit(currentRecord) {
        let isAutoPurchaseEnabled = currentRecord.getValue({ fieldId: 'custitem_ii_autopurchase' });
        currentRecord.getField({ fieldId: 'custitem_ii_lowerlimit' }).isMandatory = isAutoPurchaseEnabled;
    }

    function fieldChanged(context) {
        let currentRecord = context.currentRecord;
        if (context.fieldId === 'custitem_ii_autopurchase') {
            configureMandatoryLimit(currentRecord);
        }
    }

    return {
        pageInit: pageInit,
        fieldChanged: fieldChanged
    };
});
