import React from 'react'
// import {Link as LinkScroll} from "react-scroll";
import { useLocomotiveScroll } from "react-locomotive-scroll";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

const MobileNavbarLink = ({to,label,offset=0}) => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    console.log(id);
    let elem = document.querySelector(id);
    console.log(scroll);
    // setClick(!click);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  return (
    <div className="h-8 text-sm flex items-center hover:cursor-pointer"  onClick={() => handleScroll(to)} data-scroll-speed="1" data-scroll-to >
      <p className="  shadow-sm  shadow-gray-200 px-3 italic bg-gray-800/80">
        {label}
      </p>
      <div className="h-[1px] w-10 bg-gray-200"></div>
      <div className="h-full w-[1px] bg-gray-200"></div>
    </div>
  )
}

export default MobileNavbarLink