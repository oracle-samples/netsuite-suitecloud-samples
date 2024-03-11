import FlightDAO from '../../src/SuiteApps/com.netsuite.airport360/airport/dao/FlightDao';
import GateDAO from '../../src/SuiteApps/com.netsuite.airport360/airport/dao/GateDao';
import * as record from '../../test/stubs/N/record';
import {expect, it, jest, describe, afterEach} from '@jest/globals';

afterEach(() => {
	jest.restoreAllMocks();
});

describe('Test custom record functionality', () => {
	it('should update the gate in a custom flight record', async () => {
		const loadspy = jest.spyOn(record, 'load');
		const logSpy = jest.spyOn(console, 'log');
		await FlightDAO.updateGate(1, '2a');
		expect(loadspy).toHaveBeenCalled();
		expect(logSpy).toHaveBeenNthCalledWith(1, 'set value');
		expect(logSpy).toHaveBeenNthCalledWith(2, 'saved record');
	});

	it('should toggle a custom gate record status', async () => {
		const loadspy = jest.spyOn(record, 'load');
		const logSpy = jest.spyOn(console, 'log');
		await GateDAO.toggleGate(1);
		expect(loadspy).toHaveBeenCalled();
		expect(logSpy).toHaveBeenNthCalledWith(1, 'set value');
		expect(logSpy).toHaveBeenNthCalledWith(2, 'saved record');
	});

	it('should test custom flight records are unassigned after gate is closed', async () => {
		const loadspy = jest.spyOn(record, 'load');
		const logSpy = jest.spyOn(console, 'log');
		await GateDAO.unassignGates([1, 2, 3]);
		expect(loadspy).toHaveBeenCalledTimes(3);
		expect(logSpy).toHaveBeenNthCalledWith(1, 'set value');
		expect(logSpy).toHaveBeenNthCalledWith(2, 'saved record');
		expect(logSpy).toHaveBeenNthCalledWith(3, 'set value');
		expect(logSpy).toHaveBeenNthCalledWith(4, 'saved record');
		expect(logSpy).toHaveBeenNthCalledWith(5, 'set value');
		expect(logSpy).toHaveBeenNthCalledWith(6, 'saved record');
	});
});
