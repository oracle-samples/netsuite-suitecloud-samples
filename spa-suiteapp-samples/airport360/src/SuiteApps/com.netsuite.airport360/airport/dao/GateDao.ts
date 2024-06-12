import * as record from 'N/record';
import GateMapper from '../mappers/GateMapper';
import {gateInfo} from '../../../../../types/appTypes';

async function fetchGates(): Promise<[gateInfo]> {
	const response = await fetch('/services/rest/query/v1/suiteql', {
		method: 'POST',
		headers: {Prefer: 'transient'},
		body: JSON.stringify({q: 'SELECT * FROM customrecord_gate'}),
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
