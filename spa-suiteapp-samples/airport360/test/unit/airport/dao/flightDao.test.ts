import {describe, expect, it, jest} from '@jest/globals';
import FlightDao from '../../../../src/SuiteApps/com.netsuite.airport360/airport/dao/FlightDao';
import Route from '../../../../src/SuiteApps/com.netsuite.airport360/airport/app/Route';

describe('Test flight DAO', () => {
	const jsonMockFlight = () => {
		return {
			items: [
				{
					links: [],
					created: '2/29/2024',
					custrecord_flight_active: 'T',
					custrecord_flight_airline: 'AA',
					custrecord_flight_altitude: '0',
					custrecord_flight_arrival: '8/25/2023',
					custrecord_flight_boarding_status: 'CLOSED',
					custrecord_flight_departure: '8/25/2023',
					custrecord_flight_destination_code: 'PAR',
					custrecord_flight_destination_name: 'Paris',
					custrecord_flight_flight_number: 'AA1234',
					custrecord_flight_id: '1',
					custrecord_flight_model: '747',
					custrecord_flight_origin_code: 'BCN',
					custrecord_flight_origin_name: 'Barcelona',
					custrecord_flight_speed: '0',
					custrecord_flight_status: 'DELAYED',
					expr1: '2023-08-25 23:00:00',
					expr2: '2023-08-25 12:00:00',
					id: '1',
					isinactive: 'F',
					lastmodified: '2/29/2024',
					lastmodifiedby: '5',
					name: 'Flight 1',
					owner: '5',
					recordid: '1',
					scriptid: 'VAL_52983_1339499_440',
				},
			],
		};
	};

	it('the flight DAO should correctly retrieve the data', async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: jsonMockFlight,
			} as unknown as Response)
		);
		const flights = await FlightDao.fetchFlights();
		expect(flights[0].active).toStrictEqual(true);
		expect(flights[0].gateNumber).toStrictEqual({route: {route: Route.GATE, parameters: {gateID: ''}}, label: ''});
	});
});
