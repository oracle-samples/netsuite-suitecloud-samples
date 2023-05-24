# Summary
This script converts the transaction total on a purchase order to a user-specific currency rather than use the currency associated with the vendor. The converted purchase order total is stored in a custom field on the purchase order record so that it can be used for reporting without changing the standard Total field. 

For more information about this customization project, see [Set Purchase Order Exchange Rate](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157176640777.html).

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses some SuiteScript 2.1 features, such as arrow functions. For more information, see [SuiteScript 2.1](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_156042690639.html).
* **Client script type** - Client scripts are scripts that are executed by predefined event triggers in the client browser. They can validate user-entered data and auto-populate fields or sublists at various form events. For more information, see [SuiteScript 2.x Client Script Type](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387798404.html).

# SuiteScript Version
This sample uses SuiteScript 2.1. For more information about this SuiteScript version, see [SuiteScript 2.1](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_156042690639.html).

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/currentRecord** - To access the record that is active in the current client context. This module is always a dynamic object and mode of work is always dynamic, not deferred dynamic/standard. For more information, see [N/currentRecord Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4625600928.html).
* **N/runtime** - To view runtime settings for the script, the session, or the user. For more information, see [N/runtime Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296359529.html).
* **N/currency** - To work with exchange rates within your NetSuite account. For more information, see [N/currency Module
](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4358551775.html).
* **N/log** – To log errors that occur during execution. For more information, see [N/log Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4574548135.html).

# Script Type and Entry Points
This sample uses a client script type with the following entry points:

* `saveRecord` - Defines the function that is executed when a record is saved (after the submit button is pressed but before the form is submitted).

# Customization Details
This customization for this use case includes:
* A custom field (Custom Currency PO Amount) to store the purchase amount in the currency of the person who created the purchase order.
* A custom field (Custom Currency Exchange Rate) to store the exchange rate between the transaction currency and the custom currency.
* A script parameter (Custom Currency) to store the currency set by the user.
* A client script triggered on the saveRecord entry point.

# Test the Solution

1. Go to Transactions > Purchases > Enter Purchase Orders to create a new purchase order.
2. In the Custom Form field, select Standard Purchase Order.
3. Fill in all required fields on the purchase order.
4. Click Save.
5. View the newly created purchase order and verify that the custom fields, Custom Currency PO Amount and Custom Currency Exchange Rate, are populated with the correct values.

## [License](./LICENSE.txt)
Copyright (c) 2021 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
