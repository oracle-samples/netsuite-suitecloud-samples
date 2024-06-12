import FlightMapper from '../mappers/FlightMapper';
import * as record from 'N/record';

async function fetchFlights() {
	const query =
		"SELECT *, TO_CHAR(custrecord_flight_departure, 'YYYY-MM-DD HH24:MI:SS'), TO_CHAR(custrecord_flight_arrival, 'YYYY-MM-DD HH24:MI:SS') FROM customrecord_flight";
	const response = await fetch('/services/rest/query/v1/suiteql', {
		method: 'POST',
		headers: {Prefer: 'transient'},
		body: JSON.stringify({q: query}),
	});
	const responseJson = await response.json();
	return responseJson.items.map((request) => FlightMapper.sourceToProjection(request));
}

async function updateGate(flight, number) {
	const ltest = record.load({type: 'customrecord_flight', id: flight.id, isDynamic: false, defaultValues: null});
	ltest.setValue({fieldId: 'custrecord_flight_gate_number', value: number});
	ltest.save();
}

export default {
	fetchFlights,
	updateGate,
};
