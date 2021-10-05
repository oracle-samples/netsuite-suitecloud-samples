// eslint-disable-next-line max-len
import UpdateBackfillOrders from '../src/FileCabinet/SuiteApps/com.netsuite.updatebackfillorders/updateBackfillOrders'
import log from 'N/log'
import record from 'N/record'
import Record from 'N/record/instance'
import { beforeEach, describe, it, jest, expect } from '@jest/globals'

jest.mock('N/record')
jest.mock('N/record/instance')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Run getInputData', () => {
  const SQL_GET_BACKFILL_ORDERS = `SELECT 
        item.id, 
        transactionLine.quantitybackordered, 
        NextTransactionLink_SUB.id 
        FROM 
        transaction, item, transactionLine, 
        (SELECT 
        NextTransactionLink.previousdoc AS previousdoc, 
        transaction_0.id AS id 
        FROM 
        NextTransactionLink, 
        transaction transaction_0 
        WHERE 
        NextTransactionLink.nextdoc = transaction_0.id(+) 
        ) NextTransactionLink_SUB 
        WHERE 
        transactionLine.item = item.id(+) 
        AND transaction.id = transactionLine.transaction 
        AND transaction.id = NextTransactionLink_SUB.previousdoc(+) 
        AND UPPER(transaction.type) IN ('SALESORD') 
        AND transactionLine.quantitybackordered > 0 
        AND UPPER(transaction.status) IN ('E')`
  it('should assert getInputData will return suiteql query', () => {
    const actualReturn = UpdateBackfillOrders.getInputData()
    const expectedReturn = {
      'type': 'suiteql',
      'query': SQL_GET_BACKFILL_ORDERS
    }
    expect(actualReturn).toMatchObject(expectedReturn)
  })
})

describe('Run map', () => {
  const mapContext = {
    'type': 'mapreduce.MapContext',
    'isRestarted': false,
    'executionNo': 1,
    'key': '1',
    'value': `{"types": ["INTEGER", "INTEGER", "INTEGER"],
      "values": [1, 2, 3]}`
  }

  log.audit = jest.fn()
  log.error = jest.fn()
  Record.selectLine = jest.fn()
  record.load.mockReturnValue(Record)
  Record.getLineCount.mockReturnValue(1)
  Record.getSublistValue.mockReturnValue('1')
  Record.save.mockReturnValue(8888)
  it('should assert map (pre for-loop) is working', () => {
    UpdateBackfillOrders.map(mapContext)
    expect(record.load).toHaveBeenCalledWith({
      'type': 'itemfulfillment',
      'id': 3,
      'isDynamic': true
    })
    expect(Record.getLineCount).toHaveBeenCalledWith({ 'sublistId': 'item' })
  })

  it('should assert map (getCurrentItemId) is working', () => {
    UpdateBackfillOrders.map(mapContext)
    expect(Record.getSublistValue).toHaveBeenNthCalledWith(1, {
      'sublistId': 'item',
      'fieldId': 'item',
      'line': 0
    })
    expect(Record.getSublistValue).toHaveNthReturnedWith(1, '1')
  })

  it('should assert map (no item matched) is working', () => {
    Record.getSublistValue.mockReturnValueOnce('5')
    UpdateBackfillOrders.map(mapContext)
    expect(log.audit).toHaveBeenCalledTimes(0)
    expect(Record.getSublistValue).toHaveBeenCalledTimes(1)
  })

  it('should assert map (updateQuantityValue - get) is working', () => {
    Record.getSublistValue.mockReturnValueOnce('1').mockReturnValueOnce(1)
    UpdateBackfillOrders.map(mapContext)
    expect(log.audit).toHaveBeenNthCalledWith(1, {
      'title': 'Updating Item',
      'details': '1'
    })
    expect(Record.getSublistValue).toHaveBeenNthCalledWith(2, {
      'sublistId': 'item',
      'fieldId': 'quantity',
      'line': 0
    })
    expect(Record.getSublistValue).toHaveNthReturnedWith(2, 1)
  })

  it('should assert map (updateQuantityValue - set) is working', () => {
    Record.getSublistValue.mockReturnValueOnce('1').mockReturnValueOnce(1)
    UpdateBackfillOrders.map(mapContext)
    expect(Record.selectLine).toHaveBeenCalledWith({
      'sublistId': 'item',
      'line': 0
    })
    expect(Record.setCurrentSublistValue).toHaveBeenCalledWith({
      'sublistId': 'item',
      'fieldId': 'quantity',
      'value': 3,
      'ignoreFieldChange': false
    })
    expect(Record.commitLine).toHaveBeenCalledWith({
      'sublistId': 'item'
    })
    expect(log.audit).toHaveBeenNthCalledWith(2, {
      'title': 'New Quantity',
      'details': 3
    })
  })

  it('should assert map (doSaveWithSourcing) is working', () => {
    const returnMap = UpdateBackfillOrders.map(mapContext)
    expect(Record.save).toHaveBeenCalledWith({
      'enableSourcing': false,
      'ignoreMandatoryFields': true
    })
    expect(log.audit).toHaveBeenNthCalledWith(3, {
      'title': 'Updated Item Fulfillment',
      'details': 8888
    })
    expect(log.audit).toHaveBeenNthCalledWith(4, {
      'title': '============================='
    })
    expect(returnMap).toBeUndefined()
  })
})

describe('Run summarize', () => {
  it('should assert summary runs - no error', () => {
    const summaryContext = {
      'concurrency': 1,
      'dateCreated': new Date(),
      'isRestarted': false,
      'seconds': 1,
      'usage': 1,
      'yields': 1,
      'output': null,
      'inputSummary': {},
      'mapSummary': {},
      'reduceSummary': {}
    }
    const returnSummarize = UpdateBackfillOrders.summarize(summaryContext)
    expect(returnSummarize).toBeUndefined()
  })

  it('should assert summary runs - with error', () => {
    const summaryContext = {
      'concurrency': 1,
      'dateCreated': new Date(),
      'isRestarted': false,
      'seconds': 1,
      'usage': 1,
      'yields': 1,
      'output': null,
      'inputSummary': {
        'errors': {
          'iterator': () => {
            return {
              'each': (throwError) => {
                throwError('my key', 'test failed', '1')
              }
            }
          }
        }
      },
      'mapSummary': {},
      'reduceSummary': {}
    }

    const returnSummarize = UpdateBackfillOrders.summarize(summaryContext)
    expect(returnSummarize).toBeUndefined()
    expect(log.error).toHaveBeenCalledWith({
      'title': `input error for key: my key, 
                execution no.: 1`,
      'details': 'test failed'
    })
  })
})
