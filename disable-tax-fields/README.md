# Summary
This customization shows how to control who can edit tax fields on sales transactions (specifically, the Cash Refund, Cash Sale, Credit Memo, Invoice, Sales Order, and Return Authorization).

Only the Administrator and users logged in using specific roles will have permission to edit tax fields. The sales transaction will be created as normal, and taxation will depend on how the customer and items are set up. 

This customization uses a script parameter to determine which roles can edit tax fields. If the user is logged in with a role that is not an Administrator or a role that is not specified in the parameter, the script disables the tax fields. This is independent of whether the sale is taxable or not. The script in this tutorial disables the following tax fields for U.S. sales transactions: istaxable, taxitem, and taxrate.

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses some SuiteScript 2.1 features, such as arrow functions. For more information, see [SuiteScript 2.1](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_156042690639.html).
* **Client script type** - Client scripts are scripts that are executed by predefined event triggers in the client browser. They can validate user-entered data and auto-populate fields or sublists at various form events. Scripts can be run on most standard records, custom record types, and custom NetSuite pages such as Suitelets. For more information, see SuiteScript 2.x Client Script Type.

# SuiteScript Version
This sample uses SuiteScript 2.1. For more information about this SuiteScript version, see [SuiteScript 2.1](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_156042690639.html).

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/currentRecord** - to access the record that is active in the current client context. This module is always a dynamic object and mode of work is always dynamic, not deferred dynamic/standard. For more information, see [N/currentRecord Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4625600928.html).
* **N/runtime** - to view runtime settings for the script, the session, or the user. For more information, see [N/runtime Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296359529.html).
* **N/log** – To log errors that occur during execution. For more information, see [N/log Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4574548135.html).

# Script Type and Entry Points
This sample uses a client script type with the following entry points:

* `pageInit` - Defines the function that is executed after the page completes loading or when the form is reset.

# Customization Details
* A script parameter (Tax Allowlist) to specify which roles are allowed to modify the tax fields on the transaction record
* A client script triggered on the pageInit entry point

# Test the Solution (for a role not allowed to edit tax fields)
1. Log in with a role that is not specified in the script parameter. Make sure that the role has permission to edit sales transactions.
2. Go to Transaction > Sales > Enter Sales Orders to create a new sales order.
3. In the Customer field, select a U.S. customer.
4. On the Items subtab, select an item.
5. On the Accounting subtab, verify that the taxable, taxitem, and taxrate fields are disabled.
6. If the subsidiary or customer is set up with default tax values, you should be able to save the sales order. Click Save.
7. Edit the sales order that you created in the previous step. Verify that tax fields are still editable on edit mode.

# Test the Solution (for a role that is allowed to edit tax fields)
1. Log in with a role specified in the script parameter. 
2. Go to Transaction > Sales > Enter Sales Orders to create a new sales order.
3. In the Customer field, select a U.S. customer.
4. On the Items subtab, select an item.
5. On the Accounting subtab, verify that the taxable, taxitem, and taxrate fields are editable and set the values for these fields.
6. Click Save.
7. Edit the sales order that you created in the previous step. Verify that tax fields are still editable on edit mode.


## [License](./LICENSE.txt)
Copyright (c) 2021 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
