/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/record', 'N/search', 'N/log'], (record, search, log) => {
  /**
   * @param {Object} scriptContext
   * @param {Record} scriptContext.newRecord The new or updated record
   * in read-only mode.
   * @param {String} scriptContext.type The trigger type.
   */
  function beforeSubmit (scriptContext) {
    // Retrieve the value of the sales order the customer deposit is created
    // from. If the customer deposit is created from a sales order that is 
    // being deleted, it updates the amount deposited and amount remaining
    // fields on the related sales order. 
    const contextDep = scriptContext.newRecord
    const soID = contextDep.getValue({
      fieldId: 'salesorder'
    })
    if ((soID !== null) && 
    (scriptContext.type === scriptContext.UserEventType.DELETE)) {
      // Load the sales order to check if status is billed. If status is not
      // set to 'Billed', set the values on custom fields of the sales order
      // based on a deposit and calculate reamining balance.
      const depAmt = contextDep.getValue({
        fieldId: 'payment'
      })
      const salesorder = record.load({
        type: record.Type.SALES_ORDER,
        id: soID
      })
      const status = salesorder.getValue({
        fieldId: 'status'
      })
      if (status !== 'Billed') {
        const soTotalPaid = salesorder.getValue({
          fieldId: 'custbody_total_deposit_paid'
        })
        const soRemainingBalance = salesorder.getValue({
          fieldId: 'custbody_balance_remaining'
        })
        salesorder.setValue({
          fieldId: 'custbody_total_deposit_paid',
          value: soTotalPaid - depAmt
        })
        salesorder.setValue({
          fieldId: 'custbody_balance_remaining',
          value: (soRemainingBalance + depAmt)
        })
        salesorder.save({
          enableSourcing: true,
          ignoreMandatoryFields: true
        })
      }
    }
  }
  /**
   * @param {Object} scriptContext 
   * @param {Record} scriptContext.newRecord The new or updated record
   * in read-only mode.
   * @param {String} scriptContext.type The trigger type.
   */
  function afterSubmit (scriptContext) {
    const contextDep = scriptContext.newRecord
    const soID = contextDep.getValue({
      fieldId: 'salesorder'
    })
    if (soID && ((scriptContext.type === scriptContext.UserEventType.CREATE) || 
         (scriptContext.type === scriptContext.UserEventType.EDIT))) {
      // Load the sales order to check status. If status is set to 'Billed',
      // the saved search will run.   
      const salesorder = record.load({
        type: record.Type.SALES_ORDER,
        id: soID
      })
      const status = salesorder.getValue({
        fieldId: 'status'
      })
      if (status !== 'Billed') {
        const soEntity = salesorder.getValue({
          fieldId: 'entity'
        })
        const soTranId = salesorder.getValue({
          fieldId: 'tranid'
        })
        const soFullTextTranID = 'Order #' + soTranId
        // Load the saved search to match the order related to the customer 
        // deposit to the order in the search results. The search formula finds
        // the relationship of a customer deposit or refund to a sales order.
        const mySearch = search.load({
          id: 'customsearch_sobalancedue'
        })
        const entityFilter = search.createFilter({
          name: 'name',
          operator: search.Operator.IS,
          values: soEntity
        })
        const soIdFilter = search.createFilter({
          name: 'formulatext',
          operator: search.Operator.IS,
          summary: search.Summary.MAX,
          formula: `case when {type}='Customer Deposit' 
            then {appliedtotransaction} 
            when {type}='Deposit Application' then {createdfrom.salesorder} 
            when {type}='Sales Order' then 'Sales Order #'||{number} end`,
          values: soFullTextTranID
        })
        mySearch.filters.push(entityFilter, soIdFilter)
        // Retrieve the balances from the saved search and set the custom fields
        // on the sales order that the customer deposit was created from.
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
            const soTotal = salesorder.getValue({
              fieldId: 'total'
            })
            const remainingBalanceOnOrder = 
              parseFloat(soTotal) - parseFloat(totalPaid)
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
    }
  } 
  return {
    beforeSubmit: beforeSubmit,
    afterSubmit: afterSubmit
  }
})
