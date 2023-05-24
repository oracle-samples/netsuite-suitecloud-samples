// import script and modules used
import script from '../src/FileCabinet/SuiteScripts/ue_hideSublistColumn'

import serverWidget from 'N/ui/serverWidget'
import Form from 'N/ui/serverWidget/form'
import Field from 'N/ui/serverWidget/field'
import Sublist from 'N/ui/serverWidget/sublist'

jest.mock('N/ui/serverWidget')
jest.mock('N/ui/serverWidget/form')
jest.mock('N/ui/serverWidget/sublist')
jest.mock('N/ui/serverWidget/field')

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

describe('Hide a sublist column UES test', () => {
  it('Should test beforeLoad function parameters', () => {
    // given
    // type set to view mode, helper function should not execute
    context.type = context.UserEventType.VIEW

    // when
    script.beforeLoad(context)

    // then
    expect(Form.getSublist).not.toHaveBeenCalled()
    expect(Sublist.getField).not.toHaveBeenCalled()
  })

  it('Should test hideColumnField function', () => {
    // given 
    // type set to edit, helper function should execute
    context.type = context.UserEventType.EDIT
    context.form = Form

    Form.getSublist.mockReturnValue(Sublist) // returns Sublist obj
    Sublist.getField.mockReturnValue(Field) // returns Field obj

    Field.updateDisplayType.mockReturnValue(Field) // returns Field obj
    
    // enums used 
    serverWidget.FieldDisplayType = {
      HIDDEN: 'HIDDEN'
    }

    const mySublistId = 'item'
    const myFieldId = 'item'

    // when
    script.beforeLoad(context)

    // then
    expect(Form.getSublist).toHaveBeenCalledWith({ id: mySublistId })
    expect(Sublist.getField).toHaveBeenCalledWith({ id: myFieldId })
    expect(Field.updateDisplayType).toBeCalledWith({ displayType: 'HIDDEN' })
  })
})
