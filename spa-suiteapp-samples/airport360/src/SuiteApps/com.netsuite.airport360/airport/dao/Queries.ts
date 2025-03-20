export default {
	fetchFlights:
		"SELECT *, TO_CHAR(custrecord_flight_departure, 'YYYY-MM-DD HH24:MI:SS'), TO_CHAR(custrecord_flight_arrival, 'YYYY-MM-DD HH24:MI:SS') FROM customrecord_flight",
	fetchGates: 'SELECT * FROM customrecord_gate',
};
