SELECT 
    transaction.ID,
    transaction.trandisplayname,
    transaction.TYPE,
    transaction.foreigntotal,
    transaction.status,
    customer.altname,
    transaction.employee,
    employee_SUB.supervisor,
    employee_SUB.email
FROM 
    transaction
    LEFT JOIN (
        SELECT 
            employee.ID, 
            employee.supervisor, 
            employee_0.email
        FROM 
            employee
            LEFT JOIN employee employee_0 ON employee.supervisor = employee_0.ID
    ) employee_SUB ON transaction.employee = employee_SUB.ID
    LEFT JOIN customer ON transaction.entity = customer.ID
WHERE 
    transaction.TYPE IN ('SalesOrd') 
    AND transaction.status IN ('SalesOrd:G')