/**
 * @NApiVersion 2.1
 * @NScriptType WorkflowActionScript
 */
define(['N/record'], (record) => {
  /**
     * Defines the WorkflowAction script trigger point.
     * @param {Object} context
     * @param {Record} context.newRecord - New record
     * @param {Record} context.oldRecord - Old record
     * @param {string} context.workflowId - Internal ID of workflow
     * @param {string} context.type - Event type
     * @param {Form} context.form - Current form that interacts with the record
     * @since 2016.1
     */
  const onAction = (context) => {
    // Loads the sales order record from the context parameter
    const order = context.newRecord
    // Retrieves the line count  of the item sublist
    const itemCount = order.getLineCount({
      sublistId: 'item'
    })
    const notes = `Items ordered: ${itemCount}`
    // Gets the customer from the sales order record
    const customerId = order.getValue('entity')
    // Loads the customer record
    const customer = record.load({
      type: record.Type.CUSTOMER, id: customerId
    })
    // Updates the comments field of the customer record
    customer.setValue('comments', notes)
    // Saves the customer record
    customer.save()
  }

  return { onAction }
})
