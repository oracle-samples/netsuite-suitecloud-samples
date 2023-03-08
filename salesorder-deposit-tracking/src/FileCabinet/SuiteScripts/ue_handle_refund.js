/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/record', 'N/search', 'N/log'], (record, search, log) => {
  return {
    'afterSubmit': function (scriptContext) {
      const contextRef = scriptContext.newRecord
      const refId = contextRef.id
      UpdateSalesOrder(refId)
    }
  }
  /**
   * @param {*} refId Represents the ID of the sales order being loaded.
   */
  function UpdateSalesOrder (refId) {
    try {
      const refund = record.load({
        'type': record.Type.CUSTOMER_REFUND,
        'id': refId,
        'isDynamic': true
      })
      const soEntity = refund.getValue({
        'fieldId': 'customer'
      })
      const lines = refund.getLineCount({
        'sublistId': 'apply'
      })
      for (let i = 0; i < lines; i++) {
        const depositnum = refund.getSublistText({
          'sublistId': 'apply',
          'fieldId': 'internalid',
          'line': i
        })
        refund.getSublistValue({
          'sublistId': 'apply',
          'fieldId': 'amount',
          'line': i
        })
        const order = search.lookupFields({
          'type': search.Type.DEPOSIT_APPLICATION,
          'id': depositnum,
          'columns': 'createdfrom.salesorder'
        })
        const soFullTextTranID = order['createdfrom.salesorder'][0].text
        const orderId = order['createdfrom.salesorder'][0].value
        const soTotalPaid = search.lookupFields({
          'type': search.Type.SALES_ORDER,
          'id': orderId,
          'columns': ['total']
        })
        const soTotal = soTotalPaid.total
        const mySearch = search.load({
          'id': 'customsearch_sobalancedue'
        })
        const entityFilter = search.createFilter({
          'name': 'internalid',
          'join': 'customer',
          'operator': search.Operator.EQUALTO,
          'summary': search.Summary.MAX,
          'values': soEntity
        })
        const soIdFilter = search.createFilter({
          'name': 'formulatext',
          'operator': search.Operator.IS,
          'formula': `case when {type}='Customer Deposit' 
            then {appliedtotransaction} 
            when {type}='Deposit Application' then {createdfrom.salesorder} 
            when {type}='Sales Order' then 'Sales Order #'||{number} end`,
          'values': soFullTextTranID
        })
        mySearch.filters.push(entityFilter, soIdFilter)
        mySearch.run().each((soresults) => {
          const soTextID = soresults.getValue({
            'name': 'formulatext',
            'summary': search.Summary.GROUP
          })
          if (soFullTextTranID === soTextID) {
            const totalPaid = soresults.getValue({
              'name': 'formulacurrency',
              'summary': search.Summary.SUM
            })
            let remainingBalanceOnOrder = parseFloat(soTotal)
            remainingBalanceOnOrder = (parseFloat(remainingBalanceOnOrder) - 
             parseFloat(totalPaid))
            const salesorder = record.load({
              'type': record.Type.SALES_ORDER,
              'id': orderId,
              'isDynamic': true
            })
            salesorder.setValue({
              'fieldId': 'custbody_total_deposit_paid',
              'value': totalPaid
            })
            salesorder.setValue({
              'fieldId': 'custbody_balance_remaining',
              'value': remainingBalanceOnOrder
            })
            salesorder.save({
              'enableSourcing': true,
              'ignoreMandatoryFields': true
            })
          }
        })
      }
    } catch (error) {
      log.error({
        'title': 'ERROR',
        'details': error
      })
    }
  }
}) 
