# Summary
This SuiteScript sample adds a custom button to the sales order form if the status of the sales order record is Pending Fulfillment. When the user clicks the new button, a window is displayed for the Suitelet. For more information about this customization project, see [Add Custom Button to Execute a Suitelet](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157169557654.html#:~:text=Go%20to%20Customization%20%3E%20Scripts%20%3E%20Script,when%20the%20button%20is%20clicked.). 

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses some SuiteScript 2.1 features, such as arrow functions. For more information, see [SuiteScript 2.1](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_156042690639.html).

* **User Event script type** – This script type is used to perform certain actions on records, such as create, load, update, copy, delete, or submit. Most standard NetSuite records and custom record types support user event scripts. Exceptions include records used for personal identification purposes (such as a Driver’s License, Passport, or other Government-issued ID), some revenue recognition records, and some timecard-related records.

# SuiteScript Version
This sample uses SuiteScript 2.1. For more information about this SuiteScript version, see [SuiteScript 2.1](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_156042690639.html).

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/record** – To load and work with records. For more information, see [N/record Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4267255811.html).
* **N/log** – To log errors that occur during execution. For more information, see [N/log Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4574548135.html).
* **N/runtime** - To provide access to custom parameters. For more information, see [N/runtime Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296359529.html).

# Script Type and Entry Points
This sample uses a user event script type with the following entry points: 

* `beforeLoad` – Defines the function that is executed before a record is loaded; that is, whenever a read operation occurs on a record, and prior to returning the record or page.

# Customization Details
The customization for this use case includes: 
* A script parameter (Suitelet Link) to specify the Suitelet link.
* A user event script triggered on the beforeLoad entry point.

# Test the Solution
1. Go to Transactions > Sales > Enter Sales Orders > List (Administrator)
2. Click View next to a sales order that is in Pending Fulfillment status
3. Verify your custom button, labeled ‘Open Suitelet’ appears on the sales order form
4. Click the button and verify your Suitelet opens in a new window

## [License](./LICENSE.txt)
Copyright (c) 2021 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
