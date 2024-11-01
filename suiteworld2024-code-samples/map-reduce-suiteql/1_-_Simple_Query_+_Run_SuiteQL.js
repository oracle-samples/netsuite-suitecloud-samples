require(['N/query'], (query) => {
    let queryString = `

    SELECT 
        transaction.ID, 
        transaction.trandate, 
        transaction.entity,
        transaction.foreigntotal,
    FROM 
        transaction;
    `

    let results = query.runSuiteQL({
        query: queryString
    }).asMappedResults();

    let placeholder = 'Simple Query + Run SuiteQL';

})