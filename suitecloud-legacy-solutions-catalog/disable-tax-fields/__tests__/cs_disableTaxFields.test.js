// import script and modules used 
import script from '../src/FileCabinet/SuiteScripts/cs_disableTaxFields'

import runtime from 'N/runtime'
import Script from 'N/runtime/script'
import User from 'N/runtime/user'
import CurrentRecord from 'N/currentRecord/instance'
import Field from 'N/currentRecord/field'
import log from 'N/log'

jest.mock('N/runtime')
jest.mock('N/runtime/script')
jest.mock('N/runtime/user')
jest.mock('N/currentRecord')
jest.mock('N/currentRecord/instance')
jest.mock('N/currentRecord/field')

beforeEach(() => {
  jest.clearAllMocks()
})

const scriptContext = {}

describe('Disable tax fields client script test', () => {
  it('Should test pageInit function', () => {
    // given
    scriptContext.currentRecord = CurrentRecord
    CurrentRecord.type = 'salesorder'
    scriptContext.mode = 'create'

    runtime.getCurrentScript.mockReturnValue(Script) // returns Script obj
    // Mock allow list script parameter value.
    Script.getParameter.mockImplementation(options => {
      if (options.name === 'custscript_tax_allowlist') {
        return 'role'
      }
    })

    runtime.getCurrentUser.mockReturnValue(User) // returns User obj
    // Mock User.role property value
    User.role = 'admin' 

    CurrentRecord.getField.mockReturnValue(Field) // returns Field obj

    // when
    script.pageInit(scriptContext)

    // then
    expect(runtime.getCurrentScript).toBeCalled()
    expect(Script.getParameter).toReturnWith('role')
    expect(runtime.getCurrentUser).toBeCalled()
    expect(CurrentRecord.getField).toBeCalledTimes(3)
  })
  it('Should test empty role parameter', () => {
    // given
    scriptContext.currentRecord = CurrentRecord
    CurrentRecord.type = 'salesorder'
    scriptContext.mode = 'create'

    runtime.getCurrentScript.mockReturnValue(Script)
    
    // Mock empty script parameter value
    Script.getParameter.mockImplementation(options => {
      if (options.name === 'custscript_tax_allowlist') {
        return ''
      }
    })

    // when
    script.pageInit(scriptContext)

    // then 
    expect(runtime.getCurrentScript).toBeCalled()
    expect(Script.getParameter).toReturnWith('')
  })
  it('Should test script for errors', () => {
    // given
    try {
      scriptContext.currentRecord = CurrentRecord
      CurrentRecord.type = 'salesorder'
      scriptContext.mode = 'create'
  
      runtime.getCurrentScript.mockReturnValue(Script)
      Script.getParameter.mockImplementation(options => {
        if (options.name === 'custscript_exclusion_role_list') {
          return 3
        }
      })

      // User role is not defined, error will occur
      log.error = jest.fn()

      // when    
      script.pageInit(scriptContext)
    } catch (error) {
      // then 
      expect(log.error).toBeCalledWith({
        title: 'Process Error in pageInit',
        details: error
      })
    }
  })
})
