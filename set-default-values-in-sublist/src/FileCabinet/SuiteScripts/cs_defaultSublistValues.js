/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */

define(['N/search', 'N/log'], (search, log) => {
  /**
   * @param {Object} scriptContext Holds values for execution contexts.
   * @param {String} scriptContext.sublistId The sublist ID name.
   * @param {CurrentRecord} scriptContext.currentRecord The current form record.
   */
  function fieldChanged (scriptContext) {
    const sublistVal = scriptContext.sublistId
    if (sublistVal === 'item' || sublistVal === 'expense') {
      const rec = scriptContext.currentRecord
      const vendorId = rec.getValue({
        'fieldId': 'entity'
      })
      if (vendorId === '') {
        return
      }
      const vendorLookup = search.lookupFields({
        'type': search.Type.VENDOR,
        'id': vendorId,
        'columns': ['custentity_custom_department', 'custentity_custom_class']
      })
      let classVal = ''
      let deptVal = ''
      classVal = vendorLookup.custentity_custom_class[0].value
      deptVal = vendorLookup.custentity_custom_department[0].value
      try {
        rec.setCurrentSublistValue({
          'sublistId': sublistVal,
          'fieldId': 'department',
          'value': deptVal,
          'ignoreFieldChange': true
        })
        rec.setCurrentSublistValue({
          'sublistId': sublistVal,
          'fieldId': 'class',
          'value': classVal,
          'ignoreFieldChange': true
        })
      } catch (e) {
        log.debug({
          'title': 'Unable to set record values',
          'details': 'Unable to set record values for department and class'
        })
      }
    }
  }
  return {
    'fieldChanged': fieldChanged
  }
})
