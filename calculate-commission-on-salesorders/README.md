# Summary
This customization calculates a custom commission amount when a sales order is saved. The calculated commission amount is displayed on a custom field on the sales order record. The commission is based on the sum of commission amounts for each item included in the sales order: the MSRP of the item, the net distributor costs (MSRP * 0.5), and the actual price of the item sold to the customer.

While NetSuite includes an Employee Commissions feature, this customization calculates and sets a simple custom commission amount in a custom field without using the feature. For more information about the more robust Employee Commissions feature, which can calculate commission for employees with different schedules and methods of calculation, see [Commissions](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_N1122333.html).

For more information about this customization project, see [Calculate Commission on Sales Orders](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157227646073.html).

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses some SuiteScript 2.1 features, such as arrow functions. For more information, see [SuiteScript 2.1](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_156042690639.html).
* **User Event script type** – This script type is used to perform certain actions on records, such as create, load, update, copy, delete, or submit. Most standard NetSuite records and custom record types support user event scripts. Exceptions include records used for personal identification purposes (such as a Driver’s License, Passport, or other Government-issued ID), some revenue recognition records, and some timecard-related records. For more information, see [SuiteScript 2.x User Event Script Type](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799721.html).

# SuiteScript Version
This sample uses SuiteScript 2.1. For more information about this SuiteScript version, see [SuiteScript 2.1](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_156042690639.html).

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/record** – To load and work with records. For more information, see [N/record Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267255811.html).
* **N/log** – To log errors that occur during execution. For more information, see [N/log Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4574548135.html).

# Script Type and Entry Points
This sample uses a user event script type with the following entry points:

* `afterSubmit` – Defines the function that is executed after a record is submitted. 

# Test the Solution
1. Go to Transactions > Sales > Enter Sales Orders (Administrator) to create a new sales order.
2. In the Custom Form field, select the Standard Sales Order form. The custom fields will be displayed on all standard and custom sales order forms, but for this tutorial you can use the standard form.
3. Add multiple items to the sales order, set a value in the MSRP field for each item.
4. Fill out all other required fields.
5. Save the sales order.
6. Review the sales order and verify the calculated commission in the Calculated Commission field.

## [License](./LICENSE.txt)
Copyright (c) 2021 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
