import gsap from "gsap";
import { MutableRefObject, RefObject } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export const flyingAway = (planeRef: MutableRefObject<null>, onCompleted = () => {}

) => {
  gsap.to(planeRef.current, {
    duration: 2,
    x: "100vw",
    y: "-30vh",
    scale: 1.5,
    rotation: 20,
    opacity: 0,
    onComplete: () => {
      onCompleted();
    },
  });
};

export const animateInitialFlight = (planeRef: MutableRefObject<null>) => {
  gsap.to(planeRef.current, {
    duration: 3,
    repeat: -1,
    ease: "linear",
    motionPath: {
      path: describeSvgArc(100, 100, 80, 0, 359),
      autoRotate: true,
    },
  });
};

export const animateLanded = (planeRef: MutableRefObject<null>) => {
  gsap.killTweensOf(planeRef.current);

  gsap.to(planeRef.current, {
    scale: 1.2,
    y: "0",
    ease: "power1.in",
    duration: 1,
    rotation: 0,
    right: "300",
    top: "50",
  });
};

export const animateCrashed = (
  planeRef: MutableRefObject<null>,
  explosionRef: MutableRefObject<null>,
  debrisRefs: MutableRefObject<RefObject<unknown>[]>
) => {
  gsap.killTweensOf(planeRef.current);

  gsap.to(planeRef.current, {
    y: 300,
    opacity: 0,
    duration: 2,
    ease: "power1.in",
  });

  const tl = gsap.timeline();
  tl.to(explosionRef.current, {
    scale: 1.5,
    opacity: 1,
    backgroundColor: "#ffff00",
    duration: 0.1,
  }).to(explosionRef.current, { scale: 0, opacity: 0, duration: 0.2 });

  debrisRefs.current.forEach((ref) => {
    const isCircle = Math.random() > 0.5;
    const size = randomRange(5, 15);

    const current = ref.current as HTMLElement;

    current.style.width = `${size}px`;
    current.style.height = `${size}px`;
    current.style.borderRadius = isCircle ? "50%" : "0";

    gsap.fromTo(
      current,
      { opacity: 0, x: 0, y: 0 },
      {
        opacity: 1,
        x: randomRange(-200, 200),
        y: randomRange(-200, 200),
        duration: 1.5,
        ease: "power2.out",
      }
    );
  });
};

function describeSvgArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
