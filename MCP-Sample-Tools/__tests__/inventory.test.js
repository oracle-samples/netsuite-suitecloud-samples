import query from 'N/query';
import Query from 'N/query/instance'
import QueryResult from 'N/query/result'
import QueryIterator from 'N/query/iterator'
import ResultSet from 'N/query/resultSet'
import inventory from "../src/FileCabinet/SuiteScripts/inventory_acp.js"
import { handleTestResultAndErrors } from './__utils__/handleErrors.js';

jest.mock('N/query');
jest.mock('N/query/instance')
jest.mock('N/query/resultSet')
jest.mock('N/query/iterator')
jest.mock('N/query/result')

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

describe('Test happy path getItemDetails', () => {
	it('', async () => {
        // given
        const ITEM_ID = 123454321
        const params = {
            itemId: ITEM_ID
        }
        query.create.mockReturnValue(Query);
        query.runSuiteQL.promise.mockReturnValue(ResultSet);

        const expectedResults = [
            ["id", "itemId", "displayName", "description", "type", "basePrice", "cost", "quantityAvailable", "quantityOnHand", "reorderPoint", "preferredLocation", "unitsType", "stockUnit", "purchaseUnit", "saleUnit", "weight", "weightUnit", "created", "isInactive"],
        ]

        let results = [
            {values: expectedResults[0]},
            {values: expectedResults[1]},
            {values: expectedResults[2]},
        ];
        ResultSet.asMappedResults.mockReturnValue([{
            values: results
        }]);
        ResultSet.results = results

        // when
        let callResult = handleTestResultAndErrors(
            await inventory.getItemDetails({...params})
        )

        // then

        for (const key of Object.keys(callResult)) {
            expect(callResult[key]).toBe(key.toString())
        }
    });
});

describe('Test happy path checkInventoryLevels', () => {
	it('', async () => {
		// given
		const params = {
			locationId: "locationId"
		}
		query.create.mockReturnValue(Query);
		query.runSuiteQL.promise.mockReturnValue(ResultSet);
		const expectedResults = [
			["itemId0", "item0", "available0"],
			["itemId1", "item1", "available1"],
			["itemId2", "item2", "available2"]
		]
		let results = [
				{values : expectedResults[0]},
				{values : expectedResults[1]},
				{values : expectedResults[2]},
			];
		ResultSet.asMappedResults.mockReturnValue(results);

		QueryResult.results = results;

		// when
		let callResult = handleTestResultAndErrors(
			await inventory.checkInventoryLevels({ ...params })
		)

		// then

		let i = 0;
		for(const value of callResult){
			for ( const key of Object.keys(callResult[i])) {
				expect(key+i.toString()).toBe(value[key])
			}
			i++;
		}
	});
});