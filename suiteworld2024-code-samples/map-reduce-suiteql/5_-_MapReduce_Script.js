/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 */

define(['N/log', 'N/query', 'N/email'], (log, query, email) => {

    let getInputData = () => {
        const sql = `
        SELECT 
            TRANSACTION.ID,
            TRANSACTION.trandisplayname,
            TRANSACTION.foreigntotal,
            TRANSACTION.employee,
            employee_sub.firstname,
            employee_sub.lastname,
            employee_sub.supervisor,
            employee_sub.email,
            employee_sub.super_first_name,
            employee_sub.super_last_name
        FROM
            TRANSACTION,
            (
                SELECT
                    emp.ID,
                    emp.firstname,
                    emp.lastname,
                    emp.supervisor,
                    supervisor.email,
                    supervisor.firstname as super_first_name,
                    supervisor.lastname as super_last_name
                FROM
                    employee emp,
                    employee supervisor
                WHERE
                    emp.supervisor = supervisor.id(+)
            ) employee_sub
        WHERE
            TRANSACTION.employee = employee_sub.id(+)
            AND TRANSACTION.type IN ('SalesOrd') 
            AND TRANSACTION.status IN ('SalesOrd:G')
            AND TRANSACTION.trandate BETWEEN BUILTIN.RELATIVE_RANGES('TY', 'START', 'DATETIME_AS_DATE') 
            AND BUILTIN.RELATIVE_RANGES('TY', 'END', 'DATETIME_AS_DATE')
        `;

        // Execute the query and return the results
        return query.runSuiteQL({
            query: sql
        }).asMappedResults(); // Convert to mapped results for easier processing
    }

    let map = (context) => {
        // Parse the row of the result set
        let result = JSON.parse(context.value),
            entity = result.employee,
            foreignTotal = result.foreigntotal;

        // Aggregate results by entity, and include additional information for later processing
        context.write({
            key: entity,
            value: {
                foreignTotal: foreignTotal,
                employeeFirstName: result.firstname,
                employeeLastname: result.lastname,
                superEmail:result.email,
                superFirstName: result.super_first_name,
                superLastName: result.super_last_name
            }
        });
    }

    let reduce = (context) => {
        let entity = context.key;
        let employeeName = '';
        let totalForeignAmount = 0;
        let email = '';
        let supervisorName = ''

    
        // Sum up all foreign totals for this entity, while capturing other necessary details.
        context.values.forEach(function(value) {
            let parsedValue = JSON.parse(value);

            totalForeignAmount += parseFloat(parsedValue.foreignTotal);

            email = email || parsedValue.superEmail;

            employeeName = employeeName || `${parsedValue.employeeFirstName} ${parsedValue.employeeLastname} `;

            supervisorName = supervisorName || `${parsedValue.superFirstName} ${parsedValue.superLastName} `
        });
    
        // Write the aggregated result to the context, along with the other data that we need for the email.
        context.write({
            key: entity,
            value: {
                totalAmount: totalForeignAmount,
                email: email,
                employeeName: employeeName,
                supervisorName: supervisorName
            }
        });
    }

    let summarize = (context) => {
        let values = [];
        
        context.output.iterator().each( (key, value) => {
            let parsedValue = JSON.parse(value);

            let emailBody = `Hi ${parsedValue.supervisorName}, 
                
                As part of our company's monthly performance report, your employee ${parsedValue.employeeName} has made a total amount of $${parsedValue.totalAmount} in sales as of this time of the year.`

            log.debug({
                title: `Email output for ${parsedValue.supervisorName}`, 
                details: emailBody
            });

            if(parsedValue.email){
                email.send({
                    author: -5,
                    body: emailBody,
                    recipients:parsedValue.email,
                    subject: 'Monthly Performance Report'
                })

            }
            
            values.push(value);    
            return true;
        });
        
        log.debug({
            title: 'Summary of all processed data',
            details: JSON.stringify(values)
        });
    }
    

    return {
        getInputData: getInputData,
        map: map,
        reduce: reduce,
        summarize: summarize
    };

});
