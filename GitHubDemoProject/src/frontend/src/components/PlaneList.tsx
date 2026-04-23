import React from "react";
import { useNavigate } from "react-router-dom";

type Plane = {
  id: number;
  name: string;
  year: number;
};

type PlaneListProps = {
  planes?: Plane[];
};

const PlaneList: React.FC<PlaneListProps> = (props: PlaneListProps) => {
  const navigate = useNavigate();

  const handleClick = (planeId: any, event: any) => {
    const liElement = event.currentTarget;
    const imgElement = liElement.querySelector("img");
    imgElement.classList.add("flying");

    setTimeout(() => {
      navigate(`/planes/${planeId}`);
    }, 2000);
  };

  const planes = props.planes || [];

  return (
    <div className="planes-list-container">
      <h2 className="text-xl font-bold mb-4">Aviation Collection</h2>
      
      <ul className="space-y-4">
        {planes.map((plane) => (
          <li 
            key={plane.id}
            onClick={(e) => handleClick(plane.id, e)}
            className="flex items-center p-4 border border-gray-200 rounded shadow-sm hover:shadow-md cursor-pointer transition-shadow"
          >
            <img
              src="./plane.png"
              alt={plane.name}
              className="w-12 h-12 mr-4"
            />
            <div>
              <div className="font-medium">{plane.name}</div>
              <div className="text-sm text-gray-600">Year: {plane.year}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaneList;