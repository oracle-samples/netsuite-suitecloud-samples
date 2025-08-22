/*
 * financialtools.js
 * @NApiVersion 2.1
 */

define(['N/query', 'N/log'], function (query, log) {
	return {
		getFinancialPerformance: async function (params) {
			const startDate = params.dateFrom;
			const endDate = params.dateTo;

			try {
				const suiteQL = `
                    SELECT
                        t.trandate,
                        t.type,
                        t.tranid,
                        t.entity,
                        tal.amount,
                        tal.account
                    FROM 
                        transaction t
                        INNER JOIN transactionLine tl ON t.id = tl.transaction
                        INNER JOIN TransactionAccountingLine tal ON tl.id = tal.transactionline AND tl.transaction = tal.transaction
					WHERE 
						t.trandate BETWEEN ? AND ?
						AND tl.mainline = 'T'
					`;

				const queryResults = await query.runSuiteQL.promise({
					query: suiteQL,
					params: [startDate, endDate],
				});

				const reportData = queryResults.asMappedResults().map(transaction => ({
					date: transaction.trandate, // trandate,
					type: transaction.type, // type,
					tranId: transaction.tranid, // tranid,
					entity: transaction.entity, // entity,
					amount: transaction.amount, // amount,
					account: transaction.account, // account
				}));

				return JSON.stringify({
					data: reportData,
				});
			} catch (e) {
				log.error({
					title: 'Error Generating Financial Performance Summary',
					details: e.toString(),
				});
				return {
					error: 'Failed to generate financial performance: ' + e.toString(),
				};
			}
		},
	};
});
