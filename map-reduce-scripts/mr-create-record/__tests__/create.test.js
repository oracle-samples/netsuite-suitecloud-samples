import script from '../src/FileCabinet/SuiteScripts/create'

import record from 'N/record'
import Record from 'N/record/instance'
import log from 'N/log'

jest.mock('N/record')
jest.mock('N/record/instance')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('test create record script', () => {
  it('should test getInputData', () => {
    // given
    const dataObj = {
      type: 'query',
      id: 'custworkbook_nscs_mr_create'
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
        values: [1660, 1, 250, 5, 450.00]
      }
    }

    JSON.parse = jest.fn().mockImplementation(() => {
      const queryData = context.value
      return queryData
    })

    record.create.promise
      .mockResolvedValue(Record)
    
    log.debug = jest.fn()

    const sublistValue = {
      sublistId: 'item',
      fieldId: 'rate',
      value: parseFloat(450.00),
      ignoreFieldChange: false
    }

    Record.save.promise.mockResolvedValue(109)

    // when
    await script.map(context)

    // then
    expect(record.create.promise).toHaveBeenCalled()
    expect(Record.setValue.mock.calls).toEqual([
      [{ fieldId: 'entity', value: 1660 }], [{ fieldId: 'memo', value: 'Memo field set.' }], [{ fieldId: 'subsidiary', value: 1 }]
    ])
    expect(Record.setCurrentSublistValue).toHaveBeenLastCalledWith(sublistValue)
    expect(Record.save.promise).toHaveBeenCalled()
  })
  it('should test summarize', () => {
    // given
    const context = {
      usage: 5231,
      concurrency: 1,
      yields: 2,
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
      ['Total script usage: ' + 5231], ['Concurrency: ' + 1], ['Yields: ' + 2]
    ])
    expect(summarize).toBeUndefined()
    expect(log.error).toHaveBeenLastCalledWith({
      details: 'error details',
      title: 'map error for key: ' + 1
    })
  })
})
