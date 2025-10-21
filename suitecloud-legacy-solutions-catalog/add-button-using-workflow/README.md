<p align="center"><a href="#"><img width="250" src="assets/oracle_netsuite_logo.png"></a></p>


# Summary
This SuiteScript sample implements a custom workflow on the sales order record that uses a workflow action script for additional processing. The workflow adds two custom buttons, and implements different actions based on which button is clicked. The workflow action script updates a field on the customer record based on values in the sales order record, and is triggered when the user clicks one of the custom buttons. Clicking either button will also update a field on the sales order record.

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteFlow** - This is used to create and execute workflows in NetSuite. A workflow is the definition of a custom business process for a standard or custom record. For more information, see [SuiteFlow Overview](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_4068260113.html). 

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses some SuiteScript 2.1 features, such as arrow functions. For more information, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html#SuiteScript-2.1).

* **Workflow Action script type** – This script type is used to create custom workflow actions that are defined on a record in a workflow. Custom actions can range from simple record operations to complex ones that are beyond what is supported by the built-in workflow actions. For more information, see [SuiteScript 2.x Workflow Action Script Type](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460429314.html).

# SuiteScript Version
This sample uses SuiteScript 2.1. For more information about this SuiteScript version, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html#SuiteScript-2.1).

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/record** – To load and work with records. For more information, see [N/record Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267255811.html#N%2Frecord-Module).

# Script Type and Entry Points
This sample uses a user event script type with the following entry points:

* `onAction` – Defines a WorkflowAction script trigger point. This executes when conditions for the defined custom action in the workflow is satisfied.

# Customization Details
The customization for this use case includes:

* A workflow on the sales order record that does the following:
  * Creates 2 custom buttons
  * Transitions to two states, depending on which button is clicked
  * Defines actions for each state:
    * Updates record fields to indicate which button was clicked 
    * Calls a workflow action script if a specific button was clicked
* A workflow action script that updates another record

# Test the Solution
1. Create a sales order by going to Transactions > Sales > Enter Sales Orders
2. When the record is saved, verify that the last two buttons are labeled as 'Approve' and 'Reject'
3. Click the Reject button and verify that the Memo field has the value 'Record is rejected.'
4. Repeat Step #s 1 and 2
5. Click the Approve button, and verify that the Memo field has the value 'Record is approved.' 
6. Open the customer record by clicking on the customer link
7. In the customer record, the Comments field should be updated to: 'Items ordered: x', where x is the number of lines in the sales order's item sublist.

## [License](./LICENSE.txt)
Copyright (c) 2024 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.