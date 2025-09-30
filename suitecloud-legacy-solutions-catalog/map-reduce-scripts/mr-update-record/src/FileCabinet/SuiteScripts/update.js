/**
 *  Copyright (c) 1998-2023 Oracle NetSuite, Inc.
 *  500 Oracle Parkway Redwood Shores, CA 94065 United States 650-627-1000
 *  All Rights Reserved.
 *
 *  This customization project updates the memo field and description sublist 
 *  field values of a sales order. The sales orders are updated based on 
 *  a transaction workbook. The query module is used to retrieve data from the 
 *  workbook.
 */

/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 * @NModuleScope SameAccount
 */

define(['N/record', 'N/query', 'N/log'], (record, query, log) => {
  /**
   * @returns {query.Query} Object holds sales order data with mainline 
   * field filter set to true. 
   */
  function getInputData () {
    return {
      type: 'query',
      id: 'custworkbook_nscs_mr_update'
    }
  }
  /**
   * Asynchronously loads each sales order in the from workbook to set the value
   * of the memo and description fields. The description sublist field gets a 
   * line count for each item to set each value for every line.
   * 
   * @param {*} context 
   */
  async function map (context) {
    log.debug('Key: ' + context.key, 'Value: ' + context.value)
      
    const queryData = JSON.parse(context.value)
    const internalID = queryData.values[4]
      
    const salesOrder = await record.load.promise({
      type: record.Type.SALES_ORDER,
      id: internalID, 
      isDynamic: true
    })
  
    salesOrder.setValue({
      fieldId: 'memo',
      value: 'Updated Memo Field.'
    })
        
    const intNumLines = salesOrder.getLineCount({
      sublistId: 'item'
    })
        
    for (let i = 0; i < intNumLines; i++) {
      salesOrder.getSublistValue({
        sublistId: 'item',
        fieldId: 'description',
        line: i
      })
      salesOrder.selectLine({
        sublistId: 'item',
        line: i
      })
      salesOrder.setCurrentSublistValue({
        sublistId: 'item',
        fieldId: 'description',
        value: 'Updated description field.',
        ignoreFieldChange: true
      })
      salesOrder.commitLine({
        sublistId: 'item'
      })
    }
    await salesOrder.save.promise()
  }
  /**
   * Logs script details
   * @param {*} context 
   */
  function summarize (context) {
    log.audit('Total script usage: ' + context.usage)
    log.audit('Concurrency: ' + context.concurrency)
    log.audit('Yields: ' + context.yields)

    log.error('Input Error', context.inputSummary.error)

    context.mapSummary.errors.iterator().each((key, error) => {
      log.error({
        title: 'map error for key: ' + key,
        details: error
      })
    })
  }
  return {
    getInputData: getInputData,
    map: map,
    summarize: summarize
  }
})
