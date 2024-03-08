import {flightInfo} from '../../../../../types/appTypes';
import Route from '../app/Route';

export default {
	sourceToProjection: (source): flightInfo => {
		const gate = source.custrecord_flight_gate_number || '';
		return {
			id: parseInt(source.custrecord_flight_id),
			origin: {
				code: source.custrecord_flight_origin_code,
				name: source.custrecord_flight_origin_name,
			},
			destination: {
				code: source.custrecord_flight_destination_code,
				name: source.custrecord_flight_destination_name,
			},
			departure: source.expr1,
			arrival: source.expr2,
			status: source.custrecord_flight_status,
			gateNumber: {route: {route: Route.GATE, parameters: {gateID: gate}}, label: gate},
			airline: source.custrecord_flight_airline,
			active: source.custrecord_flight_active === 'T' ? true : false,
			flightNumber: source.custrecord_flight_flight_number,
			boardingStatus: source.custrecord_flight_boarding_status,
			altitude: source.custrecord_flight_altitude,
			speed: source.custrecord_flight_speed,
			model: source.custrecord_flight_model,
		};
	},
};
