import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import trackingMouse from "../utils/trackingMouse"
import ScrollBar from "../../public/assets/scrollbar.svg"
import ScrollBarIndicator from "../../public/assets/scrollIndicator.svg"
import {scrollInstance} from "../ScrollTriggerProxy"
const NavbarBR = () => {
  const [scrollPercentage, setScrollPercentage] = useState('000%');
  const NavBrRef = useRef(null);
  
  useEffect(() => {
    let NavBrEl = NavBrRef.current;
    let scrollBarBgQ = gsap.utils.selector(NavBrEl);
    let scrollBarSetter = gsap.quickSetter(scrollBarBgQ('#scrollBarBg'), "height", "px");
    const updateScrollPercentage = () => {
      if(scrollInstance) {
        let xp= scrollInstance.scroll.instance.scroll.x/scrollInstance.scroll.instance.limit.x;
        let formattedXp = xp.toLocaleString('en-US', {
          minimumIntegerDigits: 3,
          maximumFractionDigits: 0,
          style: 'percent',
        })
        setScrollPercentage(formattedXp);
        scrollBarSetter(572.18066 * xp);

      }
    }
      
    setTimeout(() => {

      scrollInstance.on('scroll',updateScrollPercentage)
    }, 1000);
    const trackingMouseEvent = trackingMouse(NavBrEl);
    window.addEventListener("mousemove", trackingMouseEvent);
    return () => {
      scrollInstance?.off('scroll',updateScrollPercentage);
      window.removeEventListener("mousemove", trackingMouseEvent);
    };
  }, []);

  const triggerActiveClass = () => {};
  return (
    <div className="z-50 absolute bottom-0 right-0"  ref={NavBrRef}>
        <div className="mb-5 mr-5 relative drop-shadow-[0_0_3px_rgba(255,255,255)]">
          <div className="absolute bottom-[10px] right-[18px] text-xs sm:bottom-4 sm:right-[30px] sm:text-xl text-gray-800 font-bold text-right digital7">
              {scrollPercentage}
          </div>
          <ScrollBarIndicator className="w-12 sm:w-20 absolute"/>
          <ScrollBar className="w-12 sm:w-20 "/>
        </div>
    </div>
  );
};

export default NavbarBR;
