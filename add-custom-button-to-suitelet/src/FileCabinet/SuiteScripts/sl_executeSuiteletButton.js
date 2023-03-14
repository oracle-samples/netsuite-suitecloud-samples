/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */

define(['N/runtime', 'N/log'], (runtime, log) => {
  /**
   * @param {Object} scriptContext Holds string values for user event 
   * execution contexts.
   * @param {Record} scriptContext.newRecord The new record being loaded.
   * @param {N/ui/serverWidget#Form} scriptContext.Form The current form.
   * @param {String} scriptContext.type The type of operation 
   * invoked by the event (the trigger type).
   */
  function beforeLoad (scriptContext) {
    try {
      const recCurrent = scriptContext.newRecord
      const objForm = scriptContext.form
      const stStatus = recCurrent.getValue({
        fieldId: 'status'
      })
      const stSuiteletLinkParam = runtime.getCurrentScript().getParameter({
        name: 'custscript_suiteletlink'
      })
      const suiteletURL = '"' + stSuiteletLinkParam + '"'
      if (stStatus === 'Pending Fulfillment') {
        objForm.addButton({
          id: 'custpage_suiteletbutton',
          label: 'Open Suitelet',
          functionName: 'window.open(' + suiteletURL + ')'
        })
      }
    } catch (error) {
      log.error({
        title: 'beforeLoad_addButton',
        details: error.message
      })
    }
  }
  return {
    beforeLoad: beforeLoad
  }
})
