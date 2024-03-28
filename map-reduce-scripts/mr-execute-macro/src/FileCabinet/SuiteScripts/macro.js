/**
 *  Copyright (c) 1998-2024 Oracle NetSuite, Inc.
 *  500 Oracle Parkway Redwood Shores, CA 94065 United States 650-627-1000
 *  All Rights Reserved.
 *
 *  Triggers a macro against transactions identified in a workbook.  
 *  This automation takes a Sales Order and triggers the Auto Assign 
 *  Location Macro. The workbook returns sales orders that have a 
 *  location field set.
 */

/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 * @NModuleScope SameAccount
 */

define(['N/record', 'N/query', 'N/log'], (record, query, log) => {
  /**
   * @returns {query.Query} The object that encapsulates the query 
   * definition.
   */
  function getInputData () {
    return {
      type: 'query',
      id: 'custworkbook_nscs_mr_loc_assign'
    }
  }
  /**
   * @param {*} context 
   */
  async function map (context) {
    log.debug('Key: ' + context.key, 'Value: ' + context.value)

    const queryData = JSON.parse(context.value)
      
    // internal id values according to workbook position
    const internalId = queryData.values[0]
    const salesOrder = await record.load.promise({
      type: record.Type.SALES_ORDER,
      id: internalId,
      isDynamic: true
    })

    log.audit('Order#' + internalId + ' loaded')

    salesOrder.executeMacro({
      id: 'autoAssignLocations'
    })
  
    await salesOrder.save.promise()
  }

  /**
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
