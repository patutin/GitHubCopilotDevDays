import { useEffect, useRef, useState } from "react";
import { Airplane } from "./Airplane";
import React from "react";
import { animateCrashed, animateInitialFlight as animateLooping, flyingAway as animateFlyingAway } from "../animationHelpers";

type SpinnerProps = {
    isLoading: boolean;
    isSuccess?: boolean;
    isError?: boolean;
};

function PlaneSpinner(
    props: SpinnerProps
) {
    const explosionRef = useRef(null);
    const debrisRefs = useRef([...Array(30)].map(() => React.createRef()));
    const planeRef = useRef(null);

    const [flyAwayCompleted, setFlyAwayCompleted

    ] = useState(false);



    const onFlyAwayCompleted = () => {
        setFlyAwayCompleted(true);
    }

    useEffect(() => {
        if (props.isLoading) {
            animateLooping(planeRef);
        } else if (props.isSuccess) {
            animateFlyingAway(planeRef, onFlyAwayCompleted);
        } else if (props.isError) {
            animateCrashed(planeRef, explosionRef, debrisRefs);
        }
    });

    if(flyAwayCompleted){
        return <div></div>
    }

    return (
        <div>
            <div className="absolute w-36 h-28" ref={planeRef}>
                <Airplane />
            </div>

            <div
                ref={explosionRef}
                className="absolute top-0 left-0 right-0 bottom-0"
                style={{
                    borderRadius: "50%",
                    backgroundColor: "transparent",
                    zIndex: 2,
                }}
            ></div>
            {debrisRefs.current.map((ref, index) => (
                <div
                    key={index}
                    ref={ref as React.RefObject<HTMLDivElement>}
                    className="absolute"
                    style={{
                        top: "50%",
                        left: "50%",
                        backgroundColor: "#333",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1,
                        opacity: 0,
                    }}
                ></div>
            ))}

        </div>


    );
}

export default PlaneSpinner;