require(['N/query'], (query) => {
    // Replace the id value with your workbook's ID.
    let workbook = query.load({id: 'custworkbook_salesorder_deep_drill'});
    
    // Review the query string to better understand how the query is built.
    let queryString = workbook.toSuiteQL().query;

    let results = query.runSuiteQL({
        query: queryString
    }).asMappedResults();

    let placeholder = `Load a workbook then convert to SuiteQL.`;
})