import {gateInfo} from '../../../../../types/appTypes';

export default {
	sourceToProjection: (source): gateInfo => {
		return {
			id: parseInt(source.custrecord_gate_id),
			gateNumber: source.custrecord_gate_gate_number,
			airline: source.custrecord_gate_airline,
			flight: source.custrecord_gate_flight,
			active: source.custrecord_gate_status === 'T' ? true : false,
		};
	},
};
