import React, { useRef } from 'react';
import { Flight } from '../services/Flight';
import { Airplane } from './Airplane';

interface FlightDetailsProps {
    flight: Flight;
}

const FlightDetails: React.FC<FlightDetailsProps> = ({ flight }) => {

    const planeRef = useRef(null);

    const onSimulateAerobaticSequence = () => {
    }

    return (
        <div>
            <div className="absolute w-52 h-52 top-32 right-32" ref={planeRef}>
                <Airplane />
            </div>
            <p className="text-u-white text-lg leading-6 font-body">Flight Number: <span className="text-u-green">{flight.flightNumber}</span></p>
            <p className="mt-6 text-u-white text-lg leading-6 font-body">Aerobatic Sequence Signature: <strong className="text-u-green">{flight.aerobaticSequenceSignature}</strong></p>
            <button className="mt-3 bg-u-green-deep hover:bg-u-green text-u-white hover:text-u-black font-bold py-2 px-4 rounded cursor-pointer transition-colors duration-200" onClick={onSimulateAerobaticSequence}>Simulate Aerobatic Sequence</button>
            <p className="mt-6 text-u-white text-lg leading-6 font-body">Origin: <span className="text-u-muted">{flight.origin}</span></p>
            <p className="mt-6 text-u-white text-lg leading-6 font-body">Destination: <span className="text-u-muted">{flight.destination}</span></p>
            <p className="mt-6 text-u-white text-lg leading-6 font-body">Departure Time: <span className="text-u-muted">{flight.departureTime.toString()}</span></p>
            <p className="mt-6 text-u-white text-lg leading-6 font-body">Arrival Time: <span className="text-u-muted">{flight.arrivalTime.toString()}</span></p>
            <p className="mt-6 text-u-white text-lg leading-6 font-body">Status: <span className="text-u-green">{flight.status}</span></p>
            <p className="mt-6 text-u-white text-lg leading-6 font-body">Fuel Range: <span className="text-u-muted">{flight.fuelRange}</span></p>
            <p className="mt-6 text-u-white text-lg leading-6 font-body">Fuel Tank Leak: <span className={flight.fuelTankLeak ? 'text-red-400' : 'text-u-green'}>{flight.fuelTankLeak ? 'Yes' : 'No'}</span></p>
            <p className="mt-6 text-u-white text-lg leading-6 font-body">Flight Log Signature: <span className="text-u-muted">{flight.flightLogSignature}</span></p>
        </div>
    );
}

export default FlightDetails;