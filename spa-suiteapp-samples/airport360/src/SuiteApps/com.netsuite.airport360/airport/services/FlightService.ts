import FlightDAO from '../dao/FlightDao';

async function getFlights() {
	return await FlightDAO.fetchFlights();
}

async function assignGate(index, number) {
	const test = await FlightDAO.fetchFlights();
	await FlightDAO.updateGate(test[index], number);
	return await FlightDAO.fetchFlights();
}

export default {
	getFlights,
	assignGate,
};
