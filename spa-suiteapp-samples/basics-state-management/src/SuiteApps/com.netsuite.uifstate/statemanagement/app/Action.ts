// Action types - enumeration of available actions
const ActionType = {
	COUNTER_INCREMENT: Symbol('counterIncrement'),
	COUNTER_DECREMENT: Symbol('counterDecrement'),
};

// Action creators - functions that return the action object
const Action = {
	// Increment counter
	counterIncrement() {
		return {
			type: ActionType.COUNTER_INCREMENT,
		};
	},
	// Decrement counter
	counterDecrement() {
		return {
			type: ActionType.COUNTER_DECREMENT,
		};
	},
};

export {ActionType, Action};
