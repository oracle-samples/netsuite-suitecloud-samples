import FlightMapper from '../mappers/FlightMapper';
import * as record from 'N/record';
import Queries from './Queries';

async function fetchFlights() {
	let response;

	try {
		response = await fetch('/services/rest/query/v1/suiteql', {
			method: 'POST',
			headers: {Prefer: 'transient'},
			body: JSON.stringify({q: Queries.fetchFlights}),
		});
	} catch (error) {
		handleNetworkOrCorsError(error);
	}

	const responseJson = await response.json();
	return responseJson.items.map((request) => FlightMapper.sourceToProjection(request));
}

function handleNetworkOrCorsError(error: any): void {
	throw new Error('There was a network error. Check your connection', {cause: error});
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
