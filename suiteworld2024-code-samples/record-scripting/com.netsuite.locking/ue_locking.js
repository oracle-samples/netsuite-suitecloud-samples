/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record', 'N/runtime', 'N/ui/message', 'N/ui/serverWidget'],
    /**
     * @param{record} record
     * @param{runtime} runtime
     * @param{message} message
     * @param{serverWidget} serverWidget
     */
    (record, runtime, message, serverWidget) => {

        const ONE_DAY_IN_MS = 24*60*60*1000;
        const LOCK = {
            OPEN: "OPEN",
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
            if (scriptContext.type === scriptContext.UserEventType.CREATE) {
                return;
            }

            const user = runtime.getCurrentUser();
            const timeNow = Date.now();
            const tag = scriptContext.newRecord.type + "#" + user.email + "#" + timeNow;

            const lockText = scriptContext.newRecord.getText({ fieldId: "custbody_lock" });
            if (!lockText) {
                return;
            }

            const [recordType, openedBy, openedSince] = lockText.split("#");

            if ((lockText !== LOCK.OPEN && openedBy !== user.email) || ((timeNow - openedSince) < ONE_DAY_IN_MS)) {
                message.create({
                    title: "This record is being edited by somebody else",
                    message: `email: ${openedBy}, since: ${new Date(parseInt(openedSince))}`,
                    type: message.Type.WARNING
                }).show({ sendToClient: true });
            }
            else if (timeNow > openedSince) {
                record.submitFields({
                    type: "customrecord_lock",
                    id: scriptContext.newRecord.getValue({ fieldId: "custbody_lock" }),
                    values: {
                        name: tag,
                    }
                });
            }
        };

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const beforeSubmit = (scriptContext) => {
            if (scriptContext.type === scriptContext.UserEventType.DELETE) {
                return;
            }

            const lockId = scriptContext.newRecord.getValue({
                fieldId: "custbody_lock"
            });
            if (lockId > 0) {
                record.submitFields({
                    type: "customrecord_lock",
                    id: lockId,
                    values: {
                        name: LOCK.OPEN,
                    }
                });
            }
            else {
                const lockRecord = record.create({
                    type: "customrecord_lock",
                });
                lockRecord.setValue({
                    fieldId: "name",
                    value: LOCK.OPEN,
                });
                const id = lockRecord.save();

                scriptContext.newRecord.setValue({
                    fieldId: "custbody_lock",
                    value: id
                });
            }
        };

        /** make sure to export only those events that are actively used */
        return {beforeLoad, beforeSubmit};

    });
