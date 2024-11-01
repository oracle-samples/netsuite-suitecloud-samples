/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(["N/query", "N/ui/message"],
    /**
     * @param{query} query
     * @param{message} message
     */
    (query, message) => {

        /**
         * returns a salesrep id for a given customer id
         * @param {number} customer
         * @returns {number|null}
         */
        const doSearchSalesRepForCustomer = (customer) => {
            return query.runSuiteQL({
                query: `
                    SELECT
                        customer.salesrep,
                    FROM customer WHERE customer.id = ${customer}`,
            }).asMappedResults()[0]["salesrep"];
        }


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

            if (scriptContext.type !== scriptContext.UserEventType.CREATE) {
                return;
            }

            if (scriptContext.request && scriptContext.request.parameters.fromWizard === 'T') {
                const customer = scriptContext.newRecord.getValue({fieldId: "entity"});

                const salesRep = doSearchSalesRepForCustomer(customer);
                scriptContext.newRecord.setValue({fieldId: "salesrep", value: salesRep});

                const leadSource = scriptContext.request.parameters.leadsource;
                scriptContext.newRecord.setValue({fieldId: "leadsource", value: leadSource});
            }
        }

        /** make sure to export only those events that are actively used */
        return {beforeLoad};
    });
