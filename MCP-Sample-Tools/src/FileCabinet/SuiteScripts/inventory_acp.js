/*
 * inventory.js
 * @NApiVersion 2.1
 */
define(['N/query'], function (query) {
	return {
		getItemDetails: async function (params) {
			const itemId = params.itemId;
			if (!itemId) {
				return {error: 'Missing item ID'};
			}

			try {
				const itemSuiteQL = `
                    SELECT
                        i.id,
                        i.itemid,
                        i.displayname,
                        i.description,
                        i.itemtype,
                        ipi.baseprice,
                        i.averagecost,
                        ail.quantityavailable,
                        ail.quantityonhand,
                        ail.reorderpoint,
                        i.preferredlocation,
                        i.unitstype,
                        i.stockunit,
                        i.purchaseunit,
                        i.saleunit,
                        i.weight,
                        i.weightunit,
                        i.createddate,
                        i.isinactive
                    FROM 
                        item i
                        LEFT JOIN aggregateItemLocation ail ON i.id = ail.item
                        LEFT JOIN ItemPresentationItem ipi ON i.id = ipi.superitem
					WHERE 
					    i.id = ?`;

				const itemSuiteQLResult = await query.runSuiteQL.promise({
					query: itemSuiteQL,
					params: [itemId],
				});

				const itemData = itemSuiteQLResult.asMappedResults()[0];

				if (!itemData) {
					return {error: `No Item found with id ${itemId}`};
				}
				return JSON.stringify({
					id: itemData.id,
					itemId: itemData.itemid,
					displayName: itemData.displayname,
					description: itemData.description,
					type: itemData.itemtype,
					basePrice: itemData.baseprice,
					cost: itemData.averagecost,
					quantityAvailable: itemData.quantityavailable,
					quantityOnHand: itemData.quantityonhand,
					reorderPoint: itemData.reorderpoint,
					preferredLocation: itemData.preferredlocation,
					unitsType: itemData.unitstype,
					stockUnit: itemData.stockunit,
					purchaseUnit: itemData.purchaseunit,
					saleUnit: itemData.saleunit,
					weight: itemData.weight,
					weightUnit: itemData.weightunit,
					created: itemData.createddate,
					isInactive: itemData.isinactive,
				});
			} catch (e) {
				return {
					error: `There was an error getting Item details: ${e.message}`,
				};
			}
		},
		checkInventoryLevels: async function (params) {
			try {
				let inventorySuiteQL = `
                    SELECT 
                        i.id, i.itemid, ail.quantityavailable 
                    FROM 
                        item i
                        LEFT JOIN aggregateItemLocation ail ON i.id = ail.item
                `;
				let customerSuiteQLParams = [];

				if (params.locationId) {
					inventorySuiteQL += ` WHERE i.location = ?`;
					customerSuiteQLParams.push(params.locationId);
				}

				const inventorySuiteQLResult = await query.runSuiteQL.promise({
					query: inventorySuiteQL,
					params: customerSuiteQLParams,
				});

				const inventory = inventorySuiteQLResult.asMappedResults().map((item) => ({
					itemId: item.id,
					item: item.itemid,
					available: item.quantityavailable,
				}));

				return JSON.stringify(inventory);
			} catch (error) {
				return {
					error: `Error checking inventory levels: ${error.toString()}`,
				};
			}
		},
	};
});
