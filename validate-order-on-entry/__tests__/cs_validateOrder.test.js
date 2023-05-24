// import script and modules used
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
    // incorrect parameter set, script will not execute
    scriptContext.newRecord = CurrentRecord 

    // when
    script.validateLine(scriptContext)

    // then
    expect(CurrentRecord.getCurrentSublistValue).not.toHaveBeenCalled()
  }) 
  it('Should test complete validateLine function', () => {
    // given
    scriptContext.currentRecord = CurrentRecord
    scriptContext.sublistId = 'item'
    
    // Mock custom case/pallet and quantity sublist field
    const casePerPallet = 10
    const quantity = 25

    CurrentRecord.getCurrentSublistValue.mockImplementation(options => {
      if (options.sublistId === 'item' && 
          options.fieldId === 'custcol_cases_per_pallet') { 
        return casePerPallet 
      } // returns 10
      if (options.sublistId === 'item' && 
          options.fieldId === 'quantity') return quantity // returns 25
    })

    // Mocks alert() call
    global.alert = jest.fn()

    // when
    script.validateLine(scriptContext)

    // then
    expect(CurrentRecord.getCurrentSublistValue).toHaveBeenCalledTimes(2)
    expect(global.alert).toHaveBeenCalled()
  })
  it('Should test quantity % casePerPallet = 0', () => {
    // given
    scriptContext.currentRecord = CurrentRecord
    scriptContext.sublistId = 'item'
    
    // Mock casePerPallet and quantity sublist field values
    // Setting values to be divisible 
    const casePerPallet = 10
    const quantity = 20
    
    CurrentRecord.getCurrentSublistValue.mockImplementation(options => {
      if (options.sublistId === 'item' && 
          options.fieldId === 'custcol_cases_per_pallet') {
        return casePerPallet // returns 10
      }
      if (options.sublistId === 'item' && 
          options.fieldId === 'quantity') return quantity // returns 20
    })

    global.alert = jest.fn()

    // when
    script.validateLine(scriptContext)
        
    // then
    expect(CurrentRecord.getCurrentSublistValue).toHaveBeenCalledTimes(2)
    expect(global.alert).not.toHaveBeenCalled()
  })
  it('Should test saveRecord - weightParam < totalWeight', () => {
    // given
    const weightParam = 22
    runtime.getCurrentScript.mockReturnValue(Script)
    Script.getParameter.mockImplementation(options => 
      options.name === 'custscript_max_weight' && weightParam) // returns 22
    scriptContext.currentRecord = CurrentRecord

    // Mock weightParam to be less than totalWeight
    // TotalWeight = (itemWeight * quantity) + lineWeight
    // TotalWeight = 102 and WeightParam = 22
    const lineCount = 2
    const itemWeight = 20
    const quantity = 5
    CurrentRecord.getLineCount.mockImplementation(options => 
      options.sublistId === 'item' && lineCount) // returns 2

    CurrentRecord.getSublistValue.mockImplementation(options => {
      // returns 20
      if (options.sublistId === 'item' && 
          options.fieldId === 'custcol_item_weight' && 
         (options.line === 0 || options.line === 1)) return itemWeight
      // returns 5
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
  it('Should test saveRecord - weightParam > totalWeight', () => {
    // given
    // Mock weight script parameter
    const weightParam = 30
    runtime.getCurrentScript.mockReturnValue(Script)
    Script.getParameter.mockImplementation(options => 
      options.name === 'custscript_max_weight' && weightParam)
    scriptContext.currentRecord = CurrentRecord
    
    // Mock weightParam to be larger than totalWeight
    // TotalWeight = (itemWeight * quantity) + lineWeight
    // TotalWeight = 12 and WeightParam = 30
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
    // Mock empty weightparam 
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
