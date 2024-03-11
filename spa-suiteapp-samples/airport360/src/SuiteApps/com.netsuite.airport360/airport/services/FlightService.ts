import FlightDAO from '../dao/FlightDao';

async function getFlights() {
	const test = await FlightDAO.fetchFlights();
	return test;
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
