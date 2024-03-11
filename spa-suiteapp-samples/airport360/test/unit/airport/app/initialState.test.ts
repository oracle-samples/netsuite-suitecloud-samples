import {expect, it, jest, describe, afterEach} from '@jest/globals';
import InitialState from '../../../../src/SuiteApps/com.netsuite.airport360/airport/app/InitialState';

describe('Test app actions', () => {
	it('InitialState should define an empty state structure', async () => {
		expect(InitialState.flights.data).toBeDefined();
		expect(InitialState.flights.missingGates).toBe(false);
		expect(InitialState.flights.loading).toBe(false);
		expect(InitialState.gates.data).toBeDefined();
		expect(InitialState.gates.loading).toBe(false);
	});
});
