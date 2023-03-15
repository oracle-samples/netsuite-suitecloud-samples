import script from '../src/FileCabinet/SuiteScripts/ue_handle_refund'

import search from 'N/search'
import Search from 'N/search/instance'
import ResultSet from 'N/search/resultset'
import Result from 'N/search/result'
import record from 'N/record' 
import Record from 'N/record/instance'

jest.mock('N/record')
jest.mock('N/record/instance')
jest.mock('N/search')
jest.mock('N/search/instance')
jest.mock('N/search/result')
jest.mock('N/search/resultset')

beforeEach(() => {
  jest.clearAllMocks()
})

const scriptContext = {}

record.Type = {
  CUSTOMER_REFUND: 'CUSTOMER_REFUND'
}

search.Type = {
  DEPOSIT_APPLICATION: 'DEPOSIT_APPLICATION'
}

search.Summary = {
  SUM: 'SUM'
}

describe('UserEventScript - Handle Refund test', () => {
  it('Should test afterSubmit function', () => {
    // given
    scriptContext.newRecord = Record
    Record.id = '44'

    const soEntity = '2142'
    record.load.mockReturnValue(Record)
    Record.getValue.mockImplementation(options => {
      if (options.fieldId === 'customer') {
        return soEntity
      }
    })

    const lines = 3
    Record.getLineCount.mockImplementation(options => {
      if (options.sublistId === 'apply') {
        return lines
      }
    })

    const order = 
    {
      'createdfrom.salesorder': 
        [{
          values: 325,
          text: 5
        }]
    }

    search.lookupFields.mockReturnValue(order)
    search.load.mockReturnValue(Search)
    Search.filters = []
    Search.run.mockReturnValue(ResultSet)
    ResultSet.each.mockImplementation((soresults) => soresults(Result))
    
    Result.getValue.mockReturnValue(5)

    // when
    script.afterSubmit(scriptContext)

    // then
    expect(record.load).toBeCalled()
    expect(Record.setValue).toBeCalled()
    expect(Record.save).toBeCalled()
    expect(search.load).toBeCalled()
  })
})
