/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */

define(['N/ui/serverWidget', 'N/log'], (serverWidget, log) => {
  /**
   * @param {Object} context Holds string values for user event 
   * execution contexts.
   * @param {String} context.type Type of operation invoked by the event.
   * @param {Record} context.newRecord The new record being loaded.
   * @param {Record} context.oldRecord The old record (previous state
   *  of the record) in read-only mode.
   */
  function beforeLoad (context) {
    if (context.type === context.UserEventType.EDIT) {
      hideColumnField(context.form, 'item', 'item')
    }
  }
  /**
   * @param {N/ui/serverWidget#Form} formObj Form where the column field exists.
   * @param {N/ui/serverWidget#Sublist} sublistId SublistId of the column. 
   * @param {N/ui/serverWidget#Field} fieldId FieldId of the sublist.
   */
  function hideColumnField (formObj, sublistId, fieldId) {
    try {
      const formSublist = formObj.getSublist({
        id: sublistId
      })
      if (formSublist) {
        const formField = formSublist.getField({
          id: fieldId
        })
        if (formField !== 'undefined' && formField !== null) {
          formField.updateDisplayType({
            displayType: serverWidget.FieldDisplayType.HIDDEN
          })
        }
      }
    } catch (error) {
      log.error({
        title: 'Error occurred when hiding field',
        details: JSON.stringify({
          sublistId: sublistId,
          fieldId: fieldId
        })
      })
    }
  }
  return {
    beforeLoad: beforeLoad
  }
})
