import query from 'N/query';
import Query from 'N/query/instance'
import QueryResult from 'N/query/result'
import ResultSet from 'N/query/resultSet'
import financial from "../src/FileCabinet/SuiteScripts/financial_acp.js"
import { handleTestResultAndErrors } from './__utils__/handleErrors.js';

jest.mock('N/query');
jest.mock('N/query/instance')
jest.mock('N/query/resultSet')

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

describe('getFinancialPerformance test happy path', () => {
	it('', async () => {
		// given
		const params = {
			dateFrom: "12/17/2025",
			dateTo: "12/18/2025"
		}
		query.create.mockReturnValue(Query);
		query.runSuiteQL.promise.mockReturnValue(ResultSet);


		const expectedResults = 
			[
				{trandate : "date0",  type : "type0",  tranid : "tranId0",  entity : "entity0",  amount : "amount0", account:"account0"},
				{trandate : "date1",  type : "type1",  tranid : "tranId1",  entity : "entity1",  amount : "amount1", account:"account1"},
				{trandate : "date2",  type : "type2",  tranid : "tranId2",  entity : "entity2",  amount : "amount2", account:"account2"}
			]
		ResultSet.asMappedResults.mockReturnValue(expectedResults);
		
		ResultSet.results = expectedResults;


		// when
		let callResult = handleTestResultAndErrors(
			await financial.getFinancialPerformance({ ...params })
		)

		// then
		let i = 0;
		for (const value of callResult.data) {
			for (let key of Object.keys(callResult.data[i])) {
				expect(value[key]).toBe(key + i.toString())
			}
			i++;
		}
	});
});