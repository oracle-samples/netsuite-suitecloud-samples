// import script and modules used
import script from '../src/FileCabinet/SuiteScripts/ue_calculateCommission'
import record from 'N/record'
import Record from 'N/record/instance'

jest.mock('N/record')
jest.mock('N/record/instance')

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
record.Type = {
  SALES_ORDER: 'SALES_ORDER'
}

describe('ue_calcuateCommission AfterSubmit Test', () => {
  it('Should return if not Create or Edit mode', () => {
    // given
    scriptContext.type = scriptContext.UserEventType.VIEW
    scriptContext.newRecord = Record

    // when
    script.afterSubmit(scriptContext)

    // then
    expect(record.load).not.toHaveBeenCalled()
    expect(Record.setValue).not.toHaveBeenCalled()
    expect(Record.save).not.toHaveBeenCalled()
  })

  it('Should set condition amount', () => {
    // given
    scriptContext.type = scriptContext.UserEventType.CREATE
    const salesOrderId = '1234'
    Record.id = salesOrderId
    record.load.mockReturnValue(Record)
    Record.save.mockReturnValue(salesOrderId)
    scriptContext.newRecord = Record

    Record.getValue.mockImplementation(options => 
      options.fieldId === 'subtotal' && 100) // returns 100 as subtotal
    Record.getLineCount.mockImplementation(options => 
      options.sublistId === 'item' && 2) // return 2 - numItems variable

    // compare line items and return hypothetical values
    Record.getSublistValue.mockImplementation(options => {
      if (options.sublistId === 'item' && 
          options.fieldId === 'custcol_salesorder_msrp' &&
         (options.line === 0 || options.line === 1)) return 0.5

      if (options.sublistId === 'item' && 
          options.fieldId === 'quantity' && 
         (options.line === 0 || options.line === 1)) return 2

      if (options.sublistId === 'item' && 
          options.fieldId === 'itemtype' && 
         (options.line === 0 || options.line === 1)) return 'INVENTORY_ITEM'
    })

    const expectedCommissionAmount = 49.85

    // when
    script.afterSubmit(scriptContext)

    // then
    expect(record.load).toHaveBeenCalledWith({ 
      type: record.Type.SALES_ORDER, 
      id: salesOrderId 
    })
    expect(Record.setValue).toHaveBeenCalledWith({ 
      fieldId: 'custbody_commission_amount', 
      value: expectedCommissionAmount 
    })
    expect(Record.save).toHaveBeenCalled()
    expect(Record.getSublistValue).toHaveBeenCalled()
  })
  it('Should Set flSubtotal === flCommissionAmount', () => {
    // given
    scriptContext.type = scriptContext.UserEventType.CREATE
    const salesOrderId = '1234'
    Record.id = salesOrderId
    record.load.mockReturnValue(Record)
    Record.save.mockReturnValue(salesOrderId)
    scriptContext.newRecord = Record

    const flSubtotal = 2
    Record.getValue.mockImplementation(options => 
      options.fieldId === 'subtotal' && flSubtotal) // returns 2 as subtotal

    // compare line items and return hypothetical values
    const flMSRP = 1
    Record.getSublistValue.mockImplementation(options => {
      if (options.sublistId === 'item' && 
          options.fieldId === 'custcol_salesorder_msrp' && 
         (options.line === 0 || options.line === 1)) return flMSRP

      if (options.sublistId === 'item' && 
          options.fieldId === 'quantity' && 
         (options.line === 0 || options.line === 1)) return 2
      
      if (options.sublistId === 'item' && 
          options.fieldId === 'itemtype' && 
         (options.line === 0 || options.line === 1)) return 'INVENTORY_ITEM'
    })

    // when
    script.afterSubmit(scriptContext)

    // then
    expect(record.load).toHaveBeenCalledWith({ 
      type: record.Type.SALES_ORDER, 
      id: salesOrderId 
    })
    expect(Record.save).toHaveBeenCalled()
    expect(Record.getSublistValue).toHaveBeenCalled()
  })
})
