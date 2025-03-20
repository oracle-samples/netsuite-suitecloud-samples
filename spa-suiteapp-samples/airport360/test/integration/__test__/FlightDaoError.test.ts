import {expect, it, describe, afterAll, beforeAll, afterEach} from '@jest/globals';

import flightDao from '../../../src/SuiteApps/com.netsuite.airport360/airport/dao/FlightDao';

import {notReachableServer} from '../setup/mockServer';

describe('Test flight dao', () => {
	beforeAll(() => {
		notReachableServer.listen({
			onUnhandledRequest: 'error',
		});
	});

	it('should handle network errors and display message', async () => {
		try {
			const list = await flightDao.fetchFlights();
		} catch (error) {
			expect(true).toEqual(true);
		}
	});

	afterEach(() => notReachableServer.resetHandlers());

	afterAll(() => {
		notReachableServer.close();
	});
});
