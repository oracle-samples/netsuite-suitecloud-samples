import {ImmutableUpdate} from '@uif-js/core';
import {ActionType, AtomicAction} from './Action';
import {Item360State} from './InitialState';

export default function reducer(state: Item360State, action: AtomicAction): Item360State {
	switch (action.type) {
		// Items
		case ActionType.ITEMS_SET_LOADING: {
			return ImmutableUpdate.of(state, (state) => {
				state.items.loading = action.value;
			});
		}
		case ActionType.ITEMS_LOAD_DATA: {
			return ImmutableUpdate.of(state, (state) => {
				state.items.data.clear();
				state.items.data.add({items: action.items});
			});
		}
		// Item
		case ActionType.ITEM_SET_LOADING: {
			return ImmutableUpdate.of(state, (state) => {
				state.item.loading = action.value;
			});
		}
		case ActionType.ITEM_LOAD_DATA: {
			return ImmutableUpdate.of(state, (state) => {
				state.item.record = action.record;
			});
		}
		case ActionType.ITEM_SET_SAVING: {
			return ImmutableUpdate.of(state, (state) => {
				state.item.saving = action.value;
			});
		}
		// Reminders
		case ActionType.REMINDERS_SET_LOADING: {
			return ImmutableUpdate.of(state, (state) => {
				state.dashboard.reminders.loading = action.value;
			});
		}
		case ActionType.REMINDERS_LOAD_DATA: {
			return ImmutableUpdate.of(state, (state) => {
				state.dashboard.reminders.data = action.reminders;
			});
		}
		// Chart
		case ActionType.CHART_LOAD_DATA: {
			return ImmutableUpdate.of(state, (state) => {
				state.dashboard.chart.data = action.data;
			});
		}
		// Top lists
		case ActionType.TOP_EXPENSIVE_SET: {
			return ImmutableUpdate.of(state, (state) => {
				state.dashboard.topMostExpensive = action.items;
			});
		}
		case ActionType.TOP_CHEAPEST_SET: {
			return ImmutableUpdate.of(state, (state) => {
				state.dashboard.topCheapest = action.items;
			});
		}
		// Profile
		case ActionType.PROFILE_SET_LOADING: {
			return ImmutableUpdate.of(state, (state) => {
				state.profile.loading = action.value;
			});
		}
		case ActionType.PROFILE_LOAD_DATA: {
			return ImmutableUpdate.of(state, (state) => {
				state.profile.data = action.data;
			});
		}
		// Default handler for any other actions that might occur
		default: {
			return state;
		}
	}
}
