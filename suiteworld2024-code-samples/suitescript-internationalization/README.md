<p align="center"><a href="#"><img width="250" src="oracle_netsuite_logo.png"></a></p>

# Summary
This SuiteScript sample project uses custom translation collections and strings to translate country specific information on employee records. Custom tabs and fields are created to hold the translated content when an employee record is viewed. 

* ue_en.js Adds a custom tab for the bonus email translation string for en_US locale.
* swTab_en.js Adds a custom tab for the email content translation string for en_US locale.
* swTab_cz.js Adds a custom tab for the email content translation string for cs_CZ locale.

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteScript 2.x** – You can use SuiteScript to extend and customize, search, and process your NetSuite data. SuiteScript enables full-featured application-level scripting capabilities that support sophisticated procedural logic for both client and server scripts, as well as robust debugging. For more information, see [SuiteScript 2.x](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_8161516336.html).

* **User Event script type** – This script type is used to perform certain actions on records, such as create, load, update, copy, delete, or submit. Most standard NetSuite records and custom record types support user event scripts. Exceptions include records used for personal identification purposes (such as a Driver’s License, Passport, or other Government-issued ID), some revenue recognition records, and some timecard-related records.

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/config** – To load company specific information. This information is used to format country specific values for employees. Use the N/config module to access NetSuite configuration settings. For more information, see [N/config Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4261803800.html).
* **N/translation** – To load custom collections and keys. This module allows you to interact with NetSuite Translation Collections programmatically. For more information, see [N/translation Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1538666156.html).
* **N/runtime** - To view runtime settings for the script or user. For more information, see [N/runtime Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296359529.html#N%2Fruntime-Module).
* **N/format** - To parse formatted data into strings and to convert strings into a specified format. For more information, see [N/format Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4388721627.html).
* **N/format/i18n** - To format strings in international context and format numbers to currency or number strings. You can also use this module to format phone number to strings and parse strings to phone number. For more information, see [N/format/i18n Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1543861741.html#subsect_91182019615).
* **N/record** - To make changes to the data on employee records. For more information, see [N/record Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267255811.html).

# Script Type and Entry Points
This sample uses a user event script type with the following entry points: 

* `beforeLoad` – Defines the function that is executed before a record is loaded; that is, whenever a read operation occurs on a record, and prior to returning the record or page.

# Customization Details
The customization for this use case includes: 
* A custom translation collection (custcollection_i18ndemo)
* Two custom strings with keys: bonus_email and email_content
* A user event script triggered on the beforeLoad entry point.

# Test the Solution
1. Go to Lists > Employees > Employees (Administrator)
2. Click View next to an employee record.
3. Verify the custom tabs and fields appear on the employee record.
4. Verify the custom string content appears in the custom field.

## [License](./LICENSE.txt)
Copyright (c) 2024 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
