import script from '../src/FileCabinet/SuiteScripts/rs_file_api'

import file from 'N/file'
import File from 'N/file/instance'

import record from 'N/record'

import log from 'N/log'

jest.mock('N/file')
jest.mock('N/file/instance')
jest.mock('N/record')
jest.mock('N/log')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('restlet script test', () => {
  it('should test for errors in post', () => {
    // given
    const requestBody = {
      files: [File]
    }
      
    File.name = 'filename1'
      
    // when
    script.post(requestBody)
      
    // then
    expect(log.error).toHaveBeenCalled()
  })
  it('should test post function', () => {
    // given
    const requestBody = {
      files: [File],
      recordType: 'VENDOR',
      internalId: 889
    }
      
    File.name = 'filename1'
    File.folder = 'foldername1'
    File.fileType = 'PLAINTEXT'
    File.contents = 'hello world'
      
    file.create.mockReturnValue(File)  
    File.save.mockReturnValue(123)
      
    // when
    script.post(requestBody)
      
    // then
    expect(record.attach).toHaveBeenCalledWith({
      record: {
        type: 'file',
        id: 123
      },
      to: {
        type: 'VENDOR',
        id: 889
      }
    })
  }) 
})
