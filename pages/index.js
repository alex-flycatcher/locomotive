import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Background from "../components/Background";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import SidebarLeft from "../components/SidebarLeft";
import Sidebar from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";
import Skills from "../components/Skills";
import Starship from "../components/Starship";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import { useEffect, useRef, useState } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex | Full stack developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex whitespace-normal">
        <Starship />
        <Skills />
        {/* <Projects /> */}
        {/* <Contact /> */}
        {/* <SidebarLeft /> */}
        {/* <SidebarRight /> */}
        
      </div>
    </>
  );
}
