// import script and modules used
import script from '../src/FileCabinet/SuiteScripts/cs_poExchangeRate'

import log from 'N/log'
import runtime from 'N/runtime'
import Script from 'N/runtime/script'
import CurrentRecord from 'N/currentRecord/instance'

jest.mock('N/currentRecord')
jest.mock('N/currentRecord/instance')
jest.mock('N/runtime')
jest.mock('N/runtime/script')
jest.mock('N/log')

beforeEach(() => {
  jest.clearAllMocks()
})

const context = {}

describe('Set purchase order exchange rate test', () => {
  it('Should test saveRecord function', () => {
    // given
    // Mock currency value in script parameter field 
    const stUserCurrency = 'usdollars'
    runtime.getCurrentScript.mockReturnValue(Script)
    Script.getParameter.mockImplementation(options => 
      options.name === 'cust_entity' && stUserCurrency) // returns usdollars

    // Mock purchase order field values 
    CurrentRecord.getValue.mockImplementation(options => {
      if (options.fieldId === 'currency') return 3
      if (options.fieldId === 'trandate') return 2
      if (options.fieldId === 'total') return 1
    })

    const mockLogMsg = 'message'
    log.error.mockReturnValue(mockLogMsg)
    context.currentRecord = CurrentRecord

    // when
    script.saveRecord(context)

    // then
    expect(runtime.getCurrentScript).toHaveBeenCalled()
    expect(Script.getParameter).toHaveBeenCalledWith({ 
      name: 'custscript_custom_currency_po_amount' 
    })
    expect(CurrentRecord.getValue).toHaveBeenCalled()
  }) 
  it('Should set stUserCur to undefined value', () => {
    // given
    try {
      // Mock undefined value in script parameter field
      runtime.getCurrentScript.mockReturnValue(Script) // returns Script obj
      Script.getParameter.mockImplementation(options => 
        options.name === 'custscript_custom_currency_po_amount' && undefined)
    
      context.currentRecord = CurrentRecord
      log.error = jest.fn()
    
      // when
      script.saveRecord(context)
    } catch (e) {
      // then
      // Execution will stop, error is caught.
      expect(() => 
        script.saveRecord(context)).toThrow(`Please enter a value for 
        Custom Currency at Home > User Preferences > Custom.`)
    }   
  }) 
})
