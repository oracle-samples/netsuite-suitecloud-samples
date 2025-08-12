/*
 * suiteql.js
 * @NApiVersion 2.1
 * @NModuleScope Public
 */

define(["N/query", "N/log"], function (query, log) {
  return {
    runCustomSuiteQL: function (params) {
      var sqlQuery = params.sqlQuery;
      var description = params.description;
      try {
        if (!sqlQuery) {
          return { error: "Missing SuiteQL query" };
        }

        log.debug({
          title: "Executing Custom SuiteQL Query",
          details: {
            description: description,
            query: sqlQuery,
          },
        });

        var queryResults = query
          .runSuiteQL({
            query: sqlQuery,
          })
          .asMappedResults();

        return JSON.stringify({
          method: "custom_suiteql",
          description: description || "Custom SuiteQL Query",
          queryExecuted: sqlQuery,
          resultCount: queryResults.length,
          data: queryResults,
        });
      } catch (e) {
        log.error({
          title: "Error executing custom SuiteQL",
          details: e,
        });

        return {
          error: `Error executing SuiteQL query: ${e.toString()}`,
        };
      }
    },
  };
});
