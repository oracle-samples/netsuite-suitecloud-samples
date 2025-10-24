/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 */
define(['N/https', 'N/url', 'N/file'], (https, url, file) => {
  return {
    saveRecord: async function (context) {
      const myurl = url.resolveScript({
        scriptId: 'customscript_nscs_rl_rest_file_api',
        deploymentId: 'customdeploy_nscs_rl_rest_file_api'
      })
  
      const rec = context.currentRecord 
      const vendor = rec.getValue({
        fieldId: 'entity'
      })
      
      await https.post.promise({
        body: {
          internalId: vendor, // vendor internal id
          recordType: rec.Type.VENDOR,
          files: [{
            name: 'uploadNewFileTEST4.txt',
            fileType: file.Type.PLAINTEXT,
            folder: 792, // folder
            contents: 'Thanks for your purchase order!'
          }]
        },
        url: myurl
      })
      return true
    }
  }
}) 
