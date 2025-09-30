// import script and modules used
import script from '../src/FileCabinet/SuiteScripts/ue_set_custom_fields'

import record from 'N/record'
import Record from 'N/record/instance'
import search from 'N/search'
import Search from 'N/search/instance'
import Filter from 'N/search/filter'
import ResultSet from 'N/search/resultSet'
import Result from 'N/search/result'

jest.mock('N/record')
jest.mock('N/record/instance')
jest.mock('N/search')
jest.mock('N/search/instance')
jest.mock('N/search/resultSet')
jest.mock('N/search/result')

beforeEach(() => {
  jest.clearAllMocks()
})

const scriptContext = {
  UserEventType: {
    CREATE: 'CREATE',
    EDIT: 'EDIT',
    VIEW: 'VIEW'
  }
}

// enums used 
search.Summary = {
  GROUP: 'GROUP',
  SUM: 'SUM'
}

describe('UserEventScript Set Custom Fields test', () => {
  it('Should test afterSubmit function', () => {
    // given
    // Mock new record ID
    scriptContext.newRecord = Record
    const soID = 12345
    Record.id = soID

    // Mock loaded record field values
    record.load.mockReturnValue(Record)
    const soTranId = '25'
    const soTotal = '550'
    const soEntity = '3'

    Record.getValue.mockImplementation(options => {
      if (options.fieldId === 'total') return soTotal
      if (options.fieldId === 'entity') return soEntity
      if (options.fieldId === 'tranid') return soTranId
    })

    search.load.mockReturnValue(Search) // represents Search object
    search.createFilter.mockReturnValue(Filter) // represents Filter object
    Search.filters = []
    Search.run.mockReturnValue(ResultSet) // represents ResultSet object
        
    ResultSet.each.mockImplementation((soresults) => soresults(Result))  
    // Mock Result values 
    const soTextID = 'Order #' + soTranId 
    const totalPaid = '200'
    Result.getValue.mockImplementation(options => {
      if (options.name === 'formulatext' && 
          options.summary === search.Summary.GROUP) {
        return soTextID
      }
      if (options.name === 'formulacurrency' && 
          options.summary === search.Summary.SUM) {
        return totalPaid
      }
    })

    // when
    script.afterSubmit(scriptContext)

    // then
    expect(record.load).toHaveBeenCalled()
    expect(Record.getValue).toHaveBeenCalledTimes(3)
    expect(search.createFilter).toHaveBeenCalledTimes(2)
    expect(Search.run).toHaveBeenCalled()
    expect(ResultSet.each).toHaveBeenCalled()
    expect(Result.getValue).toHaveBeenCalledTimes(2)
  })
})
