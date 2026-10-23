# Summary
This account customization project deploys a SuiteAgent that looks up employees whose hire date is from today through 14 days later, uses a skill to decide which equipment each person needs, and creates draft purchase orders for the equipment that can be verified. The agent has an Ask Oracle trigger and a weekly schedule. The purchase-order tool sets approval status to Pending Approval (`1`) when that field exists, sets To Be Emailed to false, and does not create an item receipt.

# Key Concepts
This sample demonstrates the following concepts:

* **SuiteCloud Development Framework (SDF)** – The agent, skill, toolsets, role, and schedule are SDF objects in an account customization project. For more information, see [SuiteCloud Platform Customization](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_1529088392.html).

* **SuiteScript 2.1** – The custom tools use SuiteScript 2.1. For more information, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_8161516336.html).

* **Custom tool script type** – Each tool is an exported function in a custom tool script, described by a JSON schema and registered with a `toolset` object. Both toolsets set `exposetonetsuiteagents` to `T` and `exposetoaiconnector` to `F`. For more information, see [SuiteScript 2.1 Custom Tool Script Type](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1185045525.html).

* **SuiteAgent skill** – `new-hire-equipment-skill` maps role text and work location to an equipment list and tells the agent which requirements are unmet, which values could not be verified, and what to do next. The skill does not create the purchase order.

* **Scheduled agent trigger** – `customscheduledtrigger_nh_equip` is a weekly Monday 07:00 `America/New_York` schedule. It runs as the Procurement Coordinator role and sends the text in the schedule prompt file. That file is separate from the agent instructions. This project does not activate the schedule.

# SuiteScript Version
The custom tools use SuiteScript 2.1 (`@NApiVersion 2.1`). For more information about this SuiteScript version, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_8161516336.html).

# Loaded Modules
The custom tools load and use the following SuiteScript modules:

* **N/search** – `getNewHireEquipmentRequirements.js` uses it to search employees. `purchaseOrder.js` uses it to match an item and to find a purchase order by external ID. For more information, see [N/search Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4345764122.html).

* **N/record** – `purchaseOrder.js` uses it to load the employee, load the item vendor sublist, and create the purchase order. For more information, see [N/record Module](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267255811.html).

# Script Type and Entry Points
This sample uses the custom tool script type. The JSON schema `name` matches the exported function:

* `getNewHireEquipmentRequirements` – Searches employees where `isinactive` is false and the hire date is from today through 14 days later, inclusive. It returns at most 100 employees. Each result includes the employee ID, name, start date (`hiredate`), role (`title`), assigned project (`job`, when that column is available), work location, manager (`supervisor`), and onboarding status (`employeestatus`). `credentials` is always empty and `credentialsVerification` is always `NOT_ON_EMPLOYEE_RECORD`. The tool does not choose equipment or change records.
* `purchase_order` – Requires a numeric `employeeId` and 1 to 25 lines. Each line needs an item name of 1 to 80 characters and a whole-number quantity from 1 to 99. It matches an active item by exact `itemid`, then by exact `displayname`. It groups verified lines by vendor and creates one purchase order per vendor. It reuses a purchase order whose external ID is `nh-equip-{employeeId}-v{vendorId}` instead of creating another. Lines that cannot be matched, or whose vendor cannot be resolved, are returned in `unverifiedItems` and are not added.

# Customization Details
The customization for this use case includes:

* An agent, `customagent_nh_equip` (New-hire equipment agent), with `ASKORACLE` and `SCHEDULED` triggers. Its instructions are `src/FileCabinet/SuiteScripts/newhiredemo/instructions.txt`.
* A skill object, `customskill_nh_equip`. The File Cabinet folder is `src/FileCabinet/SuiteScripts/newhiredemo/Skills/new-hire-equipment-skill/`. The `SKILL.md` front matter `name` is `new-hire-equipment-skill`. The `displayname` is New-hire equipment skill.
* A toolset, `custtoolset_nh_equip_req` (Retrieve new-hire equipment requirements tools), for `getNewHireEquipmentRequirements`.
* A toolset, `custtoolset_nh_equip_po` (Custom purchase order tools), for `purchase_order`.
* A role, `customrole_nh_equip`, named Procurement Coordinator. It has View for `ADMI_AGENTSKILL`, `LIST_EMPLOYEE`, `LIST_EMPLOYEE_RECORD`, `LIST_FIND`, `LIST_ITEM`, `LIST_LOCATION`, `LIST_VENDOR`, and `TRAN_FIND`, and Create for `TRAN_PURCHORD`.
* A scheduled trigger, `customscheduledtrigger_nh_equip`. Monday is `T` and the other weekdays are `F`. Local time is `07:00`, the zone is `America/New_York`, the timeout is 300 seconds, and `runasrole` is Procurement Coordinator. The prompt file is `src/FileCabinet/SuiteScripts/newhiredemo/prompts/new-hire-equipment-check.txt`.
* Required manifest features: `ACCOUNTING`, `SERVERSIDESCRIPTING`, and `SUBSIDIARIES`.

The skill compares the role as case-insensitive text and uses the first matching profile:

* Technician, installer, operator, mechanic, driver, or field: Hard Hat, Safety Glasses, High-Visibility Vest, Work Boots, Laptop, Mobile Phone.
* Manager, supervisor, coordinator, or director: Laptop, Mobile Phone, High-Visibility Vest.
* Engineer, specialist, analyst, or inspector: Laptop, Mobile Phone, Safety Glasses.
* Any other role: Laptop and Mobile Phone, and a note that the standard kit was used.

If the work location contains yard, field, site, plant, or outdoor, the skill adds Hard Hat and High-Visibility Vest when that profile does not already include them. A blank location does not add those items. Order quantity in the skill is 1.

Those item names must exist on an active item. The purchase-order tool uses a passed `vendorId` when the caller supplies one. Otherwise it uses the item's single preferred vendor, or the item's only vendor when no preferred vendor is flagged. An item with no usable vendor, an unsupported item type, or more than one exact name match is left off the purchase order.

A blank project, location, onboarding status, or credential is an exception in the skill. A missing credential or project does not cancel the role-based equipment. The search always reports credentials as `NOT_ON_EMPLOYEE_RECORD` because it does not read a credentials field.

This SDF project does not set the Ask Oracle audience. After deployment, an administrator grants the roles that can run the agent. This project also does not activate the weekly schedule. Activate `customscheduledtrigger_nh_equip` in Agent Management before expecting it to run.

# Test the Solution
1. Use a NetSuite account with test data. From this project root, run `suitecloud project:validate` and then `suitecloud project:deploy --accountspecificvalues WARNING`. `suitecloud.config.js` sets the project folder to `src`.
2. Create active items named Hard Hat, Safety Glasses, High-Visibility Vest, Work Boots, Laptop, and Mobile Phone. Give each item one preferred vendor, or exactly one vendor.
3. Create an employee that is not inactive, with a hire date from today through 14 days later. Set the job title (`title`) to Technician and set a work location.
4. Grant your role access to the New-hire equipment agent, then in Ask Oracle ask it to perform the new-hire equipment check.
5. Confirm the reply names the employee and start date, lists the Technician equipment, and cites a purchase order. Open that purchase order. When the account has approval status, it is Pending Approval. To Be Emailed is false. The tool does not create an item receipt. The external ID starts with `nh-equip-` and includes the employee ID and vendor ID.
6. Run the same check again. The tool returns the existing purchase order for that external ID with `alreadyCreated` true and does not create a second one for the same vendor.
7. In Agents (Setup > Agent Management > Agents), activate `customscheduledtrigger_nh_equip` only when you want the Monday 07:00 `America/New_York` run. Deploying the object does not turn that run on.

## [License](./LICENSE.txt)
Copyright (c) 2026 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.
