import {describe, expect, it} from '@jest/globals';
import GateMapper from '../../../../src/SuiteApps/com.netsuite.airport360/airport/mappers/GateMapper';

describe('Test gate mapper', () => {
	const activeGate = {
		custrecord_gate_airline: 'A',
		custrecord_gate_flight: 'A',
		custrecord_gate_gate_number: 'A',
		custrecord_gate_id: '42',
		custrecord_gate_status: 'T',
	};
	const closedGate = {
		custrecord_gate_airline: 'A',
		custrecord_gate_flight: 'A',
		custrecord_gate_gate_number: 'A',
		custrecord_gate_id: '42',
		custrecord_gate_status: 'F',
	};

	it('GateMapper should correctly map the raw gate data', async () => {
		const mappedDataFull = GateMapper.sourceToProjection(activeGate);
		const mappedDataMissing = GateMapper.sourceToProjection(closedGate);

		expect(mappedDataFull.active).toStrictEqual(true);

		expect(mappedDataMissing.active).toStrictEqual(false);
	});
});
