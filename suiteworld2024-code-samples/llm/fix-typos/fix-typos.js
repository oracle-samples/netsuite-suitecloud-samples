/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/llm'],
    (llm) => {
        const beforeSubmit = (scriptContext) => {
           const purchaseDescription = scriptContext.newRecord.getValue({fieldId:"purchasedescription"});
           const salesDescription = scriptContext.newRecord.getValue({fieldId:"salesdescription"});
           const p1 = llm.generateText.promise({prompt:"Please clean up typos in the following text: '"+purchaseDescription+"' and return just the corrected text. Return the text as is if there's no typo or you don't understand the text."});
           const p2 = llm.generateText.promise({prompt:"Please clean up typos in the following text: '"+salesDescription+"' and return just the corrected text. Return the text as is if there's no typo or you don't understand the text."});
           Promise.all([p1, p2]).then((values) => {
               scriptContext.newRecord.setValue({fieldId:"purchasedescription", value: values[0].text});
               scriptContext.newRecord.setValue({fieldId:"salesdescription", value: values[1].text});
           });
        }
        return {beforeSubmit}
    });
