import {expect, it, jest, describe, afterEach} from '@jest/globals';
import Route from '../../../../src/SuiteApps/com.netsuite.airport360/airport/app/Route';

const MOCK_FLIGHT = [
	{
		id: 1,
		origin: {code: 'BCN', name: 'Barcelona'},
		destination: {code: 'PAR', name: 'Paris'},
		departure: undefined,
		arrival: undefined,
		status: 'DELAYED',
		gateNumber: {route: {route: Route.GATE, parameters: {gateID: '1A'}}, label: '1A'},
		airline: 'AA',
		active: true,
		flightNumber: 1,
		boardingStatus: 'BOARDING',
		altitude: '0ft',
		speed: '0kmph',
		model: 'Jumbo Jet',
	},
	{
		id: 2,
		origin: {code: 'BCN', name: 'Barcelona'},
		destination: {code: 'MAD', name: 'Madrid'},
		departure: undefined,
		arrival: undefined,
		status: 'PREPARED',
		gateNumber: {route: {route: Route.GATE, parameters: {gateID: '1B'}}, label: '1B'},
		airline: 'AA',
		active: true,
		flightNumber: 2,
		boardingStatus: 'GO TO GATE',
		altitude: '0ft',
		speed: '0kmph',
		model: 'Jumbo Jet',
	},
];
const MOCK_GATES = [
	{
		id: 42,
		gateNumber: '42',
		airline: '4Airline2',
		flight: 'Flight 42',
		active: true,
	},
];
import {ActionType, Action} from '../../../../src/SuiteApps/com.netsuite.airport360/airport/app/Action';
import {FlightInfo, GateInfo} from '../../../../types/appTypes';

const mockDispatch = jest.fn();
jest.mock('../../../../src/SuiteApps/com.netsuite.airport360/airport/services/FlightService', () => ({
	getFlights: jest.fn().mockReturnValue(MOCK_FLIGHT),
	assignGate: jest.fn(),
}));
jest.mock('../../../../src/SuiteApps/com.netsuite.airport360/airport/services/GateService', () => ({
	getGates: jest.fn().mockReturnValue(MOCK_GATES),
	toggleGate: jest.fn(),
	unassignGates: jest.fn(),
}));

describe('Test app actions', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('gatesSetLoading action should return the expected object', async () => {
		//ARRANGE
		const testValue = true;

		//ACT
		const action = Action.gatesSetLoading(testValue);

		//ASSERT
		expect(action.type).toBe(ActionType.GATES_SET_LOADING);
		expect(action.value).toBe(testValue);
	});

	it('gatesLoaded action should return the expected object', async () => {
		//ARRANGE
		const testGates: [GateInfo] = [
			{id: 42, gateNumber: '42', airline: '4Airline2', flight: 'Flight 42', active: true},
		];

		//ACT
		const action = Action.gatesLoaded(testGates);

		//ASSERT
		expect(action.type).toBe(ActionType.GATES_LOADED);
		expect(action.gates).toBe(testGates);
	});

	it('flightsSetLoading action should return the expected object', async () => {
		//ARRANGE
		const testValue = true;

		//ACT
		const action = Action.flightsSetLoading(testValue);

		//ASSERT
		expect(action.type).toBe(ActionType.FLIGHTS_SET_LOADING);
		expect(action.value).toBe(testValue);
	});

	it('flightsLoaded action should return the expected object', async () => {
		//ARRANGE
		const testFlight: FlightInfo = {
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
		};

		//ACT
		const action = Action.flightsLoaded(testFlight);

		//ASSERT
		expect(action.type).toBe(ActionType.FLIGHTS_LOADED);
		expect(action.flights).toBe(testFlight);
	});

	it('gateClosed action should return the expected object', async () => {
		//ARRANGE
		const testGate: GateInfo = {
			id: 42,
			gateNumber: '42',
			airline: '42',
			flight: '42',
			active: true,
		};

		//ACT
		const action = Action.gateClosed(testGate);

		//ASSERT
		expect(action.type).toBe(ActionType.GATE_CLOSED);
		expect(action.gate).toBe(testGate);
	});

	it('gateToggle action should return the expected object', async () => {
		//ARRANGE
		const testGateNumber = 42;

		//ACT
		const action = Action.gateToggled(testGateNumber);

		//ASSERT
		expect(action.type).toBe(ActionType.GATE_TOGGLED);
		expect(action.index).toBe(testGateNumber);
	});

	it('flightsLoad action should return the expected object', async () => {
		//ACT
		const action = Action.flightsLoad();
		expect(action).toBeDefined();
		await action(mockDispatch);

		//ASSERT
		expect(mockDispatch).toBeCalledTimes(3);
	});

	it('flightsUpdate action should return the expected object', async () => {
		//ACT
		const action = Action.flightsUpdate(42, 43);
		expect(action).toBeDefined();
		await action(mockDispatch);

		//ASSERT
		expect(mockDispatch).toBeCalledTimes(3);
	});

	it('gatesLoad action should return the expected object', async () => {
		//ACT
		const action = Action.gatesLoad();
		expect(action).toBeDefined();
		await action(mockDispatch);

		//ASSERT
		expect(mockDispatch).toBeCalledTimes(3);
	});
});
