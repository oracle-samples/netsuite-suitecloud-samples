/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/record', 'N/search', 'N/log'], (record, search, log) => {
  return {
    afterSubmit: function (scriptContext) {
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
      // Load the customer refund & retrieve the values for the total amt of the
      // refund and the number of lines(transactions), the refund is applied to.
      const refund = record.load({
        type: record.Type.CUSTOMER_REFUND,
        id: refId,
        isDynamic: true
      })
      const soEntity = refund.getValue({
        fieldId: 'customer'
      })
      const lines = refund.getLineCount({
        sublistId: 'apply'
      })
      // For each deposit application associated with a customer refund, get
      // the deposit number and refund amount.
      for (let i = 0; i < lines; i++) {
        const depositnum = refund.getSublistText({
          sublistId: 'apply',
          fieldId: 'internalid',
          line: i
        })
        refund.getSublistValue({
          sublistId: 'apply',
          fieldId: 'amount',
          line: i
        })
        // Look up the fields on each deposit application to find the linked
        // sales order and total sales of the order.
        const order = search.lookupFields({
          type: search.Type.DEPOSIT_APPLICATION,
          id: depositnum,
          columns: 'createdfrom.salesorder'
        })
        const soFullTextTranID = order['createdfrom.salesorder'][0].text
        const orderId = order['createdfrom.salesorder'][0].value
        const soTotalPaid = search.lookupFields({
          type: search.Type.SALES_ORDER,
          id: orderId,
          columns: ['total']
        })
        const soTotal = soTotalPaid.total
        // Load the saved search to get current balance of deposits and gift 
        // certificates paid toward the sales order, less the amount of any 
        // refunds applied.
        const mySearch = search.load({
          id: 'customsearch_sobalancedue'
        })
        const entityFilter = search.createFilter({
          name: 'internalid',
          join: 'customer',
          operator: search.Operator.EQUALTO,
          summary: search.Summary.MAX,
          values: soEntity
        })
        const soIdFilter = search.createFilter({
          name: 'formulatext',
          operator: search.Operator.IS,
          formula: `case when {type}='Customer Deposit' 
            then {appliedtotransaction} 
            when {type}='Deposit Application' then {createdfrom.salesorder} 
            when {type}='Sales Order' then 'Sales Order #'||{number} end`,
          values: soFullTextTranID
        })
        mySearch.filters.push(entityFilter, soIdFilter)
        // Load each related sales order and set the new values for total paid
        // and remaining balance amounts. 
        mySearch.run().each((soresults) => {
          const soTextID = soresults.getValue({
            name: 'formulatext',
            summary: search.Summary.GROUP
          })
          if (soFullTextTranID === soTextID) {
            const totalPaid = soresults.getValue({
              name: 'formulacurrency',
              summary: search.Summary.SUM
            })
            let remainingBalanceOnOrder = parseFloat(soTotal)
            remainingBalanceOnOrder = (parseFloat(remainingBalanceOnOrder) - 
             parseFloat(totalPaid))
            const salesorder = record.load({
              type: record.Type.SALES_ORDER,
              id: orderId,
              isDynamic: true
            })
            salesorder.setValue({
              fieldId: 'custbody_total_deposit_paid',
              value: totalPaid
            })
            salesorder.setValue({
              fieldId: 'custbody_balance_remaining',
              value: remainingBalanceOnOrder
            })
            salesorder.save({
              enableSourcing: true,
              ignoreMandatoryFields: true
            })
          }
        })
      }
    } catch (error) {
      log.error({
        title: 'ERROR',
        details: error
      })
    }
  }
}) 
