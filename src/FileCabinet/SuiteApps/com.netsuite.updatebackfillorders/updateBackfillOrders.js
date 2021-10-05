/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 */

// eslint-disable-next-line no-undef
define(['N/record', 'N/log'], (record, log) => {
  /**
   * Defines the input data (a list of sales order records)
   * using a SuiteQL query
   *
   * (1) In this stage, the input data for the map/reduce script
   *     is specified using a SuiteQL query.
   * (2) The SuiteQL query string is defined in the SQL_GET_BACKFILL_ORDERS
   *     constant, which is located near the end of the script.
   * (3) The SuiteQL query returns result columns for records that meet
   *     the following criteria:
   *     (a) The item ID on the transaction line record matches
   *     the item ID on the item record.
   *     (b) The transaction record is a sales order record ('SALESORD').
   *     (c) The back ordered quantity of the transaction line
   *     is greater than 0 (indicating that there are back orders
   *     of that item to add to the total quantity).
   *     (d) The transaction record status is Pending
   *     Billing/Partially Fulfilled ('E').
   *
   * @param {Object} inputContext
   * @param {boolean} inputContext.isRestarted - Indicates whether
   *     the current invocation of this function is the first
   *     invocation (if true, the current invocation is not the first
   *     invocation and this function has been restarted)
   * @param {Object} inputContext.ObjectRef - Object that references
   *     the input data
   * @typedef {Object} ObjectRef
   * @property {string|number} ObjectRef.id - Internal ID of the record
   *     instance that contains the input data
   * @property {string} ObjectRef.type - Type of the record instance
   *     that contains the input data
   * @returns {Array|Object|Search|ObjectRef|File|Query} The input data
   *     to use in the map/reduce process
   * @since 2015.2
   */

  const getInputData = () => {
    return {
      'type': 'suiteql',
      'query': SQL_GET_BACKFILL_ORDERS
    }
  }

  /**
   * Updates quantity values on associated item fulfillment records
   *
   * (1) In this stage, the records identified in the getInputData
   * stage are processed and item quantities are updated.
   * (2) The mapContext parameter contains the record field values
   * identified in the getInputData stage. This set of values includes
   * the item ID, quantity of back ordered items, and the ID of
   * the associated item fulfillment record.
   * (3) The sample loads the item fulfillment record
   * to update (in dynamic mode).
   * (4) The sample obtains the number of items in the Items sublist
   * on the item fulfillment record.
   * (5) The sample iterates through the items in the Items sublist.
   * If the ID of an item in this sublist matches the ID of an item
   * on the associated sales order record, the following occurs:
   *    (a) The item quantity on the item fulfillment record is updated
   *     with the new quantity value (which is the current item quantity
   *     plus the back ordered item quantity). The sample calls the
   *     updateQuantityValue() helper method to do this.
   *     (b) The item fulfillment record is saved without sourcing.
   *     The sample calls the doSaveWithSourcing() helper method to do this.
   *
   * @param {Object} mapContext - Data collection containing the key-value
   *     pairs to process in the map stage. This parameter
   *     is provided automatically based on the results of the
   *     getInputData stage.
   * @param {Iterator} mapContext.errors - Serialized errors that were
   *     thrown during previous attempts to execute the map
   *     function on the current key-value pair
   * @param {number} mapContext.executionNo - Number of times the map
   *     function has been executed on the current key-value  pair
   * @param {boolean} mapContext.isRestarted - Indicates whether the
   *     current invocation of this function is the first
   *     invocation (if true, the current invocation is not the first
   *     invocation and this function has been restarted)
   * @param {string} mapContext.key - Key to be processed
   *     during the map stage
   * @param {string} mapContext.value - Value to be processed
   *     during the map stage
   * @since 2015.2
   */

  const map = (mapContext) => {
    const result = JSON.parse(mapContext.value)
    const itemId = result.values[0].toString()
    const backOrdered = result.values[1]
    const itemFulfillmentId = result.values[2]

    const itemFulfillmentRecord = record.load({
      'type': record.Type.ITEM_FULFILLMENT,
      'id': itemFulfillmentId,
      'isDynamic': true
    })

    const itemCount = itemFulfillmentRecord.getLineCount({
      'sublistId': SUBLISTID_ITEM
    })

    for (let i = 0; i < itemCount; i++) {
      const currentItemId = getCurrentItemId(itemFulfillmentRecord, i)
      if (currentItemId === itemId) {
        updateQuantityValue(itemFulfillmentRecord, i, backOrdered, itemId)
        doSaveWithSourcing(itemFulfillmentRecord, false)
        break
      }
    }
  }

  /**
   * Handles any errors that occurred during the getInputData or map stages
   *
   * (1) In this stage, any errors that occurred during the getInputData
   * and map stages are processed.
   * (2) The sample calls the handleError() helper method on each stage.
   * If any errors occurred in a stage, the errors are logged.
   *
   * @param {Object} summaryContext - Statistics about the execution
   *     of a map/reduce script
   * @param {number} summaryContext.concurrency - Maximum concurrency
   *     number when executing parallel tasks for the map/reduce script
   * @param {Date} summaryContext.dateCreated - The date and time
   *     when the map/reduce script began running
   * @param {boolean} summaryContext.isRestarted - Indicates whether
   *     the current invocation of this function is the first invocation
   *     (if true, the current invocation is not the first invocation
   *     and this function has been restarted)
   * @param {Iterator} summaryContext.output - Serialized keys and values
   *     that were saved as output during the reduce stage
   * @param {number} summaryContext.seconds - Total seconds elapsed when
   *     running the map/reduce script
   * @param {number} summaryContext.usage - Total number of governance
   *     usage units consumed when running the map/reduce script
   * @param {number} summaryContext.yields - Total number of yields
   *     when running the map/reduce script
   * @param {Object} summaryContext.inputSummary - Statistics about
   *     the input stage
   * @param {Object} summaryContext.mapSummary - Statistics about
   *     the map stage
   * @param {Object} summaryContext.reduceSummary - Statistics about
   *     the reduce stage
   * @since 2015.2
   */
  const summarize = (summaryContext) => {
    handleError('input', summaryContext.inputSummary)
    handleError('map', summaryContext.mapSummary)
  }

  /**
   * Returns the item ID from the specified line in
   * the Items sublist on the specified record
   *
   * @param transactionRecord
   * @param lineNumber
   * @returns {string|number|Date|Array|boolean}
   */
  const getCurrentItemId = (transactionRecord, lineNumber) => {
    return transactionRecord.getSublistValue({
      'sublistId': SUBLISTID_ITEM,
      'fieldId': FIELDID_ITEM,
      'line': lineNumber
    })
  }

  /**
   * Updates the item quantity to include back ordered items
   * for the specified item and sublist line on the specified record
   *
   * @param itemFulfillmentRecord
   * @param i
   * @param backOrdered
   * @param itemId
   */
  const updateQuantityValue = (
    itemFulfillmentRecord,
    i,
    backOrdered,
    itemId
  ) => {
    log.audit({
      'title': 'Updating Item',
      'details': itemId
    })
    const quantity = getOriginalQuantityValue(itemFulfillmentRecord, i)
    setNewQuantityValue(
      itemFulfillmentRecord, quantity + backOrdered, i
    )
  }

  /**
   * Returns the item quantity from the specified line
   * in the Items sublist on the specified record
   *
   * @param transactionRecord
   * @param lineNumber
   * @returns {string|number|Date|Array|boolean}
   */
  const getOriginalQuantityValue = (transactionRecord, lineNumber) => {
    return transactionRecord.getSublistValue({
      'sublistId': SUBLISTID_ITEM,
      'fieldId': FIELDID_QUANTITY,
      'line': lineNumber
    })
  }

  /**
   * Selects the specified line in the Items sublist
   * for the specified record, sets the new quantity value,
   * and commits the change
   *
   * @param transactionRecord
   * @param newQuantity
   * @param lineNumber
   */
  const setNewQuantityValue = (
    transactionRecord,
    newQuantity,
    lineNumber
  ) => {
    transactionRecord.selectLine({
      'sublistId': SUBLISTID_ITEM,
      'line': lineNumber
    })

    transactionRecord.setCurrentSublistValue({
      'sublistId': SUBLISTID_ITEM,
      'fieldId': FIELDID_QUANTITY,
      'value': newQuantity,
      'ignoreFieldChange': false
    })

    transactionRecord.commitLine({ 'sublistId': SUBLISTID_ITEM })

    log.audit({
      'title': 'New Quantity',
      'details': newQuantity
    })
  }

  /**
   * Saves the specified record with or without sourcing
   *
   * @param transactionRecord
   * @param doSourcing
   */
  const doSaveWithSourcing = (transactionRecord, doSourcing) => {
    const id = transactionRecord.save({
      'enableSourcing': doSourcing,
      'ignoreMandatoryFields': true
    })

    log.audit({
      'title': 'Updated Item Fulfillment',
      'details': id
    })

    log.audit({
      'title': '============================='
    })
  }

  /**
   * Logs any errors that occurred during the getInputData or map stages
   *
   * @param stage
   * @param summary
   */
  const handleError = (stage, summary) => {
    if (summary.errors !== undefined) {
      summary.errors.iterator().each((key, error, executionNo) => {
        log.error({
          'title': `${stage} error for key: ${key}, 
                execution no.: ${executionNo}`,
          'details': error
        })
        return true
      })
    }
  }

  const SUBLISTID_ITEM = 'item'
  const FIELDID_ITEM = 'item'
  const FIELDID_QUANTITY = 'quantity'
  const SQL_GET_BACKFILL_ORDERS = `SELECT 
        item.id, 
        transactionLine.quantitybackordered, 
        NextTransactionLink_SUB.id 
        FROM 
        transaction, item, transactionLine, 
        (SELECT 
        NextTransactionLink.previousdoc AS previousdoc, 
        transaction_0.id AS id 
        FROM 
        NextTransactionLink, 
        transaction transaction_0 
        WHERE 
        NextTransactionLink.nextdoc = transaction_0.id(+) 
        ) NextTransactionLink_SUB 
        WHERE 
        transactionLine.item = item.id(+) 
        AND transaction.id = transactionLine.transaction 
        AND transaction.id = NextTransactionLink_SUB.previousdoc(+) 
        AND UPPER(transaction.type) IN ('SALESORD') 
        AND transactionLine.quantitybackordered > 0 
        AND UPPER(transaction.status) IN ('E')`

  return { getInputData, map, summarize }
})
