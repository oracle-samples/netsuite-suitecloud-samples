<p align="center"><a href="#"><img width="250" src="assets/oracle_netsuite_logo.png"></a></p>

# Summary
This SuiteScript sample implements a custom workflow action that integrates with NetSuite's N/llm module to send prompts to a large language model (LLM) and store the response on the target record. The workflow action accepts a configurable prompt parameter, appends the current record's data to the prompt, and returns the LLM-generated response. The response can be stored in any text field on the record using SuiteFlow's "Store Result In" feature.

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteFlow** - This is used to create and execute workflows in NetSuite. A workflow is the definition of a custom business process for a standard or custom record. For more information, see [SuiteFlow Overview](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_4068260113.html).

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses SuiteScript 2.1 features, such as async/await and classes. For more information, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html#SuiteScript-2.1).

* **Workflow Action script type** – This script type is used to create custom workflow actions that are defined on a record in a workflow. Custom actions can range from simple record operations to complex ones that are beyond what is supported by the built-in workflow actions. For more information, see [SuiteScript 2.x Workflow Action Script Type](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460429314.html).

* **N/llm Module** – This module provides access to large language model capabilities within SuiteScript. It enables AI-powered text generation based on prompts. For more information, see [N/llm Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0328475382.html).

# SuiteScript Version
This sample uses SuiteScript 2.1. For more information about this SuiteScript version, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html#SuiteScript-2.1).

# Loaded Modules
This sample loads and uses the following SuiteScript modules:

* **N/llm** – To send prompts to the LLM and receive generated text responses. For more information, see [N/llm Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0328475382.html).

* **N/record** – To work with the current record in the workflow context. For more information, see [N/record Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267255811.html#N%2Frecord-Module).

* **N/runtime** – To retrieve script parameters configured on the workflow action. For more information, see [N/runtime Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4296359529.html#N%2Fruntime-Module).

* **N/error** – To create and throw custom errors. For more information, see [N/error Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4243786498.html#N%2Ferror-Module).

* **N/log** – To log audit and debug information during script execution. For more information, see [N/log Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4574548135.html#N%2Flog-Module).

# Script Type and Entry Points
This sample uses a workflow action script type with the following entry point:

* `onAction` – Defines a WorkflowAction script trigger point. This executes when the custom action is triggered within a workflow state.

# Customization Details
The customization for this use case includes:

* A workflow action script that does the following:
    * Reads a configurable prompt from the script parameter "Prompt Text"
    * Appends the current record's data to provide context to the LLM
    * Sends the prompt to the LLM using the N/llm module
    * Returns the LLM response for storage in a record field
* A script parameter (`custscript_llm_prompttext`) that allows workflow designers to configure the prompt text per action instance
* A script deployment with return type TEXT to enable the "Store Result In" workflow feature

# Test the Solution
1. Create a workflow on a record type (e.g., Sales Order) by going to Customization > Workflow > Workflows > New
2. Set a Record Type and a Sub Type (e.g., RECORD TYPE > Transaction, SUB TYPES > Order)
3. Set a name (e.g., LLM Prompt Workflow Action) and an optional ID (custworkflow_llm_prompt)
4. Set the initiation of the workflow (e.g., EVENT BASED)
5. Under Event Definition, set the state of the workflow (e.g., ON CREATE)
6. Assign a trigger to the workflow (e.g., TRIGGER TYPE > After Record Submit)
7. Save the workflow to be redirected to the Workflow Editor
8. Click the Entry state (or create a new state)
9. Add a New Action > Custom Action (e.g, LLM Prompt (Custom))
10. Set the action's trigger (e.g., TIGGER ON > Entry)
11. Set a field to store the workflow's result (e.g., Memo)
12. Fill in the VALUE for the Prompt Text parameter (e.g., "Summarize this record in one sentence")
13. Save the New Action
14. Create or edit a record under the workflow trigger conditions (e.g., Transactions > Sales > Enter Orders)
15. After the record is saved, verify that the target field contains an LLM-generated response based on your prompt and the record's data (e.g., Primary Information > Memo)

## [License](./LICENSE.txt)
Copyright (c) 2026 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
