import Link from "next/link";
import React from "react";

import { AiOutlineMail, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const SidebarLeft = () => {
  return (
    <div className="hidden md:block fixed ml-4 lg:ml-6 bottom-0 z-50">
      <div className="flex flex-col items-center justify-between w-full">
        <a href="https://www.linkedin.com/in/clint-briley-50056920a/"target="_blank"  rel="noreferrer">
          <div className="mb-8 cursor-pointer hover:drop-shadow-[0_0_4px_#FFFFFF] ease-in-out duration-300">
            <FaLinkedinIn className="hover:drop-shadow-[0_0_4px_#FFFFFF]"/>
          </div>
        </a>
        <a href="https://github.com/fireclint" target="_blank" rel="noreferrer">
          <div className="mb-8 cursor-pointer hover:drop-shadow-[0_0_4px_#FFFFFF] ease-in-out duration-300">
            <FaGithub />
          </div>
        </a>
        <Link href="/#contact">
          <div onClick={() => setNav(!nav)}
            className="mb-8 cursor-pointer hover:drop-shadow-[0_0_4px_#FFFFFF] ease-in-out duration-300"
          >
            <AiOutlineMail />
          </div>
        </Link>
        <Link href="/resume">
          <div onClick={() => setNav(!nav)}
            className="mb-8 cursor-pointer hover:drop-shadow-[0_0_4px_#FFFFFF] ease-in-out duration-300"
          >
            <BsFillPersonLinesFill />
          </div>
        </Link>
        <div className="h-[20vh] w-1 bg-gray-200 rounded-t-sm"></div>
      </div>
    </div>
  );
};

export default SidebarLeft;
