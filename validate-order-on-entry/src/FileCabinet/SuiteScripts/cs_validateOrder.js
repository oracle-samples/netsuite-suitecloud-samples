/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */

define(['N/runtime', 'N/log'], (runtime, log) => {
  /**
   * @param {Object} scriptContext Holds values for execution contexts.
   * @param {String} scriptContext.sublistId The sublist ID name.
   * @param {CurrentRecord} scriptContext.currentRecord The current form record.
   */
  function validateLine (scriptContext) {
    const recSalesOrder = scriptContext.currentRecord
    if (scriptContext.sublistId === 'item') {
      const casePerPallet = recSalesOrder.getCurrentSublistValue({
        sublistId: 'item',
        fieldId: 'custcol_cases_per_pallet'
      })
      const quantity = recSalesOrder.getCurrentSublistValue({
        sublistId: 'item',
        fieldId: 'quantity'
      })
      if (quantity % casePerPallet !== 0) {
        alert(`Please order in multiples of: ${casePerPallet} Case/Pallet 
                for this item.`)
        return false
      } 
      return true
    }
  }
  /**
   * @param {Object} scriptContext Holds values for execution contexts.
   * @param {CurrentRecord} scriptContext.currentRecord The current form record.
   */
  function saveRecord (scriptContext) {
    const scriptObj = runtime.getCurrentScript()
    const weightParam = scriptObj.getParameter({
      name: 'custscript_max_weight'
    })
    if (NSUtil.isEmpty(weightParam)) {
      log.error({
        title: 'saveRecord',
        details: 'Max weight script parameter not defined'
      })
      return
    }
    const recSalesOrder = scriptContext.currentRecord
    const lineCount = recSalesOrder.getLineCount({
      sublistId: 'item'
    })
    let totalWeight = 0
    for (let i = 0; i < lineCount; i++) {
      const itemWeight = recSalesOrder.getSublistValue({
        sublistId: 'item',
        fieldId: 'custcol_item_weight',
        line: i
      })
      const quantity = recSalesOrder.getSublistValue({
        sublistId: 'item',
        fieldId: 'quantity',
        line: i
      })
      const lineWeight = itemWeight * quantity
      totalWeight += lineWeight
    }
    if (totalWeight > weightParam) {
      alert(`The total weight of the order is ${totalWeight}. 
      The max weight is ${weightParam}. Please adjust the order 
      and submit a separate order if necessary.`)
      return false
    }
    return true
  }
  const NSUtil = {}
  NSUtil.isEmpty = function (stValue) {
    return (
      stValue === '' || stValue === null || stValue === undefined ||
            (stValue.constructor === Array && stValue.length === 0) ||
            (stValue.constructor === Object &&
                (function (v) {
                  for (const k in v) return false
                  return true
                })(stValue))
    )
  }
  return {
    validateLine: validateLine,
    saveRecord: saveRecord
  }
})
