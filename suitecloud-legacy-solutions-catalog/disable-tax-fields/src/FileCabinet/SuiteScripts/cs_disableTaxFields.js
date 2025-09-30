/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */

define(['N/runtime', 'N/log'], (runtime, log) => {
  /**
   * @param {Object} scriptContext
   * @param {CurrentRecord} scriptContext.currentRecord The current form record
   * @param {string} scriptContext.mode The mode in which the record is 
   * being accessed. 
   */
  function pageInit (scriptContext) {
    try {
      const objRecord = scriptContext.currentRecord
      const stRecordType = objRecord.type
      const stFuncName = '_DisableTaxField_' + stRecordType
      // Retrieve the value(s) for users allowed to disable tax fields.
      // User must define allowed roles in script parameter.
      if (scriptContext.mode !== 'copy') {
        const objContext = runtime.getCurrentScript()
        const stAllowList = objContext.getParameter({
          name: 'custscript_tax_allowlist'
        })
        // Retrieve the current user role
        const stUserRole = runtime.getCurrentUser().role
        const arrExclusionRoleList = stAllowList.split(',')
        if (NSUtil.isEmpty(stAllowList)) {
          log.error({
            title: stFuncName,
            details: 'Script parameter is empty. Script will now exit'
          })
          return
        }
        // If taxitem field exists, determine if current user role matches the
        // value in the allow list.
        // If the user role matches the allow list, disable the tax fields.
        const taxitem = objRecord.getField({
          fieldId: 'taxitem'
        })
        if (taxitem && !NSUtil.inArray(stUserRole, arrExclusionRoleList)) {
          const istaxable = objRecord.getField({
            fieldId: 'istaxable'
          })
          const taxrate = objRecord.getField({
            fieldId: 'taxrate'
          })
          istaxable.isDisabled = true
          taxitem.isDisabled = true
          taxrate.isDisabled = true 
        } 
      }
    } catch (error) {
      if (error !== undefined) {
        log.error({
          title: 'Process Error in pageInit',
          details: error
        })
        throw error
      } 
    }
  }
  return {
    pageInit: pageInit
  }
})
// Utility functions to determine if script parameter is empty and if values 
// are in the allow list.
const NSUtil = {
  isEmpty: function (stValue) {
    if ((stValue === '') || (stValue === null) || (stValue === undefined)) {
      return true
    }
  },
  inArray: function (stValue, arrValue) {
    let bIsValueFound = false
    for (let i = arrValue.length; i >= 0; i--) {
      // eslint-disable-next-line eqeqeq
      if (stValue == arrValue[i]) {
        bIsValueFound = true
        break
      }
    }
    return bIsValueFound
  }
}
