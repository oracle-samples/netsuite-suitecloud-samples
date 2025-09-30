// import script and modules used 
import script from '../src/FileCabinet/SuiteScripts/cs_defaultSublistValues'

import CurrentRecord from 'N/currentRecord/instance'
import search from 'N/search'

jest.mock('N/currentRecord')
jest.mock('N/currentRecord/instance')
jest.mock('N/search')

beforeEach(() => {
  jest.clearAllMocks()
})

const scriptContext = {}

// enums used
search.Type = {
  VENDOR: 'VENDOR'
}

describe('Set default sublist values test', () => {
  it('Should return empty vendorId', () => {
    // given 
    // Mock 'entity' value empty. Script should not execute
    scriptContext.sublistId = 'item'
    scriptContext.currentRecord = CurrentRecord
    CurrentRecord.getValue.mockImplementation(options => {
      if (options.fieldId === 'entity') {
        return ''
      }
    })

    // when
    script.fieldChanged(scriptContext)

    // then
    expect(search.lookupFields).not.toBeCalled()
    expect(CurrentRecord.setCurrentSublistValue).not.toBeCalled()
  })
  it('Should lookup and set field values', () => {
    // given
    // Mock entity field 
    scriptContext.sublistId = 'expense'
    CurrentRecord.getValue.mockImplementation(options => {
      if (options.fieldId === 'entity') {
        return 321
      }
    })

    // Mock return object of fieldLookup
    const vendorLookup = {
      custentity_custom_department: 
        [{
          value: 4,
          text: 'company'
        }],
      custentity_custom_class:
        [{
          value: 5,
          text: 'new company'
        }]
    }
    search.lookupFields.mockReturnValue(vendorLookup)
  
    // when
    script.fieldChanged(scriptContext)

    // then 
    expect(CurrentRecord.getValue).toBeCalled()
    expect(CurrentRecord.setCurrentSublistValue).toBeCalled()
  })
})
