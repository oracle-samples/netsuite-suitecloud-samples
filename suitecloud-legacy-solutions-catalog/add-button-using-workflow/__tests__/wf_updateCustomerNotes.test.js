import record from 'N/record';
import Record from 'N/record/instance';
import script from '../src/FileCabinet/SuiteScripts/wf_updateCustomerNotes';

jest.mock('N/record');
jest.mock('N/record/instance');

beforeEach(() => {
    jest.clearAllMocks();
});

describe('onAction', () => {
    let context;
    beforeAll(() => {
        context = {
            newRecord: Record
        };
        record.load.mockReturnValue(Record);
    });
    it('should get item line count, load customer record, and update comments field', () => {
        Record.getLineCount.mockReturnValue(1);
        Record.getValue.mockReturnValue('customerId');
        script.onAction(context);
        expect(Record.getLineCount).toHaveBeenCalledWith({ sublistId: 'item' });
        expect(Record.getValue).toHaveBeenCalledWith('entity');
        expect(record.load).toHaveBeenCalledWith({ type: 'customer', id: 'customerId' });
        expect(Record.setValue).toHaveBeenCalled();
        expect(Record.save).toHaveBeenCalled();
    });
});
