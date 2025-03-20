import query, {runSuiteQL} from 'N/query';
import record from 'N/record';
import {Async} from '@uif-js/core';
import * as ItemRecord from '../data/ItemRecord';
import * as VendorRecord from '../data/VendorRecord';
import * as CategoryList from '../data/CategoryList';

export interface ReminderServerObject {
	description: string;
	count?: number;
	color: string;
}

export type RemindersServerObject = ReminderServerObject[];

interface ChartServerDataItem {
	name: string;
	y: number;
}

export type ChartServerData = ChartServerDataItem[];

export interface ChartServerSeriesObject {
	name: string;
	data: ChartServerData;
}

export type ChartServerObject = ChartServerSeriesObject[];

export interface ProfileServerObject {
	name: string;
	surname: string;
	position: string;
	email: string;
	phone: string;
	address: string;
}

export interface ItemObject {
	id: number;
	name: string;
	custrecord_pcpart_id: number;
	custrecord_pcpart_category: string;
	custrecord_pcpart_description: string;
	custrecord_pcpart_price: number;
	custrecord_pcpart_soldquantity: number;
	custrecord_pcpart_release: string;
	custrecord_pcpart_weight: number;
	custrecord_pcpart_instock: string;
	custrecord_pcpart_category_name: string;
	custrecord_pcpart_vendor_name: string;
	vendorRecordId: string | number | boolean;
}

export default {
	// Items
	itemsLoad: async (): Promise<ItemObject[]> => {
		const itemFields = [
			`${ItemRecord.Type}.${ItemRecord.FieldName.ID}`,
			`${ItemRecord.Type}.${ItemRecord.FieldName.NAME}`,
			`${ItemRecord.Type}.${ItemRecord.FieldName.CATEGORY}`,
			`${ItemRecord.Type}.${ItemRecord.FieldName.DESCRIPTION}`,
			`${ItemRecord.Type}.${ItemRecord.FieldName.PRICE}`,
			`${ItemRecord.Type}.${ItemRecord.FieldName.SOLD_QUANTITY}`,
			`${ItemRecord.Type}.${ItemRecord.FieldName.RELEASE}`,
			`${ItemRecord.Type}.${ItemRecord.FieldName.WEIGHT}`,
			`${ItemRecord.Type}.${ItemRecord.FieldName.IN_STOCK}`,
			`${VendorRecord.Type}.${VendorRecord.FieldName.NAME} AS ${ItemRecord.FieldName.VENDOR_NAME}`,
			`${VendorRecord.Type}.${VendorRecord.FieldName.ID} AS ${ItemRecord.FieldName.VENDOR_ID}`,
			`${CategoryList.Type}.${CategoryList.FieldName.NAME} AS ${ItemRecord.FieldName.CATEGORY_NAME}`,
		];
		const vendorJoin = `LEFT OUTER JOIN ${VendorRecord.Type} ON ${ItemRecord.Type}.${ItemRecord.FieldName.VENDOR} = ${VendorRecord.Type}.${VendorRecord.FieldName.ID}`;
		const categoryJoin = `LEFT OUTER JOIN ${CategoryList.Type} ON ${ItemRecord.Type}.${ItemRecord.FieldName.CATEGORY} = ${CategoryList.Type}.${CategoryList.FieldName.ID}`;
		const itemsSuiteQL = `SELECT ${itemFields}
                              FROM ${ItemRecord.Type} ${vendorJoin} ${categoryJoin}`;
		const vendorRecordIdSuiteQl = `SELECT internalid
                                       from customrecordtype
                                       where scriptid = UPPER('${VendorRecord.Type}')`;

		const [items, vendorRecordIdArray]: [query.ResultSet, query.ResultSet] = await Promise.all([
			runSuiteQL.promise({
				query: itemsSuiteQL,
			}),
			runSuiteQL.promise({
				query: vendorRecordIdSuiteQl,
			}),
		]);
		const vendorRecordId: string | number | boolean | null = vendorRecordIdArray.asMappedResults()[0].internalid;
		await artificialDelay();
		const result = items.asMappedResults().map((item: query.QueryResultMap) => {
			return {
				...item,
				vendorRecordId,
			};
		});
		// @ts-expect-error types are not complete
		return result;
	},
	// Item
	itemLoad: async (id: number): Promise<record.Record> => {
		await artificialDelay();
		// eslint-disable-next-line
		return await record.load.promise({
			type: ItemRecord.Type,
			id,
			isDynamic: true,
		});
	},
	itemCreate: async (): Promise<record.Record> => {
		await artificialDelay();
		// eslint-disable-next-line
		return await record.create.promise({
			type: ItemRecord.Type,
			isDynamic: true,
		});
	},
	itemSave: async (item: record.Record): Promise<number> => {
		await artificialDelay();
		return await item.save.promise();
	},
	itemDelete: async (id: number): Promise<number> => {
		await artificialDelay();
		// eslint-disable-next-line
		return await record.delete.promise({
			type: ItemRecord.Type,
			id,
		});
	},
	// Reminders
	remindersLoad: async (): Promise<ReminderServerObject[]> => {
		await artificialDelay();
		return [
			{
				description: 'First reminder',
				count: 42,
				color: 'info',
			},
			{
				description: 'Second reminder',
				count: 24,
				color: 'success',
			},
			{
				description: 'Third reminder',
				count: 12,
				color: 'danger',
			},
		];
	},
	// Profile
	profileLoadJSONData: async (): Promise<ProfileServerObject> => {
		const response = await fetch('/spa-app/com.netsuite.uifitem360/item360/assets/UserData.json');
		const data = await response.json();
		await artificialDelay();
		return data;
	},
};

// Generates random number in given range
function getRandomInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creates an artificial random delay - used in order for loaders/skeletons to be visible on page for a longer noticeable time
async function artificialDelay(): Promise<void> {
	await Async.delay(getRandomInt(1000, 2000));
}
