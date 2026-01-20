import query from 'N/query';
import Query from 'N/query/instance'
import QueryResult from 'N/query/result'
import ResultSet from 'N/query/resultSet'
import QueryIterator from 'N/query/iterator'
import record from 'N/record';
import Record from 'N/record/instance';
import salesandorders from "../src/FileCabinet/SuiteScripts/salesandorders_acp.js";
import { handleTestResultAndErrors } from './__utils__/handleErrors.js';

jest.mock('N/query');
jest.mock('N/query/instance')
jest.mock('N/query/result')
jest.mock('N/query/resultSet')
jest.mock('N/record');
jest.mock('N/record/instance');

global.log = {
	error: jest.fn(),
	debug: jest.fn(),
	info: jest.fn(),
	warn: jest.fn(),
	// Add more if needed
};


beforeEach(() => {
	jest.clearAllMocks();
});

describe('Test happy path getSalesOrder', () => {
	it('', async () => {
        // given
        const ORDER_ID = 123454321
        const params = {
            orderId: ORDER_ID
        }
        query.create.mockReturnValue(Query);
        query.runSuiteQL.mockReturnValue(ResultSet);
        ResultSet.asMappedResults.mockReturnValue([{total: 3, trandate: "date", entity: "customer"}]);
        record.load.promise.mockReturnValue(Record);
        Record.getValue.mockImplementation(x => x + "_value");
        Record.getText.mockImplementation(x => x + "_text");
        Record.getSublistValue.mockImplementation(({fieldId, line}) => fieldId + "_" + line + "_sublist_value");
        Record.getSublistText.mockImplementation(({fieldId, line}) => fieldId + "_" + line + "_sublist_text");
        Record.getLineCount.mockReturnValue(3);

        const EXPECTED_RESULT = {
            id: 123454321,
            tranId: "tranid_value",
            customerId: "entity_value",
            customerName: "entity_text",
            date: "trandate_value",
            status: "status_value",
            poNumber: "otherrefnum_value",
            memo: "memo_value",
            salesRep: "salesrep_value",
            salesRepName: "salesrep_text",
            total: "total_value",
            items: [
                {
                    line: 1,
                    itemId: "item_0_sublist_value",
                    itemName: "item_0_sublist_text",
                    quantity: "quantity_0_sublist_value",
                    rate: "rate_0_sublist_value",
                    amount: "amount_0_sublist_value",
                    description: "description_0_sublist_value"
                },
                {
                    line: 2,
                    itemId: "item_1_sublist_value",
                    itemName: "item_1_sublist_text",
                    quantity: "quantity_1_sublist_value",
                    rate: "rate_1_sublist_value",
                    amount: "amount_1_sublist_value",
                    description: "description_1_sublist_value"
                },
                {
                    line: 3,
                    itemId: "item_2_sublist_value",
                    itemName: "item_2_sublist_text",
                    quantity: "quantity_2_sublist_value",
                    rate: "rate_2_sublist_value",
                    amount: "amount_2_sublist_value",
                    description: "description_2_sublist_value"
                }
            ]
        }


        // when
        let callResult = handleTestResultAndErrors(
            await salesandorders.getSalesOrder({...params})
        )

        // then

        expect(record.load.promise).toHaveBeenCalledWith({
            type: record.Type.SALES_ORDER,
            id: ORDER_ID,
        })

        expect(callResult).toStrictEqual(EXPECTED_RESULT);
    });
});

describe('Test happy path getSalesOrderWithFilters', () => {
	it('', async () => {
        // given
        const CUSTOMER_ID = 123454321
        const DATE_FROM = "12/17/2025"
        const DATE_TO = "12/18/2025"
        const STATUS = "status"
        const params = {
            customerId: CUSTOMER_ID,
            dateFrom: DATE_FROM,
            dateTo: DATE_TO,
            status: STATUS

        }
        query.create.mockReturnValue(Query);
        query.runSuiteQL.promise.mockReturnValue(ResultSet);
        const EXPECTED_RESULT = [
            {values: ["id0", "date0", "customerId0", "customerName0", "amount0", "poNumber0", "salesRep0", "salesRepName0", "memo0"]},
            {values: ["id1", "date1", "customerId1", "customerName1", "amount1", "poNumber1", "salesRep1", "salesRepName1", "memo1"]},
            {values: ["id2", "date2", "customerId2", "customerName2", "amount2", "poNumber2", "salesRep2", "salesRepName2", "memo2"]}
        ];
        ResultSet.asMappedResults.mockReturnValue(EXPECTED_RESULT);
        record.load.mockReturnValue(Record);
        Record.getValue.mockImplementation(x => x + "_value");
        Record.getText.mockImplementation(x => x + "_text");
        Record.getSublistValue.mockImplementation(({fieldId, line}) => fieldId + "_" + line + "_sublist_value");
        Record.getSublistText.mockImplementation(({fieldId, line}) => fieldId + "_" + line + "_sublist_text");
        Record.getLineCount.mockReturnValue(3);

        ResultSet.results = EXPECTED_RESULT


        // when
        let callResult = handleTestResultAndErrors(
            await salesandorders.getSalesOrderWithFilters({...params})
        )


        // then

        let i = 0;
        expect(callResult.length).toEqual(EXPECTED_RESULT.length)
        for (const value of callResult) {
            for (const key of Object.keys(callResult[i])) {
                expect(value[key]).toBe(key + i.toString())
            }
            i++;
        }
    });
});



describe('Test happy path generateSalesReport', () => {
	it('', async () => {
        // given
        const params = {
            dateFrom: "12/17/2025",
            dateTo: "12/18/2025",
            grouping: "customer"
        }
        query.create.mockReturnValue(Query);
        query.runSuiteQL.promise.mockReturnValue(ResultSet);
        ResultSet.iterator.mockReturnValue(QueryIterator);
        const expectedResults = [
            ["customer0", "amount0"],
            ["customer1", "amount1"],
            ["customer2", "amount2"]
        ]
        let results = [
            {values: expectedResults[0]},
            {values: expectedResults[1]},
            {values: expectedResults[2]},
        ];
        ResultSet.results = results;
        ResultSet.asMappedResults.mockReturnValue(results);
        ResultSet.results = results

        // when
        let callResult = handleTestResultAndErrors(
            await salesandorders.generateSalesReport({...params})
        )

        // then
        let i = 0;
        for (const value of callResult.data) {
            for (const key of Object.keys(callResult.data[i])) {
                expect(value[key]).toBe(key + i.toString())
            }
            i++;
        }
    });
});