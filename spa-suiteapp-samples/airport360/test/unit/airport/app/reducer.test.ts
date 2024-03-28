import {afterEach, beforeEach, describe, expect, it, jest} from '@jest/globals';
import reducer from '../../../../src/SuiteApps/com.netsuite.airport360/airport/app/Reducer';
import {Action} from '../../../../src/SuiteApps/com.netsuite.airport360/airport/app/Action';
import initialState from '../../../../src/SuiteApps/com.netsuite.airport360/airport/app/InitialState';
import {ImmutableUpdate} from '../../../stubs/@uif-js/core';
import {gateInfo} from '../../../../types/appTypes';
import Route from '../../../../src/SuiteApps/com.netsuite.airport360/airport/app/Route';

describe('Test app reducer', () => {
	const ofspy = jest.spyOn(ImmutableUpdate, 'of');
	const state = initialState;

	beforeEach(() => {
		jest.resetModules();
	});
	afterEach(() => {
		jest.clearAllMocks();
	});
	// Start loading gates info
	it('Reduce ActionType GATES_SET_LOADING should update the gate loading state property', async () => {
		// ARRANGE
		const testValue = true;
		// ACT
		reducer(initialState, Action.gatesSetLoading(testValue));
		// ASSERT
		expect(ofspy).toHaveBeenCalledWith(initialState, expect.any(Function));
		expect(ofspy).toHaveBeenCalledTimes(1);
		expect(initialState.gates.loading).toBe(testValue);
	});
	// Finish loading gates info
	it('Reduce ActionType GATES_LOADED should add gates items and have them loaded', async () => {
		// ARRANGE
		const testGates: [gateInfo] = [
			{id: 42, gateNumber: '42', airline: '4Airline2', flight: 'Flight 42', active: true},
		];
		let items = {items: testGates};
		state.gates.data.clear = jest.fn();
		state.gates.data.add = jest.fn((items): any => {});
		// ACT
		reducer(initialState, Action.gatesLoaded(testGates));
		// ASSERT
		expect(ofspy).toHaveBeenCalledWith(initialState, expect.any(Function));
		expect(ofspy).toHaveBeenCalledTimes(1);
		expect(initialState.gates.data.clear).toHaveBeenCalled();
		expect(initialState.gates.data.add).toHaveBeenCalledWith(items);
	});
	// Start loading flights info
	it('Reduce ActionType FLIGHTS_SET_LOADING should update the flight loading state property', async () => {
		// ARRANGE
		const testValue = true;
		// ACT
		reducer(initialState, Action.flightsSetLoading(testValue));
		// ASSERT
		expect(ofspy).toHaveBeenCalledWith(initialState, expect.any(Function));
		expect(ofspy).toHaveBeenCalledTimes(1);
		expect(initialState.flights.loading).toBe(testValue);
	});
	// Finish loading flights info
	it('Reduce ActionType FLIGHTS_LOADED should add flights items and have them loaded', async () => {
		//ARRANGE
		const testFlight: any = [
			{
				id: 42,
				origin: {
					code: '42',
					name: 'BCN',
				},
				destination: {
					code: '24',
					name: 'LV',
				},
				departure: undefined,
				arrival: undefined,
				status: 'ON_TIME',
				gateNumber: {route: {route: Route.GATE, parameters: {gateID: '42'}}, label: '42'},
				airline: 'Airline42',
				active: true,
				flightNumber: 42,
				boardingStatus: 'OPEN',
				altitude: '0000',
				speed: '0000',
				model: 'Boieng 747',
			},
		];
		const items = {items: testFlight};
		state.flights.data.clear = jest.fn();
		state.flights.data.add = jest.fn((): any => {});
		state.flights.missingGates = true;

		// ACT
		reducer(initialState, Action.flightsLoaded(testFlight));
		// ASSERT
		expect(ofspy).toHaveBeenCalledWith(state, expect.any(Function));
		expect(ofspy).toHaveBeenCalledTimes(1);
		expect(initialState.flights.data.clear).toHaveBeenCalled();
		expect(initialState.flights.data.add).toHaveBeenCalledWith(items);
		// expect(state.flights.missingGates).toBe(true);
	});
	// Gate closed
	it('Reduce ActionType GATE_CLOSED should add new flights', async () => {
		//ARRANGE
		const testGates: any = '1B';
		const flights = {gateNumber: {route: {route: Route.GATE, parameters: {gateID: '1B'}}, label: '1B'}};
		state.flights.data.toArray = jest.fn((): any => {
			return [flights];
		});

		// ACT
		reducer(initialState, Action.gateClosed(testGates));

		// ASSERT
		expect(ofspy).toHaveBeenCalledWith(initialState, expect.any(Function));
		expect(ofspy).toHaveBeenCalledTimes(1);
		expect(initialState.flights.data.clear).toHaveBeenCalled();
		expect(initialState.flights.data.add).toHaveBeenCalledWith(expect.any(Object));
	});

	// Gate toggled
	it('Reduce ActionType GATE_TOGGLED should add new gates', async () => {
		//ARRANGE
		const testGateNumber = 0;
		const gatesData = [{id: 1, gateNumber: '1A', airline: 'AA', flight: 'IB42', active: true}];
		state.gates.data.toArray = jest.fn((): any => {
			return gatesData;
		});
		// ACT
		reducer(initialState, Action.gateToggled(testGateNumber));
		// ASSERT
		expect(ofspy).toHaveBeenCalledWith(initialState, expect.any(Function));
		expect(ofspy).toHaveBeenCalledTimes(1);
		expect(initialState.gates.data.clear).toHaveBeenCalled();
		expect(initialState.gates.data.add).toHaveBeenCalledWith(expect.any(Object));
	});
	// No state
	it('Reduce ActionType doesnt exist', async () => {
		// ACT
		reducer(initialState, []);
		// ASSERT
		expect(ofspy).toHaveBeenCalledTimes(0);
	});
});
