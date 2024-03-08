import {ImmutableUpdate} from '@uif-js/core';
import {ActionType} from './Action.js';

export default function reducer(state, action) {
	switch (action.type) {
		// Reacts to ActionType.COUNTER_INCREMENT action
		case ActionType.COUNTER_INCREMENT: {
			// Increment counter by 1
			return ImmutableUpdate.of(state, (state) => {
				state.counter = state.counter + 1;
			});
		}
		// Reacts to ActionType.COUNTER_DECREMENT action
		case ActionType.COUNTER_DECREMENT: {
			// Decrement counter by 1
			return ImmutableUpdate.of(state, (state) => {
				state.counter = state.counter - 1;
			});
		}
		// Default handler for any other actions that might occur
		default: {
			return state;
		}
	}
}
