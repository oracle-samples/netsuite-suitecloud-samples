/**
 * Create a draft purchase order for verified new-hire equipment.
 * Reuses an existing draft with the same external ID. Does not approve,
 * email, or receive.
 *
 * @NApiVersion 2.1
 * @NModuleScope Public
 * @NScriptType CustomTool
 */
define(['N/record', 'N/search'], (record, search) => {
    const MAX_LINES = 25;
    const ITEM_RECORD_TYPES = {
        InvtPart: record.Type.INVENTORY_ITEM,
        NonInvtPart: record.Type.NON_INVENTORY_ITEM,
        Service: record.Type.SERVICE_ITEM,
        OthCharge: record.Type.OTHER_CHARGE_ITEM,
        Assembly: record.Type.ASSEMBLY_ITEM,
        Kit: record.Type.KIT_ITEM
    };
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

    function requiredEmployeeId(value) {
        const employeeId = asText(value);
        if (!/^\d{1,20}$/.test(employeeId)) {
            throw toolError('PURCHASE_ORDER_EMPLOYEE_REQUIRED', 'A numeric employeeId from the new-hire search is required.');
        }
        return employeeId;
    }

    function optionalVendorId(value) {
        const vendorId = asText(value);
        if (!vendorId) return '';
        if (!/^\d{1,20}$/.test(vendorId)) {
            throw toolError('PURCHASE_ORDER_VENDOR_INVALID', 'vendorId must be a numeric vendor internal ID when it is provided.');
        }
        return vendorId;
    }

    function cleanItemName(value) {
        const itemName = asText(value).replace(/\s+/g, ' ');
        if (!itemName || itemName.length > 80 || /[<>]/.test(itemName)) {
            throw toolError('PURCHASE_ORDER_ITEM_INVALID', 'Each line needs an equipment item name of 1 to 80 characters.');
        }
        return itemName;
    }

    function requiredLines(value) {
        if (!Array.isArray(value) || !value.length || value.length > MAX_LINES) {
            throw toolError('PURCHASE_ORDER_LINES_REQUIRED', 'Provide 1 to 25 equipment lines to order.');
        }
        return value.map(line => {
            const quantity = Number(line && line.quantity);
            if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
                throw toolError('PURCHASE_ORDER_QUANTITY_INVALID', 'Each equipment quantity must be a whole number from 1 to 99.');
            }
            return {itemName: cleanItemName(line && line.itemName), quantity};
        });
    }

    function findItem(itemName) {
        const filtersFor = fieldId => [
            ['isinactive', 'is', 'F'],
            'AND',
            [fieldId, 'is', itemName]
        ];
        const columns = ['internalid', 'itemid', 'displayname', 'type'];
        for (const fieldId of ['itemid', 'displayname']) {
            let rows;
            try {
                rows = search.create({
                    type: search.Type.ITEM,
                    filters: filtersFor(fieldId),
                    columns
                }).run().getRange({start: 0, end: 2}) || [];
            } catch (error) {
                if (isPermissionError(error)) {
                    throw toolError('PURCHASE_ORDER_PERMISSION_DENIED', 'The execution role cannot search items.');
                }
                return {reason: 'ITEM_SEARCH_FAILED'};
            }
            if (rows.length > 1) return {reason: 'AMBIGUOUS_ITEM'};
            if (rows.length === 1) {
                const row = rows[0];
                return {
                    itemId: asText(row.id || row.getValue({name: 'internalid'})),
                    itemName: asText(row.getValue({name: 'itemid'})) || itemName,
                    itemType: asText(row.getValue({name: 'type'}))
                };
            }
        }
        return {reason: 'ITEM_NOT_FOUND'};
    }

    function preferredVendor(item) {
        const recordType = ITEM_RECORD_TYPES[item.itemType];
        if (!recordType) return {reason: 'ITEM_TYPE_HAS_NO_VENDOR_LIST'};
        try {
            const itemRecord = record.load({type: recordType, id: item.itemId, isDynamic: false});
            const count = itemRecord.getLineCount({sublistId: 'itemvendor'});
            const vendors = [];
            for (let line = 0; line < count; line += 1) {
                const vendorId = asText(itemRecord.getSublistValue({sublistId: 'itemvendor', fieldId: 'vendor', line}));
                const preferred = itemRecord.getSublistValue({sublistId: 'itemvendor', fieldId: 'preferredvendor', line});
                if (vendorId) vendors.push({vendorId, preferred: preferred === true || preferred === 'T'});
            }
            const preferredVendors = vendors.filter(vendor => vendor.preferred);
            if (preferredVendors.length === 1) return {vendorId: preferredVendors[0].vendorId};
            if (preferredVendors.length > 1) return {reason: 'AMBIGUOUS_PREFERRED_VENDOR'};
            if (vendors.length === 1) return {vendorId: vendors[0].vendorId, usedOnlyVendor: true};
            return {reason: vendors.length ? 'PREFERRED_VENDOR_NOT_SET' : 'VENDOR_NOT_FOUND'};
        } catch (error) {
            if (isPermissionError(error)) {
                throw toolError('PURCHASE_ORDER_PERMISSION_DENIED', 'The execution role cannot read item vendors.');
            }
            return {reason: 'VENDOR_LOOKUP_FAILED'};
        }
    }

    function employeeContext(employeeId) {
        try {
            const employee = record.load({type: record.Type.EMPLOYEE, id: employeeId, isDynamic: false});
            const firstName = asText(employee.getValue({fieldId: 'firstname'}));
            const lastName = asText(employee.getValue({fieldId: 'lastname'}));
            return {
                name: [firstName, lastName].filter(Boolean).join(' ') || asText(employee.getValue({fieldId: 'entityid'})),
                startDate: asText(employee.getText({fieldId: 'hiredate'})),
                subsidiaryId: asText(employee.getValue({fieldId: 'subsidiary'})),
                locationId: asText(employee.getValue({fieldId: 'location'}))
            };
        } catch (error) {
            if (isPermissionError(error)) {
                throw toolError('PURCHASE_ORDER_PERMISSION_DENIED', 'The execution role cannot read the employee.');
            }
            throw toolError('PURCHASE_ORDER_EMPLOYEE_NOT_FOUND', 'The employee was not found.');
        }
    }

    function externalIdFor(employeeId, vendorId) {
        return `nh-equip-${employeeId}-v${vendorId}`.slice(0, 255);
    }

    function existingDraft(externalId) {
        try {
            const rows = search.create({
                type: search.Type.PURCHASE_ORDER,
                filters: [
                    ['mainline', 'is', 'T'],
                    'AND',
                    ['externalidstring', 'is', externalId]
                ],
                columns: ['internalid', 'tranid', 'status']
            }).run().getRange({start: 0, end: 1}) || [];
            if (!rows.length) return null;
            return {
                internalId: asText(rows[0].id || rows[0].getValue({name: 'internalid'})),
                tranId: asText(rows[0].getValue({name: 'tranid'})),
                status: asText(rows[0].getText({name: 'status'}) || rows[0].getValue({name: 'status'})),
                externalId,
                alreadyCreated: true,
                approval: 'NOT_APPROVED_BY_THIS_TOOL'
            };
        } catch (error) {
            if (isPermissionError(error)) {
                throw toolError('PURCHASE_ORDER_PERMISSION_DENIED', 'The execution role cannot search purchase orders.');
            }
            throw toolError('PURCHASE_ORDER_DUPLICATE_CHECK_FAILED', 'The existing-draft check failed, so no purchase order was created.');
        }
    }

    function setIfPresent(purchaseOrder, fieldId, value) {
        if (value === '' || value === null || value === undefined) return;
        const field = purchaseOrder.getField({fieldId});
        if (field) purchaseOrder.setValue({fieldId, value});
    }

    function createDraft(vendorId, lines, employeeId, context) {
        const externalId = externalIdFor(employeeId, vendorId);
        const existing = existingDraft(externalId);
        if (existing) return {...existing, vendorId};
        const purchaseOrder = record.create({type: record.Type.PURCHASE_ORDER, isDynamic: true});
        setIfPresent(purchaseOrder, 'subsidiary', context.subsidiaryId ? Number(context.subsidiaryId) : '');
        purchaseOrder.setValue({fieldId: 'entity', value: Number(vendorId)});
        setIfPresent(purchaseOrder, 'employee', Number(employeeId));
        setIfPresent(purchaseOrder, 'location', context.locationId ? Number(context.locationId) : '');
        setIfPresent(purchaseOrder, 'externalid', externalId);
        setIfPresent(purchaseOrder, 'approvalstatus', '1');
        setIfPresent(purchaseOrder, 'tobeemailed', false);
        purchaseOrder.setValue({
            fieldId: 'memo',
            value: `Draft new-hire equipment for ${context.name || employeeId}, start ${context.startDate || 'unverified'}. Do not send.`
        });
        lines.forEach(line => {
            purchaseOrder.selectNewLine({sublistId: 'item'});
            purchaseOrder.setCurrentSublistValue({sublistId: 'item', fieldId: 'item', value: Number(line.itemId)});
            purchaseOrder.setCurrentSublistValue({sublistId: 'item', fieldId: 'quantity', value: line.quantity});
            purchaseOrder.commitLine({sublistId: 'item'});
        });
        let internalId;
        try {
            internalId = purchaseOrder.save({enableSourcing: true, ignoreMandatoryFields: false});
        } catch (error) {
            if (isPermissionError(error)) {
                throw toolError('PURCHASE_ORDER_PERMISSION_DENIED', 'The execution role cannot create a purchase order.');
            }
            throw toolError('PURCHASE_ORDER_CREATE_FAILED', 'The draft purchase order was not created.');
        }
        const saved = record.load({type: record.Type.PURCHASE_ORDER, id: internalId, isDynamic: false});
        return {
            internalId: String(internalId),
            tranId: asText(saved.getValue({fieldId: 'tranid'})),
            vendorId,
            externalId,
            alreadyCreated: false,
            approval: 'DRAFT_NOT_APPROVED'
        };
    }

    /**
     * @param {Object} args
     * @param {string} args.employeeId Employee internal ID from the new-hire search.
     * @param {string} [args.vendorId] Vendor to use for every line. Otherwise each item's preferred vendor is used.
     * @param {Array<{itemName: string, quantity: number}>} args.lines Verified equipment only.
     * @returns {Object} Drafts created or reused, plus lines that could not be verified.
     */
    function purchase_order(args) {
        const employeeId = requiredEmployeeId(args && args.employeeId);
        const vendorOverride = optionalVendorId(args && args.vendorId);
        const requestedLines = requiredLines(args && args.lines);
        const context = employeeContext(employeeId);
        const unverifiedItems = [];
        const linesByVendor = new Map();
        requestedLines.forEach(requested => {
            const item = findItem(requested.itemName);
            if (item.reason) {
                unverifiedItems.push({itemName: requested.itemName, reason: item.reason});
                return;
            }
            const vendor = vendorOverride ? {vendorId: vendorOverride} : preferredVendor(item);
            if (vendor.reason) {
                unverifiedItems.push({itemName: requested.itemName, reason: vendor.reason});
                return;
            }
            const bucket = linesByVendor.get(vendor.vendorId) || [];
            const existingLine = bucket.find(line => line.itemId === item.itemId);
            if (existingLine) existingLine.quantity = Math.min(99, existingLine.quantity + requested.quantity);
            else bucket.push({itemId: item.itemId, itemName: item.itemName, quantity: requested.quantity});
            linesByVendor.set(vendor.vendorId, bucket);
        });
        const drafts = [];
        linesByVendor.forEach((lines, vendorId) => {
            drafts.push(createDraft(vendorId, lines, employeeId, context));
        });
        return {
            employeeId,
            employeeName: context.name,
            startDate: context.startDate,
            drafts,
            unverifiedItems,
            createdCount: drafts.filter(draft => !draft.alreadyCreated).length
        };
    }

    return {purchase_order};
});
