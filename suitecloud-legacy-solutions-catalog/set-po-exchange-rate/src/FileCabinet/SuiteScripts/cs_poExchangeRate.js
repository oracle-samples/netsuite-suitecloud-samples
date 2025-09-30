/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */

define(['N/runtime', 'N/currency', 'N/log'], (runtime, currency, log) => {
  /**
     * @param {Object} context Holds values for execution contexts.
     * @param {CurrentRecord} context.currentRecord The current form record.
     */
  function saveRecord (context) {
    try {
      // Retrieve currency parameter. If empty, script will end.
      const stUserCurrency = runtime.getCurrentScript().getParameter({
        name: 'custscript_custom_currency_po_amount'
      })
      if (stUserCurrency === ' ' || stUserCurrency === null || 
      stUserCurrency === undefined) {
        throw Error(`Please enter a value for 
        Custom Currency at Home > User Preferences > Custom.`)
      }
      // Retrieve currency value and purchase order date from the purchase order
      // record.
      const purchaseOrder = context.currentRecord
      const stTranCurrency = purchaseOrder.getValue({
        fieldId: 'currency'
      })
      const stTranDate = purchaseOrder.getValue({
        fieldId: 'trandate'
      })
      const stTotal = purchaseOrder.getValue({
        fieldId: 'total'
      })
      // Convert purchase order total to decimal value and calculate exchange 
      // rate.
      const flTotalAmount = parseFloat(stTotal)
      const exchangeRate = currency.exchangeRate({
        source: stTranCurrency,
        target: stUserCurrency,
        date: stTranDate
      })
      const flExchangeRate = parseFloat(exchangeRate)
      const flAmountInUserCurrency = parseFloat(flTotalAmount * flExchangeRate)
      // Set custom fields on purchase order to display custom currency exchange
      // rate and calculated purchase amt total with custom currency. 
      purchaseOrder.setValue({
        fieldId: 'custbody_currency_exchange_rate',
        value: flExchangeRate
      })
      purchaseOrder.setValue({
        fieldId: 'custbody_currency_po_amount',
        value: flAmountInUserCurrency
      })
    } catch (e) {
      if (e !== undefined) {
        log.error({
          title: 'Process Error',
          details: e
        })
      } else {
        log.error({
          title: 'Unexpected Error',
          details: e
        })
      }
      throw (e)
    }
    return true
  }
  return {
    saveRecord: saveRecord
  }
})
