/*
 * suiteql.js
 * @NApiVersion 2.1
 * @NModuleScope Public
 */

define(['N/query', 'N/log'], function (query, log) {
	return {
		runCustomSuiteQL: async function (params) {
			const sqlQuery = params.sqlQuery;
			const description = params.description;
			try {
				if (!sqlQuery) {
					return {error: 'Missing SuiteQL query'};
				}

				log.debug({
					title: 'Executing Custom SuiteQL Query',
					details: {
						description: description,
						query: sqlQuery,
					},
				});

				const queryResults = await query
					.runSuiteQL.promise({
						query: sqlQuery,
					})
                const mappedResults = queryResults
					.asMappedResults();

				return JSON.stringify({
					method: 'custom_suiteql',
					description: description || 'Custom SuiteQL Query',
					queryExecuted: sqlQuery,
					resultCount: mappedResults.length,
					data: mappedResults,
				});
			} catch (e) {
				log.error({
					title: 'Error executing custom SuiteQL',
					details: e,
				});

				return {
					error: `Error executing SuiteQL query: ${e.toString()}`,
				};
			}
		},
	};
});
