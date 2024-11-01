<p align="center"><a href="#"><img width="250" src="oracle_netsuite_logo.png"></a></p>

# Summary
This sample REST project helps to automate email communication to customers. A SuiteQL query is used to search for communication between a specific customer. If there is no exisiting communication, a message is created and sent to the appropriate entities. When the communication has been sent, it will be marked as processed.  

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteTalk REST Web Services** – The NetSuite REST web services provide an integration channel that extends the capabilities of SuiteTalk. REST web services provide a REST-based interface for interacting with NetSuite. For more information, see [SuiteTalk REST Web Services Overview and Setup](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_1540391670.html).

* **REST Web Services Request Processing** - You can execute requests asynchronously in REST web services.  With asynchronous requests, you send a request to REST web services, where it is placed in a processing queue and handled asynchronously with other requests. Your client application does not wait for a response. After a job is submitted, a job ID is returned in the REST web services response. Your client application can then check the status and result of the request by referencing the job ID. Asynchronous processing can be useful if you expect your connection to NetSuite to be slow or unstable. For more information, see [REST Web Services Request Processing](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_161251386312.html).

* **OAuth 2.0** – OAuth 2.0 enables client applications to use a token to access NetSuite through REST web services, RESTlets, and SuiteAnalytics Connect. For more information, see [OAuth 2.0](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_157769826287.html).

* **SuiteQL** - SuiteQL is a query language based on the SQL-92 revision of the SQL database query language. It provides advanced query capabilities you can use to access your NetSuite records and data, and it supports querying the analytics data source. For more information, see [SuiteQL](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156257770590.html).


# Customization Details
The customization for this use case includes: 
* A custom list to indicate company size (custentity_company_size)
* Custom dataset to list all messages 

## [License](./LICENSE.txt)
Copyright (c) 2024 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
