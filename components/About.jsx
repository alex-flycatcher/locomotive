import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id='about' className=" w-screen md:h-screen p-4  py-20 whitespace-normal" >
      <div className=" max-w-[1240px] break-normal" >
        <div className="">
          <p className="uppercase text-xl tracking-widest text-primary-light">
            About
          </p>
          <h2 className="py-4">Who am I?</h2>
          <div className="py-2 ">As a fullstack developer, I am the rocket engineer you just need to get your starship🚀 website to sail to the INTERNET GALAXY. </div>
          <p className="py-2 ">
            I have been working in the e-commerce industry for many years in New
            Zealand. Have been doing development base on multiple platforms, such as Magento, Lavarel, Odoo, Drupal and Wordpress.
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
