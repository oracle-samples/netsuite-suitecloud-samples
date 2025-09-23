/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/query', 'N/ui/message'],
    /**
     * @param{query} query
     * @param{message} message
     */
    (query, message) => {

        /**
         * @typedef {{
         *  currentRecord: Record,
         *  sublistId?: string
         *  fieldId?: string
         *  }} ScriptContext
         */

        /**
         * @typedef {string|""|null|undefined} SomeValue
         */

        /**
         * @typedef {{
         *          vendor_name : string,
         *          id : number,
         *          custrecord_vendor : number,
         *          custrecord_item : number,
         *          custrecord_exclude_tax : "T"|"F"|null,
         *          custrecord_rate : number
         *          custrecord_fixed_rate : number,
         *          custrecord_description_mandatory : "T"|"F"|null,
         *      }} Configuration
         *
         *
         * lazy-loaded by fetchConfiguration
         * @type {Configuration[]|undefined}
         */
        let configurations;

        /**
         * @returns {Configuration[]}
         */
        const fetchConfigurations = () => {
            if (!configurations) {
                configurations = query.runSuiteQL({
                    query: `
                    SELECT
                        v.entityid AS vendor_name,
                        c.id,
                        c.custrecord_vendor,
                        c.custrecord_item,
                        c.custrecord_exclude_tax,
                        c.custrecord_rate,
                        c.custrecord_fixed_rate,
                        c.custrecord_description_mandatory,
                    FROM customrecord_configuration AS c, vendor AS v WHERE v.id = c.custrecord_vendor`,
                }).asMappedResults().sort((a, b) => a.custrecord_vendor > b.custrecord_vendor ? 1 : -1);
            }
            return configurations;
        };

        /**
         * @param {{string: *}} [filter={}]
         * @returns {Configuration[]}
         */
        const getMatchingConfigurations = (filter={}) => {
            return fetchConfigurations().reduce((r, v) => {
                if (!Object.keys(filter).some(c => filter[c] != String(v[c]))) {
                    r.push(v);
                }
                return r;
            }, []);
        }

        /**
         * @param {ScriptContext} scriptContext
         * @returns {SomeValue}
         */
        const getCurrentItem = (scriptContext) => {
            return scriptContext.currentRecord.getCurrentSublistValue({
                sublistId: scriptContext.sublistId,
                fieldId: "item",
            });
        };

        /**
         * @param {ScriptContext} scriptContext
         * @returns {SomeValue}
         */
        const getCurrentCustPageItemVendor = (scriptContext) => {
            return scriptContext.currentRecord.getCurrentSublistValue({
                sublistId: scriptContext.sublistId,
                fieldId: "custpage_item_vendor"
            });
        }

        /**
         * @param {ScriptContext} scriptContext
         * @returns {string}
         */
        const getCurrentCustPageItemVendorText = (scriptContext) => {
            return scriptContext.currentRecord.getCurrentSublistText({
                sublistId: scriptContext.sublistId,
                fieldId: "custpage_item_vendor"
            });
        }


        /**
         * @typedef {{text: string, value: string}} Option
         */


        /**
         * @type Option
         */
        const EMPTY_OPTION = {value: "", text: ""};

        /**
         * @param {SomeValue} currentItemId
         * @param {Option} [currentVendorOption=EMPTY_OPTION]
         */
        const updateSelectOptions = (currentItemId, currentVendorOption = EMPTY_OPTION)  => {

            const knownOptions = new Set();

            const currentVendorField = scriptContext.currentRecord.getCurrentSublistField({
                sublistId: scriptContext.sublistId,
                fieldId: "custpage_item_vendor",
            });
            currentVendorField.removeSelectOption(null);
            currentVendorField.insertSelectOption(EMPTY_OPTION);
            knownOptions.add(EMPTY_OPTION.value);

            /** @type {Configuration[]} */
            const itemFilteredConfigurations = getMatchingConfigurations(currentItemId ? {custrecord_item: currentItemId} : undefined);

            itemFilteredConfigurations.forEach((configuration) => {
                const newOption = {
                    value: String(configuration.custrecord_vendor),
                    text: String(configuration.vendor_name),
                }
                if (!knownOptions.has(newOption.value)) {
                    currentVendorField.insertSelectOption({...newOption, isSelected: currentVendorOption.value == newOption.value});
                    knownOptions.add(value);
                }
            });
            
            if (!knownOptions.has(currentVendorOption.value)) {
                currentVendorField.insertSelectOption({...currentVendorOption, isSelected: true});
                knownOptions.add(String(currentVendorOption.value));
            }
        }

        /**
         * @param {ScriptContext} scriptContext
         * @param {string} itemId
         */
        const updateVendorOptions = (scriptContext, itemId) => {

            const currentOption = scriptContext.currentRecord.getCurrentSublistValue({
                sublistId: scriptContext.sublistId,
                fieldId: "custpage_current_item_vendor",
            });

            updateSelectOptions(itemId, currentOption ? JSON.parse(currentOption) : EMPTY_OPTION);
        };

        /**
         * triggers from field change of custpage_item_vendor
         * @param {ScriptContext} scriptContext
         * @param {string} currentItemId
         * @param {string} currentVendordId
         */
        const applyConfiguration = (scriptContext, currentItemId, currentVendordId) => {

            /** @type Configuration */
            const configuration = getMatchingConfigurations({
                "custrecord_vendor": currentVendordId,
                "custrecord_item": currentItemId,
            })[0];

            if (configuration == null) { return; }

            const isRateFixed = configuration.custrecord_fixed_rate != null;
            scriptContext.currentRecord.setCurrentSublistValue({
                sublistId: scriptContext.sublistId,
                fieldId: "rate",
                value: isRateFixed ? configuration.custrecord_fixed_rate : configuration.custrecord_rate,
            });
            if (isRateFixed) {
                const quantityField = scriptContext.currentRecord.getCurrentSublistField({
                    sublistId: scriptContext.sublistId,
                    fieldId: "quantity",
                });
                quantityField.isDisabled = true;

                scriptContext.currentRecord.setCurrentSublistValue({
                    sublistId: scriptContext.sublistId,
                    fieldId: "quantity",
                    value: 1
                });
            }
        }

        /**
         * Triggered from validateLine hook
         * @param {ScriptContext} scriptContext
         * @param {SomeValue} currentItemId
         * @param {SomeValue} currentVendordId
         * @returns {boolean}
         */
        const validateConfiguration = (scriptContext, currentItemId, currentVendordId) => {

            const configuration = getMatchingConfigurations({
                "custrecord_vendor": currentVendordId,
                "custrecord_item": currentItemId,
            })[0];

            if (configuration == null || configuration.custrecord_description_mandatory !== "T") {
                return true;
            }

            const description = scriptContext.currentRecord.getCurrentSublistValue({
                sublistId: scriptContext.sublistId,
                fieldId: "description",
            });
            if (!!description && description.match(/\w+/) != null) {
                return true;
            }

            const lineNum = scriptContext.currentRecord.getCurrentSublistIndex({
                sublistId: scriptContext.sublistId,
            });
            message.create({
                message: `You need to fill out a description on ${scriptContext.sublistId} line: ${lineNum}`,
                type: message.Type.ERROR,
                duration: 5000,
            }).show();

            return false;
        };


        /**
         * Function to be executed when field is changed.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.sublistId - Sublist name
         * @param {string} scriptContext.fieldId - Field name
         * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
         * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
         *
         */
        const fieldChanged = (scriptContext) => {

            if (scriptContext.sublistId !== "item") {
                return;
            }
            if (scriptContext.fieldId === "item") {
                updateVendorOptions(scriptContext, getCurrentItem(scriptContext));
            }

            else if (scriptContext.fieldId === "custpage_item_vendor") {

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
            }
        };

        /**
         * Function to be executed after line is selected.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.sublistId - Sublist name
         *
         * @since 2015.2
         */
        const lineInit = (scriptContext) => {
            if (scriptContext.sublistId !== "item") {
                return;
            }
            updateVendorOptions(scriptContext, getCurrentItem(scriptContext));
        }

        /**
         * Validation function to be executed when sublist line is committed.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.sublistId - Sublist name
         *
         * @returns {boolean} Return true if sublist line is valid
         *
         * @since 2015.2
         */
        const validateLine = (scriptContext) => {
            if (scriptContext.sublistId !== "item") {
                return true;
            }
            return validateConfiguration(scriptContext, getCurrentItem(scriptContext), getCurrentCustPageItemVendor(scriptContext));
        }

        return {lineInit, validateLine, fieldChanged};
    });
