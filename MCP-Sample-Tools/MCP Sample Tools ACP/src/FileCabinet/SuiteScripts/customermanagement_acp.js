/*
 * customermanagement.js
 * @NApiVersion 2.1
 * @NModuleScope Public
 */

define(["N/record", "N/query", "N/log"], function (record, query, log) {
  return {
    searchCustomer: function (params) {
      try {
        var customerQuery = query.create({
          type: query.Type.CUSTOMER,
        });

        if (params.query) {
          customerQuery.condition = customerQuery.createCondition({
            fieldId: "entityid",
            operator: query.Operator.CONTAIN,
            values: params.query,
          });
        }

        // Add columns to select
        customerQuery.columns = [
          customerQuery.createColumn({ fieldId: "companyname" }),
          customerQuery.createColumn({ fieldId: "email" }),
          customerQuery.createColumn({ fieldId: "entityid" }),
          customerQuery.createColumn({ fieldId: "id" }),
        ];

        // Execute query and get results
        var resultSet = customerQuery.run();
        var results = [];

        resultSet.results.forEach(function (result) {
          results.push({
            id: result.values[3], // id column
            companyname: result.values[0], // companyname column
            email: result.values[1], // email column
            customerId: result.values[2], // entityid column
          });
        });

        return JSON.stringify(results);
      } catch (error) {
        return {
          error: `Error searching customers: ${error.toString()}`,
        };
      }
    },
    getCustomerDetails: function (params) {
      var customerId = params.customerId;

      if (!customerId) {
        return { error: "Missing customer ID" };
      }

      try {
        // Get customer details using N/query
        var customerQuery = query.create({
          type: query.Type.CUSTOMER,
        });

        customerQuery.columns = [
          customerQuery.createColumn({ fieldId: "entityid" }),
          customerQuery.createColumn({ fieldId: "companyname" }),
          customerQuery.createColumn({ fieldId: "email" }),
          customerQuery.createColumn({ fieldId: "phone" }),
          customerQuery.createColumn({ fieldId: "creditlimit" }),
          customerQuery.createColumn({ fieldId: "terms" }),
          customerQuery.createColumn({ fieldId: "defaultshippingaddress" }),
          customerQuery.createColumn({ fieldId: "defaultbillingaddress" }),
          customerQuery.createColumn({ fieldId: "category" }),
          customerQuery.createColumn({ fieldId: "datecreated" }),
          customerQuery.createColumn({
            fieldId: "entity<customersubsidiaryrelationship.subsidiary",
          }),
          customerQuery.createColumn({ fieldId: "currency" }),
          customerQuery.createColumn({ fieldId: "salesrep" }),
          customerQuery.createColumn({ fieldId: "pricelevel" }),
        ];

        customerQuery.condition = customerQuery.createCondition({
          fieldId: "id",
          operator: query.Operator.EQUAL,
          values: [customerId],
        });

        var customerResults = customerQuery.run();
        var customerData = customerResults.results;

        if (!customerData || customerData.length === 0) {
          return { error: "Customer not found" };
        }

        var customer = customerData[0];

        // Get contacts using N/query
        var contactQuery = query.create({
          type: query.Type.CONTACT,
        });

        contactQuery.columns = [
          contactQuery.createColumn({ fieldId: "id" }),
          contactQuery.createColumn({ fieldId: "entityid" }),
          contactQuery.createColumn({ fieldId: "email" }),
          contactQuery.createColumn({ fieldId: "phone" }),
          contactQuery.createColumn({ fieldId: "firstname" }),
          contactQuery.createColumn({ fieldId: "title" }),
        ];

        contactQuery.condition = contactQuery.createCondition({
          fieldId: "company",
          operator: query.Operator.EQUAL,
          values: [customerId],
        });

        var contactResults = contactQuery.run();
        var contacts = [];

        contactResults.results.forEach(function (result) {
          contacts.push({
            id: result.values[0], // internalid
            name: result.values[1], // entityid
            email: result.values[2], // email
            phone: result.values[3], // phone
            title: result.values[4], // title
            jobTitle: result.values[5], // jobtitle
          });
        });

        return JSON.stringify({
          id: customerId,
          name: customer.values[0], // entityid
          companyName: customer.values[1], // companyname
          email: customer.values[2], // email
          phone: customer.values[3], // phone
          creditLimit: customer.values[4], // creditlimit
          terms: customer.values[5], // terms
          shipAddress: customer.values[6], // shipaddress
          billAddress: customer.values[7], // billaddress
          category: customer.values[8], // category
          dateCreated: customer.values[9], // datecreated
          subsidiary: customer.values[10], // subsidiary
          currency: customer.values[11], // currency
          salesRep: customer.values[12], // salesrep
          priceLevel: customer.values[13], // pricelevel
          contacts: contacts,
        });
      } catch (e) {
        log.error("Error in getCustomerDetails", e.toString());
        return { error: "Error retrieving customer details: " + e.toString() };
      }
    },
    createCustomer: function (params) {
      var customerData = params;

      if (!customerData) {
        return { error: "Missing customer data" };
      }
      try {
        var customerRecord = record.create({
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

        var customerId = customerRecord.save();

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
    updateCustomer: function (params) {
      var customerId = params.customerId;
      var customerData = params;

      if (!customerId || !customerData) {
        return { error: "Missing customer ID or data" };
      }

      try {
        var customerRecord = record.load({
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
    getCustomerTransactions: function (params) {
      var customerId = params.customerId;
      var dateFrom = params.dateFrom;
      var dateTo = params.dateTo;

      if (!customerId) {
        return { error: "Missing customer ID" };
      }

      try {
        var transactionQuery = query.create({
          type: query.Type.TRANSACTION,
        });

        transactionQuery.columns = [
          transactionQuery.createColumn({ fieldId: "id" }),
          transactionQuery.createColumn({ fieldId: "trandate" }),
          transactionQuery.createColumn({ fieldId: "tranid" }),
          transactionQuery.createColumn({ fieldId: "type" }),
          transactionQuery.createColumn({ fieldId: "entity" }),
          transactionQuery.createColumn({ fieldId: "foreigntotal" }),
          transactionQuery.createColumn({ fieldId: "status" }),
          transactionQuery.createColumn({ fieldId: "memo" }),
          transactionQuery.createColumn({ fieldId: "otherrefnum" }),
        ];

        var condId = transactionQuery.createCondition({
          fieldId: "entity",
          operator: query.Operator.ANY_OF,
          values: [customerId],
        });

        var finalCondition = condId;

        if (dateFrom && dateTo) {
          var condDate = transactionQuery.createCondition({
            fieldId: "trandate",
            operator: query.Operator.WITHIN,
            values: [dateFrom, dateTo],
          });
          finalCondition = transactionQuery.and(finalCondition, condDate);
        }

        transactionQuery.condition = finalCondition;

        var transactionResults = transactionQuery.run();

        return JSON.stringify(
          transactionResults.results.map(function (result) {
            return {
              id: result.values[0],
              date: result.values[1],
              document_number: result.values[2],
              type: result.values[3],
              customer: result.values[4],
              amount: result.values[5],
              status: result.values[6],
              memo: result.values[7],
              reference: result.values[8],
            };
          })
        );
      } catch (error) {
        return {
          error: `There was an error getting customer transactions: ${error.toString()}`,
        };
      }
    },
    getCustomerBalance: function (params) {
      var customerId = params.customerId;

      if (!customerId) {
        return { error: "Missing customer ID" };
      }

      try {
        // Get customer balance info using N/query
        var customerQuery = query.create({
          type: query.Type.CUSTOMER,
        });

        customerQuery.columns = [
          customerQuery.createColumn({ fieldId: "balancesearch" }),
          customerQuery.createColumn({ fieldId: "overduebalancesearch" }),
          customerQuery.createColumn({ fieldId: "unbilledorderssearch" }),
          customerQuery.createColumn({ fieldId: "entityid" }),
        ];

        customerQuery.condition = customerQuery.createCondition({
          fieldId: "id",
          operator: query.Operator.EQUAL,
          values: [customerId],
        });

        var customerResults = customerQuery.run();
        var customerData = customerResults.results;

        if (!customerData || customerData.length === 0) {
          return { error: "Customer not found" };
        }

        var customer = customerData[0];

        var agingQuery = query.create({
          type: query.Type.TRANSACTION,
        });

        var condEntityId = agingQuery.createCondition({
          fieldId: "entity",
          operator: query.Operator.EQUAL,
          values: [customerId],
        });

        var condStatus = agingQuery.createCondition({
          fieldId: "status",
          operator: query.Operator.ANY_OF,
          values: ["CustInvc:A"],
        });

        var condMainline = agingQuery.createCondition({
          fieldId: "transactionlines.mainline",
          operator: query.Operator.IS,
          values: [true],
        });

        agingQuery.condition = agingQuery.and(
          condEntityId,
          agingQuery.and(condStatus, condMainline)
        );

        agingQuery.columns = [
          agingQuery.createColumn({ fieldId: "foreigntotal" }),
          agingQuery.createColumn({ fieldId: "duedate" }),
          agingQuery.createColumn({ fieldId: "daysoverduesearch" }),
        ];

        var aging = {
          current: 0,
          "1_30": 0,
          "31_60": 0,
          "61_90": 0,
          over_90: 0,
        };

        var agingResultSet = agingQuery.run();

        var aginIterator = agingResultSet.iterator();

        aginIterator.each(function (result) {
          var amount = result.values[0];
          var daysOverdue = result.values[2];

          if (daysOverdue === 0) {
            aging.current += amount;
          }

          if (daysOverdue === 0) {
            aging.current += amount;
          } else if (daysOverdue <= 30) {
            aging["1_30"] += amount;
          } else if (daysOverdue <= 60) {
            aging["31_60"] += amount;
          } else if (daysOverdue <= 90) {
            aging["61_90"] += amount;
          } else {
            aging.over_90 += amount;
          }

          return true;
        });

        return JSON.stringify({
          customer_id: customerId,
          customer_name: customer.values[3], // entityid
          balance: customer.values[0], // balance
          overdue_balance: customer.values[1], // overduebalance
          unbilled_orders: customer.values[2], // unbilledorders
          aging: aging,
        });
      } catch (e) {
        log.error("Error in getCustomerBalance", e.toString());
        return { error: "Error retrieving customer balance: " + e.toString() };
      }
    },
  };
});
