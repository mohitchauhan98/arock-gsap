import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const LoadChild = () => {
  const lineRef = useRef(null);

  const tl = gsap.timeline();
  useGSAP(() => {
    tl.to(lineRef.current, {
      width: "100%",
      duration: 1.3,
      display: 0.7,
      ease: "expo",
    }).to(lineRef.current, {
      opacity: 0,
    });
  });
  return <div ref={lineRef} className="w-0 h-full bg-white rounded"></div>;
};

export default LoadChild;
