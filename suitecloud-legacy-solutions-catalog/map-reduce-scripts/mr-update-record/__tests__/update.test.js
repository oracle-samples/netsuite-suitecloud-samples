import script from '../src/FileCabinet/SuiteScripts/update'

import record from 'N/record'
import Record from 'N/record/instance'
import log from 'N/log'

jest.mock('N/record')
jest.mock('N/record/instance')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('test update record script', () => {
  it('should test getInputData', () => {
    // given
    const dataObj = {
      type: 'query',
      id: 'custworkbook_nscs_mr_update'
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
        values: ['11/15/2023', 'order', 'customer', 300.00, 33]
      }
    }
      
    JSON.parse = jest.fn().mockImplementation(() => {
      const queryData = context.value
      return queryData
    })

    const salesOrder = {
      type: record.Type.SALES_ORDER,
      id: 33, 
      isDynamic: true
    }

    record.load.promise.mockResolvedValue(Record)

    Record.getLineCount.mockImplementation(options => {
      if (options.sublistId === 'item') {
        return 2
      }
    })
    Record.save.promise.mockResolvedValue(33)

    // when
    await script.map(context)

    // then
    expect(Record.setValue).toHaveBeenCalled()
    expect(record.load.promise).toHaveBeenCalledWith(salesOrder)
    expect(Record.setCurrentSublistValue).toHaveBeenLastCalledWith({
      sublistId: 'item',
      fieldId: 'description',
      value: 'Updated description field.',
      ignoreFieldChange: true
    })
  })
  it('should test summarize', () => {
    // given
    const context = {
      usage: 6000,
      concurrency: 1,
      yields: 0,
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
    const summarize = script.summarize(context)

    // then
    expect(log.audit.mock.calls).toEqual([
      ['Total script usage: ' + 6000], ['Concurrency: ' + 1], ['Yields: ' + 0]
    ])
    expect(summarize).toBeUndefined()
    expect(log.error).toHaveBeenLastCalledWith({
      details: 'error details',
      title: 'map error for key: ' + 1
    })
  })
})
