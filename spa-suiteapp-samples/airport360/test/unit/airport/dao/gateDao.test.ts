import {describe, expect, it, jest} from '@jest/globals';
import GateDao from '../../../../src/SuiteApps/com.netsuite.airport360/airport/dao/GateDao';

describe('Test gate DAO', () => {
	const jsonMockGate = () => {
		return {
			items: [
				{
					links: [],
					created: '2/29/2024',
					custrecord_gate_airline: 'AA',
					custrecord_gate_flight: 'IB45',
					custrecord_gate_gate_number: '1A',
					custrecord_gate_id: '1',
					custrecord_gate_status: 'F',
					id: '1',
					isinactive: 'F',
					lastmodified: '2/29/2024',
					lastmodifiedby: '5',
					name: 'Gate 1',
					owner: '5',
					recordid: '1',
					scriptid: 'VAL_52975_1339499_734',
				},
			],
		};
	};


	it('the gate DAO should correctly retrieve the data', async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: jsonMockGate,
			} as unknown as Response)
		);
		const gates = await GateDao.fetchGates();
		expect(gates[0].active).toStrictEqual(false);
		expect(gates[0].gateNumber).toStrictEqual('1A');
	});
});
