<p align="center"><a href="#"><img width="250" src="/map-reduce-scripts/mr-create-record/assets/oracle_netsuite_logo.png"></a></p>

# Summary
This customization project shows how to create a new sales order record based on custom record workbook data. The workbook stores custom records. The script retrieves the workbook data using the N/query module to use the custom record for a new standard sales order. The script will set the values for each corresponding field and save the order. Finally, the script logs usage, time elapsed, and any possible errors that may occur.  


# Key Concepts
This sample demonstrates the following concepts:

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses some SuiteScript 2.1 features, such as arrow functions. For more information, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html).

* **Map reduce script type** – The map/reduce script type is designed for scripts that need to handle large amounts of data. It is best suited for situations where the data can be divided into small, independent parts. When the script is executed, a structured framework automatically creates enough jobs to process all of these parts. For more information, see [SuiteScript 2.x Map/Reduce Script Type](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799161.html)

* **SuiteScript 2.x Analytic APIs** - SuiteScript Analytic APIs help you work with analytical data in NetSuite using SuiteScript. These APIs support advanced queries and operations that enable you to load, analyze, and update your data programmatically in server scripts. For more information, see [SuiteScript 2.x Analytic APIs](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_159524581218.html#:~:text=SuiteScript%20Analytic%20APIs%20are%20based,to%20analyze%20your%20NetSuite%20data.).

* **Promise Object** - A promise is a JavaScript object that represents the eventual result of an asynchronous process. After the promise object is created, it serves as a placeholder for the future success or failure of the asynchronous process. While the promise object is waiting, the remaining segments of the script can execute. With promises, developers can write asynchronous code that is intuitive and efficient. For more information, see [Promise Object](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387812940.html).

# SuiteScript Version
This sample uses SuiteScript 2.1. For more information about this SuiteScript version, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html).

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/record** – To load and work with records. For more information, see [N/record Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267255811.html).
* **N/log** – To log errors that occur during execution. For more information, see [N/log Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4574548135.html).
* **N/query** - To create and run queries using the SuiteAnalytics Workbook query engine. For more information, see [N/query Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510275060.html).

# Script Type and Entry Points
This sample uses a user event script type with the following entry points: 

* `getInputData` – Marks the beginning of script execution where input data is generated. 
* `reduce` - Script logic in this function is applied to each key and its corresponding list of values. One key is processed per function invocation. The function is invoked again for the next key and its corresponding set of values. 
* `summarize` - Executes any custom logic and applies it to the result set. 

# Customization Details
This customization for this use case includes:

* A custom record (NSCS | MR | Create Record) that stores sales order information which includes: subsidiary, entity, item, quantity, rate, and processed fields. 
* A custom workbook (NSCS | MR | Create Record) to store the custom record data. 
* A map reduce script that will trigger on getInputData, reduce, and summarize entry points. 

# Test the Solution

### Populate the Workbook Data

This workbook stores custom record data. To populate a sales order for this workbook:

Create the custom order records.

1. Go to Customization > Lists, Records, & Fields > Record Types. 
2. On the NSCS |  MR  |  Create Record record type, click New Record.
3. Fill in values for the Subsidiary, Customer, Item, Quantity, and Rate fields.
4. Click Save.

<p align="center"><a href="#"><img width="500" src="/map-reduce-scripts/mr-create-record/assets/customRecord.png"></a></p>

### Submit the Map/Reduce Script 

You have the option to run a map/reduce script on demand or by scheduling the script at a specific time and date. For more information about submitting a map reduce script for execution, see the following references: 
* [Scheduling a Map/Reduce Submission](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509578930.html#:~:text=To%20set%20a%20scheduled%20submission,frequency%20of%20every%2015%20minutes.)
* [Submitting an On-Demand Map/Reduce Script Deployment from the UI](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1509579025.html)
* [Submitting an On-Demand Map/Reduce Script Deployment from a Script](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1508887826.html)
* [Submitting Multiple Deployments of the Same Script](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510974473.html#:~:text=If%20you%20need%20to%20submit,multiple%20advantages%20to%20this%20technique.)

### Verify the Records have been created

1. Go to Transactions > Sales > Enter Sales Orders > List.
2. Verify the sales order record information matches the custom order. 

<p align="center"><a href="#"><img width="500" src="/map-reduce-scripts/mr-create-record/assets/orderRecord.png"></a></p>

Optionally, review the Execution log for the script. 

1. Go to Customization > Scripting > Script Deployments. 
2. Click View next to the Create map reduce script. 
3. Under the Execution Log tab, review the Script details from each stage.

## [License](./LICENSE.txt)
Copyright (c) 2023 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.