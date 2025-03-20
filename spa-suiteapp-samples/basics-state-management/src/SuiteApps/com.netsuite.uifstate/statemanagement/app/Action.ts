// Action types - enumeration of available actions
export enum ActionType {
	COUNTER_INCREMENT = 'counterIncrement',
	COUNTER_DECREMENT = 'counterDecrement',
}

export interface CounterIncrementAction {
	type: typeof ActionType.COUNTER_INCREMENT;
}

export interface CounterDecrementAction {
	type: typeof ActionType.COUNTER_DECREMENT;
}

export type AtomicAction = CounterIncrementAction | CounterDecrementAction;

// Action creators - functions that return the action object
export const Action = {
	// Increment counter
	counterIncrement(): CounterIncrementAction {
		return {
			type: ActionType.COUNTER_INCREMENT,
		};
	},
	// Decrement counter
	counterDecrement(): CounterDecrementAction {
		return {
			type: ActionType.COUNTER_DECREMENT,
		};
	},
};
