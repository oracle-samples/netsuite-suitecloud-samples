import {expect, it, describe, afterAll, beforeAll, afterEach} from '@jest/globals';

import flightDao from '../../../src/SuiteApps/com.netsuite.airport360/airport/dao/FlightDao';

import {server} from '../setup/mockServer';
import Route from '../../../src/SuiteApps/com.netsuite.airport360/airport/app/Route';

describe('Test flight dao', () => {
	beforeAll(() => {
		server.listen({
			onUnhandledRequest: 'error',
		});
	});

	it('Should transform flights to the expected contract', async () => {
		const list = await flightDao.fetchFlights();
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

	afterEach(() => server.resetHandlers());

	afterAll(() => {
		server.close();
	});
});
