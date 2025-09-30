import script from '../src/FileCabinet/SuiteScripts/macro'

import record from 'N/record'
import Record from 'N/record/instance'
import log from 'N/log'

jest.mock('N/record')
jest.mock('N/record/instance')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('macro script test', () => {
  it('should test getInputData', () => {
    // given
    const dataObj = {
      type: 'query',
      id: 'custworkbook_nscs_mr_loc_assign'
    }

    // when
    const data = script.getInputData()

    // then
    expect(data).toMatchObject(dataObj)
  })
  it('should test map', async () => {
    // given
    const context = {
      key: 1,
      value: {
        values: [3122]
      }
    }

    log.debug = jest.fn()

    JSON.parse = jest.fn().mockImplementation(() => {
      const queryData = context.value
      return queryData
    }) 
      
    const salesOrder = {
      type: record.Type.SALES_ORDER,
      id: 3122,
      isDynamic: true
    }
      
    record.load.promise.mockResolvedValue(Record)  
    Record.executeMacro = jest.fn().mockImplementation(options => {
      if (options.id === 'autoAssignLocations') {
        return Record
      }
    })
      
    const rec = await Record.save.promise.mockResolvedValue(3122)
    await rec()

    // when
    await script.map(context)

    // then
    expect(record.load.promise).toHaveBeenCalledWith(salesOrder)
    expect(rec()).resolves.toBe(3122)
    expect(log.debug).toHaveBeenCalledWith(
      'Key: ' + 1, 'Value: ' + {
        values: [3122]
      }
    )
  })
  it('should test summarize', () => {
    // given
    const context = {
      usage: 2121,
      concurrency: 2,
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
    const summarize = script.summarize(context)

    // then
    expect(log.audit.mock.calls).toEqual([
      ['Total script usage: ' + 2121], ['Concurrency: ' + 2], ['Yields: ' + 1]
    ])
    expect(summarize).toBeUndefined()
    expect(log.error).toHaveBeenLastCalledWith({
      details: 'error details',
      title: 'map error for key: ' + 1
    })
  })
})
