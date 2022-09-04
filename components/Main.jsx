import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Main() {
  return (
    <div
      id="hero"
      // className=" w-screen h-screen flex justify-center items-center"
      className=" w-screen h-screen flex justify-center items-center"
    >
      <div
        className="max-w-[1240px] pl-4 pr-8 lg:px-16"
        data-scroll
        data-scroll-speed="-4"
        data-scroll-direction="vertical"
      >
        <h1 className="  text-gray-200 flex ">
          Hi, I&#39;m&nbsp;
          {/* hover:drop-shadow-[0_10px_10px_#FFFFFF] */}
          <span
            data-scroll
            data-scroll-speed="0.1"
            data-scroll-position="top"
            data-scroll-delay="0.04"
            data-scroll-target="#hero"
            data-scroll-direction="vertical"
            className="text-secondary block"
          >
            A
          </span>
          <span
            data-scroll
            data-scroll-speed="1"
            data-scroll-position="top"
            data-scroll-delay="0.1"
            data-scroll-target="#hero"
            data-scroll-direction="vertical"
            className="text-secondary block"
          >
            L
          </span>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-position="top"
            data-scroll-delay="0"
            data-scroll-target="#hero"
            data-scroll-direction="vertical"
            className="text-secondary block"
          >
            E
          </span>
          <span
            data-scroll
            data-scroll-speed="3"
            data-scroll-position="top"
            data-scroll-delay="0.5"
            data-scroll-target="#hero"
            data-scroll-direction="vertical"
            className="text-secondary block"
          >
            X
          </span>
        </h1>

        <h1 className="  text-primary-light">A Full Stack Developer</h1>
        <div className=" text-gray-200">
          who build the&nbsp;
          <span>STARSHIP🚀</span>
          &nbsp;website you just need.
        </div>
        <div className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"></div>
      </div>
    </div>
  );
}

export default Main;
