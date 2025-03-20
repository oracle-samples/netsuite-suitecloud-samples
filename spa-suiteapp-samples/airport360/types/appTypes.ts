
export interface GateInfo {
	id: number;
	gateNumber: string;
	airline: string;
	flight: string;
	active: boolean;
}

export interface FlightInfo { 
	id: number, 
	origin: AirportData, 
	destination: AirportData,
	departure: undefined, 
	arrival: undefined, 
	status: string, 
	gateNumber: {route: {route: string, parameters: {gateID: string}}, label: string},
	airline: string, 
	active: boolean, 
    flightNumber: number, 
	boardingStatus: string, 
	altitude: string, 
	speed: string, 
	model: string
}

interface AirportData{
	code:string,
	name:string
}
