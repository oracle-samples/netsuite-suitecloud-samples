<p align="center"><a href="#"><img width="250" src="oracle_netsuite_logo.png"></a></p>

# Summary
This SuiteScript project provides a caching mechanism for retrieving and storing state-specific shipping rates in NetSuite Sales Orders. The project includes a User Event script to populate cache data from an external API and a Suitelet to manage the cache, allowing users to view and purge cached shipping rates.

* **sl_cacheManager.js** – Displays current cached shipping rates and provides a button to purge the cache in a Suitelet UI.
* **ue_shippingRates.js** – Fetches state-specific shipping rates from an external API and updates the cache for Sales Orders.

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteScript 2.x** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses some SuiteScript 2.1 features, such as arrow functions. For more information, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html).
* **User Event Script Type** – This script type is used to perform certain actions on records, such as create, load, update, copy, delete, or submit. Most standard NetSuite records and custom record types support user event scripts. Exceptions include records used for personal identification purposes (such as a Driver’s License, Passport, or other Government-issued ID), some revenue recognition records, and some timecard-related records. For more information, see [SuiteScript 2.x User Event Script Type](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799721.html).
* **Suitelet Script Type** – This script type is used to provide custom pages and logic that interact directly with NetSuite data. Suitelets allow developers to create custom UIs and server-side logic beyond standard NetSuite forms and records. They are frequently used for building custom dashboards, interactive reports, and wizards. For more information, see [SuiteScript 2.x Suitelet Type](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799721.html).

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/cache** – Provides a public cache for storing and retrieving shipping rates. For more information, see [N/cache Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4642573343.html).
* **N/https** – Allows interaction with external APIs to retrieve shipping rates. For more information, see [N/https Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4418229131.html).
* **N/ui/serverWidget** – Creates form elements for the Suitelet's user interface. For more information, see [N/ui/serverWidget Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_157072957990.html).
* **N/redirect** – Redirects to the Suitelet after cache purging. For more information, see [N/redirect Module](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4424286105.html).

# Script Types and Entry Points
This sample uses the following script types and entry points:

* **User Event Script** ('beforeSubmit') – Called before a Sales Order is saved to fetch the latest shipping rates and update the cache.
* **Suitelet Script** ('onRequest') – Displays the cached shipping rates and provides a "Purge Cache" button.

# Customization Details
The customization for this use case includes:
* A public cache (APP_CACHE) to store state-specific shipping rates, accessible across the account.
* External API URL: "https://run.mocky.io/v3/a8da3ed0-6353-43d1-87fa-b4a29ad36e63?mocky-delay=5s".
* Custom fields on Sales Orders:
  * 'custbody_shipping_rate' – Displays the shipping rate based on the destination state.
  * 'custbody_rate_timestamp' – Tracks the timestamp of the last cache update.

# Testing the Solution
1. **Populate the Cache**:
   - Go to Transactions > Sales > Enter Sales Orders.
   - Create or edit a Sales Order and select a shipping state. Save the record.
   - The User Event script fetches the shipping rate and populates the cache.
   
2. **View and Purge Cache**:
   - Navigate to the Suitelet page to view the current cached rates.
   - If the cache is populated, rates will appear under "Cache Value." If empty, it will display `-- CACHE is EMPTY --`.
   - Click **Purge Cache** to clear the cached data. Verify that the cache is empty upon page reload.

## [License](./LICENSE.txt)
Copyright (c) 2024 Oracle and/or its affiliates. The Universal Permissive License (UPL), Version 1.0.
