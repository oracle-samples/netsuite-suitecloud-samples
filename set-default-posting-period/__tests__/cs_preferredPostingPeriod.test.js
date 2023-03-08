import script from '../src/FileCabinet/SuiteScripts/cs_preferredPostingPeriod'

import CurrentRecord from 'N/currentRecord/instance'
import search from 'N/search'
import Search from 'N/search/instance'
import Result from 'N/search/result'
import ResultSet from 'N/search/resultset'
import log from 'N/log'

beforeEach(() => {
  jest.clearAllMocks()
})

jest.mock('N/currentRecord')
jest.mock('N/currentRecord/instance')
jest.mock('N/search')
jest.mock('N/search/instance')
jest.mock('N/search/result')
jest.mock('N/search/resultset')

const context = {}

describe('Set default posting period test', () => {
  it('Should test pageInit function', () => {
    // given
    context.mode = 'copy'
    context.currentRecord = CurrentRecord
    CurrentRecord.setValue.mockReturnValue(CurrentRecord)

    search.load.mockReturnValue(Search)
    Search.run.mockReturnValue(ResultSet)
    ResultSet.getRange.mockReturnValue([Result])

    // when 
    script.pageInit(context)

    // then  
    expect(search.load).toHaveBeenCalled()
    expect(Search.run).toHaveBeenCalled()
    expect(CurrentRecord.setValue).toHaveBeenCalledTimes(2)
    expect(ResultSet.getRange).toHaveBeenCalledWith({ 
      'start': 0, 
      'end': 1 
    })
  })
  it('Should test pageInit function for error', () => {
    // given
    context.mode = 'copy'
    context.currentRecord = CurrentRecord
    CurrentRecord.setValue.mockReturnValue(CurrentRecord)

    search.load.mockReturnValue(Search)
    Search.run.mockReturnValue(ResultSet)
    ResultSet.getRange.mockReturnValue(Result) 
    log.error = jest.fn()

    // when 
    script.pageInit(context)

    // then
    expect(log.error).toHaveBeenCalled()
  })
  it('Should test fieldChanged function', () => {
    // given
    context.fieldId = 'custbody_preferred_posting_period'
    context.currentRecord = CurrentRecord
    const prefPostPeriod = 5
    CurrentRecord.getValue.mockImplementation(options => 
      options.fieldId === 'custbody_preferred_posting_period' && 
      prefPostPeriod)

    CurrentRecord.setValue.mockReturnValue(CurrentRecord)

    // when
    script.fieldChanged(context)

    // then
    expect(CurrentRecord.getValue).toHaveBeenCalledWith({ 
      'fieldId': 'custbody_preferred_posting_period' 
    })

    expect(CurrentRecord.setValue).toHaveBeenCalledWith({ 
      'fieldId': 'postingperiod', 
      'value': 5 
    })
  })
  it('Should test context.fieldId param - line 37', () => {
    // given
    context.fieldId = 'accountingperiod'
    context.currentRecord = CurrentRecord

    // when
    script.fieldChanged(context)

    // then
    expect(CurrentRecord.setValue).not.toHaveBeenCalled()
    expect(CurrentRecord.getValue).not.toHaveBeenCalled()
  }) 
})
