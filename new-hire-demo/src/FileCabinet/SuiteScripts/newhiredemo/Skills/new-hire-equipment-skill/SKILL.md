---
name: new-hire-equipment-skill
description: Evaluate the equipment a new hire needs from role, project, location, and credentials, then list unmet requirements, items that could not be verified, and recommended next actions.
recommendedTools:
  - custtoolset_nh_equip_req___getNewHireEquipmentRequirements
  - custtoolset_nh_equip_po___purchase_order
---

# New-hire equipment skill

Use this skill after upcoming hires have been retrieved. Evaluate each employee whose start date is within the next 14 days. Decide which equipment should be ordered, and separate verified requirements from gaps.

## Required sequence

1. Start from `getNewHireEquipmentRequirements` results. Do not evaluate a hire that is not in those results.
2. Use the start date, role, assigned project, work location, manager, onboarding status, and credentials passed with the employee.
3. Apply the equipment profiles below to the role text, then apply the location additions.
4. Treat blank project, location, onboarding status, or credentials as items that could not be verified. Do not invent values for them.
5. Return the evaluation for the agent to order. Do not create the purchase order inside this skill. The agent creates drafts with `purchase_order` after this evaluation.

## Equipment profiles

Compare the role as case-insensitive text. Use the first matching profile.

- Technician, installer, operator, mechanic, driver, or field: Hard Hat, Safety Glasses, High-Visibility Vest, Work Boots, Laptop, Mobile Phone.
- Manager, supervisor, coordinator, or director: Laptop, Mobile Phone, High-Visibility Vest.
- Engineer, specialist, analyst, or inspector: Laptop, Mobile Phone, Safety Glasses.
- Any other role: Laptop and Mobile Phone. Also record that the role did not match a specific profile, so the standard kit was used.

If the work location contains yard, field, site, plant, or outdoor, add Hard Hat and High-Visibility Vest when the profile does not already include them. If the work location is blank, do not add location-based equipment.

Order quantity is 1 for each verified item. Drop duplicate item names.

## Exceptions

For each employee, list:

- Unmet requirements: equipment the profile requires and that should be ordered.
- Items that could not be verified: missing project, location, onboarding status, credentials, or a role that did not match a specific profile.
- Recommended next actions: confirm missing credentials and assignments with the manager before the start date, and order only the verified equipment.

A missing credential or project does not cancel the role-based equipment. It stays an exception beside the order.

## Required response

For every employee returned, include:

- Employee name
- Start date
- Role, assigned project, work location, manager, and onboarding status
- Equipment to order, with quantity 1
- Unmet requirements
- Items that could not be verified
- Recommended next actions

When the hire list is empty, say that no employees start within the next 14 days and do not recommend a purchase order.
