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
            <p className="text-amber-900 text-lg leading-6 font-serif">Flight Number: {flight.flightNumber}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Aerobatic Sequence Signature: <strong>{flight.aerobaticSequenceSignature}</strong></p>
            <button className="mt-3 bg-amber-900 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={onSimulateAerobaticSequence}>Simulate Aerobatic Sequence</button>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Origin: {flight.origin}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Destination: {flight.destination}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Departure Time: {flight.departureTime.toString()}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Arrival Time: {flight.arrivalTime.toString()}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Status: {flight.status}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Fuel Range: {flight.fuelRange}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Fuel Tank Leak: {flight.fuelTankLeak ? 'Yes' : 'No'}</p>
            <p className="mt-6 text-amber-900 text-lg leading-6 font-serif">Flight Log Signature: {flight.flightLogSignature}</p>
        </div>
    );
}

export default FlightDetails;