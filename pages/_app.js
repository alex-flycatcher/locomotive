import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import "../styles/locomotive-scroll.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  return (
    <>
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
        <main className='App fixed' data-scroll-container ref={containerRef}>
          <Component {...pageProps} />
          {/* <Navbar /> */}
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default MyApp;
