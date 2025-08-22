/*
 * customermanagement.js
 * @NApiVersion 2.1
 */

define(['N/record', 'N/query', 'N/log'], function (record, query, log) {
	return {
		searchCustomer: async function (params) {
			try {
				let customerSuiteQL = 'SELECT companyname, email, entityid, id FROM customer';
				let customerSuiteQLParams = [];

				if (params.query && params.query.toString().length > 0) {
					customerSuiteQL += ' WHERE LOWER(entityid) LIKE ?';
					customerSuiteQLParams.push(`%${params.query.toString().toLowerCase()}%`);
				}

				const customerSuiteQLResult = await query.runSuiteQL.promise({
					query: customerSuiteQL,
					params: customerSuiteQLParams,
				});

				const results = customerSuiteQLResult.asMappedResults().map((customer) => {
					return {
						customerId: customer.id, // id column
						companyname: customer.companyname, // companyname column
						email: customer.email, // email column
					};
				});

				return JSON.stringify(results);
			} catch (error) {
				return {
					error: `Error searching customers: ${error.toString()}`,
				};
			}
		},
		getCustomerDetails: async function (params) {
			const customerId = params.customerId;

			if (!customerId) {
				return {error: 'Missing customer ID'};
			}

			try {
				const customerSuiteQL = `
                    SELECT
                        c.entityid, c.companyname, c.email,
                        c.phone, c.creditlimit, c.terms,
                        c.defaultshippingaddress, c.defaultbillingaddress, c.category,
                        c.currency, c.salesrep, c.pricelevel,
                        c.datecreated,
                        csr.subsidiary
                    FROM 
                        customer c 
                        LEFT JOIN CustomerSubsidiaryRelationship csr ON c.id = csr.entity
                    WHERE 
                        c.id = ?`;
				const customerSuiteQLParams = [customerId];

				const customerSuiteQLResult = await query.runSuiteQL.promise({
					query: customerSuiteQL,
					params: customerSuiteQLParams,
				});

				if (!customerSuiteQLResult.results || customerSuiteQLResult.results.length === 0) {
					return {error: 'Customer not found'};
				}

				const customerContactSuiteQL = `
                    SELECT
                        id, entityid, email,
                        phone, firstname, title
                    FROM 
                        contact
                    WHERE 
                        contact.company = ?`;
				const customerContactSuiteQLParams = [customerId];

				const customerContactSuiteQLResult = await query.runSuiteQL.promise({
					query: customerContactSuiteQL,
					params: customerContactSuiteQLParams,
				});

				const customer = customerSuiteQLResult.asMappedResults()[0];
				const contacts = customerContactSuiteQLResult.asMappedResults().map((contact) => ({
					id: contact.id, // internalid
					name: contact.entityid, // entityid
					email: contact.email, // email
					phone: contact.phone, // phone
					title: contact.firstname, // title
					jobTitle: contact.title, // jobtitle
				}));

				return JSON.stringify({
					id: customerId,
					name: customer.entityid, // entityid
					companyName: customer.companyname, // companyname
					email: customer.email, // email
					phone: customer.phone, // phone
					creditLimit: customer.creditlimit, // creditlimit
					terms: customer.terms, // terms
					shipAddress: customer.defaultshippingaddress, // shipaddress
					billAddress: customer.defaultbillingaddress, // billaddress
					category: customer.category, // category
					dateCreated: customer.datecreated, // datecreated
					subsidiary: customer.subsidiary, // subsidiary
					currency: customer.currency, // currency
					salesRep: customer.salesrep, // salesrep
					priceLevel: customer.pricelevel, // pricelevel
					contacts: contacts,
				});
			} catch (e) {
				log.error('Error in getCustomerDetails', e.toString());
				return {error: 'Error retrieving customer details: ' + e.toString()};
			}
		},
		createCustomer: function (params) {
			if (!params) {
				return {error: 'Missing customer data'};
			}
			try {
				const customerRecord = record.create({
					type: record.Type.CUSTOMER,
					isDynamic: true,
				});

				Object.keys(params).forEach(function (key) {
					if (params[key]) {
						customerRecord.setValue({
							fieldId: key,
							value: params[key],
						});
					}
				});

				const customerId = customerRecord.save();

				return JSON.stringify({
					success: true,
					customerId,
				});
			} catch (e) {
				return {
					error: e.message,
					code: e.name,
					details: e.toString(),
				};
			}
		},
		updateCustomer: async function (params) {
            const customerId = params.customerId;
            const customerData = params;

            if (!customerId || !customerData) {
                return {error: 'Missing customer ID or data'};
            }

            try {
                const customerRecord = await record.load.promise({
                    type: record.Type.CUSTOMER,
                    id: customerId,
                    isDynamic: true,
                });

                Object.keys(params).forEach(function (key) {
                    if (params[key]) {
                        customerRecord.setValue({
                            fieldId: key,
                            value: params[key],
                        });
                    }
                });

                // Save the record
                customerRecord.save();

                return JSON.stringify({
                    success: true,
                    customer_id: customerId,
                });
            } catch (error) {
                return {
                    error: `There was an error updating the customer ${customerId}: ${error.toString()}`,
                };
            }
        },
		getCustomerTransactions: async function (params) {
			const customerId = params.customerId;
			const dateFrom = params.dateFrom;
			const dateTo = params.dateTo;

			if (!customerId) {
				return {error: 'Missing customer ID'};
			}

			try {
				let transactionSuiteQL = `
                    SELECT
                       id, trandate, tranid, type, entity, foreigntotal, status, memo, otherrefnum
                    FROM
                        transaction
                    WHERE
                        entity IN (?)
                `;
				let transactionSuiteQLParams = [customerId];

				if (dateFrom && dateFrom.toString().length > 0 && dateTo && dateFrom.toString().length > 0) {
					transactionSuiteQL += ' AND trandate BETWEEN ? AND ?';
					transactionSuiteQLParams.push(dateFrom, dateTo);
				}

				const transactionSuiteQLResult = await query.runSuiteQL.promise({
					query: transactionSuiteQL,
					params: transactionSuiteQLParams,
				});

				return JSON.stringify(
					transactionSuiteQLResult.asMappedResults().map((transaction) => ({
						id: transaction.id,
						date: transaction.trandate,
						document_number: transaction.tranid,
						type: transaction.type,
						customer: transaction.entity,
						amount: transaction.foreigntotal,
						status: transaction.status,
						memo: transaction.memo,
						reference: transaction.otherrefnum,
					}))
				);
			} catch (error) {
				return {
					error: `There was an error getting customer transactions: ${error.toString()}`,
				};
			}
		},
		getCustomerBalance: async function (params) {
			const customerId = params.customerId;

			if (!customerId) {
				return {error: 'Missing customer ID'};
			}

			try {
				// Get customer balance info using N/query

				const customerSuiteQL = `
                    SELECT 
                        balancesearch, overduebalancesearch, unbilledorderssearch, entityid 
                    FROM 
                        customer
                    WHERE
                        customer.id = ?`;
				const customerSuiteQLParams = [customerId];

				const customerSuiteQLResult = await query.runSuiteQL.promise({
					query: customerSuiteQL,
					params: customerSuiteQLParams,
				});

				if (!customerSuiteQLResult.results || customerSuiteQLResult.results.length === 0) {
					return {error: 'Customer not found'};
				}

				const transactionSuiteQL = `
                    SELECT
                        t.foreigntotal, t.duedate, t.daysoverduesearch 
                    FROM 
                        transaction t
                        INNER JOIN transactionline tl ON t.id = tl.transaction
                    WHERE
                        t.entity = ?
                        AND t.status IN (?)
                        AND tl.mainline = ?`;
				const transactionSuiteQLParams = [customerId, 'CustInvc:A', true];

				const transactionSuiteQLResult = await query.runSuiteQL.promise({
					query: transactionSuiteQL,
					params: transactionSuiteQLParams,
				});

				const agingBaseline = {
					current: 0,
					'1_30': 0,
					'31_60': 0,
					'61_90': 0,
					over_90: 0,
				};

				const aging = transactionSuiteQLResult.asMappedResults().reduce((aging, transaction) => {
					const amount = transaction.foreigntotal;
					const daysOverdue = transaction.daysoverduesearch;

					if (daysOverdue === 0) {
						aging.current += amount;
					} else if (daysOverdue <= 30) {
						aging['1_30'] += amount;
					} else if (daysOverdue <= 60) {
						aging['31_60'] += amount;
					} else if (daysOverdue <= 90) {
						aging['61_90'] += amount;
					} else {
						aging.over_90 += amount;
					}

					return aging;
				}, agingBaseline);

				const customer = customerSuiteQLResult.asMappedResults()[0];
				return JSON.stringify({
					customerId: customerId,
					customerName: customer.entityid, // entityid
					balance: customer.balancesearch, // balance
					overdueBalance: customer.overduebalancesearch, // overduebalance
					unbilledOrders: customer.unbilledorderssearch, // unbilledorders
					aging: aging,
				});
			} catch (e) {
				log.error('Error in getCustomerBalance', e.toString());
				return {error: 'Error retrieving customer balance: ' + e.toString()};
			}
		},
	};
});
