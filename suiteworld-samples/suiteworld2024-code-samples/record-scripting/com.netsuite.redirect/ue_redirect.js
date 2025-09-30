/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/redirect', 'N/runtime'],
    /**
     * @param{redirect} redirect
     * @param{runtime} runtime
     */
    (redirect, runtime) => {

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

                if (runtime.getCurrentUser().id !== scriptContext.newRecord.id) {

                    redirect.toSuitelet({
                        scriptId: 806,
                        deploymentId: 1,
                        paramters: {
                            "recordUserName": scriptContext.newRecord.getValue("entityid"),
                            "UserEventType": scriptContext.type,
                        }
                    });
                }
            }
        }

        /** make sure to export only those events that are actively used */
        return {beforeLoad};
    });
