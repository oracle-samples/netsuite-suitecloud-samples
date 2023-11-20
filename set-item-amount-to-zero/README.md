# Summary
This script determines if the sales order being saved is a marketing order. If it is a marketing order, the script sets the Amount field on the sales order to zero (0).

For more information about this customization project, see [Set the Item Amount to Zero for Marketing Orders](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157243821278.html).

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses some SuiteScript 2.1 features, such as arrow functions. For more information, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html#SuiteScript-2.1).
* **User event script type** - User event scripts are executed on the NetSuite server. They are executed when users perform certain actions on records, such as create, load, update, copy, delete, or submit. Most standard NetSuite records and custom record types support user event scripts. Exceptions include records used for personal identification purposes (such as a Driver’s License, Passport, or other Government-issued ID), some revenue recognition records, and some timecard-related records. For more information, see [SuiteScript 2.x User Event Script Type](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799721.html#SuiteScript-2.x-User-Event-Script-Type).

# SuiteScript Version
This sample uses SuiteScript 2.1. For more information about this SuiteScript version, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html#SuiteScript-2.1).

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/record** – To load and work with records. For more information, see [N/record Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267255811.html#N%2Frecord-Module).
* **N/log** – To log errors that occur during execution. For more information, see [N/log Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4574548135.html#N%2Flog-Module).

# Script Type and Entry Points
This sample uses a user event script type with the following entry points:

* `afterSubmit` – Defines the function that is executed after a record is submitted. 

# Customization Details
The customization for this use case includes:
* A custom field (Marketing Order) that is used to indicate a marketing order
* A user event script triggered on the afterSubmit entry point

# Test the Solution
1. Go to Transactions > Sales > Enter Sales Orders (Administrator).
2. Select the Standard Sales Order form and verify that the Marketing Order box field is shown on the form. This field will be included on all standard and custom sales order forms. For this tutorial, you can use the Standard Sales Order form.
3. Add multiple items to the sales order. You do not need to adjust any field for the item unless you want to. Ensure that the Amount field for each item is not already 0.
4. Fill out all other required fields.
5. Check the Marketing Order box.
6. Click Save.
7. View the newly created sales order and verify that the Marketing Order box is checked and that the Amount for all items is 0.

## [License](./LICENSE.txt)
Copyright (c) 2021 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
