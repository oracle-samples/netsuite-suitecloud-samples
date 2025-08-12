/*
 * financialtools.js
 * @NApiVersion 2.1
 * @NModuleScope Public
 */

define(["N/query", "N/log"], function (query, log) {
  return {
    getFinancialPerformance: function (params) {
      log.debug("test", "this is a test");
      var startDate = params.dateFrom;
      var endDate = params.dateTo;

      try {
        // Create a query for financial transactions using N/Query
        var transactionQuery = query.create({
          type: query.Type.TRANSACTION,
        });

        // Add conditions (filters)
        var dateCondition = transactionQuery.createCondition({
          fieldId: "trandate",
          operator: query.Operator.WITHIN,
          values: [startDate, endDate],
        });

        var mainlineCondition = transactionQuery.createCondition({
          fieldId: "transactionlines.mainline",
          operator: query.Operator.IS,
          values: true,
        });

        transactionQuery.condition = transactionQuery.and(
          dateCondition,
          mainlineCondition
        );

        // Add columns to select
        transactionQuery.columns = [
          transactionQuery.createColumn({ fieldId: "trandate" }),
          transactionQuery.createColumn({ fieldId: "type" }),
          transactionQuery.createColumn({ fieldId: "tranid" }),
          transactionQuery.createColumn({ fieldId: "entity" }),
          transactionQuery.createColumn({
            fieldId: "transactionlines.accountingimpact.amount",
          }),
          transactionQuery.createColumn({
            fieldId: "transactionlines.accountingimpact.account",
          }),
        ];

        // Run the query
        var queryResults = transactionQuery.run();
        var reportData = [];

        // Process the results
        queryResults.results.forEach(function (result) {
          reportData.push({
            date: result.values[0], // trandate,
            type: result.values[1], // type,
            tranId: result.values[2], // tranid,
            entity: result.values[3], // entity,
            amount: result.values[4], // amount,
            account: result.values[5], // account
          });
        });

        return JSON.stringify({
          data: reportData,
        });
      } catch (e) {
        log.error({
          title: "Error Generating Financial Performance Summary",
          details: e.toString(),
        });
        return {
          error: "Failed to generate financial performance: " + e.toString(),
        };
      }
    },
  };
});
