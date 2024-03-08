import GateDAO from '../dao/GateDao';

async function getGates() {
	const test = await GateDAO.fetchGates();
	return test;
}

async function toggleGate(index) {
	const test = await GateDAO.fetchGates();
	await GateDAO.toggleGate(test[index]);
}

async function unassignGates(gate, flights) {
	const flightsToUnassign = flights.filter((flight) => flight.gateNumber.label === gate);
	flightsToUnassign.forEach((flight) => (flight.gateNumber.label = ''));
	await GateDAO.unassignGates(flightsToUnassign);
}

export default {
	getGates,
	toggleGate,
	unassignGates,
};
