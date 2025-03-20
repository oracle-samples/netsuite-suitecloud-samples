import ServerDataService, {
	ChartServerData,
	ChartServerObject,
	ItemObject,
	ProfileServerObject,
	ReminderServerObject,
	RemindersServerObject,
} from '../service/ServerDataService';
import {Store, Type} from '@uif-js/core';
import record from 'N/record';

// Action types - enumeration of available actions
export enum ActionType {
	// Items
	ITEMS_SET_LOADING = 'itemsSetLoading',
	ITEMS_LOAD_DATA = 'itemsLoadData',
	// Item
	ITEM_SET_LOADING = 'itemSetLoading',
	ITEM_LOAD_DATA = 'itemLoadData',
	ITEM_SET_SAVING = 'itemSetSaving',
	// Reminders
	REMINDERS_SET_LOADING = 'remindersSetLoading',
	REMINDERS_LOAD_DATA = 'remindersLoadData',
	// Chart
	CHART_LOAD_DATA = 'chartLoadData',
	// Top Lists
	TOP_EXPENSIVE_SET = 'topExpensiveSet',
	TOP_CHEAPEST_SET = 'topCheapestSet',
	// Profile
	PROFILE_SET_LOADING = 'profileSetLoading',
	PROFILE_LOAD_DATA = 'profileSetLoadData',
}

// Action interfaces
export interface ItemsSetLoadingAction {
	type: typeof ActionType.ITEMS_SET_LOADING;
	value: boolean;
}

interface ItemsLoadDataAction {
	type: typeof ActionType.ITEMS_LOAD_DATA;
	items: ItemObject[];
}

interface ItemSetLoadingAction {
	type: typeof ActionType.ITEM_SET_LOADING;
	value: boolean;
}

interface ItemLoadDataAction {
	type: typeof ActionType.ITEM_LOAD_DATA;
	record: record.Record;
}

interface ItemSetSavingAction {
	type: typeof ActionType.ITEM_SET_SAVING;
	value: boolean;
}

interface RemindersSetLoadingAction {
	type: typeof ActionType.REMINDERS_SET_LOADING;
	value: boolean;
}

interface RemindersLoadDataAction {
	type: typeof ActionType.REMINDERS_LOAD_DATA;
	reminders: RemindersServerObject;
}

interface ChartLoadDataAction {
	type: typeof ActionType.CHART_LOAD_DATA;
	data: ChartServerObject;
}

interface TopExpensiveSetAction {
	type: typeof ActionType.TOP_EXPENSIVE_SET;
	items: ItemObject[];
}

interface TopCheapestSetAction {
	type: typeof ActionType.TOP_CHEAPEST_SET;
	items: ItemObject[];
}

interface ProfileSetLoadingAction {
	type: typeof ActionType.PROFILE_SET_LOADING;
	value: boolean;
}

interface ProfileLoadDataAction {
	type: typeof ActionType.PROFILE_LOAD_DATA;
	data: ProfileServerObject;
}

export type AtomicAction =
	| ItemsSetLoadingAction
	| ItemsLoadDataAction
	| ItemSetLoadingAction
	| ItemLoadDataAction
	| ItemSetSavingAction
	| RemindersSetLoadingAction
	| RemindersLoadDataAction
	| TopExpensiveSetAction
	| TopCheapestSetAction
	| ChartLoadDataAction
	| ProfileSetLoadingAction
	| ProfileLoadDataAction;

interface ItemResponseObject {
	result: boolean;
	error: {message: string} | null;
	recordId?: number | null;
}

// Action creators - functions that return the action object
export const Action = {
	/** Atomic action creators */
	// Items
	itemsSetLoading(value: boolean): ItemsSetLoadingAction {
		return {
			type: ActionType.ITEMS_SET_LOADING,
			value,
		};
	},
	itemsLoadData(items: ItemObject[]): ItemsLoadDataAction {
		return {
			type: ActionType.ITEMS_LOAD_DATA,
			items,
		};
	},
	// Item
	itemSetLoading(value: boolean): ItemSetLoadingAction {
		return {
			type: ActionType.ITEM_SET_LOADING,
			value,
		};
	},
	itemLoadData(record: record.Record): ItemLoadDataAction {
		return {
			type: ActionType.ITEM_LOAD_DATA,
			record,
		};
	},
	itemSetSaving(value: boolean): ItemSetSavingAction {
		return {
			type: ActionType.ITEM_SET_SAVING,
			value,
		};
	},
	// Reminders
	remindersSetLoading(value: boolean): RemindersSetLoadingAction {
		return {
			type: ActionType.REMINDERS_SET_LOADING,
			value,
		};
	},
	remindersLoadData(reminders: RemindersServerObject): RemindersLoadDataAction {
		return {
			type: ActionType.REMINDERS_LOAD_DATA,
			reminders,
		};
	},
	// Chart
	chartLoadData(data: ChartServerObject): ChartLoadDataAction {
		return {
			type: ActionType.CHART_LOAD_DATA,
			data,
		};
	},
	// Top lists
	topExpensiveSet(items: ItemObject[]): TopExpensiveSetAction {
		return {
			type: ActionType.TOP_EXPENSIVE_SET,
			items,
		};
	},
	topCheapestSet(items: ItemObject[]): TopCheapestSetAction {
		return {
			type: ActionType.TOP_CHEAPEST_SET,
			items,
		};
	},
	// Profile
	profileSetLoading(value: boolean): ProfileSetLoadingAction {
		return {
			type: ActionType.PROFILE_SET_LOADING,
			value,
		};
	},
	profileLoadData(data: ProfileServerObject): ProfileLoadDataAction {
		return {
			type: ActionType.PROFILE_LOAD_DATA,
			data,
		};
	},
	/** Compound action creators */
	// Items
	itemsLoad(): Store.ActionCreator {
		return async (dispatch: Store.DispatchFunc): Promise<void> => {
			dispatch(Action.itemsSetLoading(true));
			const items: ItemObject[] = await ServerDataService.itemsLoad();
			dispatch(Action.itemsLoadData(items));
			dispatch(Action.topExpensiveSet(getMostExpensive(items)));
			dispatch(Action.topCheapestSet(getCheapest(items)));
			dispatch(Action.chartLoadData(getChartData(items)));
			dispatch(Action.itemsSetLoading(false));
		};
	},
	// Item
	itemLoad(id: number): Store.ActionCreator {
		return async (dispatch: Store.DispatchFunc): Promise<void> => {
			dispatch(Action.itemSetLoading(true));
			const item: record.Record = await ServerDataService.itemLoad(id);
			dispatch(Action.itemLoadData(item));
			dispatch(Action.itemSetLoading(false));
		};
	},
	itemCreate(): Store.ActionCreator {
		return async (dispatch: Store.DispatchFunc): Promise<void> => {
			dispatch(Action.itemSetLoading(true));
			const item: record.Record = await ServerDataService.itemCreate();
			dispatch(Action.itemLoadData(item));
			dispatch(Action.itemSetLoading(false));
		};
	},
	itemDelete(id: number): Store.ActionCreator {
		return async (dispatch: Store.DispatchFunc): Promise<ItemResponseObject> => {
			dispatch(Action.itemsSetLoading(true));
			const response: ItemResponseObject = {
				result: true,
				error: null,
			};
			try {
				await ServerDataService.itemDelete(id);
			} catch (err) {
				response.result = false;
				response.error = err;
			}
			const items: ItemObject[] = await ServerDataService.itemsLoad();
			dispatch(Action.itemsLoadData(items));
			dispatch(Action.topExpensiveSet(getMostExpensive(items)));
			dispatch(Action.topCheapestSet(getCheapest(items)));
			dispatch(Action.itemsSetLoading(false));
			return response;
		};
	},
	itemSave(item: record.Record): Store.ActionCreator {
		return async (dispatch: Store.DispatchFunc): Promise<ItemResponseObject> => {
			dispatch(Action.itemSetSaving(true));
			const response: ItemResponseObject = {
				result: true,
				error: null,
				recordId: null,
			};
			try {
				response.recordId = await ServerDataService.itemSave(item);
			} catch (err) {
				response.result = false;
				response.error = err;
			}
			dispatch(Action.itemSetSaving(false));
			return response;
		};
	},
	// Reminders
	remindersLoad(): Store.ActionCreator {
		return async (dispatch: Store.DispatchFunc): Promise<void> => {
			dispatch(Action.remindersSetLoading(true));
			const reminders: ReminderServerObject[] = await ServerDataService.remindersLoad();
			dispatch(Action.remindersLoadData(reminders));
			dispatch(Action.remindersSetLoading(false));
		};
	},
	// Profile
	profileLoad(): Store.ActionCreator {
		return async (dispatch: Store.DispatchFunc): Promise<void> => {
			dispatch(Action.profileSetLoading(true));
			const profile: ProfileServerObject = await ServerDataService.profileLoadJSONData();
			dispatch(Action.profileLoadData(profile));
			dispatch(Action.profileSetLoading(false));
		};
	},
};

function getMostExpensive(items: ItemObject[]): ItemObject[] {
	return items
		.slice()
		.filter(({custrecord_pcpart_price}: {custrecord_pcpart_price: number}) =>
			Type.Number.is(custrecord_pcpart_price)
		)
		.sort((a: ItemObject, b: ItemObject) => b.custrecord_pcpart_price - a.custrecord_pcpart_price)
		.slice(0, 5);
}

function getCheapest(items: ItemObject[]): ItemObject[] {
	return items
		.slice()
		.filter(({custrecord_pcpart_price}: {custrecord_pcpart_price: number}) =>
			Type.Number.is(custrecord_pcpart_price)
		)
		.sort((a: ItemObject, b: ItemObject) => a.custrecord_pcpart_price - b.custrecord_pcpart_price)
		.slice(0, 5);
}

function getChartData(items: ItemObject[]): ChartServerObject {
	const vendors: Record<string, number> = {};
	items.forEach(({custrecord_pcpart_vendor_name}) => {
		if (vendors[custrecord_pcpart_vendor_name] !== undefined) {
			vendors[custrecord_pcpart_vendor_name] += 1;
		} else {
			vendors[custrecord_pcpart_vendor_name] = 1;
		}
	});
	const data: ChartServerData = [];
	for (const [vendor, items] of Object.entries(vendors)) {
		data.push({
			name: vendor,
			y: items,
		});
	}
	return [
		{
			name: 'Number of Items',
			data,
		},
	];
}
