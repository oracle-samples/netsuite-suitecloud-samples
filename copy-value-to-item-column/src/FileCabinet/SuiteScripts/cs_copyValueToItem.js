/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/search'], (search) => {
  /** 
   * @param {Object} context Holds values for execution contexts.
   * @param {String} context.fieldId The field ID name.
   * @param {String} context.sublistId The sublist ID name.
   * @param {CurrentRecord} context.currentRecord The current form record.
  */
  function fieldChanged (context) {
    try {
      const recInvoice = context.currentRecord 
      const stCurrField = context.fieldId 
      const stCurrSublist = context.sublistId
      // Get UPC Code of Billing Item
      if (stCurrSublist === 'item' && stCurrField === 'custcol_billingitem') {
        const billingitem = recInvoice.getCurrentSublistText({
          sublistId: 'item',
          fieldId: 'custcol_billingitem'
        })
        // Search for Item with Billing Item's UPC Code
        const itemSearch = search.create({
          type: 'noninventoryitem',
          filters: [
            ['upccode', 'is', billingitem]
          ],
          columns: [
            'upccode', 'itemid'
          ]
        }).run()
        const result = itemSearch.getRange(0, 1)
        const itemName = result[0].getValue(itemSearch.columns[1])
        recInvoice.setCurrentSublistText({
          sublistId: 'item',
          fieldId: 'item',
          text: itemName
        })
      }
    } catch (e) {
      alert(e)
    }
  }
  return {
    fieldChanged: fieldChanged
  }
})
