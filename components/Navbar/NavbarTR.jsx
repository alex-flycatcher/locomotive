import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

import gsap from "gsap";

import { AiOutlineMail, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import Circle from "./Circle";
import trackingMouse from "../utils/trackingMouse"
// import MobileNav from "./MobileNav";

const NavbarTR = () => {
  const NavTrRef = useRef(null);

  const triggerActiveClass = () => {};
  return (
    <div className="z-50 absolute top-0 right-0"  ref={NavTrRef}>
        <div className="mt-5 mr-5 drop-shadow-[0_0_3px_rgba(255,255,255)] ">
          <Circle />
        </div>
    </div>
  );
};

export default NavbarTR;
