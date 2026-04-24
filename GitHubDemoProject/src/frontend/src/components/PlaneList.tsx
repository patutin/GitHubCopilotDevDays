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
      <h2 className="text-xl font-bold mb-4 font-heading">
        <span className="text-u-white">Aviation </span>
        <span className="text-u-green">Collection</span>
      </h2>
      
      <ul className="space-y-4">
        {planes.map((plane) => (
          <li 
            key={plane.id}
            onClick={(e) => handleClick(plane.id, e)}
            className="flex items-center p-4 border border-u-green-deep/30 rounded-lg bg-u-surface hover:bg-u-surface/80 hover:border-u-green/50 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-u-green/5"
          >
            <img
              src="./plane.png"
              alt={plane.name}
              className="w-12 h-12 mr-4"
            />
            <div>
              <div className="font-medium text-u-white font-body">{plane.name}</div>
              <div className="text-sm text-u-green-md">Year: {plane.year}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaneList;