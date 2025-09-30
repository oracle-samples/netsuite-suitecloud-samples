# Summary
This script populates the Department and Class sublist columns when a field in one of those sublists is changed. If a different sublist field is changed, or if a field that’s not on a sublist is changed, no sublist column values are populated.

For more information about this customization project, see [Set Default Values in a Sublist](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157375587585.html).

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses some SuiteScript 2.1 features, such as arrow functions. For more information, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html#SuiteScript-2.1).
* **Client script type** - Client scripts are scripts that are executed by predefined event triggers in the client browser. They can validate user-entered data and auto-populate fields or sublists at various form events. For more information, see [SuiteScript 2.x Client Script Type](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387798404.html#SuiteScript-2.x-Client-Script-Type).

# SuiteScript Version
This sample uses SuiteScript 2.1. For more information about this SuiteScript version, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html#SuiteScript-2.1.

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/log** – To log errors that occur during execution. For more information, see [N/log Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4574548135.html#N%2Flog-Module).
* **N/search** To create and run on-demand or saved searches and analyze and iterate through the search results. For more information, see [N/search Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345764122.html#N%2Fsearch-Module).
* **N/currentRecord** - To access the record that is active in the current client context. For more information, see [N/currentRecord Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4625600928.html#N%2FcurrentRecord-Module).

# Script Type and Entry Points
This sample uses a client script type with the following entry points:

* `fieldChanged` - Defines the function that is executed when a field is changed by a user or client call.

# Customization Details
The customization for this use case includes:
* Two custom fields (Department and Class) to hold department and class information for the vendor
* A client script triggered on the fieldChanged entry point

# Test the Solution

After you create the script record and deploy your script, you can test your solution by creating a new vendor record and verifying the values in the Department and Class sublist columns.

1. Go to Lists > Relationships > Vendors > New (Administrator) to create a new vendor.
2. On the Vendor page, enter the following values:
    - Company Name: Tutorial Vendor
    - Category: Select any value, for example, Subcontractor
    - Custom Department: Select any value, for example, Service
    - Custom Class: Select any value, for example, Recurring Business
3. Click Save.
4. Go to Transactions > Payables > Enter Bills to enter a new bill from the new Tutorial Vendor vendor.
5. On the Bill page, enter the following values:
    - Custom Form: Standard Vendor Bill
    - Vendor: Tutorial Vendor
    - All remaining required fields: Accept the default values
    - Expenses and Items tab: Account - Select any account
    - Expenses and Items tab: Amount - Select any amount
6. Verify that as soon as you enter the Amount value, the Department and Class fields are automatically populated with the values you set when you created the Tutorial Vendor record.
7. You can leave the Bill page without finishing the bill because you only needed to test that the Department and Class fields on the vendor bill were automatically populated.

## [License](./LICENSE.txt)
Copyright (c) 2021 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
