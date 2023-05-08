// import script and modules used

import script from '../src/FileCabinet/SuiteScripts/cs_copyValueToItem'

import CurrentRecord from 'N/currentRecord/instance'
import search from 'N/search'
import Search from 'N/search/instance'
import Result from 'N/search/result'
import ResultSet from 'N/search/resultset'

jest.mock('N/currentRecord')
jest.mock('N/currentRecord/instance')
jest.mock('N/search')
jest.mock('N/search/instance')
jest.mock('N/search/result')
jest.mock('N/search/resultset')

beforeEach(() => {
  jest.clearAllMocks()
})

const context = {}

describe('Copy to a Value to Item test', () => {
  it('Should not copy a value to item', () => {
    // given
    context.currentRecord = CurrentRecord
    
    // incorrect fieldId will not execute script
    context.fieldId = 'items'
    context.sublistId = 'custcol_billing'

    // when
    script.fieldChanged(context)

    // then
    expect(CurrentRecord.getCurrentSublistText).not.toHaveBeenCalled()
    expect(CurrentRecord.setCurrentSublistText).not.toHaveBeenCalled()
  })
  it('Should copy a value to item', () => {
    // given
    context.currentRecord = CurrentRecord
    context.fieldId = 'custcol_billingitem'
    context.sublistId = 'item'
    const itemName = 'Bulk Shampoo'

    CurrentRecord.getCurrentSublistText.mockReturnValue(itemName)

    search.create.mockReturnValue(Search) // returns Search obj
    Search.run.mockReturnValue(ResultSet) // returns ResultSet obj
    ResultSet.getRange.mockReturnValue([Result]) // returns arr Result obj

    Search.columns = []
    Result.getValue.mockReturnValue([704875])
    CurrentRecord.setCurrentSublistText.mockReturnValue(itemName)
    
    global.alert = jest.fn()

    // when
    script.fieldChanged(context)

    // then
    expect(CurrentRecord.getCurrentSublistText).toHaveBeenCalledWith({ 
      sublistId: context.sublistId, 
      fieldId: context.fieldId 
    })
    expect(context.currentRecord).toBeDefined()
  }) 
})
