import script from '../src/FileCabinet/SuiteScripts/ue_update_custom_fields'

import record from 'N/record' 
import Record from 'N/record/instance'

import search from 'N/search'
import Search from 'N/search/instance'
import ResultSet from 'N/search/resultset'
import Result from 'N/search/result'
import Filter from 'N/search/filter'

jest.mock('N/record')
jest.mock('N/record/instance')
jest.mock('N/search')
jest.mock('N/search/instance')
jest.mock('N/search/result')
jest.mock('N/search/resultset')

beforeEach(() => {
  jest.clearAllMocks()
})

const scriptContext = {
  'UserEventType': {
    'CREATE': 'CREATE',
    'EDIT': 'EDIT',
    'VIEW': 'VIEW',
    'DELETE': 'DELETE'
  }
}

record.Type = {
  'SALES_ORDER': 'SALES_ORDER'
}

search.Summary = {
  'GROUP': 'GROUP',
  'SUM': 'SUM'
}

describe('UserEventScript Update Custom Field test', () => {
  it('Should test beforeSubmit function', () => {
    // given
    scriptContext.newRecord = Record
    scriptContext.type = scriptContext.UserEventType.DELETE

    const soID = 55
    Record.getValue.mockImplementation(options => 
      options.fieldId === 'salesorder' && soID)
        
    record.load.mockReturnValue(Record)
    const status = 'Submitted'
    Record.getValue.mockImplementation(options => 
      options.fieldId === 'status' && status)

    // when 
    script.beforeSubmit(scriptContext)

    // then
    expect(record.load).toHaveBeenCalled()
    expect(Record.getValue).toHaveBeenCalledTimes(5)
    expect(Record.setValue).toHaveBeenCalledTimes(2)
  })
  it('Should test afterSubmit function', () => {
    // given
    scriptContext.type = scriptContext.UserEventType.CREATE
    scriptContext.newRecord = Record
    const soID = '22'
    const soTranId = 'Order #' + 17
    Record.getValue.mockImplementation(options => {
      if (options.fieldId === 'salesorder') {
        return soID
      }
      if (options.fieldId === 'tranid') {
        return soTranId
      }
    })

    search.load.mockReturnValue(Search)
    Search.filters = []
    search.createFilter.mockReturnValue(Filter)
    Search.run.mockReturnValue(ResultSet)
    ResultSet.each.mockImplementation((soresults) => soresults(Result))

    const soTextID = 'Order #' + 17
    Result.getValue.mockImplementation(options => {
      if (options.name === 'formulatext' &&
          options.summary === search.Summary.GROUP) {
        return soTextID
      }
    })

    // when
    script.afterSubmit(scriptContext)

    // then
    expect(Record.getValue).toHaveBeenCalled()
    expect(record.load).toHaveBeenCalled()
    expect(search.load).toHaveBeenCalled()
    expect(search.createFilter).toHaveBeenCalled()
  })
})
