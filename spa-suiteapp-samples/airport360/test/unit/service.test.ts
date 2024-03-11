import {expect, it, jest, describe} from '@jest/globals';
import Route from '../../src/SuiteApps/com.netsuite.airport360/airport/app/Route';

const MOCK_FLIGHT: flightInfo[] = [
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
	{
		id: 3,
		origin: {code: 'BCN', name: 'Barcelona'},
		destination: {code: 'OVD', name: 'Oviedo'},
		departure: undefined,
		arrival: undefined,
		status: 'PREPARED',
		gateNumber: {route: {route: Route.GATE, parameters: {gateID: '2A'}}, label: '2A'},
		airline: 'AA',
		active: true,
		flightNumber: 3,
		boardingStatus: 'CLOSED',
		altitude: '0ft',
		speed: '0kmph',
		model: 'Jumbo Jet',
	},
	{
		id: 4,
		origin: {code: 'BCN', name: 'Barcelona'},
		destination: {code: 'COR', name: 'Cordoba'},
		departure: undefined,
		arrival: undefined,
		status: 'PREPARED',
		gateNumber: {route: {route: Route.GATE, parameters: {gateID: '2B'}}, label: '2B'},
		airline: 'AA',
		active: true,
		flightNumber: 4,
		boardingStatus: 'CLOSED',
		altitude: '0ft',
		speed: '0kmph',
		model: 'Jumbo Jet',
	},
	{
		id: 5,
		origin: {code: 'BCN', name: 'Barcelona'},
		destination: {code: 'PAR', name: 'Paris'},
		departure: undefined,
		arrival: undefined,
		status: 'PREPARED',
		gateNumber: {route: {route: Route.GATE, parameters: {gateID: '3A'}}, label: '3A'},
		airline: 'AA',
		active: true,
		flightNumber: 5,
		boardingStatus: 'LAST CALL',
		altitude: '0ft',
		speed: '0kmph',
		model: 'Jumbo Jet',
	},
	{
		id: 6,
		origin: {code: 'OVD', name: 'Oviedo'},
		destination: {code: 'BCN', name: 'Barcelona'},
		departure: undefined,
		arrival: undefined,
		status: 'DELAYED',
		gateNumber: {route: {route: Route.GATE, parameters: {gateID: '3A'}}, label: '3A'},
		airline: 'AA',
		active: true,
		flightNumber: 6,
		boardingStatus: 'CLOSED',
		altitude: '0ft',
		speed: '0kmph',
		model: 'Jumbo Jet',
	},
	{
		id: 7,
		origin: {code: 'PAR', name: 'Paris'},
		destination: {code: 'BCN', name: 'Barcelona'},
		departure: undefined,
		arrival: undefined,
		status: 'DELAYED',
		gateNumber: {route: {route: Route.GATE, parameters: {gateID: '4A'}}, label: '4A'},
		airline: 'AA',
		active: true,
		flightNumber: 7,
		boardingStatus: 'BOARDING',
		altitude: '0ft',
		speed: '0kmph',
		model: 'Jumbo Jet',
	},
	{
		id: 8,
		origin: {code: 'LON', name: 'LONDON'},
		destination: {code: 'BCN', name: 'Barcelona'},
		departure: undefined,
		arrival: undefined,
		status: 'DELAYED',
		gateNumber: {route: {route: Route.GATE, parameters: {gateID: '4B'}}, label: '4B'},
		airline: 'AA',
		active: true,
		flightNumber: 8,
		boardingStatus: 'CLOSED',
		altitude: '0ft',
		speed: '0kmph',
		model: 'Jumbo Jet',
	},
	{
		id: 9,
		origin: {code: 'MIL', name: 'Milan'},
		destination: {code: 'BCN', name: 'Barcelona'},
		departure: undefined,
		arrival: undefined,
		status: 'DELAYED',
		gateNumber: {route: {route: Route.GATE, parameters: {gateID: '3B'}}, label: '3B'},
		airline: 'AA',
		active: true,
		flightNumber: 9,
		boardingStatus: 'BOARDING',
		altitude: '0ft',
		speed: '0kmph',
		model: 'Jumbo Jet',
	},
	{
		id: 10,
		origin: {code: 'GRE', name: 'Greece'},
		destination: {code: 'BCN', name: 'Barcelona'},
		departure: undefined,
		arrival: undefined,
		status: 'DELAYED',
		gateNumber: {route: {route: Route.GATE, parameters: {gateID: '5A'}}, label: '5A'},
		airline: 'AA',
		active: true,
		flightNumber: 10,
		boardingStatus: 'CLOSED',
		altitude: '0ft',
		speed: '0kmph',
		model: 'Jumbo Jet',
	},
	{
		id: 11,
		origin: {code: 'LON', name: 'London'},
		destination: {code: 'BCN', name: 'Barcelona'},
		departure: undefined,
		arrival: undefined,
		status: 'DELAYED',
		gateNumber: {route: {route: Route.GATE, parameters: {gateID: ''}}, label: ''},
		airline: 'AA',
		active: true,
		flightNumber: 11,
		boardingStatus: 'LAST CALL',
		altitude: '0ft',
		speed: '0kmph',
		model: 'Jumbo Jet',
	},
];

const MOCK_GATE: gateInfo[] = [
	{id: 1, gateNumber: '1A', airline: 'AA', flight: 'IB42', active: true},
	{id: 2, gateNumber: '1B', airline: 'AA', flight: 'IB43', active: true},
	{id: 3, gateNumber: '2A', airline: 'AA', flight: 'IB44', active: true},
	{id: 4, gateNumber: '2B', airline: 'AA', flight: 'IB45', active: true},
	{id: 5, gateNumber: '3A', airline: 'AA', flight: 'IB46', active: true},
	{id: 6, gateNumber: '3B', airline: 'AA', flight: 'IB47', active: true},
	{id: 7, gateNumber: '4A', airline: 'AA', flight: 'IB48', active: true},
	{id: 8, gateNumber: '4B', airline: 'AA', flight: 'IB49', active: true},
	{id: 9, gateNumber: '5A', airline: 'AA', flight: 'IB50', active: true},
];

import FlightService from '../../src/SuiteApps/com.netsuite.airport360/airport/services/FlightService';
import GateService from '../../src/SuiteApps/com.netsuite.airport360/airport/services/GateService';
import {flightInfo, gateInfo} from '../../types/appTypes';

jest.mock('../../src/SuiteApps/com.netsuite.airport360/airport/dao/FlightDAO', () => ({
	fetchFlights: jest.fn().mockReturnValue(MOCK_FLIGHT),
	updateGate: jest.fn(
		(flight: flightInfo, number: string) =>
			(flight.gateNumber = {
				route: {
					route: Route.GATE,
					parameters: {
						gateID: number,
					},
				},
				label: number,
			})
	),
}));

jest.mock('../../src/SuiteApps/com.netsuite.airport360/airport/dao/GateDAO', () => ({
	fetchGates: jest.fn().mockReturnValue(MOCK_GATE),
	toggleGate: jest.fn((gate: gateInfo) => (gate.active = !gate.active)),
	unassignGates: jest.fn((flights: [flightInfo]) =>
		flights.forEach(
			(flight) => (flight.gateNumber = {route: {route: Route.GATE, parameters: {gateID: ''}}, label: ''})
		)
	),
}));

describe('Test flight service functions', () => {
	it('should assert flights are retrieved properly', async () => {
		const list = await FlightService.getFlights();
		const expected = {
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
		};
		expect(list).toContainEqual(expected);
	});

	it('should assert gates change correctly', async () => {
		const list = await FlightService.getFlights();
		await FlightService.assignGate(0, '2B');
		const oldFlight = {
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
		};
		const expected = {
			id: 1,
			origin: {code: 'BCN', name: 'Barcelona'},
			destination: {code: 'PAR', name: 'Paris'},
			departure: undefined,
			arrival: undefined,
			status: 'DELAYED',
			gateNumber: {route: {route: Route.GATE, parameters: {gateID: '2B'}}, label: '2B'},
			airline: 'AA',
			active: true,
			flightNumber: 1,
			boardingStatus: 'BOARDING',
			altitude: '0ft',
			speed: '0kmph',
			model: 'Jumbo Jet',
		};
		expect(list).not.toContainEqual(oldFlight);
		expect(list).toContainEqual(expected);
	});
});

describe('Test gate service functions', () => {
	it('should assert gates are retrieved properly', async () => {
		const list = await GateService.getGates();
		const expected = {id: 1, gateNumber: '1A', airline: 'AA', flight: 'IB42', active: true};
		expect(list).toContainEqual(expected);
	});

	it('should assert gates can be opened and closed', async () => {
		const list = await GateService.getGates();
		await GateService.toggleGate(0);
		const expected = {id: 1, gateNumber: '1A', airline: 'AA', flight: 'IB42', active: false};
		expect(list).toContainEqual(expected);
	});

	it('should assert flights are unassigned when gates are closed', async () => {
		const list = await FlightService.getFlights();
		await GateService.unassignGates('3A', list);
		expect(list).toContainEqual({
			id: 5,
			origin: {code: 'BCN', name: 'Barcelona'},
			destination: {code: 'PAR', name: 'Paris'},
			departure: undefined,
			arrival: undefined,
			status: 'PREPARED',
			gateNumber: {route: {route: Route.GATE, parameters: {gateID: ''}}, label: ''},
			airline: 'AA',
			active: true,
			flightNumber: 5,
			boardingStatus: 'LAST CALL',
			altitude: '0ft',
			speed: '0kmph',
			model: 'Jumbo Jet',
		});
		expect(list).toContainEqual({
			id: 6,
			origin: {code: 'OVD', name: 'Oviedo'},
			destination: {code: 'BCN', name: 'Barcelona'},
			departure: undefined,
			arrival: undefined,
			status: 'DELAYED',
			gateNumber: {route: {route: Route.GATE, parameters: {gateID: ''}}, label: ''},
			airline: 'AA',
			active: true,
			flightNumber: 6,
			boardingStatus: 'CLOSED',
			altitude: '0ft',
			speed: '0kmph',
			model: 'Jumbo Jet',
		});
	});
});
