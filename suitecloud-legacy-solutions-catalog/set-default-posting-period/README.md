# Summary
This customization sets the custom Preferred Posting Period field with the most recent posting period from your saved search results. It then copies the value selected by the user to the standard Posting Period field.

For more information about this customization project, see [Set a Default Posting Period in a Custom Field](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157297685416.html).

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses some SuiteScript 2.1 features, such as arrow functions. For more information, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html#SuiteScript-2.1).
* **Client script type** - Client scripts are scripts that are executed by predefined event triggers in the client browser. They can validate user-entered data and auto-populate fields or sublists at various form events. For more information, see [SuiteScript 2.x Client Script Type](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387798404.html#SuiteScript-2.x-Client-Script-Type).

# SuiteScript Version
This sample uses SuiteScript 2.1. For more information about this SuiteScript version, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html#SuiteScript-2.1).

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/log** – To log errors that occur during execution. For more information, see [N/log Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4574548135.html#N%2Flog-Module.
* **N/search** - To create and run on-demand or saved searches and analyze and iterate through the search results. For more information, see [N/search Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345764122.html#N%2Fsearch-Module).
* **N/runtime** - To view runtime settings for the script, the session, or the user. For more information, see [N/runtime Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296359529.html#N%2Fruntime-Module).
* **N/currentRecord** - This module is available to all scripts as a provided context object. You do not need to explicitly load this module as a dependency in your define or require statement, however, you may if you wish. This tutorial does not explicitly load this module. For more information, see [N/currentRecord Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4625600928.html#N%2FcurrentRecord-Module).

# Script Type and Entry Points
This sample uses a client script type with the following entry points:

* `fieldChanged` - Defines the function that is executed when a field is changed by a user or client call.
* `pageInit` - Defines the function that is executed after the page completes loading or when the form is reset.

# Customization Details
This customization for this use case includes:
* A custom field (Preferred Posting Period) to select an open accounting period
* A custom form that disables the standard Posting Period and includes the custom Preferred Posting Period field
* A saved search used to search for open accounting periods
* A client script triggered on the pageInit and fieldChanged entry points

# Test the Solution

After you create the script record and deploy your script, you can test your solution by creating an invoice and confirming that the current posting period shows in the Preferred Posting Period field is copied to the standard Posting Period field.

1. Go to Transactions > Sales > Create Invoices (Administrator) to create a new invoice.
2. In the Custom Form field, select Preferred Posting Invoice.
3. Confirm the following results:
    1. The Preferred Posting Period field shows on the top of the form
    2. The most recent open period from your saved search results displays in the Preferred Posting Period field
    3. The most recent open period from your saved search results is also copied in the standard Posting Period field (if you chose to leave it visible on the form)

## [License](./LICENSE.txt)
Copyright (c) 2021 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
