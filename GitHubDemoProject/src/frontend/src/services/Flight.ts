export interface Flight {
    id: number;
    flightNumber: string;
    origin: string;
    destination: string;
    departureTime: Date;
    arrivalTime: Date;
    status: string;
    fuelRange: number;
    fuelTankLeak: boolean;
    flightLogSignature: string;
    aerobaticSequenceSignature: string;
}