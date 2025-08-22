/*
 * Sales and Orders Tools
 * @NApiVersion 2.1
 */

define(['N/record', 'N/query', 'N/log'], function (record, query, log) {
	return {
		getSalesOrder: async function (params) {
            const orderId = params.orderId;
            if (!orderId) {
                return {error: 'Missing order ID'};
            }
            try {
                const salesOrder = await record.load.promise({
                    type: record.Type.SALES_ORDER,
                    id: orderId,
                });

                // Get header fields
                let salesOrderData = {
                    id: orderId,
                    tranId: salesOrder.getValue('tranid'),
                    customerId: salesOrder.getValue('entity'),
                    customerName: salesOrder.getText('entity'),
                    date: salesOrder.getValue('trandate'),
                    status: salesOrder.getValue('status'),
                    poNumber: salesOrder.getValue('otherrefnum'),
                    memo: salesOrder.getValue('memo'),
                    salesRep: salesOrder.getValue('salesrep'),
                    salesRepName: salesOrder.getText('salesrep'),
                    total: salesOrder.getValue('total'),
                    items: [],
                };

                // Get line items
                const lineCount = salesOrder.getLineCount({
                    sublistId: 'item',
                });

                for (let i = 0; i < lineCount; i++) {
                    salesOrderData.items.push({
                        line: i + 1,
                        itemId: salesOrder.getSublistValue({
                            sublistId: 'item',
                            fieldId: 'item',
                            line: i,
                        }),
                        itemName: salesOrder.getSublistText({
                            sublistId: 'item',
                            fieldId: 'item',
                            line: i,
                        }),
                        quantity: salesOrder.getSublistValue({
                            sublistId: 'item',
                            fieldId: 'quantity',
                            line: i,
                        }),
                        rate: salesOrder.getSublistValue({
                            sublistId: 'item',
                            fieldId: 'rate',
                            line: i,
                        }),
                        amount: salesOrder.getSublistValue({
                            sublistId: 'item',
                            fieldId: 'amount',
                            line: i,
                        }),
                        description: salesOrder.getSublistValue({
                            sublistId: 'item',
                            fieldId: 'description',
                            line: i,
                        }),
                    });
                }

                return JSON.stringify(salesOrderData);
            } catch (error) {
                return {
                    error: `Error getting sales order ${orderId}: ${error.toString()}`,
                };
            }
        },
		getSalesOrderWithFilters: async function (params) {
			const filters = params;
			try {
				let salesOrderSuiteQL = `
                    SELECT 
                        so.transaction,
                        so.trandate,
                        so.entity,
                        c.entitytitle,
                        so.amountnet,
                        so.ponumber,
                        e.id as employeeid,
                        so.employee,
                        so.memo
                    FROM salesOrdered so
                        LEFT JOIN employee e ON so.employee = e.id
                        LEFT JOIN customer c ON so.entity = c.id
				`;

				const suiteQLParams = [];

				if (filters) {
					let conditions = [];
					if (filters.customerId) {
						conditions.push('so.entity = ?');
						suiteQLParams.push(filters.customerId);
					}

					if (filters.dateFrom && filters.dateTo) {
						conditions.push('so.trandate BETWEEN ? AND ?');
						suiteQLParams.push(filters.dateFrom, filters.dateTo);
					}

					if (conditions.length > 0) {
						salesOrderSuiteQL += ` WHERE ${conditions.join(' AND ')}`;
					}
				}

				const salesOrderResultSet = await query.runSuiteQL.promise({
					query: salesOrderSuiteQL,
					params: suiteQLParams,
				});

				const salesOrdered = salesOrderResultSet.asMappedResults().map((saleOrdered) => ({
					id: saleOrdered.transaction,
					date: saleOrdered.trandate,
					customerId: saleOrdered.entity,
					customerName: saleOrdered.entitytitle,
					amount: saleOrdered.amountnet,
					poNumber: saleOrdered.ponumber,
					salesRep: saleOrdered.employeeid,
					salesRepName: saleOrdered.employee,
					memo: saleOrdered.memo,
				}));

				return JSON.stringify(salesOrdered);
			} catch (error) {
				return {error: `Error getting sales orders: ${error.toString()}`};
			}
		},
		generateSalesReport: async function (params) {
			const dateFrom = params.dateFrom;
			const dateTo = params.dateTo;
			const grouping = params.grouping;

			if (!dateFrom || !dateTo) {
				return {error: 'Missing date range'};
			}

			try {
				let reportSuiteQL = '';
				const suiteQLParams = [dateFrom, dateTo];

				if (grouping === 'date') {
					reportSuiteQL = `
						SELECT 
							trandate,
							SUM(foreigntotal) AS total
						FROM transaction
						WHERE 
						    recordtype 
						        IN ('salesorder', 'invoice')
						  AND 
						    trandate 
						        BETWEEN ? AND ?
						GROUP BY trandate
						ORDER BY trandate
					`;
				} else {
					reportSuiteQL = `
						SELECT 
							entity,
							SUM(foreigntotal) AS total
						FROM transaction
						WHERE 
						    recordtype 
						        IN ('salesorder', 'invoice')
						  AND 
						    trandate 
						        BETWEEN ? AND ?
						GROUP BY entity
						ORDER BY entity
					`;
				}

                    const reportSuiteQLResult = await query.runSuiteQL.promise({
					query: reportSuiteQL,
					params: suiteQLParams,
				});

				const salesReport = reportSuiteQLResult.asMappedResults().reduce(
					({totalSales, data}, report) => {
						const amount = report.total;
						totalSales += amount;

						let row = {amount};
						if (grouping === 'date') {
							row.date = report.trandate;
						} else {
							row.customer = report.entity;
						}
						data.push(row);

						return {totalSales, data};
					},
					{
						totalSales: 0,
						data: [],
					}
				);

				return JSON.stringify(salesReport);
			} catch (e) {
				log.error({
					title: 'Error generating sales report',
					details: e,
				});
				return {
					error: `Error generating sales report: ${e.message}`,
				};
			}
		},
	};
});
