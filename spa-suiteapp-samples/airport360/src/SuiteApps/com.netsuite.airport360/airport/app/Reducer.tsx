import {ActionType} from './Action';
import {ImmutableUpdate} from '@uif-js/core';

export default function reducer(state, action) {
	const actionMap = new Map([
		// Start loading gates info
		[
			ActionType.GATES_SET_LOADING,
			(state) => {
				const {value} = action;
				return ImmutableUpdate.of(state, (state) => {
					state.gates.loading = value;
				});
			},
		],
		// Finish loading gates info
		[
			ActionType.GATES_LOADED,
			(state) => {
				const {gates} = action;
				return ImmutableUpdate.of(state, (state) => {
					state.gates.data.clear();
					state.gates.data.add({items: gates});
				});
			},
		],
		// Start loading flights info
		[
			ActionType.FLIGHTS_SET_LOADING,
			(state) => {
				const {value} = action;
				return ImmutableUpdate.of(state, (state) => {
					state.flights.loading = value;
				});
			},
		],
		// Finish loading flights info
		[
			ActionType.FLIGHTS_LOADED,
			(state) => {
				const {flights} = action;
				return ImmutableUpdate.of(state, (state) => {
					state.flights.data.clear();
					state.flights.data.add({items: flights});
					state.flights.missingGates = isMissingGates(flights);
				});
			},
		],
		// Gate closed
		[
			ActionType.GATE_CLOSED,
			(state) => {
				const {gate} = action;
				return ImmutableUpdate.of(state, (state) => {
					const newFlights = state.flights.data.toArray();
					newFlights.forEach((flight, index) => {
						if (flight.gateNumber && flight.gateNumber.label === gate) {
							newFlights[index].gateNumber.label = '';
						}
					});
					state.flights.data.clear();
					state.flights.data.add({items: newFlights});
				});
			},
		],
		// Gate toggled
		[
			ActionType.GATE_TOGGLED,
			(state) => {
				const {index} = action;
				return ImmutableUpdate.of(state, (state) => {
					const newGates = state.gates.data.toArray();
					const active = newGates[index].active;
					newGates[index].active = !active;
					state.gates.data.clear();
					state.gates.data.add({items: newGates});
				});
			},
		],
	]);
	const mappedAction = actionMap.get(action.type);
	return mappedAction ? mappedAction(state) : state;
}

function isMissingGates(flightList) {
	return !(flightList.filter((flight) => flight.gateNumber).length === flightList.length);
}
