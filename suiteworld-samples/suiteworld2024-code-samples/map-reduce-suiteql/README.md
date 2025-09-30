<p align="center"><a href="#"><img width="250" src="oracle_netsuite_logo.png"></a></p>

# Summary
This SuiteScript project uses the N/query module and SuiteQL to run queries to process large sets of data. The N/query module enables better performance when retrieving data as opposed to N/search, and supports multilevel joins using field data from multiple record types. N/query is a more powerful query tool than N/search and can be used with SuiteQL to support complex queries. 

The following list details more information about each script in the project:

* `Simple Query + RunSuiteQL.js` - Uses N/query API and SuiteQL to retrieve transaction id, date, entity, and total field values and runs the SuiteQL as mapped results.
* `Load a workbook then convert to SuiteQL.js` - Loads a custom workbook created in the SuiteAnalytics Workbook interface and converts the query to SuiteQL. The query runs as mapped results. 
* `RAW SQL.sql` - A SQL query used to retrieve transaction data. This query creates joins  and uses SuiteQL builtin functions to perform additional operations.
* `Optimized SQL.sql` - SQL query used to retrieve transaction data.
* `MapReduce Script.js` - A map reduce script that creates a query to retrieve company performance for employees. The query results are sent in an email in the summarize entry point.

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses some SuiteScript 2.1 features, such as arrow functions. For more information, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html).

* **SuiteQL** – SuiteQL is a query language based on the SQL-92 revision of the SQL database query language. It provides advanced query capabilities you can use to access your NetSuite records and data, and it supports querying the analytics data source. For more information, see [SuiteQL](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156257770590.html).

* **Map/Reduce script type** – The map/reduce script type is designed for scripts that need to handle large amounts of data. It is best suited for situations where the data can be divided into small, independent parts. When the script is executed, a structured framework automatically creates enough jobs to process all of these parts. For more information, see [SuiteScript 2.x Map/Reduce Script Type](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799161.html).

* **SuiteAnalytics Workbook** – Use SuiteAnalytics Workbook to create customized workbooks that combine datasets, tables, pivot tables, and charts using a single tool that leverages the new analytics data source. The analytics data source is designed to ensure that fields are consistently exposed in Workbook, with consistent results across all workbook visualizations. For more information, see [SuiteAnalytics Wrokbook](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_1503949328.html).

# SuiteScript Version
This sample uses SuiteScript 2.1. For more information about this SuiteScript version, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html).

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/query** –  Use the N/query module to create and run queries using the SuiteAnalytics Workbook query engine. For more information, see [N/query Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1510275060.html).
* **N/email** - Use the N/email module to send email messages from within NetSuite. You can use the N/email module to send regular, bulk, and campaign email. For more information, see [N/email Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4358552361.html#subsect_94182208212).
* **N/log** - Log errors that occur during execution. For more information, see [N/log Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4574548135.html).

# Script Type and Entry Points
This sample uses a user event script type with the following entry points: 

* `getInputData` – Marks the beginning of script execution where input data is generated.
* `map` - Script logic applied to each key-value pair that is provided by the getInputData stage. One key-value pair is processed per function invocation, then the function is invoked again for the next pair. The output of the map stage is another set of key-value pairs. 
* `reduce` - Script logic in this function is applied to each key and its corresponding list of values. One key is processed per function invocation. The function is invoked again for the next key and its corresponding set of values.
* `summarize` - Executes any custom logic and applies it to the result set.

## [License](./LICENSE.txt)
Copyright (c) 2024 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
