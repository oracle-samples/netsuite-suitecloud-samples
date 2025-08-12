/*
 * inventory.js
 * @NApiVersion 2.1
 * @NModuleScope Public
 */
define(["N/query"], function (query) {
  return {
    getItemDetails: function (params) {
      var itemId = params.itemId;
      if (!itemId) {
        return { error: "Missing item ID" };
      }

      try {
        var itemQuery = query.create({
          type: query.Type.ITEM,
        });

        itemQuery.condition = itemQuery.createCondition({
          fieldId: "id",
          operator: query.Operator.ANY_OF,
          values: [itemId],
        });

        itemQuery.columns = [
          itemQuery.createColumn({ fieldId: "id" }),
          itemQuery.createColumn({ fieldId: "itemid" }),
          itemQuery.createColumn({ fieldId: "displayname" }),
          itemQuery.createColumn({ fieldId: "description" }),
          itemQuery.createColumn({ fieldId: "itemtype" }),
          itemQuery.createColumn({ fieldId: "presentationitem.baseprice" }),
          itemQuery.createColumn({ fieldId: "averagecost" }),
          itemQuery.createColumn({ fieldId: "locations.quantityavailable" }),
          itemQuery.createColumn({ fieldId: "locations.quantityonhand" }),
          itemQuery.createColumn({ fieldId: "locations.reorderpoint" }),
          itemQuery.createColumn({ fieldId: "preferredlocation" }),
          itemQuery.createColumn({ fieldId: "unitstype" }),
          itemQuery.createColumn({ fieldId: "stockunit" }),
          itemQuery.createColumn({ fieldId: "purchaseunit" }),
          itemQuery.createColumn({ fieldId: "saleunit" }),
          itemQuery.createColumn({ fieldId: "weight" }),
          itemQuery.createColumn({ fieldId: "weightunit" }),
          itemQuery.createColumn({ fieldId: "createddate" }),
          itemQuery.createColumn({ fieldId: "isinactive" }),
        ];

        var itemResultSet = itemQuery.run();
        var itemResults = itemResultSet.results;
        var itemData = itemResults[0];

        if (!itemData) {
          return { error: `No Item found with id ${itemId}` };
        }

        return JSON.stringify({
          id: itemData.values[0],
          itemId: itemData.values[1],
          displayName: itemData.values[2],
          description: itemData.values[3],
          type: itemData.values[4],
          basePrice: itemData.values[5],
          cost: itemData.values[6],
          quantityAvailable: itemData.values[7],
          quantityOnHand: itemData.values[8],
          reorderPoint: itemData.values[9],
          preferredLocation: itemData.values[10],
          unitsType: itemData.values[11],
          stockUnit: itemData.values[12],
          purchaseUnit: itemData.values[13],
          saleUnit: itemData.values[14],
          weight: itemData.values[15],
          weightUnit: itemData.values[16],
          created: itemData.values[17],
          isInactive: itemData.values[18],
        });
      } catch (e) {
        return {
          error: `There was an error getting Item details: ${e.message}`,
        };
      }
    },
    checkInventoryLevels: function (params) {
      try {
        var inventoryQuery = query.create({
          type: query.Type.ITEM,
        });

        inventoryQuery.columns = [
          inventoryQuery.createColumn({ fieldId: "id" }),
          inventoryQuery.createColumn({ fieldId: "itemid" }),
          inventoryQuery.createColumn({
            fieldId: "locations.quantityavailable",
          }),
        ];

        if (params.locationId) {
          inventoryQuery.condition = inventoryQuery.createCondition({
            fieldId: "location",
            operator: query.Operator.ANY_OF,
            values: params.locationId,
          });
        }

        // Execute query and get results
        var resultSet = inventoryQuery.run();
        var results = [];

        resultSet.results.forEach(function (result) {
          results.push({
            itemId: result.values[0],
            item: result.values[1],
            available: result.values[2],
          });
        });

        return JSON.stringify(results);
      } catch (error) {
        return {
          error: `Error checking inventory levels: ${error.toString()}`,
        };
      }
    },
  };
});
