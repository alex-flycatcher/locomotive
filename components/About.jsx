import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import AboutImg from "../public/assets/about.jpg";

let aboutEl = {};

const About = () => {
  const ssRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    aboutEl.ss = ssRef.current;
    aboutEl.container = containerRef.current;
  });

  return (
    <div
      id="about"
      className=" w-screen h-screen p-4  py-20 flex justify-center items-center"
      ref={containerRef}
      data-scroll
      data-scroll-speed="-4"
      data-scroll-direction="vertical"
    >
      <div className=" max-w-[1240px]  flex-col ">
        <div className=" backdrop-blur drop-shadow shadow-gray-600 shadow-xl rounded-xl p-4">
          <h2 className="py-4">About me</h2>
          <div className="py-2 ">
            As a fullstack developer, I am the rocket engineer you just need to
            get your{" "}
            <span id="aboutSs" ref={ssRef} className="">
            STARSHIP🚀
            </span>{" "}
            website to sail to the INTERNET GALAXY.{" "}
          </div>
          <p className="py-2 ">
            I have been working in the e-commerce industry for many years in New
            Zealand. Have been doing development base on multiple platforms,
            such as Magento, Lavarel, Odoo, Drupal and Wordpress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
export { aboutEl };
