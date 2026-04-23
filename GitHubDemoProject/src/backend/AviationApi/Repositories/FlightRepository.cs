using AviationApi.Models;

namespace AviationApi.Repositories
{
    public class FlightRepository : IFlightRepository
    {
        private List<Flight> Flights = new List<Flight>
    {
        new Flight
        {
            Id = 1,
            FlightNumber = "WB001",
            Origin = "Kitty Hawk, NC",
            Destination = "Manteo, NC",
            DepartureTime = new DateTime(1903, 12, 17, 10, 35, 0),
            ArrivalTime = new DateTime(1903, 12, 17, 10, 35, 0).AddMinutes(12),
            Status = FlightStatus.Scheduled,
            FuelRange = 100,
            FuelTankLeak = false,
            FlightLogSignature = "171203-DEP-ARR-WB001",
            AerobaticSequenceSignature = "L4B-H2C-R3A-S1D-T2E"
        },
        new Flight
        {
            Id = 2,
            FlightNumber = "WB002",
            Origin = "Kitty Hawk, NC",
            Destination = "Manteo, NC",
            DepartureTime = new DateTime(1903, 12, 17, 10, 35, 0),
            ArrivalTime = new DateTime(1903, 12, 17, 10, 35, 0).AddMinutes(12),
            Status = FlightStatus.Scheduled,
            FuelRange = 100,
            FuelTankLeak = false,
            FlightLogSignature = "171203-DEP-ARR-WB002",
            AerobaticSequenceSignature = "L1A-H1B-R1C-T1E"
        },
        new Flight
        {
            Id = 3,
            FlightNumber = "WB003",
            Origin = "Fort Myer, VA",
            Destination = "Fort Myer, VA",
            DepartureTime = new DateTime(1908, 9, 17, 10, 35, 0),
            ArrivalTime = new DateTime(1908, 9, 17, 10, 35, 0).AddMinutes(12),
            Status = FlightStatus.Scheduled,
            FuelRange = 100,
            FuelTankLeak = true,
            FlightLogSignature = "170908-DEP-ARR-WB003",
            AerobaticSequenceSignature = "L2A-H2B-R2C"
        },

    };

        public List<Flight> GetAllFlights()
        {
            return Flights;
        }

        public Flight GetFlightById(int id)
        {
            return Flights.ElementAt(id);
        }

        public Flight AddFlight(Flight flight)
        {
            Flights.Add(flight);

            return flight;
        }

        public Flight UpdateFlight(Flight updatedFlight)
        {
            var flight = Flights.FirstOrDefault(f => f.Id == updatedFlight.Id);
            if (flight != null)
            {
                flight.FlightNumber = updatedFlight.FlightNumber;
                flight.Origin = updatedFlight.Origin;
                flight.Destination = updatedFlight.Destination;
                flight.DepartureTime = updatedFlight.DepartureTime;
                flight.ArrivalTime = updatedFlight.ArrivalTime;
                flight.Status = updatedFlight.Status;
                flight.FuelRange = updatedFlight.FuelRange;
                flight.FuelTankLeak = updatedFlight.FuelTankLeak;
                flight.FlightLogSignature = updatedFlight.FlightLogSignature;
                flight.AerobaticSequenceSignature = updatedFlight.AerobaticSequenceSignature;
            }

            return flight;
        }
    }
}