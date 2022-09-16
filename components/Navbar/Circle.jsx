import React, { useEffect, useRef } from "react";
import Circle1 from "../../public/assets/circle1.svg";
import Circle2 from "../../public/assets/circle2.svg";
import Circle3 from "../../public/assets/circle3.svg";
import Circle4 from "../../public/assets/circle4.svg";
import gsap from "gsap";

const Circle = () => {
  let c1Ref = useRef(null);
  useEffect(() => {
    let svgQ = gsap.utils.selector(c1Ref.current);

    let t1 = gsap.to(svgQ("svg"), {
      rotation: "random(0, 360)",
      ease: "sine.inOut",
      repeat: -1,
      repeatRefresh: true,
      duration: "random(1,3)",
      // duration: 3
      repeatDelay: 1,
    });

    const multiCircleEvent = () => {
      svgQ("svg").forEach((el) => {
        console.log(el);
      });
    };
    return () => {
      t1.kill();
    };
  });
  return (
    <div ref={c1Ref}>
      <Circle1 className="w-40 absolute" />
      <Circle2 className="w-40 absolute" />
      <Circle3 className="w-40 absolute" />
      <Circle4 className="w-40  " />
    </div>
  );
};

export default Circle;
