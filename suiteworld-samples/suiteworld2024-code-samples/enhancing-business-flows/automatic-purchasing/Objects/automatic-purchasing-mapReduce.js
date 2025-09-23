/**
 *@NApiVersion 2.1
 *@NScriptType MapReduceScript
 */
 define(['N/query', 'N/record'], function(query, record) {
    /**
     * SuiteQL query which loads auto-purchase set up for items, stock of which is below set up limit.
     * Items, which are are below the limit, but are already ordered by some purchase order in processing
     * are excluded.
     */
    const QUERY = "SELECT setup.custrecord_autopurch_vendor AS vendor, setup.custrecord_autopurch_item AS item, setup.custrecord_autopurch_quantity quantity "
    + "FROM customrecord_autopurchase setup "
    + "INNER JOIN item item ON setup.custrecord_autopurch_item = item.id "
    + "WHERE nvl(item.totalQuantityOnHand, 0.0) <= setup.custrecord_autopurch_quantity "
    + "AND NOT EXISTS("
    + "SELECT 1 FROM TransactionLine tl, Transaction t "
    + "WHERE t.id = tl.transaction "
    + "AND t.type = 'PurchOrd' "
    + "AND t.status IN ('PurchOrd:A', 'PurchOrd:B', 'PurchOrd:D', 'PurchOrd:E', 'PurchOrd:F', 'PurchOrd:G') "
    + "AND tl.item = setup.custrecord_autopurch_item "
    + "AND t.entity = setup.custrecord_autopurch_vendor"
    +")";

    /**
     * @param {Object} context input context
     * @returns array of loaded auto-purchasing tuples (vendor, item, quantity).
     */
    function getInputData(context) {
        let results = query.runSuiteQL({
            query: QUERY
        }).results;

        let convertedResults = [];
        results.forEach((value) => {
            let valueAsMap = value.asMap();
            convertedResults.push(valueAsMap);
        });
        return convertedResults;
    }

    /**
     * Transforms array of tuples from {@link getInputData} to pairs (key: vendor, value: original_tuple).
     * @param {Object} context 
     */
    function map(context) {
        let contextValue = JSON.parse(context.value);
        context.write({
            key: contextValue.vendor,
            value: contextValue
        });
    }

    /**
     * Based on the auto-purchasing set up, for each vendor generates purchase order with list of items and quantities.
     * Result is written in context in form of key: vendor, value: created purchase order id
     * @param {Object} context
     */
    function reduce(context) {
        let purchaseOrder = record.create({ type: 'purchaseorder' });
        purchaseOrder.setValue({ fieldId: 'entity', value: context.key });
        purchaseOrder.setValue({ fieldId: 'memo', value: 'Created as SW example' });
        context.values.forEach((value, index) => {
            let itemData = JSON.parse(value);
            purchaseOrder.setSublistValue({
                sublistId: 'item', fieldId: 'item', value: itemData.item, line: index
            });
            purchaseOrder.setSublistValue({
                sublistId: 'item', fieldId: 'quantity', value: itemData.quantity, line: index
            });
        });
        let purchaseOrderId = purchaseOrder.save();

        context.write({
            key: context.key,
            value: purchaseOrderId
        });
    }

    return {
        getInputData: getInputData,
        map: map,
        reduce: reduce
    };
});
