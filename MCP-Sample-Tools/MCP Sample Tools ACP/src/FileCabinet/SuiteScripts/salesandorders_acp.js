/*
 * Sales and Orders Tools
 * @NApiVersion 2.1
 * @NModuleScope Public
 */

define(["N/record", "N/query", "N/log"], function (record, query, log) {
  return {
    getSalesOrder: function (params) {
      var orderId = params.orderId;
      if (!orderId) {
        return { error: "Missing order ID" };
      }
      try {
        var salesOrder = record.load({
          type: record.Type.SALES_ORDER,
          id: orderId,
        });

        // Get header fields
        var result = {
          id: orderId,
          tranId: salesOrder.getValue("tranid"),
          customerId: salesOrder.getValue("entity"),
          customerName: salesOrder.getText("entity"),
          date: salesOrder.getValue("trandate"),
          status: salesOrder.getValue("status"),
          poNumber: salesOrder.getValue("otherrefnum"),
          memo: salesOrder.getValue("memo"),
          salesRep: salesOrder.getValue("salesrep"),
          salesRepName: salesOrder.getText("salesrep"),
          total: salesOrder.getValue("total"),
          items: [],
        };

        // Get line items
        var lineCount = salesOrder.getLineCount({
          sublistId: "item",
        });

        for (var i = 0; i < lineCount; i++) {
          result.items.push({
            line: i + 1,
            itemId: salesOrder.getSublistValue({
              sublistId: "item",
              fieldId: "item",
              line: i,
            }),
            itemName: salesOrder.getSublistText({
              sublistId: "item",
              fieldId: "item",
              line: i,
            }),
            quantity: salesOrder.getSublistValue({
              sublistId: "item",
              fieldId: "quantity",
              line: i,
            }),
            rate: salesOrder.getSublistValue({
              sublistId: "item",
              fieldId: "rate",
              line: i,
            }),
            amount: salesOrder.getSublistValue({
              sublistId: "item",
              fieldId: "amount",
              line: i,
            }),
            description: salesOrder.getSublistValue({
              sublistId: "item",
              fieldId: "description",
              line: i,
            }),
          });
        }

        return JSON.stringify(result);
      } catch (error) {
        return {
          error: `Error getting sales order ${orderId}: ${error.toString()}`,
        };
      }
    },
    getSalesOrderWithFilters: function (params) {
      var filters = params;
      try {
        var salesOrderQuery = query.create({
          type: query.Type.SALES_ORDERED,
        });

        if (filters) {
          var condId;
          var condDates;
          if (filters.customerId) {
            condId = salesOrderQuery.createCondition({
              fieldId: "entity",
              operator: query.Operator.ANY_OF,
              values: [filters.customerId],
            });
          }

          if (filters.dateFrom && filters.dateTo) {
            condDates = salesOrderQuery.createCondition({
              fieldId: "trandate",
              operator: query.Operator.WITHIN,
              values: [filters.dateFrom, filters.dateTo],
            });
          }

          if (filters.customerId && !(filters.dateFrom && filters.dateTo)) {
            salesOrderQuery.condition = condId;
          } else if (
            !filters.customerId &&
            filters.dateFrom &&
            filters.dateTo
          ) {
            salesOrderQuery.condition = condDates;
          } else if (filters.customerId && filters.dateFrom && filters.dateTo) {
            salesOrderQuery.condition = salesOrderQuery.and(condId, condDates);
          }
        }

        salesOrderQuery.columns = [
          salesOrderQuery.createColumn({ fieldId: "transaction" }),
          salesOrderQuery.createColumn({ fieldId: "trandate" }),
          salesOrderQuery.createColumn({ fieldId: "entity" }),
          salesOrderQuery.createColumn({
            fieldId: "entity^customer.entitytitle",
          }),
          salesOrderQuery.createColumn({ fieldId: "amountnet" }),
          salesOrderQuery.createColumn({ fieldId: "ponumber" }),
          salesOrderQuery.createColumn({ fieldId: "employee.id" }),
          salesOrderQuery.createColumn({ fieldId: "employee" }),
          salesOrderQuery.createColumn({ fieldId: "memo" }),
        ];

        var salesOrderResultSet = salesOrderQuery.run();
        var results = [];

        salesOrderResultSet.results.forEach(function (result) {
          results.push({
            id: result.values[0],
            date: result.values[1],
            customerId: result.values[2],
            customerName: result.values[3],
            amount: result.values[4],
            poNumber: result.values[5],
            salesRep: result.values[6],
            salesRepName: result.values[7],
            memo: result.values[8],
          });
        });

        return JSON.stringify(results);
      } catch (error) {
        return { error: `Error getting sales orders: ${error.toString()}` };
      }
    },
    generateSalesReport: function (params) {
      var dateFrom = params.dateFrom;
      var dateTo = params.dateTo;
      var grouping = params.grouping;

      if (!dateFrom || !dateTo) {
        return { error: "Missing date range" };
      }

      try {
        var reportQuery = query.create({
          type: query.Type.TRANSACTION,
        });

        var condSalesInvc = reportQuery.createCondition({
          fieldId: "type",
          operator: query.Operator.ANY_OF,
          values: ["SalesOrd", "CustInvc"],
        });

        var condDate = reportQuery.createCondition({
          fieldId: "trandate",
          operator: query.Operator.WITHIN,
          values: [dateFrom, dateTo],
        });

        reportQuery.condition = reportQuery.and(condSalesInvc, condDate);

        if (grouping === "date") {
          reportQuery.columns = [
            reportQuery.createColumn({ fieldId: "trandate", groupBy: true }),
            reportQuery.createColumn({
              fieldId: "foreigntotal",
              aggregate: query.Aggregate.SUM,
            }),
          ];
        } else {
          reportQuery.columns = [
            reportQuery.createColumn({ fieldId: "entity", groupBy: true }),
            reportQuery.createColumn({
              fieldId: "foreigntotal",
              aggregate: query.Aggregate.SUM,
            }),
          ];
        }

        var resultSet = reportQuery.run();
        var results = [];
        var totalSales = 0;

        resultSet.results.forEach(function (result) {
          totalSales += result.values[1];

          var row = { amount: result.values[1] };

          if (grouping === "customer") {
            row.customer = result.values[0];
          } else if (grouping === "date") {
            row.date = result.values[0];
          } else {
            row.customer = result.values[0];
          }
          results.push(row);
        });

        return JSON.stringify({
          data: results,
          totalSales,
        });
      } catch (e) {
        log.error({
          title: "Error generating sales report",
          details: e,
        });
        return {
          error: `Error generating sales report: ${e.message}`,
        };
      }
    },
  };
});
