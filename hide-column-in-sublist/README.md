# Summary
This script hides the Item column on the Item sublist for an invoice.

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses some SuiteScript 2.1 features, such as arrow functions. For more information, see [SuiteScript 2.1](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_156042690639.html).
* **User event script type** - User event scripts are executed on the NetSuite server. They are executed when users perform certain actions on records, such as create, load, update, copy, delete, or submit. Most standard NetSuite records and custom record types support user event scripts. Exceptions include records used for personal identification purposes (such as a Driver’s License, Passport, or other Government-issued ID), some revenue recognition records, and some timecard-related records. For more information, see [SuiteScript 2.x User Event Script Type](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799721.html).

# SuiteScript Version
This sample uses SuiteScript 2.1. For more information about this SuiteScript version, see [SuiteScript 2.1](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_156042690639.html).

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/record** – To load and work with records. For more information, see [N/record Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267255811.html).
* **N/log** – To log errors that occur during execution. For more information, see [N/log Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4574548135.html).
* **N/ui/serverWidget** - To work with the user interface within NetSuite. For more information, see [N/ui/serverWidget Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4321345532.html). 

# Script Type and Entry Points
This sample uses a user event script type with the following entry points:

* `beforeLoad` - Defines the function that is executed before a record is loaded; that is, whenever a read operation occurs on a record, and prior to returning the record or page.

# Helper Methods
This sample defines and uses the following helper methods:

* `hideColumnField(formObj, sublistId, fieldId)` - Hides the Item column.

# Test the Solution
1. Go to Transactions > Sales > Create Invoices > List (Administrator).
2. Click View next to any existing invoice.
3. On the Invoice page, scroll down to the Item sublist and verify that the Item column appears.
4. Click Edit.
5. Scroll down to the Item sublist and verify that the Item column does not appear. Scroll to the right to see all columns on the sublist.
6. Click Cancel to close the invoice without editing it.

## [License](./LICENSE.txt)
Copyright (c) 2021 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
