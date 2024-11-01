"SELECT 
  BUILTIN_RESULT.TYPE_INTEGER("TRANSACTION"."ID") AS "ID" /*{id#RAW}*/, 
  BUILTIN_RESULT.TYPE_STRING("TRANSACTION".trandisplayname) AS trandisplayname /*{trandisplayname#RAW}*/, 
  BUILTIN_RESULT.TYPE_STRING(BUILTIN.DF("TRANSACTION"."TYPE")) AS "TYPE" /*{type#DISPLAY}*/, 
  BUILTIN_RESULT.TYPE_CURRENCY(BUILTIN.CONSOLIDATE("TRANSACTION".foreigntotal, 'INCOME', 'NONE', 'DEFAULT', 0, 0, 'DEFAULT'), BUILTIN.CURRENCY(BUILTIN.CONSOLIDATE("TRANSACTION".foreigntotal, 'INCOME', 'NONE', 'DEFAULT', 0, 0, 'DEFAULT'))) AS foreigntotal /*{foreigntotal#SIGN_CONSOLIDATED}*/, 
  BUILTIN_RESULT.TYPE_STRING(BUILTIN.DF("TRANSACTION".status)) AS status /*{status#DISPLAY}*/, 
  BUILTIN_RESULT.TYPE_STRING(Customer.altname) AS altname /*{entity^customer.altname#RAW}*/, 
  BUILTIN_RESULT.TYPE_STRING(BUILTIN.DF("TRANSACTION".employee)) AS employee /*{employee#DISPLAY}*/, 
  BUILTIN_RESULT.TYPE_STRING(BUILTIN.DF(employee_SUB.supervisor)) AS supervisor /*{employee.supervisor#DISPLAY}*/, 
  BUILTIN_RESULT.TYPE_STRING(employee_SUB.email) AS email /*{employee.supervisor.email#RAW}*/
FROM 
  "TRANSACTION", 
  (SELECT 
    employee."ID" AS "ID", 
    employee."ID" AS id_join, 
    employee.supervisor AS supervisor, 
    employee_0.email AS email
  FROM 
    employee, 
    employee employee_0
  WHERE 
    employee.supervisor = employee_0."ID"(+)
  ) employee_SUB, 
  Customer
WHERE 
  (("TRANSACTION".employee = employee_SUB."ID"(+) AND "TRANSACTION".entity = Customer."ID"(+)))
   AND (("TRANSACTION"."TYPE" IN ('SalesOrd') AND "TRANSACTION".status IN ('SalesOrd:G')))
"