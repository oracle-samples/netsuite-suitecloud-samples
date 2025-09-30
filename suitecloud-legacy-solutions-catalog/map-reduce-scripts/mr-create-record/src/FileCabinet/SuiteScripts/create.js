/**
 *  Copyright (c) 1998-2023 Oracle NetSuite, Inc.
 *  500 Oracle Parkway Redwood Shores, CA 94065 United States 650-627-1000
 *  All Rights Reserved.
 *
 *  This customization project creates a sales order record based
 *  on data from a custom record and a transaction workbook. 
 *  The query module is used to retrieve data from the workbook.
 */

/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 * @NModuleScope SameAccount
 */

define(['N/record', 'N/query', 'N/log'], (record, query, log) => {
  /**
   * To populate data for the custom record workbook, go to
   * Customization > Lists, Records, & Fields > Record Types.
   * 
   * @returns {query.Query} Object holds custom record order data.
   */ 
  function getInputData () {
    return {
      type: 'query',
      id: 'custworkbook_nscs_mr_create'
    }
  }
  /**
   * Gathers sales order data from workbook and asychronously creates a 
   * standard order record. The entity, memo, subsidiary, item, item quantity,
   * and item rate fields are set to the record. The lines are committed 
   * and saved.
   *  
   * @param {*} context 
   */
  async function map (context) {
    log.debug('Key: ' + context.key, 'Value: ' + context.value)
  
    const queryData = JSON.parse(context.value)
    
    const salesOrder = await record.create.promise({
      type: record.Type.SALES_ORDER,
      isDynamic: true
    })
    
    // query data values are set according to workbook position
    salesOrder.setValue({
      fieldId: 'entity',
      value: queryData.values[0]
    })
    salesOrder.setValue({
      fieldId: 'memo',
      value: 'Memo field set.'
    })
    salesOrder.setValue({
      fieldId: 'subsidiary',
      value: queryData.values[1]
    })
    
    salesOrder.insertLine({
      sublistId: 'item',
      line: 0
    })
    
    salesOrder.setCurrentSublistValue({
      sublistId: 'item',
      fieldId: 'item',
      value: queryData.values[2],
      ignoreFieldChange: false
    })
    
    salesOrder.setCurrentSublistValue({
      sublistId: 'item',
      fieldId: 'quantity',
      value: parseInt(queryData.values[3]),
      ignoreFieldChange: false
    })
    
    salesOrder.setCurrentSublistValue({
      sublistId: 'item',
      fieldId: 'rate',
      value: parseFloat(queryData.values[4]),
      ignoreFieldChange: false
    })
    
    salesOrder.commitLine({
      sublistId: 'item'
    })

    await salesOrder.save.promise()
  }
  /**
   * Logs script details
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
