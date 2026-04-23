using AviationApi.Models;
using AviationApi.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace AviationApi.Controllers;

[ApiController]
[Route("[controller]")]
public class FlightsController : ControllerBase
{
    private readonly ILogger<FlightsController> _logger;
    private readonly IFlightRepository _flightRepository;

    public FlightsController(ILogger<FlightsController> logger, IFlightRepository flightRepository)
    {
        _logger = logger;
        _flightRepository = flightRepository;
    }

    [HttpGet]
    public ActionResult<List<Flight>> Get()
    {
        _logger.LogInformation("GET ✈✈✈ All Flights ✈✈✈");

        var flights = _flightRepository.GetAllFlights();

        return Ok(flights);
    }

    [HttpGet("{id}")]
    public ActionResult<Flight> GetById(int id)
    {
        _logger.LogInformation($"GET ✈✈✈ {id} ✈✈✈");

        var flight = _flightRepository.GetFlightById(id);

        if (flight == null)
        {
            return NotFound();
        }

        return Ok(flight);
    }

    [HttpPost]
    public ActionResult<Flight> Post([FromBody] Flight flight)
    {
        _logger.LogInformation($"POST ✈✈✈ {flight} ✈✈✈");

        if (flight == null)
        {
            return BadRequest("Flight data is required.");
        }

        _flightRepository.AddFlight(flight);

        return CreatedAtAction(nameof(GetById), new { id = flight.Id }, flight);
    }

    [HttpPost("{id}/status")]
    public ActionResult UpdateFlightStatus(int id, FlightStatus newStatus)
    {
        var flight = _flightRepository.GetFlightById(id);
        if (flight == null)
        {
            return NotFound("Flight not found.");
        }

        switch (newStatus)
        {
            case FlightStatus.Boarding:
                if (DateTime.Now > flight.DepartureTime)
                {
                    return BadRequest("Cannot board, past departure time.");
                }
                break;

            case FlightStatus.Departed:
                if (flight.Status != FlightStatus.Boarding)
                {
                    return BadRequest("Flight must be in 'Boarding' status before it can be 'Departed'.");
                }
                break;

            case FlightStatus.InAir:
                if (flight.Status != FlightStatus.Departed)
                {
                    return BadRequest("Flight must be in 'Departed' status before it can be 'In Air'.");
                }
                break;

            case FlightStatus.Landed:
                if (flight.Status != FlightStatus.InAir)
                {
                    return BadRequest("Flight must be in 'In Air' status before it can be 'Landed'.");
                }
                break;

            case FlightStatus.Cancelled:
                if (DateTime.Now > flight.DepartureTime)
                {
                    return BadRequest("Cannot cancel, past departure time.");
                }
                break;

            case FlightStatus.Delayed:
                if (flight.Status == FlightStatus.Cancelled)
                {
                    return BadRequest("Cannot delay, flight is cancelled.");
                }
                break;

            default:
                return BadRequest("Unknown or unsupported flight status.");
        }

        flight.Status = newStatus;
        _flightRepository.UpdateFlight(flight);

        return Ok($"Flight status updated to {newStatus}.");
    }
}