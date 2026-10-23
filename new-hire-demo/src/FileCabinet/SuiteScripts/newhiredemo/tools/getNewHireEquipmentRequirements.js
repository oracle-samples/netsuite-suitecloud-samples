/**
 * Read-only lookup of employees starting within the next 14 days.
 * Returns the fields the New-hire equipment skill evaluates. It does not decide
 * equipment and it does not create a purchase order.
 *
 * @NApiVersion 2.1
 * @NModuleScope Public
 * @NScriptType CustomTool
 */
define(['N/search'], (search) => {
    const WINDOW_DAYS = 14;
    const MAX_HIRES = 100;
    const asText = value => value === null || value === undefined ? '' : String(value).trim();

    function toolError(code, message) {
        const error = new Error(message);
        error.name = code;
        error.code = code;
        return error;
    }

    function isPermissionError(error) {
        return /PERMISSION|ACCESS_DENIED/i.test([error && error.name, error && error.code, error && error.message].map(asText).join(' '));
    }

    function columnValue(row, name) {
        try {
            return asText(row.getText({name}) || row.getValue({name}));
        } catch (error) {
            if (asText(error && (error.name || error.code)) === 'SSS_INVALID_SRCH_COL') return '';
            throw error;
        }
    }

    function hireSearch(filters, columns) {
        return search.create({
            type: search.Type.EMPLOYEE,
            filters,
            columns
        }).run().getRange({start: 0, end: MAX_HIRES}) || [];
    }

    function withinWindow(row) {
        const raw = row.getValue({name: 'hiredate'});
        const hireDate = raw instanceof Date ? new Date(raw.getTime()) : new Date(raw);
        if (Number.isNaN(hireDate.getTime())) return false;
        const start = new Date();
        start.setHours(0, 0, 0, 0);
        const end = new Date(start.getTime());
        end.setDate(end.getDate() + WINDOW_DAYS);
        end.setHours(23, 59, 59, 999);
        hireDate.setHours(0, 0, 0, 0);
        return hireDate >= start && hireDate <= end;
    }

    function upcomingHires() {
        const columns = [
            search.createColumn({name: 'internalid', sort: search.Sort.ASC}),
            search.createColumn({name: 'hiredate', sort: search.Sort.ASC}),
            'entityid',
            'firstname',
            'lastname',
            'title',
            'supervisor',
            'location',
            'employeestatus',
            'subsidiary'
        ];
        const formulaFilters = [
            ['isinactive', 'is', 'F'],
            'AND',
            ["formulatext: CASE WHEN {hiredate} >= {today} AND {hiredate} <= {today} + 14 THEN 'Y' ELSE 'N' END", 'is', 'Y']
        ];
        const warnings = [];
        const deny = () => toolError('NEW_HIRE_PERMISSION_DENIED', 'The execution role cannot search employees.');
        const failed = () => toolError('NEW_HIRE_SEARCH_FAILED', 'The upcoming-hire search failed. Absence of new hires is not established.');
        const errorName = error => asText(error && (error.name || error.code));
        try {
            return {rows: hireSearch(formulaFilters, columns.concat(['job', 'isjobresource'])), warnings};
        } catch (error) {
            if (isPermissionError(error)) throw deny();
            if (errorName(error) === 'SSS_INVALID_SRCH_COL') {
                try {
                    warnings.push('ASSIGNED_PROJECT_UNAVAILABLE');
                    return {rows: hireSearch(formulaFilters, columns), warnings};
                } catch (columnError) {
                    if (isPermissionError(columnError)) throw deny();
                }
            }
        }
        try {
            warnings.push('HIRE_DATE_FORMULA_UNAVAILABLE');
            const rows = hireSearch([
                ['isinactive', 'is', 'F'],
                'AND',
                ['hiredate', 'onorafter', 'today']
            ], columns).filter(withinWindow);
            return {rows, warnings};
        } catch (error) {
            if (isPermissionError(error)) throw deny();
            throw failed();
        }
    }

    function toEmployee(row) {
        const firstName = columnValue(row, 'firstname');
        const lastName = columnValue(row, 'lastname');
        const name = [firstName, lastName].filter(Boolean).join(' ') || columnValue(row, 'entityid');
        const assignedProject = columnValue(row, 'job');
        const credentials = '';
        return {
            employeeId: asText(row.id || row.getValue({name: 'internalid'})),
            employeeNumber: columnValue(row, 'entityid'),
            name,
            startDate: columnValue(row, 'hiredate'),
            role: columnValue(row, 'title'),
            assignedProject,
            workLocation: columnValue(row, 'location'),
            workLocationId: asText(row.getValue({name: 'location'})),
            manager: columnValue(row, 'supervisor'),
            onboardingStatus: columnValue(row, 'employeestatus'),
            credentials,
            credentialsVerification: 'NOT_ON_EMPLOYEE_RECORD',
            isProjectResource: columnValue(row, 'isjobresource'),
            subsidiaryId: asText(row.getValue({name: 'subsidiary'}))
        };
    }

    /**
     * @returns {Object} Employees with a hire date from today through 14 days ahead.
     * Credentials are not stored on the standard employee record and are reported as unverified.
     */
    function getNewHireEquipmentRequirements() {
        const result = upcomingHires();
        const employees = result.rows.map(toEmployee);
        if (!employees.length) result.warnings.push('NO_HIRES_IN_NEXT_14_DAYS');
        return {
            windowDays: WINDOW_DAYS,
            employeeCount: employees.length,
            employees,
            warnings: result.warnings
        };
    }

    return {getNewHireEquipmentRequirements};
});
