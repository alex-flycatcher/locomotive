import React, { useEffect, useRef } from "react";
import Circle1 from "../../public/assets/circle1.svg";
import Circle2 from "../../public/assets/circle2.svg";
import Circle3 from "../../public/assets/circle3.svg";
import Circle4 from "../../public/assets/circle4.svg";
import { gsap } from "gsap/dist/gsap";
import { EaselPlugin } from "gsap/dist/EaselPlugin";
import { RoughEase  } from "gsap/dist/EasePack";
import trackingMouse from "../utils/trackingMouse"


const Circle = () => {
  gsap.registerPlugin(EaselPlugin, RoughEase );
  let c1Ref = useRef(null);
  useEffect(() => {
    let svgQ = gsap.utils.selector(c1Ref.current);
    
    let t1 = gsap.to(svgQ("svg"), {
      rotation: "random(0,360)",
      ease: "rough({ template: none.out, strength: 0.2, points: 20, taper: none, randomize: true, clamp: true})",
      repeat: -1,
      repeatRefresh: true,
      duration: 'random(10,15)',
    });

    const multiCircleEvent = (event) => {
      svgQ(".circle").forEach((el) => {
        trackingMouse(el,{p:el.dataset.optionsP})(event);
      });
    };
    window.addEventListener("mousemove", multiCircleEvent);
    return () => {
      t1.kill();
      window.removeEventListener("mousemove", multiCircleEvent);
    };
  });
  return (
    <div ref={c1Ref} className="relative">
      <div className="circle w-20 sm:w-40 absolute " data-options-p="10">
        <Circle1 />
      </div>
      <div className="circle w-20 sm:w-40 absolute" data-options-p="20">
        <Circle2 />
      </div>
      <div className="circle w-20 sm:w-40 absolute" data-options-p="10">
        <Circle3 />
      </div>
      <div className="circle w-20 sm:w-40" data-options-p="5">
        <Circle4 />
      </div>
    </div>
  );
};

export default Circle;
