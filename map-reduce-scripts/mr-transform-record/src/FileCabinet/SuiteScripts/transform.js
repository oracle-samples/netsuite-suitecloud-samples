/**
 *  Copyright (c) 1998-2023 Oracle NetSuite, Inc.
 *  500 Oracle Parkway Redwood Shores, CA 94065 United States 650-627-1000
 *  All Rights Reserved.
 *
 *  This customization project creates an item fulfillment and invoice
 *  record based on Transaction workbook data. The query module is used to
 *  retrieve data from the workbook.
 */

/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 * @NModuleScope SameAccount
 */

define(['N/record', 'N/query', 'N/log'], (record, query, log) => {
  /**
     * @returns {query.Query} Object holds sales order data created on
     * the current day with mainline field filter set to true.
     */
  function getInputData () {
    return {
      type: 'query',
      id: 'custworkbook_nscs_mr_transform'
    }       
  }
  
  // shipmentstatus is a select field
  const OBJ_ITEM_FULFILLMENT_STATUS = {
    ID_PICKED: 'A',
    ID_PACKED: 'B',
    ID_SHIPPED: 'C'
  }
  /**
   * Checks order status for each sales order in the workbook and creates
   * an item fulfillment or invoice record depending on status. Fields
   * must be set with valid values from your NetSuite account. 
   * 
   * @param {*} context 
   */
  async function map (context) {
    log.debug('Key: ' + context.key, 'Value: ' + context.value)
      
    const queryData = JSON.parse(context.value)    
    
    // query data values set according to workbook position
    const internalId = queryData.values[5] 
    const orderStatus = queryData.values[4]
    let bFulfilled = false
      
    if (orderStatus !== 'Order : Pending Billing') {
      log.debug('Fulfilling Order: ' + internalId)
      
      const itemFulfillment = await record.transform.promise({
        fromType: record.Type.SALES_ORDER,
        fromId: internalId,
        toType: record.Type.ITEM_FULFILLMENT,
        isDynamic: false
      })
     
      itemFulfillment.setValue({
        fieldId: 'shipstatus',
        value: OBJ_ITEM_FULFILLMENT_STATUS.ID_SHIPPED
      })
      
      const intNumLines = itemFulfillment.getLineCount({
        sublistId: 'item'
      })
      
      for (let i = 0; i < intNumLines; i++) {
        const sublistFieldValue = itemFulfillment.getSublistValue({
          sublistId: 'item',
          fieldId: 'quantityremaining',
          line: i
        })
    
        itemFulfillment.setSublistValue({
          sublistId: 'item',
          fieldId: 'location',
          line: i,
          value: 1 // location specific to account
        })
      
        itemFulfillment.setSublistValue({
          sublistId: 'item',
          fieldId: 'quantity',
          line: i,
          value: sublistFieldValue
        })
        bFulfilled = true
      }
      await itemFulfillment.save.promise()
    }
    if ((orderStatus === 'Order : Pending Billing') || (bFulfilled)) {
      log.debug('Billing Order: ' + internalId)
        
      const invoice = await record.transform.promise({
        fromType: record.Type.SALES_ORDER,
        fromId: queryData.values[5],
        toType: record.Type.INVOICE,
        isDynamic: false
      })
      
      await invoice.save.promise()
    }
  }
    
  /**
   * Logs script details
   * @param {*} context 
   */
  async function summarize (context) {
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
