import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import trackingMouse from "../utils/trackingMouse"
import ScrollBar from "../../public/assets/scrollbar.svg"

// import MobileNav from "./MobileNav";

const NavbarBR = () => {
  const NavBrRef = useRef(null);
  useEffect(() => {
    let NavBrEl = NavBrRef.current;
    console.log(NavBrEl.getBoundingClientRect().top)
    const trackingMouseEvent = trackingMouse(NavBrEl);
    window.addEventListener("mousemove", trackingMouseEvent);
    return () => {
      window.removeEventListener("mousemove", trackingMouseEvent);
    };
  }, []);

  const triggerActiveClass = () => {};
  return (
    <div className="z-50 absolute bottom-0 right-0" style={{transform: " rotateY(15deg) rotateX(-15deg)"}} ref={NavBrRef}>
        <div className="mb-5 mr-5 relative">
          <ScrollBar className="h-44 "/>
        </div>
    </div>
  );
};

export default NavbarBR;
