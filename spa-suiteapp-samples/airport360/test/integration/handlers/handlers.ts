import {http, HttpResponse} from 'msw';
import Route from '../../../src/SuiteApps/com.netsuite.airport360/airport/app/Route';

export const MOCK_FLIGHT: unknown[] = [
	{
		custrecord_flight_id: 1,
		custrecord_flight_gate_number: '1A',
		custrecord_flight_origin_code: 'BCN',
		custrecord_flight_origin_name: 'Barcelona',
		custrecord_flight_destination_code: 'PAR',
		custrecord_flight_destination_name: 'Paris',
		expr1: undefined,
		expr2: undefined,
		custrecord_flight_status: 'DELAYED',
		gateNumber: {route: {route: Route.GATE, parameters: {gateID: '1A'}}, label: '1A'},
		custrecord_flight_airline: 'AA',
		custrecord_flight_active: 'T',
		custrecord_flight_flight_number: 1,
		custrecord_flight_boarding_status: 'BOARDING',
		custrecord_flight_altitude: '0ft',
		custrecord_flight_speed: '0kmph',
		custrecord_flight_model: 'Jumbo Jet',
	},
	{
		custrecord_flight_id: 2,
		custrecord_flight_origin_code: 'BCN',
		custrecord_flight_origin_name: 'Barcelona',
		custrecord_flight_destination_code: 'MAD',
		custrecord_flight_destination_name: 'Madrid',
		expr1: undefined,
		expr2: undefined,
		custrecord_flight_status: 'PREPARED',
		gateNumber: {route: {route: Route.GATE, parameters: {gateID: '1B'}}, label: '1B'},
		custrecord_flight_airline: 'AA',
		custrecord_flight_active: 'T',
		custrecord_flight_flight_number: 2,
		custrecord_flight_boarding_status: 'GO TO GATE',
		custrecord_flight_altitude: '0ft',
		custrecord_flight_speed: '0kmph',
		custrecord_flight_model: 'Jumbo Jet',
	},
];

export const handlers = [
	http.post('http://localhost.com/services/rest/query/v1/suiteql', () => HttpResponse.json({items: MOCK_FLIGHT})),
];
