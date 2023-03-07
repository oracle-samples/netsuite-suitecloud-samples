# Summary
This script copies the value stored in the custom Billing Item field to the standard Item field when the Billing Item field value is selected or changed.

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses some SuiteScript 2.1 features, such as arrow functions. For more information, see [SuiteScript 2.1](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_156042690639.html).

* **Client script type** - Client scripts are scripts that are executed by predefined event triggers in the client browser. They can validate user-entered data and auto-populate fields or sublists at various form events. Scripts can be run on most standard records, custom record types, and custom NetSuite pages such as Suitelets. For more information, see [SuiteScript 2.x Client Script Type](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387798404.html).

# SuiteScript Version
This sample uses SuiteScript 2.1. For more information about this SuiteScript version, see [SuiteScript 2.1](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_156042690639.html).

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/currentRecord** - to access the record that is active in the current client context. This module is always a dynamic object and mode of work is always dynamic, not deferred dynamic/standard. For more information, see [N/currentRecord Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4625600928.html).

# Script Type and Entry Points
This sample uses a client script type with the following entry points:

* `fieldChanged` - Defines the function that is executed when a field is changed by a user or client call.

# Test the Solution
1. Go to Transactions > Sales > Create Invoices (Administrator) to create a new invoice.
2.  In the Custom Form field, select your custom Billing Item Invoice form.
3. In the Customer field, select any customer to test with.
4. On the Items tab, in the Billing Item field, select 704875. The script copies the value 704875 to the standard Item field. Because 704875 is the value entered in the UPC Code field on the Bulk Shampoo item record, the system automatically selects Bulk Shampoo in the standard Item field.

## [License](./LICENSE.txt)
Copyright (c) 2021 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
