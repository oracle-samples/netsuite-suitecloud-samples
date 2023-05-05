# Summary 
This customization project is composed of 4 user event scripts that are designed to track the total amount of deposits and refunds on sales orders. This can be useful for tracking layaways or building other types of customizations that require the total the amount of customer deposits, refunds on deposits, and gift certificates that have been applied to a sales order balance before the order is invoiced.

For more information about this customization project, see [Track Customer Deposit Balances](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157141180023.html).
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
* **N/search** -  To create and run on-demand or saved searches and analyze and iterate through the search results. For more information, see [N/search Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4345764122.html).

# Script Type and Entry Points
This sample uses a user event script type with the following entry points:

* `beforeSubmit` - Defines the function that is executed before a record is submitted; that is, prior to any write operation on the record.
* `afterSubmit` - Defines the function that is executed after a record is submitted.

# Helper Methods
This sample defines and uses the following helper method in the handle refund script:

* `UpdateSalesOrder(refId)` - This function updates the sales order if a refund has been issued.

# Customization Details 
This customization for this use case includes:
* A custom field (Amount Deposited) to store the calculated total amount of deposits made on the sales order
* A custom field (Balance Remaining) to store the balance remaining on the sales order
* A saved search (Deposit Balance on Sales Order) to determine the balance of customer deposits
* Four user event scripts triggered on the beforeSubmit and afterSubmit entry points

# Test the Solution
After you create the script records and deploy your scripts, you can test your solution.

When these scripts execute on sales orders, customer deposits, customer refunds, or deposit applications, the two custom fields, Amount Deposited and Balance Remaining, are updated on the sales order.

To test the deposit:

1. Go to Transactions > Sales > Enter Sales Orders > List (Administrator).
2. Click View next to an order that is Pending Fulfillment and needs a customer deposit recorded against it. You can create a test sales order if you do not have any existing orders.
3. Click Create Deposit. If you do not see the Create Deposit button, you may need to edit the sales order and change the Custom Form selection to Standard Sales Order – Invoice or the custom form you chose when you created the Amount Deposited and Balance Remaining fields.
4. On the Customer Deposit page, change the Payment Amount to a lower amount than the total of the sales order. You can set the Payment Method to cash or check for a quick test, and click Save.
5. Return to the sales order. You should see the value of your deposit in the Amount Deposited field, and the value of the sales order total minus the deposit amount in the Balance Remaining field.
6. Edit the sales order to change the amount of the total, and the Balance Remaining amount should change when you save the order.

To test a refund: 

1. Go to Transactions > Customers > Issue Customer Refund (Administrator).
2. Select the same customer as you did for the sales order and deposit, and click the Apply tab and the Deposits tab.
3. Check the Apply box next to the customer deposit and enter an amount in the Payment field.
4. On the Refund Method tab, in the Refund Method field, select Cash or Check.
5. Click Save.
6. View the sales order. You should see the Amount Deposited decrease and the Balance Remaining increase.
7. To test the deletion of a deposit application, open the customer refund created in steps 7–11.
8. Under the Apply tab, click the date to open the customer deposit the refund is applied to open the deposit.
9. On the customer deposit, under the Applied To tab, click the date in the Date Applied column for the customer refund. This opens the deposit application.
10. Click Edit and then click Delete.
11. View the sales order again and see that the refund is no longer applied toward the Amount Deposited.

## [License](./LICENSE.txt)
Copyright (c) 2021 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
