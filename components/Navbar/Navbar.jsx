import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLogo from "../../public/assets/alexlogolight.svg";

import { AiOutlineMail, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setTimeout(() => {
      setNavBg(!navBg);
    }, 300);
  };
  useEffect(() => {
    const handleShadow = () => {
      // console.log(window.scrollY + ' this');
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const triggerActiveClass = () => {};
  return (
    <div
      className={`fixed top-0 w-full hidden z-[100] ease-in-out duration-300 delay-100 h-16 md:h-20 flex items-center ${
        shadow ? " bg-gray-800 shadow-gray-200 shadow-md" : ""
      }`}
    >
      {/*Dark background */}
      {/* <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 " : ""
        }
      ></div> */}
      {/* Topleft Logo */}
      <div className="w-full mx-auto max-w-[1980px]">
        <div className="flex justify-between items-center h-full mx-4">
          {/* <Image src={NavLogo} alt="/" width={125} height={50} /> */}
          <div className="max-w-[100px] max-h-20">
            <Link href="/">
              {/* <NavLogo className="h-12" /> */}
              LOGO
            </Link>
          </div>
          {/* Desktop navigation */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        {/* Mobile Navigtaion */}
        <MobileNav nav={nav} handleNav={handleNav} />
      </div>
    </div>
  );
};

export default Navbar;
