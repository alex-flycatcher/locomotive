import "../styles/globals.css";
import "../styles/locomotive-scroll.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import ScrollTriggerProxy from "../components/ScrollTriggerProxy";
import NavbarTR from "../components/Navbar/NavbarTR";
import NavbarBR from "../components/Navbar/NavbarBR";
import Background from "../components/Background";
import Logo from "../components/Navbar/Logo";

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Logo></Logo>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          direction: "horizontal",
          // ... all available Locomotive Scroll instance options
          smartphone: {
            smooth: true,
            direction: "horizontal",
          },
          tablet: {
            smooth: true,
            direction: "horizontal",
          },
          getDirection: true,
          getSpeed: true,
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <ScrollTriggerProxy />
        <main
          className="App fixed whitespace-normal"
          data-scroll-container
          ref={containerRef}
        >
          <Component {...pageProps} />
        </main>
      </LocomotiveScrollProvider>
      <NavbarTR />
      <NavbarBR />
      {/* <Background /> */}
    </>
  );
}

export default MyApp;
