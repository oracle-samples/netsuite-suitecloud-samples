import script from '../src/FileCabinet/SuiteScripts/transform'

import record from 'N/record'
import Record from 'N/record/instance'
import log from 'N/log'

jest.mock('N/record')
jest.mock('N/record/instance')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Test for transform script', () => {
  it('should test getInputData', () => {
    // given
    const dataObj = {
      type: 'query',
      id: 'custworkbook_nscs_mr_transform'
    }

    // when
    const data = script.getInputData()

    // then
    expect(data).toMatchObject(dataObj)
  })
  it('should test map', async () => {
    // given
    const context = {
      value: {
        values: ['2/1/2024', 'order', 2194, 'customer', 'pending', 22647]
      }
    }

    JSON.parse = jest.fn().mockImplementation(() => {
      const queryData = context.value
      return queryData
    })
      
    const itemFulfillment = {
      fromType: record.Type.SALES_ORDER,
      fromId: 22647,
      toType: record.Type.ITEM_FULFILLMENT,
      isDynamic: false
    }

    const shipstatus = {
      fieldId: 'shipstatus',
      value: 'C'
    }

    record.transform.promise.mockResolvedValue(Record)
    Record.getLineCount.mockImplementation(options => {
      if (options.sublistId === 'item') {
        return 2
      }
    })

    Record.save.promise.mockResolvedValue(22647)

    // when
    await script.map(context)
      
    // then
    expect(record.transform.promise).toHaveBeenCalledWith(itemFulfillment)
    expect(Record.setValue).toHaveBeenCalledWith(shipstatus)
  })
  it('should test summarize', () => {
    // given
    const context = {
      usage: 4123,
      concurrency: 0,
      yields: 1,
      inputSummary: {
        error: {}
      },
      mapSummary: {
        errors: {
          iterator: () => {
            return {
              each: (errorThrown) => {
                errorThrown(1, 'error details')
              } 
            }
          }
        }
      }
    }
    
    log.audit = jest.fn()
    log.error = jest.fn()
    
    // when
    script.summarize(context)
    
    // then
    expect(log.audit.mock.calls).toEqual([
      ['Total script usage: ' + 4123], ['Concurrency: ' + 0], ['Yields: ' + 1]
    ])
    expect(log.error).toHaveBeenLastCalledWith({
      details: 'error details',
      title: 'map error for key: ' + 1
    })
  })
})
