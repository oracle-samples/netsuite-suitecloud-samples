// import script and modules used
import script from '../src/FileCabinet/SuiteScripts/ue_marketingOrder'

import record from 'N/record'
import Record from 'N/record/instance'

jest.mock('N/record')
jest.mock('N/record/instance')

beforeEach(() => {
  jest.clearAllMocks()
})

const context = {
  UserEventType: {
    CREATE: 'CREATE',
    EDIT: 'EDIT',
    VIEW: 'VIEW'
  }
}

describe('Set item amount to zero test', () => {
  it('Should test afterSubmit function parameters', () => {
    // given
    // Mock incorrect newRecord param. Script should not execute
    context.currentRecord = Record

    // when
    script.afterSubmit(context)

    // then  
    expect(record.load).not.toHaveBeenCalled()
    expect(Record.getValue).not.toHaveBeenCalled()
    expect(Record.getLineCount).not.toHaveBeenCalled()        
  })

  it('Should set item amount to 0 dollars', () => {
    // given
    // Mock recordId and record type
    const mockRecordId = '1234'
    const mockRecordType = 'sales_order'
    Record.id = mockRecordId
    Record.type = mockRecordType   

    record.load.mockReturnValue(Record)  
    Record.save.mockReturnValue(mockRecordId)
        
    Record.selectLine = jest.fn()
    Record.setCurrentSublistValue.mockReturnValue(Record) // represents Record obj
    Record.commitLine.mockReturnValue(Record)

    context.newRecord = Record

    Record.getValue.mockImplementation(options => 
      options.fieldId === 'custbody_marketing_order' && 5) // returns 5
    Record.getLineCount.mockImplementation(options => 
      options.sublistId === 'item' && 2) // returns 2
    const setOrdertoZero = 0

    // when 
    script.afterSubmit(context)

    // then
    expect(record.load).toHaveBeenCalledWith({ 
      id: mockRecordId, 
      type: mockRecordType, 
      isDynamic: true 
    })
    expect(Record.selectLine).toHaveBeenCalledWith({ 
      sublistId: 'item', 
      line: 0 
    })
    expect(Record.setCurrentSublistValue).toHaveBeenCalledWith({ 
      sublistId: 'item', 
      fieldId: 'amount', 
      value: setOrdertoZero 
    })
    expect(Record.save).toHaveBeenCalled()
  })
  it('Should test MktgSalesOrder value', () => {
    // given
    const mockRecordId = '6789'
    const mockRecordType = 'sales_order'
    Record.id = mockRecordId
    Record.type = mockRecordType   
        
    record.load.mockReturnValue(Record) // represents Record obj
    Record.save.mockReturnValue(mockRecordId)

    context.newRecord = Record
    // Mock empty marketing order field
    const isMktgSalesOrder = undefined
    Record.getValue.mockImplementation(options => 
      options.fieldId === 'custbody_marketing_order' && isMktgSalesOrder) 

    // when
    script.afterSubmit(context)

    // then
    expect(Record.getLineCount).not.toHaveBeenCalled()
    expect(Record.setCurrentSublistValue).not.toHaveBeenCalled()
    expect(Record.commitLine).not.toHaveBeenCalled()
  })
})
