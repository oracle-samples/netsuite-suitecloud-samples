/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */

define(['N/search', 'N/log'], (search, log) => {
  /**
   * @param {Object} context Holds values for execution contexts.
   * @param {String} context.mode The mode in which the record is 
   * being accessed.
   * @param {CurrentRecord} context.currentRecord The current form record.
   */
  function pageInit (context) {
    try {
      // If invoice is being created or copied, run the saved search to get
      // list of open accounting periods available for the custom field.
      if (context.mode === 'copy' || context.mode === 'create') {
        const record = context.currentRecord
        const searchOpenAccountingPeriods = search.load({
          id: 'customsearch_open_accounting_periods'
        })
        const resultsFromSearch = searchOpenAccountingPeriods.run().getRange({
          start: 0,
          end: 1
        })
        record.setValue({
          fieldId: 'custbody_preferred_posting_period',
          value: resultsFromSearch[0].id
        })
        record.setValue({
          fieldId: 'postingperiod',
          value: resultsFromSearch[0].id
        })
      } 
    } catch (e) {
      log.error({
        title: 'ERROR',
        details: e
      })
    }
  }
  /**
   * @param {Object} context Holds values for execution contexts.
   * @param {String} context.fieldId The field ID name.
   * @param {CurrentRecord} context.currentRecord The current form record.
   */
  function fieldChanged (context) {
    try {
      // If the custom Posting Period field changes value, automatically set 
      // the Posting Period field to update for consistency.
      if (context.fieldId === 'custbody_preferred_posting_period') {
        const record = context.currentRecord
        const prefPostPeriod = record.getValue({
          fieldId: 'custbody_preferred_posting_period'
        })
        record.setValue({
          fieldId: 'postingperiod',
          value: prefPostPeriod
        })
      } else {
        return
      }
    } catch (e) {
      log.error({
        title: 'ERROR',
        details: e
      })
    }
  }
  return {
    pageInit: pageInit,
    fieldChanged: fieldChanged
  }
})
