import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

import gsap from "gsap";

import { AiOutlineMail, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import Circle from "./Circle";
import NavTab from "../../public/assets/navtag.svg"

// import MobileNav from "./MobileNav";

const NavbarTR = () => {
  const NavTrRef = useRef(null);
  useEffect(() => {
    let NavTrEl = NavTrRef.current;
    const rXSetter = gsap.quickSetter(NavTrEl, "rotateX", "deg");
    const rYSetter = gsap.quickSetter(NavTrEl, "rotateY", "deg");
    const xSetter = gsap.quickSetter(NavTrEl, "x", "px");
    const ySetter = gsap.quickSetter(NavTrEl, "y", "px");
    const trackingMouse = (event) => {
      let NtrY = NavTrEl.getBoundingClientRect().top;
      let NtrX = NavTrEl.getBoundingClientRect().left;

      // gsap.utils.pipe(
        let NtrRy =  gsap.utils.mapRange(0, window.innerHeight, 0, 30,event.clientY);
        let NtrRx =  gsap.utils.mapRange(window.innerWidth, 0,  0, 30,event.clientX);
        let Ntrdy =  gsap.utils.mapRange(0, window.innerHeight, -15, 15, event.clientY);
        let Ntrdx =  gsap.utils.mapRange(window.innerWidth, 0,  -15, 15, event.clientX);
        // console.log(y);
        rXSetter(NtrRy);
        rYSetter(NtrRx);
        xSetter(Ntrdx);
        ySetter(Ntrdy);
      // );
    };
    window.addEventListener("mousemove", trackingMouse);
    return () => {
      window.removeEventListener("mousemove", trackingMouse);
    };
  }, []);

  const triggerActiveClass = () => {};
  return (
    <div className="z-50 absolute top-0 right-0" style={{transform: " rotateY(15deg) rotateX(15deg)"}} ref={NavTrRef}>
      <div className="relative">
        <div className="absolute -left-40 top-16 ">
          <NavTab className="w-36 "/>
        </div>
        <div className="absolute -left-40 top-28 -rotate-[30deg] origin-top-right">
          <NavTab className="w-36 "/>
        </div>
        <div className="absolute -left-40 top-16 ">
          <NavTab className="w-36 "/>
        </div>
        <div className="absolute -left-40 top-16 ">
          <NavTab className="w-36 "/>
        </div>
        <div className="mt-5 mr-5 relative">
          <Circle />
        </div>
      </div>
    </div>
  );
};

export default NavbarTR;
