import query from 'N/query';
import Query from 'N/query/instance'
import QueryResult from 'N/query/result'
import QueryIterator from 'N/query/iterator'
import ResultSet from 'N/query/resultSet'
import record from 'N/record';
import Record from 'N/record/instance';
import customermanagement from "../src/FileCabinet/SuiteApps/com.netsuite.mcptools/customermanagement.js"
import { handleTestResultAndErrors } from './__utils__/handleErrors.js';
jest.mock('N/query');
jest.mock('N/query/instance')
jest.mock('N/query/resultSet')
jest.mock('N/query/iterator')
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

describe('getCustomerDetails test happy path', () => {
	it('should run a N/query filtering by params.customerId, retrieving the customerData and then the contactResults', async () => {
        // given
        query.Type.CUSTOMER = "QUERY_TYPE_CUSTOMER_VALUE";
        query.Type.CONTACT = "QUERY_TYPE_CONTACT_VALUE";
        const CUSTOMER_ID = 123454321;

        query.create.mockReturnValue(Query);
        query.runSuiteQL.promise.mockReturnValue(ResultSet);
        let results = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        ResultSet.asMappedResults.mockReturnValue([{
            values: results
        }]);
        ResultSet.results = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

        // when
        let callResult = handleTestResultAndErrors(
            await customermanagement.getCustomerDetails({customerId: CUSTOMER_ID})
        )


        // then
        expect(query.runSuiteQL.promise).toHaveBeenCalledTimes(2);
    });
});



describe('createCustomer test happy path', () => {
	it('should call N/record create, setValue and save', () => {
		// given
		record.create.mockReturnValue(Record);
		const params = {
			entityid : "entityid",
			firstname : "firstname",
			lastname : "lastname",
			companyname : "companyname",
			email : "email",
			phone : "phone",
			creditlimit : "creditlimit",
			subsidiary : "subsidiary"
		}

		// when
		let callResult = handleTestResultAndErrors(
			customermanagement.createCustomer({ ...params })
		)

		// then
		expect(record.create).toHaveBeenCalledWith({
			type: record.Type.CUSTOMER,
			isDynamic: expect.any(Boolean)
		})
		for(const key of Object.keys(params)){
			expect(Record.setValue).toHaveBeenCalledWith({
				fieldId: key,
				value: params[key]
			})
		}

		expect(Record.save).toHaveBeenCalled();
	});
});



describe('Test happy path searchCustomer', () => {
	it('', async () => {
        // given
        const params = {
            query: "testQuery"
        }
        query.create.mockReturnValue(Query);
        query.runSuiteQL.promise.mockReturnValue(ResultSet);
        const expectedResults = [
            ["id0", "companyname0", "email0"],
            ["id1", "companyname1", "email1"],
            ["id2", "companyname2", "email2"]
        ]
        let results = [
            {values: expectedResults[0]},
            {values: expectedResults[1]},
            {values: expectedResults[2]},
        ];
        ResultSet.asMappedResults.mockReturnValue(results);
        ResultSet.results = results


        // when
        let callResult = handleTestResultAndErrors(
            await customermanagement.searchCustomer({...params})
        )

        // then
        expect(query.runSuiteQL.promise).toHaveBeenCalled()

        let i = 0;
        for (const value of callResult) {
            for (const key of Object.keys(callResult[i])) {
                expect(value[key]).toBe(key + i.toString())
            }
            i++;
        }

    });
});

describe('updateCustomer test happy path', () => {
	it('should call N/record load, setValue and save', async () => {
        // given
        const CUSTOMER_ID = 123454321;

        record.load.promise.mockReturnValue(Record);
        const params = {
            entityid: "entityid",
            firstname: "firstname",
            lastname: "lastname",
            companyname: "companyname",
            creditlimit: "creditlimit",
            email: "email",
            phone: "phone",
            subsidiary: "subsidiary"
        }


        // when
        let callResult = handleTestResultAndErrors(
            await customermanagement.updateCustomer({...params, customerId: CUSTOMER_ID})
        )

        // then
        expect(record.load.promise).toHaveBeenCalledWith({
            type: record.Type.CUSTOMER,
            id: CUSTOMER_ID,
            isDynamic: expect.any(Boolean)
        })
        for (const key of Object.keys(params)) {
            expect(Record.setValue).toHaveBeenCalledWith({
                fieldId: key,
                value: params[key]
            })
        }

        expect(Record.save).toHaveBeenCalled();
    });
});


describe('getCustomerTransactions test happy path', () => {
	it('should call N/query filtering by customerId', async () => {
        // given
        query.Type.TRANSACTION = "QUERY_TYPE_TRANSACTION_VALUE";
        query.Operator.WITHIN = "QUERY_OPERATOR_WITHIN_VALUE";
        const CUSTOMER_ID = 123454321
        const DATE_FROM = "12/17/2025"
        const DATE_TO = "12/18/2025"
        const STATUS = "status"
        const params = {
            customerId: CUSTOMER_ID,
            dateFrom: DATE_FROM,
            dateTo: DATE_TO
        }

        query.create.mockReturnValue(Query);
        query.runSuiteQL.promise.mockReturnValue(ResultSet);
        ResultSet.results = [{
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        }];
        ResultSet.asMappedResults.mockReturnValue(ResultSet.results);


        // when
        let callResult = handleTestResultAndErrors(
            await customermanagement.getCustomerTransactions({...params})
        )


        // then
        expect(query.runSuiteQL.promise).toHaveBeenCalled();
    });
});

describe('getCustomerBalance test happy path', () => {
	it('should call N/query filtering by customerId', async () => {
        // given
        query.Type.CUSTOMER = "QUERY_TYPE_CUSTOMER_VALUE";
        query.Type.CONTACT = "QUERY_TYPE_CONTACT_VALUE";
        const CUSTOMER_ID = 123454321;

        query.create.mockReturnValue(Query);
        query.runSuiteQL.promise.mockReturnValue(ResultSet);
        ResultSet.results = [{
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        }];
        ResultSet.asMappedResults.mockReturnValue(ResultSet.results);


        // when
        let callResult = handleTestResultAndErrors(
            await customermanagement.getCustomerBalance({customerId: CUSTOMER_ID})
        )


        // then
        expect(query.runSuiteQL.promise).toHaveBeenCalledTimes(2);
    });
});