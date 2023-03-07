<p align="center"><a href="#"><img width="250" src="assets/oracle_netsuite_logo.png"></a></p>

# Summary
This script validates an order to make sure that the number of items in the order corresponds to the number of cases of that item that can fit on a pallet (i.e., only accept orders fulfilled by full cases), and verifies that the total weight of the order does not exceed the maximum allowed weight for a single order.

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses some SuiteScript 2.1 features, such as arrow functions. For more information, see [SuiteScript 2.1](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_156042690639.html).
* **Client script type** - Client scripts are scripts that are executed by predefined event triggers in the client browser. They can validate user-entered data and auto-populate fields or sublists at various form events. For more information, see [SuiteScript 2.x Client Script Type](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387798404.html).

# SuiteScript Version
This sample uses SuiteScript 2.1. For more information about this SuiteScript version, see [SuiteScript 2.1](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_156042690639.html).

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/log** – To log errors that occur during execution. For more information, see [N/log Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4574548135.html).
* **N/currentRecord** - To access the record that is active in the current client context. For more information, see [N/currentRecord Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4625600928.html).
* **N/runtime** - To view runtime settings for the script, the session, or the user. For more information, see [N/runtime Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4296359529.html).

# Script Type and Entry Points
This sample uses a client script type with the following entry points:
* `saveRecord` - Defines the function that is executed when a record is saved (after the submit button is pressed but before the form is submitted).
* `validateLine` - Defines the validation function that is executed before a line is added to an inline editor sublist or editor sublist.

## Test the Solution

1. Go to Transactions > Sales > Enter Sales Orders (Administrator) to create a new sales order.
2. Fill in all required fields on the sales order with any values you want. You can use the Standard Sales Order form.
3. On the Items subtab, add any item. Set the Quantity to 17, the Cases Per Pallet to 10, and the Item Weight to 5.
4. Click Add to add the item. Verify that because the Quantity of the item (17) is not a value that corresponds to the Cases Per Pallet (10), an error occurs: “Please order in multiples of 10 Cases/Pallet for this item” (which is text set in the script).
5. Close the error message and change the Quantity value to 10 and then click Add . Verify that the item was successfully added. You now have an order of 10 items each weighing 5pounds.
6. Click Save. Verify that the order is not saved because the weight of the order (10 x 5 lbs) is greater than the maximum weight allowed (25 as set in the script parameter). An error is displayed: “The total weight of the order is 50. The max weight is 25. Please adjust the order and submit a separate order if necessary” (which is text set in the script).
7. Edit the order so that the Item Weight is 1. This will make the total order weight 10 lbs.
8. Click Save. Verify that the order is successfully saved.

## [License](./LICENSE.txt)
Copyright (c) 2021 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
