import * as record from 'N/record';
import GateMapper from '../mappers/GateMapper';
import {GateInfo} from '../../../../../types/appTypes';
import Queries from './Queries';

async function fetchGates(): Promise<[GateInfo]> {
	const response = await fetch('/services/rest/query/v1/suiteql', {
		method: 'POST',
		headers: {Prefer: 'transient'},
		body: JSON.stringify({q: Queries.fetchGates}),
	});
	const responseJson = await response.json();
	return responseJson.items.map((request) => GateMapper.sourceToProjection(request));
}

async function toggleGate(gate) {
	const grecord = record.load({type: 'customrecord_gate', id: gate.id, isDynamic: false, defaultValues: null});
	grecord.setValue({fieldId: 'custrecord_gate_status', value: !gate.active});
	grecord.save();
}

async function unassignGates(flights) {
	flights.forEach((flight) => {
		const frecord = record.load({
			type: 'customrecord_flight',
			id: flight.id,
			isDynamic: false,
			defaultValues: null,
		});
		frecord.setValue({fieldId: 'custrecord_flight_gate_number', value: ''});
		frecord.save();
	});
}

export default {
	fetchGates,
	toggleGate,
	unassignGates,
};
