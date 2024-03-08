
export interface gateInfo {
	id: number;
	gateNumber: string;
	airline: string;
	flight: string;
	active: boolean;
}

export interface flightInfo { 
	id: number, 
	origin: airportData, 
	destination: airportData,
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

interface airportData{
	code:string,
	name:string
}
