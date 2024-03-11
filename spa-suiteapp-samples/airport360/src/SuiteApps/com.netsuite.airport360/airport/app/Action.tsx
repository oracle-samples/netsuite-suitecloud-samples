// Enumeration of available actions
import {flightInfo, gateInfo} from '../../../../../types/appTypes';
import FlightService from '../services/FlightService';
import GateService from '../services/GateService';

const ActionType = {
	GATES_SET_LOADING: Symbol('gatesSetLoading'),
	GATES_LOADED: Symbol('gatesLoaded'),
	FLIGHTS_SET_LOADING: Symbol('flightsSetLoading'),
	FLIGHTS_LOADED: Symbol('flightsLoaded'),
	GATE_CLOSED: Symbol('gateClosed'),
	GATE_TOGGLED: Symbol('gateToggled'),
};

// Action function
const Action = {
	/* Atomic actions */

	// Set gates loading status
	gatesSetLoading(value: boolean) {
		return {
			type: ActionType.GATES_SET_LOADING,
			value,
		};
	},
	// Load gates
	gatesLoaded(gates: [gateInfo]) {
		return {
			type: ActionType.GATES_LOADED,
			gates,
		};
	},
	// Set flights loading status
	flightsSetLoading(value: boolean) {
		return {
			type: ActionType.FLIGHTS_SET_LOADING,
			value,
		};
	},
	// Load flights
	flightsLoaded(flights: flightInfo) {
		return {
			type: ActionType.FLIGHTS_LOADED,
			flights,
		};
	},
	// Set gate status to closed
	gateClosed(gate: gateInfo) {
		return {
			type: ActionType.GATE_CLOSED,
			gate,
		};
	},
	gateToggled(index: number) {
		return {
			type: ActionType.GATE_TOGGLED,
			index,
		};
	},
	/* Compound actions */
	// Handle loading of flights
	flightsLoad() {
		return async (dispatch): Promise<void> => {
			dispatch(Action.flightsSetLoading(true));
			const flights = await FlightService.getFlights();
			dispatch(Action.flightsLoaded(flights));
			dispatch(Action.flightsSetLoading(false));
		};
	},
	flightsUpdate(index: number, gate: number) {
		return async (dispatch): Promise<void> => {
			dispatch(Action.flightsSetLoading(true));
			const newFlights = await FlightService.assignGate(index, gate);
			dispatch(Action.flightsLoaded(newFlights));
			dispatch(Action.flightsSetLoading(false));
		};
	},
	// Handle loading of gates
	gatesLoad() {
		return async (dispatch): Promise<void> => {
			dispatch(Action.gatesSetLoading(true));
			const gates = await GateService.getGates();
			dispatch(Action.gatesLoaded(gates));
			dispatch(Action.gatesSetLoading(false));
		};
	},
};

export {ActionType, Action};
