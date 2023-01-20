import React, { useState, useEffect } from "react";
import MobileNavbarLink from "./MobileNavbarLink";
import { AiOutlineMail, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MobileNav = ({ nav, handleNav }) => {
  return (
    <div
      className={`md:hidden fixed right-0 pr-5 pt-16 ease-in duration-500 ${
        nav ? "top-0" : "top-[-100%]"
      }`}
    >
      <div className=" pr-2 flex flex-col uppercase items-end">
        <div className="h-6 w-[1px] bg-gray-200"></div>
        <MobileNavbarLink to="#hero" label="Home" offset={0} />
        <MobileNavbarLink to="#about" label="About" offset={-64} />
        <MobileNavbarLink to="#skills" label="Skills" offset={-64} />
        <MobileNavbarLink to="#projects" label="Projects" offset={-64} />
        <MobileNavbarLink to="#contact" label="Contact" offset={-64} />

        <div
          onClick={handleNav}
          className="rounded-full p-2 cursor-pointer text-gray-800 bg-gray-200 translate-x-[15px] "
        >
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
