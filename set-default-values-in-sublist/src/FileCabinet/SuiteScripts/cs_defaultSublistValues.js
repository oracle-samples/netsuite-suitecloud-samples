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
    // If the sublist field 'item' or 'expense' value changes, retrieve the 
    // 'entity' field value. The entity is used to look up fields on the 
    // Vendor search. 
    const sublistVal = scriptContext.sublistId
    if (sublistVal === 'item' || sublistVal === 'expense') {
      const rec = scriptContext.currentRecord
      const vendorId = rec.getValue({
        fieldId: 'entity'
      })
      if (vendorId === '') {
        return
      }
      const vendorLookup = search.lookupFields({
        type: search.Type.VENDOR,
        id: vendorId,
        columns: ['custentity_custom_department', 'custentity_custom_class']
      })
      let classVal = ''
      let deptVal = ''
      // After retrieving the custom field values for 'Department' and 'Class'
      // of the vendor, set the values to the vendor bill record.
      classVal = vendorLookup.custentity_custom_class[0].value
      deptVal = vendorLookup.custentity_custom_department[0].value
      try {
        rec.setCurrentSublistValue({
          sublistId: sublistVal,
          fieldId: 'department',
          value: deptVal,
          ignoreFieldChange: true
        })
        rec.setCurrentSublistValue({
          sublistId: sublistVal,
          fieldId: 'class',
          value: classVal,
          ignoreFieldChange: true
        })
      } catch (e) {
        log.debug({
          title: 'Unable to set record values',
          details: 'Unable to set record values for department and class'
        })
      }
    }
  }
  return {
    fieldChanged: fieldChanged
  }
})
