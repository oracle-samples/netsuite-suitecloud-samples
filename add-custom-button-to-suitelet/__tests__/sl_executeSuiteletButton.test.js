import script from '../src/FileCabinet/SuiteScripts/sl_executeSuiteletButton'

import runtime from 'N/runtime'
import Script from 'N/runtime/script'
import Record from 'N/record/instance'
import Form from 'N/ui/serverWidget/form'
import Button from 'N/ui/serverWidget/button'

jest.mock('N/record')
jest.mock('N/record/instance')
jest.mock('N/runtime')
jest.mock('N/runtime/script')
jest.mock('N/ui/serverWidget/form')
jest.mock('N/ui/serverWidget/button')

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

describe('UserEventScript - Add a custom button to form', () => {
  it('Should pass if statement to successfully add button', () => {
    // given
    scriptContext.newRecord = Record
    scriptContext.form = Form

    const stStatus = 'Pending Fulfillment'

    Record.getValue.mockImplementation(options => 
      options.fieldId === 'status' && stStatus)

    runtime.getCurrentScript.mockReturnValue(Script)
    Script.getParameter.mockImplementation(options => 
      options.name === 'custscript_suiteletlink' && 3192)
    Form.addButton.mockReturnValue(Button)

    // when
    script.beforeLoad(scriptContext)

    // then
    expect(Record.getValue).toHaveBeenCalledWith({ fieldId: 'status' })
    expect(runtime.getCurrentScript).toHaveBeenCalled()
    expect(Script.getParameter).toHaveBeenCalledWith({ 
      name: 'custscript_suiteletlink'
    })
    expect(Form.addButton).toHaveBeenCalledWith({ 
      id: 'custpage_suiteletbutton', 
      label: 'Open Suitelet', 
      functionName: 'window.open("3192")' 
    })
  })
})
