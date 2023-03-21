import script from '../src/FileCabinet/SuiteScripts/cs_validateOrder'

import log from 'N/log'
import CurrentRecord from 'N/currentRecord/instance'
import runtime from 'N/runtime'
import Script from 'N/runtime/script'

jest.mock('N/currentRecord')
jest.mock('N/currentRecord/instance')
jest.mock('N/runtime')
jest.mock('N/runtime/script')

beforeEach(() => {
  jest.clearAllMocks()
})

const scriptContext = {}

describe('Validate order test on entry test', () => {
  it('Should test validateLine function parameters', () => {
    // given
    scriptContext.newRecord = CurrentRecord 

    // when
    script.validateLine(scriptContext)

    // then
    expect(CurrentRecord.getCurrentSublistValue).not.toHaveBeenCalled()
  }) 
  it('Should test validateLine function', () => {
    // given
    scriptContext.currentRecord = CurrentRecord
    scriptContext.sublistId = 'item'
    
    const casePerPallet = 10
    const quantity = 25

    CurrentRecord.getCurrentSublistValue.mockImplementation(options => {
      if (options.sublistId === 'item' && 
          options.fieldId === 'custcol_cases_per_pallet') return casePerPallet
      if (options.sublistId === 'item' && 
          options.fieldId === 'quantity') return quantity
    })

    global.alert = jest.fn()

    // when
    script.validateLine(scriptContext)

    // then
    expect(CurrentRecord.getCurrentSublistValue).toHaveBeenCalledTimes(2)
    expect(global.alert).toHaveBeenCalled()
  })
  it('Should test validateLine - line 24 - quantity%casePerPallet=0, ', () => {
    // given
    scriptContext.currentRecord = CurrentRecord
    scriptContext.sublistId = 'item'
    const casePerPallet = 10
    const quantity = 20

    CurrentRecord.getCurrentSublistValue.mockImplementation(options => {
      if (options.sublistId === 'item' && 
          options.fieldId === 'custcol_cases_per_pallet') return casePerPallet
      if (options.sublistId === 'item' && 
          options.fieldId === 'quantity') return quantity
    })

    global.alert = jest.fn()

    // when
    script.validateLine(scriptContext)
        
    // then
    expect(CurrentRecord.getCurrentSublistValue).toHaveBeenCalledTimes(2)
    expect(global.alert).not.toHaveBeenCalled()
  })
  it('Should test saveRecord - line 62 - weightParam < totalWeight', () => {
    // given
    const weightParam = 22
    runtime.getCurrentScript.mockReturnValue(Script)
    Script.getParameter.mockImplementation(options => 
      options.name === 'custscript_max_weight' && weightParam)
    scriptContext.currentRecord = CurrentRecord

    const lineCount = 2
    const itemWeight = 20
    const quantity = 5
    CurrentRecord.getLineCount.mockImplementation(options => 
      options.sublistId === 'item' && lineCount)

    CurrentRecord.getSublistValue.mockImplementation(options => {
      if (options.sublistId === 'item' && 
          options.fieldId === 'custcol_item_weight' && 
         (options.line === 0 || options.line === 1)) return itemWeight
      if (options.sublistId === 'item' && 
          options.fieldId === 'quantity' && 
         (options.line === 0 || options.line === 1)) return quantity
    })

    log.error = jest.fn()
    global.alert = jest.fn()

    // when
    script.saveRecord(scriptContext)

    // then
    expect(log.error).not.toHaveBeenCalled()
    expect(CurrentRecord.getSublistValue).toHaveBeenCalledTimes(4)
    expect(global.alert).toHaveBeenCalled()
  })
  it('Should test saveRecord - line 62 - weightParam > totalWeight', () => {
    // given
    const weightParam = 30
    runtime.getCurrentScript.mockReturnValue(Script)
    Script.getParameter.mockImplementation(options => 
      options.name === 'custscript_max_weight' && weightParam)
    scriptContext.currentRecord = CurrentRecord

    const lineCount = 2
    const itemWeight = 5
    const quantity = 2
    CurrentRecord.getLineCount.mockImplementation(options => 
      options.sublistId === 'item' && lineCount)

    CurrentRecord.getSublistValue.mockImplementation(options => {
      if (options.sublistId === 'item' && 
          options.fieldId === 'custcol_item_weight' && 
         (options.line === 0 || options.line === 1)) return itemWeight
      if (options.sublistId === 'item' && 
          options.fieldId === 'quantity' && 
         (options.line === 0 || options.line === 1)) return quantity
    })

    log.error = jest.fn()
    global.alert = jest.fn()

    // when
    script.saveRecord(scriptContext)

    // then
    expect(log.error).not.toHaveBeenCalled()
  })
  it('Should test saveRecord function - line 36 - empty weightParam', () => {
    // given
    runtime.getCurrentScript.mockReturnValue(Script)
    const weightParam = undefined
    Script.getParameter.mockImplementation(options => 
      options.name === 'custscript_max_weight' && weightParam)
    log.error = jest.fn()

    // when 
    script.saveRecord(scriptContext)

    // then
    expect(log.error).toHaveBeenCalledWith({ 
      title: 'saveRecord', 
      details: 'Max weight script parameter not defined' 
    })
  })
})
