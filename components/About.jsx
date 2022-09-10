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
      className=" w-screen h-screen p-4  py-20 "
      ref={containerRef}
      data-scroll
      data-scroll-speed="-4"
      data-scroll-direction="vertical"
    >
      <div className=" max-w-[1240px] flex flex-col ">
        <div className="">
          <p className="uppercase text-xl tracking-widest text-primary-light">
            About
          </p>
          <h2 className="py-4">Who am I?</h2>
          <div className="py-2 ">
            As a fullstack developer, I am the rocket engineer you just need to
            get your{" "}
            <span id="aboutSs" ref={ssRef} className="opacity-0">
            STARSHIP🚀
            </span>{" "}
            website to sail to the INTERNET GALAXY.{" "}
          </div>
          <p className="py-2 ">
            I have been working in the e-commerce industry for many years in New
            Zealand. Have been doing development base on multiple platforms,
            such as Magento, Lavarel, Odoo, Drupal and Wordpress.
          </p>
          <Link href="/#projects">
            <p className="py-2  underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className=" w-full text-gray-600 shadow-xl shadow-gray-400 rounded-xl items-center p-4 hover:scale-105 ease-in duration-300 max-w-fit">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
export { aboutEl };
