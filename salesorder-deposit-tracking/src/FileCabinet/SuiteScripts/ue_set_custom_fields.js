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
   * @param {Record} scriptContext.oldRecord The old record (previous state 
   * of the record) in read-only mode.
   * @param {String} scriptContext.type The trigger type.
   */
  function afterSubmit (scriptContext) {
    const contextOrder = scriptContext.newRecord
    const soID = contextOrder.id
    const salesorder = record.load({
      'type': record.Type.SALES_ORDER,
      'id': soID
    })
    const soTotal = salesorder.getValue({
      'fieldId': 'total'
    })
    const soEntity = salesorder.getValue({
      'fieldId': 'entity'
    })
    const soTranId = salesorder.getValue({
      'fieldId': 'tranid'
    })
    const soFullTextTranID = 'Order #' + soTranId
    const mySearch = search.load({
      'id': 'customsearch_sobalancedue'
    })
    const entityFilter = search.createFilter({
      'name': 'entity',
      'operator': search.Operator.ANYOF,
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
        const remainingBalanceOnOrder = soTotal - totalPaid
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
  return {
    'afterSubmit': afterSubmit
  }
}) 
