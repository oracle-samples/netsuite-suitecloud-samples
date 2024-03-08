import {ArrayDataSource} from '@uif-js/core';
import record from 'N/record';
import {ChartServerObject, ItemObject, ProfileServerObject, ReminderServerObject} from '../service/ServerDataService';

// State interfaces
export interface Item360StateItems {
	loading: boolean;
	data: ArrayDataSource;
}

export interface Item360StateItem {
	loading: boolean;
	saving: boolean;
	record: record.Record;
}

export interface Item360StateDashboardReminders {
	loading: boolean;
	data: ReminderServerObject[];
}

export interface Item360StateDashboardChart {
	data: ChartServerObject;
}

export interface Item360StateDashboard {
	reminders: Item360StateDashboardReminders;
	chart: Item360StateDashboardChart;
	topMostExpensive: ItemObject[];
	topCheapest: ItemObject[];
}

export interface Item360StateProfile {
	loading: boolean;
	data?: ProfileServerObject;
}

export interface Item360State {
	items: Item360StateItems;
	item: Item360StateItem;
	dashboard: Item360StateDashboard;
	profile: Item360StateProfile;
}

// Initial state
export const initialState: Item360State = {
	items: {
		loading: true,
		data: new ArrayDataSource([]),
	},
	item: {
		loading: true,
		saving: false,
		record: null,
	},
	dashboard: {
		reminders: {
			loading: true,
			data: [],
		},
		chart: {
			data: [],
		},
		topMostExpensive: [],
		topCheapest: [],
	},
	profile: {
		loading: true,
		data: undefined,
	},
};
