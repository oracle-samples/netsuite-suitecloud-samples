/*
 * Copyright (c) 2021 Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 *
 */

/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */

define(['N/record', 'N/log', 'N/error'], (record, log, error) => {
  /**
   * @param {Object} scriptContext 
   * @param {String} scriptContext.type Type of operation invoked by the event.
   * @param {Record} scriptContext.newRecord The new record being loaded.
   * @param {Record} scriptContext.oldRecord The old record (previous state
   * of the record) in read-only mode.
   */
  function afterSubmit (scriptContext) {
    const stMethodName = 'afterSubmit_calculateCommission'
    try {
      if ((scriptContext.type !== scriptContext.UserEventType.CREATE) &&
        (scriptContext.type !== scriptContext.UserEventType.EDIT)) {
        return
      }
      let stItemType = null
      let flMSRPTotalAmt = 0.00
      let flMSRPAmt = 0.00
      let flNetDistributorCost = 0.00
      let flCommissionAmount = null
      let flQuantity = 0.00
      const recSalesOrder = scriptContext.newRecord
      const flSubtotal = parseFloat(recSalesOrder.getValue({
        'fieldId': 'subtotal'
      }))
      const numItems = recSalesOrder.getLineCount({
        'sublistId': 'item'
      })
      for (let intLinenum = 0; intLinenum < numItems; intLinenum++) {
        flMSRPAmt = parseFloat(recSalesOrder.getSublistValue({
          'sublistId': 'item',
          'fieldId': 'custcol_salesorder_msrp',
          'line': intLinenum
        }))
        flQuantity = parseFloat(recSalesOrder.getSublistValue({
          'sublistId': 'item',
          'fieldId': 'quantity',
          'line': intLinenum
        }))
        stItemType = recSalesOrder.getSublistValue({
          'sublistId': 'item',
          'fieldId': 'itemtype',
          'line': intLinenum
        })
        if ((stItemType !== 'Discount' && stItemType !== 'Subtotal') &&
         (stItemType !== 'Markup')) {
          flMSRPTotalAmt = flMSRPTotalAmt + (flMSRPAmt * flQuantity)
        }
      }
      flNetDistributorCost = flMSRPTotalAmt * 0.5
      if (flSubtotal === flNetDistributorCost) {
        flCommissionAmount = flSubtotal * 0.10
      } else if (((flSubtotal > flNetDistributorCost) && 
        (flSubtotal <= flMSRPTotalAmt))) {
        flCommissionAmount = flNetDistributorCost * 0.10 + 
        (flSubtotal - flNetDistributorCost) * 0.75
      } else {
        if (flSubtotal > flMSRPTotalAmt) {
          flCommissionAmount = flNetDistributorCost * 0.10 + 
          (flMSRPTotalAmt - flNetDistributorCost) * 0.75 + 
          (flSubtotal - flMSRPTotalAmt) * 0.5
        }
      }
      const thisSalesOrderID = recSalesOrder.id
      const updateSalesOrder = record.load({
        'type': record.Type.SALES_ORDER,
        'id': thisSalesOrderID
      })
      updateSalesOrder.setValue({
        'fieldId': 'custbody_commission_amount',
        'value': flCommissionAmount
      })
      updateSalesOrder.save()
    } catch (e) {
      log.debug({
        'title': stMethodName,
        'details': ' - Exit (Catch)- '
      })
      if (e.getDetails !== undefined) {
        log.error({
          'title': 'Process Error',
          'details': e.getCode() + ': ' + e.getDetails()
        })
        throw e
      } else {
        log.error({
          'title': 'Unexpected Error',
          'details': e.toString()
        })
        throw error.create({
          'name': 'Unexpected Error',
          'message': e.toString()
        })
      }
    }
  }
  return {
    'afterSubmit': afterSubmit
  }
})