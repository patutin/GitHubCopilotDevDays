using AviationApi.Models;

namespace AviationApi.Repositories
{
    public interface IFlightRepository
    {
        List<Flight> GetAllFlights();

        Flight GetFlightById(int id);

        Flight AddFlight(Flight flight);

        Flight UpdateFlight(Flight flight);
    }
}