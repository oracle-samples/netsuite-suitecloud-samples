/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/ui/serverWidget'],
    /**
     * @param{serverWidget} serverWidget
     */
    (serverWidget) => {

        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {
            const itemSublist = scriptContext.form.getSublist({id: "item"});

            if (scriptContext.type === scriptContext.UserEventType.EDIT ||
                scriptContext.type === scriptContext.UserEventType.CREATE) {

                itemSublist.getField("custcol_item_vendor").updateDisplayType({
                    displayType : serverWidget.FieldDisplayType.HIDDEN,
                });

                const vendor = itemSublist.addField({id: "custpage_item_vendor", label: "vendor", type: serverWidget.FieldType.SELECT});
                itemSublist.insertField({field: vendor, nextfield: "quantity"});

                const currentVendor = itemSublist.addField({id: "custpage_current_item_vendor", label: "current vendor", type: serverWidget.FieldType.TEXT});
                currentVendor.updateDisplayType({displayType: serverWidget.FieldDisplayType.HIDDEN});
            }

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
        }

        /** make sure to export only those events that are actively used */
        return {beforeLoad}

    });
