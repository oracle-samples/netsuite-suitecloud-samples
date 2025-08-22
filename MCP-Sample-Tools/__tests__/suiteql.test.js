import query from 'N/query';
import ResultSet from 'N/query/resultSet'
import suiteql from "../src/FileCabinet/SuiteScripts/suiteql_acp.js"
import { handleTestResultAndErrors } from './__utils__/handleErrors.js';


jest.mock('N/query');
jest.mock('N/query/suiteQL')
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

describe('runCustomSuiteQL test', () => {
	it('', async () => {
		// given
		const EXPECTED_RESULT = [1,2,3,4,5]
		query.runSuiteQL.promise.mockReturnValue(ResultSet);
		ResultSet.asMappedResults.mockReturnValue(EXPECTED_RESULT);
		
		
		const params = {
			sqlQuery:"select whatever rom whrwet",
			description: "balbalbalbalb description"
		}


		// when
		let callResult = handleTestResultAndErrors(
			await suiteql.runCustomSuiteQL({ ...params })
		)


		// then
		expect(query.runSuiteQL.promise).toHaveBeenCalled()
		expect(callResult.data).toStrictEqual(EXPECTED_RESULT)

	});
});