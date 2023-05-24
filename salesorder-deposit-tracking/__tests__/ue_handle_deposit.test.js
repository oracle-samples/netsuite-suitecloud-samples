// import script and modules used
import script from '../src/FileCabinet/SuiteScripts/ue_handle_deposit'

import record from 'N/record'
import Record from 'N/record/instance'

import search from 'N/search'
import Search from 'N/search/instance'
import ResultSet from 'N/search/resultset'
import Result from 'N/search/result'

jest.mock('N/record')
jest.mock('N/record/instance')
jest.mock('N/search')
jest.mock('N/search/instance')
jest.mock('N/search/resultset')
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

describe('UserEventScript Handle Deposit test', () => {
  it('Should test aftersubmit function', () => {
    // given
    // Set arbitrary values to old record and retrieve returned values.
    scriptContext.oldRecord = Record
    const depAppId = 1234
    Record.id = depAppId

    const soEntity = 5678
    const createdForm = 9012
    Record.getValue.mockImplementation(options => {
      if (options.fieldId === 'customer') return soEntity
      if (options.fieldId === 'deposit') return createdForm
    })

    record.load.mockReturnValue(Record)

    // Retrieve arbitrary values from loaded sales order.
    const orderId = 3456
    const soFullTextTranID = 7890
    Record.getValue.mockImplementation(options => 
      options.fieldId === 'salesoder' && orderId)
    Record.getText.mockImplementation(options => 
      options.fieldId === 'salesorder' && soFullTextTranID)

    // Set return Values for each method.
    search.load.mockReturnValue(Search) // represents Search object
    Search.filters = []
    Search.run.mockReturnValue(ResultSet) // represents ResultSet object
    ResultSet.each.mockImplementation((soresults) => soresults(Result))

    const soTextID = soFullTextTranID
    Result.getValue.mockReturnValue(soTextID)

    // when
    script.afterSubmit(scriptContext)

    // then
    expect(record.load).toHaveBeenCalled()
    expect(search.load).toHaveBeenCalled()
    expect(Search.run).toHaveBeenCalled()
    expect(ResultSet.each).toHaveBeenCalled()
    expect(Result.getValue).toHaveBeenCalledTimes(2)
  })
})
