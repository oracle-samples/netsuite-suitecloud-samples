/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */

define(['N/record', 'N/log'], (record, log) => {
  /**
   * @param {Object} context Holds string values for user event 
   * execution contexts.
   * @param {Record} context.newRecord The new (or updated) record
   * in read-only mode.
   * @param {Record} context.oldRecord The old record 
   * (previous state of the record) in read-only mode.
   * @param {String} context.type The trigger type.
   */
  function afterSubmit (context) {
    try {
      const currentRecord = context.newRecord
      const recordID = currentRecord.id
      const recordType = currentRecord.type
      // Load the record to determine if it is a marketing order.
      const objSalesOrder = record.load({
        type: recordType,
        id: recordID,
        isDynamic: true
      })
      const isMktgSalesOrder = objSalesOrder.getValue({
        fieldId: 'custbody_marketing_order'
      })
      // If record is a marketing order, set the amount sublist field to 0
      // for each item.
      if (isMktgSalesOrder) {
        const intItemLines = objSalesOrder.getLineCount({
          sublistId: 'item'
        })
        for (let i = 0; i < intItemLines; i++) {
          objSalesOrder.selectLine({
            sublistId: 'item',
            line: i
          })
          objSalesOrder.setCurrentSublistValue({
            sublistId: 'item',
            fieldId: 'amount',
            value: 0
          })
          objSalesOrder.commitLine({
            sublistId: 'item'
          })
        }
        objSalesOrder.save()
      }
    } catch (e) {
      log.error({
        title: 'marketing order script - afterSubmit',
        details: e
      })
    }
  }
  return {
    afterSubmit: afterSubmit
  }
})
