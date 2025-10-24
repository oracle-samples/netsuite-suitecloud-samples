/**
 * @NApiVersion 2.1
 * @NScriptType Restlet
 * 
 * This script creates a new file to attach to vendor records after a 
 * purchase order record is saved. Data is sent from a post request in the
 * client script. 
 */
define(['N/file', 'N/record', 'N/log'], (file, record, log) => {    
  /**
   * @param {Object} requestBody Data used to create the new file to attach to 
   * vendor record.
   */
  
  const post = (requestBody) => {
    const returnObj = {}     
        
    try {
      validatePostRequest(requestBody)
      // purchId - Internal id of the purchase order record 
      const recId = requestBody.internalId
              
      log.debug('internal ID: ' + recId)
      const createdFiles = []
        
      requestBody.files.forEach((currentFile) => {
        /** @type {file.file} newFile - File to be added to the file cabinet */
        const newFile = file.create({
          name: currentFile.name,
          fileType: currentFile.fileType,
          contents: currentFile.contents,
          folder: currentFile.folder
        })
        
        // fileId - Internal id of the file 
        const fileId = newFile.save()
        createdFiles.push(fileId)
        
        if (currentFile) {
          record.attach({
            record: {
              type: 'file',
              id: fileId
            },
            to: {
              type: requestBody.recordType,
              id: recId
            }
          })
        }
      })
        
      returnObj.msg =
        `File(s) ${createdFiles.toString().split(',')} successfully created!`
    } catch (err) {
      log.error({
        title: 'post(): ' + err.name,
        details: 'msg: ' + err.message + ' stack: ' + err.stack
      })
      returnObj.msg = err.message
    }
        
    return returnObj
  }
        
  /**
   * Function to validate the body of the request
   * @param {Object} requestBody Data used to create new file.
   */
  const validatePostRequest = (requestBody) => {
    if (requestBody.files) {
      log.debug(requestBody.files)
    } 
            
    requestBody.files.forEach((currentFile) => {
      if (!currentFile.name) {
        throw new Error('The file name must be specified.')
      }
            
      if (!currentFile.folder) {
        throw new Error('The file destination must be specified.')
      }
            
      if (!currentFile.fileType) {
        throw new Error('The file type must be specified.')
      }
            
      if (!currentFile.contents) {
        throw new Error('The file content is empty.')
      }
            
      if (!requestBody.recordType) {
        throw new Error('The type record type is empty.')
      }
    })
  }
        
  return { post }
})
