import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import PlaneService from "../services/PlaneService";
import FlightService from "../services/FlightService";
import PageContent from "../components/PageContent";
import FlightDetails from "../components/FlightDetails";
import Card from "../components/Card";
import PlaneSpinner from "../components/PlaneSpinner";

gsap.registerPlugin(MotionPathPlugin);

const PlaneDetail = () => {
  const { planeId } = useParams();
  const [crashed, setCrashed] = useState(false);
  const [landed, setLanded] = useState(false);
  const hasRunEffect = useRef(false);

  const [planeDetails, setPlaneDetails] = useState<any>({});
  const [flightDetails, setFlightDetails] = useState<any>({});
  useEffect(() => {
    async function getPlaneDetails() {
      try {
        const response = await PlaneService.getPlaneById(planeId as string);
        setPlaneDetails(response.data);
      } catch {
      }
    }
    async function getFlightDetails() {
      try {
        const response = await FlightService.getFlightById(planeId as string);
        setFlightDetails(response.data);
      } catch {
      }
    }
    getPlaneDetails();
    getFlightDetails();
  }, [planeId]);

  useEffect(() => {
    if (hasRunEffect.current == true) {
      return;
    }
    hasRunEffect.current = true;

    FlightService.calculateAerodynamics(planeId as string)
      .then(() => {
        setTimeout(() => {
          setLanded(true);
        });
      })
      .catch(() => {
        setTimeout(() => {
          setCrashed(true);
        });
      });
  }, [planeId]);

  if (!planeDetails)
    return <div>Plane not found</div>;

  return (
    <PageContent>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-amber-900">
          {planeDetails.name}
        </h2>
        <p className="text-xl text-amber-800">{planeDetails.year}</p>
        <p className="mt-4 mb-8 text-amber-700">
          {planeDetails.description}
        </p>
        <h3 className="text-2xl text-amber-900 mb-4">
          Flight Details
        </h3>
        <div className="relative w-2/3">
          <Card>
            <div className="min-h-96">
              <PlaneSpinner
                isError={crashed}
                isLoading={!landed && !crashed}
                isSuccess={landed}
              />
              {landed && (
                <FlightDetails flight={flightDetails} />
              )}
            </div>
          </Card>
        </div>
      </div>
    </PageContent>
  );
};

export default PlaneDetail;
