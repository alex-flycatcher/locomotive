import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
// import NavLogo from "../../public/assets/alexlogolight.svg";

import { AiOutlineMail, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Circle from "../../public/assets/circle.svg";
// import MobileNav from "./MobileNav";

const NavbarTR = () => {
  useEffect(() => {}, []);

  const triggerActiveClass = () => {};
  return (
    <div className="z-50 absolute top-0 right-0">
      <div className="absolute top-0 left-0"></div>
      <div className="">
        <div className="mt-5 mr-5">

          <Circle className="w-40 max-w-[30vw]" />
        </div>

      </div>
    </div>
  );
};

export default NavbarTR;
