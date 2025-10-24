import script from '../src/FileCabinet/SuiteScripts/cs_call_restlet'

import url from 'N/url'
import https from 'N/https'
import CurrentRecord from 'N/currentRecord/instance'

jest.mock('N/url')
jest.mock('N/currentRecord/instance')
jest.mock('N/record')
jest.mock('N/https')

beforeEach(() => {
  jest.clearAllMocks()
})

CurrentRecord.Type = {
  VENDOR: 'VENDOR'
}

describe('client script test', () => {
  it('should test saveRecord function', async () => {
    // given
    const context = {
      currentRecord: CurrentRecord
    }
    url.resolveScript.mockReturnValue(
      '/app/site/hosting/restlet.nl?script=158&deploy=1')

    // when
    await script.saveRecord(context)
      
    // then
    expect(CurrentRecord.getValue).toHaveBeenCalled()
    expect(https.post.promise).toHaveBeenCalled()
  })
})
