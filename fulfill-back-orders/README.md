<p align="center"><a href="#"><img width="250" src="assets/oracle_netsuite_logo.png"></a></p>

# Summary
This SuiteScript sample is designed to process partially fulfilled sales orders and ensure that the quantity of items on these records matches the total quantity of items on associated item fulfillment records. You can use the concepts in this sample to synchronize item quantities between sales orders and their associated item fulfillment records, which ensures that all items (including back ordered items) are accounted for.

The sample starts by identifying sales order records that have a status of Pending Billing/Partially Fulfilled.

<img alt="sales order.png" class="js-lazy-loaded qa-js-lazy-loaded" src="assets/sales order.png" loading="lazy">

The sample then checks the quantity of back ordered items on these sales order records.

<img alt="sales order record.png" class="js-lazy-loaded qa-js-lazy-loaded" src="assets/sales order record.png" loading="lazy">

If the quantity of back ordered items is greater than zero, the sample obtains the item fulfillment record that is associated with the sales order and updates the item quantity on that record. The item quantity is updated by adding the existing item quantity (from the item fulfillment record) to the back ordered item quantity (from the sales order).

<img alt="back order before.png" class="js-lazy-loaded qa-js-lazy-loaded" src="assets/back order before.png" loading="lazy">

<img alt="back order after.png" class="js-lazy-loaded qa-js-lazy-loaded" src="assets/back order after.png" loading="lazy">

After the item quantities are updated for a sales order record, that record moves to the Pending Billing status.

<img alt="updated sales order.png" class="js-lazy-loaded qa-js-lazy-loaded" src="assets/updated sales order.png" loading="lazy">

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses some SuiteScript 2.1 features, such as arrow functions. For more information, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html#SuiteScript-2.1).
* **Map/reduce script type** – This type of script is useful for processing and updating a large number of records. For more information, see [SuiteScript 2.x Map/Reduce Script Type](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799161.html#SuiteScript-2.x-Map%2FReduce-Script-Type).
* **SuiteQL** – You can use SuiteQL to write complex queries using a syntax that is similar to the SQL-92 specification. For more information, see [SuiteQL](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156257770590.html#SuiteQL).
* **Dynamic mode for records** – This sample loads records in dynamic mode. In this mode, the record's body fields and sublist line items are sourced, calculated, and validated in real time. For more information, see [SuiteScript 2.x - Standard and Dynamic Modes](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1524156901.html#SuiteScript-2.x-Standard-and-Dynamic-Modes).

# SuiteScript Version
This sample uses SuiteScript 2.1. For more information about this SuiteScript version, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html#SuiteScript-2.1).

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/record** – To load and work with records. For more information, see [N/record Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267255811.html#N%2Frecord-Module).
* **N/log** – To log errors that occur during execution. For more information, see [N/log Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4574548135.html#N%2Flog-Module).

# Script Type and Entry Points
This sample uses a map/reduce script type with the following entry points:

* `getInputData` – Defines the input data (a list of sales order records) using a SuiteQL query
* `map` – Updates quantity values on associated item fulfillment records
* `summarize` – Handles any errors that occurred during the `getInputData` or `map` stages

The `reduce` entry point is not used in this sample.

# Helper Methods
This sample defines and uses the following helper methods:

* `getCurrentItemId(transactionRecord, lineNumber)` – Returns the item ID from the specified line in the Items sublist on the specified record
* `updateQuantityValue(itemFulfillmentRecord, i, backOrdered, itemId)` – Updates the item quantity to include back ordered items for the specified item and sublist line on the specified record
* `getOriginalQuantityValue(transactionRecord, lineNumber)` – Returns the item quantity from the specified line in the Items sublist on the specified record
* `setNewQuantityValue(transactionRecord, newQuantity, lineNumber)` – Selects the specified line in the Items sublist for the specified record, sets the new quantity value, and commits the change
* `doSaveWithSourcing(transactionRecord, doSourcing)` – Saves the specified record with or without sourcing
* `handleError(stage, summary)` – Logs any errors that occurred during the getInputData or map stages

# Map/Reduce Stage Details
This sample uses a map/reduce script type with the `getInputData`, `map`, and `summarize` stages. The following sections describe what the sample does during each stage.

## getInputData
* In this stage, the input data for the map/reduce script is specified using a SuiteQL query.
* The SuiteQL query string is defined in the `SQL_GET_BACKFILL_ORDERS` constant, which is located near the end of the script.
* The SuiteQL query returns result columns for records that meet the following criteria:
    * The item ID on the transaction line record matches the item ID on the item record.
    * The transaction record is a sales order record ('`SALESORD`').
    * The back ordered quantity of the transaction line is greater than 0 (indicating that there are back orders of that item to add to the total quantity).
    * The transaction record status is Pending Billing/Partially Fulfilled ('`E`').

## map
* In this stage, the records identified in the `getInputData` stage are processed and item quantities are updated.
* The `mapContext` parameter contains the record field values identified in the `getInputData` stage. This set of values includes the item ID, quantity of back ordered items, and the ID of the associated item fulfillment record.
* The sample loads the item fulfillment record to update (in dynamic mode).
* The sample obtains the number of items in the Items sublist on the item fulfillment record.
* The sample iterates through the items in the Items sublist. If the ID of an item in this sublist matches the ID of an item on the associated sales order record, the following occurs:
    * The item quantity on the item fulfillment record is updated with the new quantity value (which is the current item quantity plus the back ordered item quantity). The sample calls the `updateQuantityValue()` helper method to do this.
    * The item fulfillment record is saved without sourcing. The sample calls the `doSaveWithSourcing()` helper method to do this.

## summarize
* In this stage, any errors that occurred during the `getInputData` and `map` stages are processed.
* The sample calls the `handleError()` helper method on each stage. If any errors occurred in a stage, the errors are logged.
## [Contributing](./CONTRIBUTING.md)
SuiteScript samples are open source projects. Pull Requests are currently not being accepted. See [CONTRIBUTING](./CONTRIBUTING.md) for details.

## [License](./LICENSE.txt)
Copyright (c) 2021 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
