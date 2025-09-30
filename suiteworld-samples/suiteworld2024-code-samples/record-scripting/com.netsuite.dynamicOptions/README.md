## Overview
Assume scenario where a company charges customers with both time and material items where the former are performed by external vendors.

Configuration records exist to describe a relation between an item and vendor that supplies it and under what conditions.  Some items have no vendors (material), while others (services) might have multiple vendors with different conditions (price, rate type, tax rules, etc.).

The example automates creation of invoices by including the applicable service vendors in the item sublist and automating the item line data population based on the selected vendor configuration. 

Furthermore, the configuration can be used to automatically generate vendor bills and other records and further streamline the whole business process flow.

## Detailed Script Breakdown - beforeLoad
The script manages the visibility and population of vendor-related fields in the item sublist during the `EDIT` and `CREATE` events.
The selected vendor value is retained in field `custcol_item_vendor` and this is what is visible during the `VIEW` mode.
In `EDIT` and `CREATE` mode the vendor select field is represented by `custpage_item_vendor` which has per-line set of options
that are dynamically updated on the client based on a selected `item` and a matching item-vendor configuration record.
The `custpage_current_item_vendor` is a helper hidden field that contains currently selected value and text for given `custpage_item_vendor` field.


### Retrieve the Item Sublist:
This line gets the “item” sublist from the form.

    const itemSublist = scriptContext.form.getSublist({id: "item"});

### Check the Event Type:
This condition checks if the event type is either EDIT or CREATE.

    if (scriptContext.type === scriptContext.UserEventType.EDIT ||
        scriptContext.type === scriptContext.UserEventType.CREATE) {

### Hide and Add Fields:
These lines hide the existing `custcol_item_vendor` field, add a new `custpage_item_vendor` field of type `SELECT` and insert it before the `quantity` field.
It also adds a new `custpage_current_item_vendor` field of type `TEXT` for temporarily storing the selected field info on each line.

    itemSublist.getField("custcol_item_vendor").updateDisplayType({
        displayType : serverWidget.FieldDisplayType.HIDDEN,
    });

    const vendor = itemSublist.addField({id: "custpage_item_vendor", label: "vendor", type: serverWidget.FieldType.SELECT});
    itemSublist.insertField({field: vendor, nextfield: "quantity"});

    const currentVendor = itemSublist.addField({id: "custpage_current_item_vendor", label: "current vendor", type: serverWidget.FieldType.TEXT});
    currentVendor.updateDisplayType({displayType: serverWidget.FieldDisplayType.HIDDEN});

_Note: the insertField on a sublist field is not yet available in the current version of NetSuite_

### Populate Fields on Edit:
If the event type is `EDIT`, the script loops through each line in the `item` sublist.
For each line, it retrieves the value and text of `custcol_item_vendor` and copies the value 
to both `custcol_item_vendor` and `custpage_current_item_vendor` fields for that line.

    if (scriptContext.type === scriptContext.UserEventType.EDIT) {
        const lineCount = scriptContext.newRecord.getLineCount("item");
        for (let i = 0; i < lineCount; i++) {
            const itemVendorValue = scriptContext.newRecord.getSublistValue({sublistId: "item", fieldId: "custcol_item_vendor", line: i});
            if (itemVendorValue) {
                scriptContext.newRecord.setSublistValue({sublistId: "item", fieldId: "custcol_item_vendor", line: i, value: itemVendorValue});
                const itemVendorText = scriptContext.newRecord.getSublistText({sublistId: "item", fieldId: "custcol_item_vendor", line: i});
                const currentOption = {value: itemVendorValue, text: itemVendorText};
                scriptContext.newRecord.setSublistValue({sublistId: "item", fieldId: "custpage_current_item_vendor", line: i, value: JSON.stringify(currentOption)});
            }
        }
    }

## Detailed Script Breakdown - fieldChange
This script handles changes in the `item` sublist, specifically for the `item` and `custpage_item_vendor` fields. 
It updates vendor options, sets sublist values, and applies configurations based on the selected vendor.

### on `item` fieldChange trigger:
If the fieldId is `item`, it calls the `updateVendorOptions` function to update the `custpage_item_vendor` field's available options using the `updateSelectOptions` function. 

    if (scriptContext.fieldId === "item") {
        updateVendorOptions(scriptContext, getCurrentItem(scriptContext));
    }

### on `custpage_item_vendor` fieldChange trigger:
If the field changed is `custpage_item_vendor`, the following block of code is executed.
* The current sublist values for `custcol_item_vendor` and `custpage_current_item_vendor` fields are synchronized with the selected vendor’s value in `custpage_item_vendor`.
* The `applyConfiguration` function is called to autofill the remaining item line data

        const selectedVendor = {
            value: getCurrentCustPageItemVendor(scriptContext),
            text:  getCurrentCustPageItemVendorText(scriptContext),
        };
    
        scriptContext.currentRecord.setCurrentSublistValue({
            sublistId: scriptContext.sublistId,
            fieldId: "custcol_item_vendor",
            value: selectedVendor.value,
        });
    
        scriptContext.currentRecord.setCurrentSublistValue({
            sublistId: scriptContext.sublistId,
            fieldId: "custpage_current_item_vendor",
            value: JSON.stringify(selectedVendor),
        });
        
        applyConfiguration(scriptContext, getCurrentItem(scriptContext), selectedVendor.value);

## Detailed Script Breakdown - lineInit
The lineInit function is designed to initialize the line in the `item` sublist. It ensures that the vendor options are updated whenever a line is initialized.

### Update Vendor Options:
If the sublistId is `item`, it calls the `updateVendorOptions` function to update the `custpage_item_vendor` field's available options using the `updateSelectOptions` function.

    if (scriptContext.sublistId !== "item") {
        return;
    }
    updateVendorOptions(scriptContext, getCurrentItem(scriptContext));


## Detailed Script Breakdown - updateSelectOptions function
The updateSelectOptions function dynamically updates the vendor select options in the item sublist based on the current item and vendor configurations. 
It ensures that the options are unique and appropriately selected.
This function is called within the `fieldChanged` and `lineInit` scripts through the `updateVendorOptions` that supplies expected inputs.

### Contract

    const updateSelectOptions = (currentItemId, currentVendorOption = EMPTY_OPTION)  => {
  
### Initialize Known Options:
The `knowOptions` set ensures that the options do not contain duplicate entries.

    const knownOptions = new Set();

### Get Current Vendor Field:
Retrieves the current vendor field value from the sublist.

    const currentVendorField = scriptContext.currentRecord.getCurrentSublistField({
        sublistId: scriptContext.sublistId,
        fieldId: "custpage_item_vendor",
    });

### Remove Existing Options and Insert EMPTY_OPTION:
Removes all existing options from the vendor field and inserts the `EMPTY_OPTION`. The `EMPTY_OPTION` value should be added first as the options will appears in the order in which they were added.

    currentVendorField.removeSelectOption(null);
    currentVendorField.insertSelectOption(EMPTY_OPTION);
    knownOptions.add(EMPTY_OPTION.value);

### Insert Options Based On Matching Configuration:
* Retrieves configurations that match the current item.
* Iterates through the configurations and creates new options for the vendor field. If the option is not already known, it inserts the option and marks it as selected if it matches the current vendor option.


    /** @type {Configuration[]} */
    const itemFilteredConfigurations = getMatchingConfigurations(currentItemId ? {custrecord_item: currentItemId} : undefined);

    itemFilteredConfigurations.forEach((configuration) => {
        const newOption = {
            value: String(configuration.custrecord_vendor),
            text: String(configuration.vendor_name),
        }
        if (!knownOptions.has(newOption.value)) {
            currentVendorField.insertSelectOption({...newOption, isSelected: currentVendorOption.value == newOption.value});
            knownOptions.add(newOption.value);
        }
    });

### Insert Current Vendor Option If Not Yet Encountered:
If the current vendor option is not already in the known options, it inserts it and marks it as selected.

    if (!knownOptions.has(currentVendorOption.value)) {
        currentVendorField.insertSelectOption({...currentVendorOption, isSelected: true});
        knownOptions.add(String(currentVendorOption.value));
    }