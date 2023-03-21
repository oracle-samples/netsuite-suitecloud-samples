/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/record', 'N/search', 'N/log'], (record, search, log) => {
  /** 
   * @param {Object} scriptContext Holds string values for user event 
   * execution contexts.
   * @param {Record} scriptContext.newRecord The new or updated record in 
   * read-only mode.
   * @param {Record} scriptContext.oldRecord The old record 
   * (previous state of the record) in read-only mode.
   */
  function afterSubmit (scriptContext) {
    const contextDepApp = scriptContext.oldRecord
    const soEntity = contextDepApp.getValue({
      fieldId: 'customer'
    })
    const createdFrom = contextDepApp.getValue({
      fieldId: 'deposit'
    })
    const cusDeposit = record.load({
      type: record.Type.CUSTOMER_DEPOSIT,
      id: createdFrom,
      isDynamic: true
    })
    const orderId = cusDeposit.getValue({
      fieldId: 'salesorder'
    })
    const soFullTextTranID = cusDeposit.getText({
      fieldId: 'salesorder'
    })
    const mySearch = search.load({
      id: 'customsearch_sobalancedue'
    })
    const entityFilter = search.createFilter({
      name: 'internalidnumber',
      operator: search.Operator.IS,
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
        const salesorder = record.load({
          type: record.Type.SALES_ORDER,
          id: orderId,
          isDynamic: true
        })
        const soTotal = salesorder.getValue({
          fieldId: 'total'
        })
        let remainingBalanceOnOrder = parseFloat(soTotal)
        remainingBalanceOnOrder = (parseFloat(remainingBalanceOnOrder) - 
          parseFloat(totalPaid))
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
  return {
    afterSubmit: afterSubmit
  }
}) 
