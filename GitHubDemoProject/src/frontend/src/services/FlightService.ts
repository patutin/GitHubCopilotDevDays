import axios from "axios";

const API_URL = "http://localhost:1903/flights";

class FlightService {
  calculateAerodynamics(planeId: string) {
    return axios.post(`${API_URL}/${planeId}/calculateAerodynamics/`);
  }

  getFlightById(flightId: string) {
    return axios.get(`${API_URL}/${flightId}`);
  }
}

export default new FlightService();
