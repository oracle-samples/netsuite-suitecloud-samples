import {describe, expect, it} from '@jest/globals';
import FlightMapper from '../../../../src/SuiteApps/com.netsuite.airport360/airport/mappers/FlightMapper';
import Route from '../../../../src/SuiteApps/com.netsuite.airport360/airport/app/Route';
import GateMapper from '../../../../src/SuiteApps/com.netsuite.airport360/airport/mappers/GateMapper';

describe('Test flight and gate DAOs', () => {
	const flightDataFull = {
		custrecord_flight_active: 'T',
		custrecord_flight_airline: 'A',
		custrecord_flight_altitude: 'A',
		custrecord_flight_arrival: 'A',
		custrecord_flight_boarding_status: 'A',
		custrecord_flight_departure: 'A',
		custrecord_flight_destination_code: 'A',
		custrecord_flight_destination_name: 'A',
		custrecord_flight_flight_number: 'A',
		custrecord_flight_gate_number: 'A',
		custrecord_flight_id: '42',
		custrecord_flight_model: 'A',
		custrecord_flight_origin_code: 'A',
		custrecord_flight_origin_name: 'A',
		custrecord_flight_speed: 'A',
		custrecord_flight_status: 'A',
	};
	const flightDataMissing = {
		custrecord_flight_active: 'F',
		custrecord_flight_airline: 'A',
		custrecord_flight_altitude: 'A',
		custrecord_flight_arrival: 'A',
		custrecord_flight_boarding_status: 'A',
		custrecord_flight_departure: 'A',
		custrecord_flight_destination_code: 'A',
		custrecord_flight_destination_name: 'A',
		custrecord_flight_flight_number: 'A',
		custrecord_flight_gate_number: '',
		custrecord_flight_id: '42',
		custrecord_flight_model: 'A',
		custrecord_flight_origin_code: 'A',
		custrecord_flight_origin_name: 'A',
		custrecord_flight_speed: 'A',
		custrecord_flight_status: 'A',
	};
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

	it('FlightMapper should correctly map the raw flight data', async () => {
		const mappedDataFull = FlightMapper.sourceToProjection(flightDataFull);
		const mappedDataMissing = FlightMapper.sourceToProjection(flightDataMissing);
		const expectedGateNumber = {route: {route: Route.GATE, parameters: {gateID: 'A'}}, label: 'A'};
		const expectedEmptyGate = {route: {route: Route.GATE, parameters: {gateID: ''}}, label: ''};

		expect(mappedDataFull.gateNumber).toStrictEqual(expectedGateNumber);
		expect(mappedDataFull.active).toStrictEqual(true);

		expect(mappedDataMissing.gateNumber).toStrictEqual(expectedEmptyGate);
		expect(mappedDataMissing.active).toStrictEqual(false);
	});
	it('GateMapper should correctly map the raw gate data', async () => {
		const mappedDataFull = GateMapper.sourceToProjection(activeGate);
		const mappedDataMissing = GateMapper.sourceToProjection(closedGate);

		expect(mappedDataFull.active).toStrictEqual(true);

		expect(mappedDataMissing.active).toStrictEqual(false);
	});
});
