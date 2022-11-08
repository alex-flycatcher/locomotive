import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Main, { heroEl, tailEl } from "./Main";
import About, { aboutEl } from "./About";

const getPosition = () => {
  let ssStartingXy = {};
  let ssEndingXy = {};

  //Starting Position calculated
  let heroContainerRect = heroEl.container.getBoundingClientRect();
  let heroSsRect = heroEl.ss.getBoundingClientRect();
  ssStartingXy.x = Math.abs(heroSsRect.left - heroContainerRect.left);
  // ssStartingXy.y = Math.abs(heroEl.ss.offsetTop - heroEl.container.offsetTop);
  ssStartingXy.y = Math.abs(heroSsRect.top - heroContainerRect.top);

  //Ending position calculated
  let aboutContainerRect = aboutEl.container.getBoundingClientRect();
  let aboutSsRect = aboutEl.ss.getBoundingClientRect();

  ssEndingXy.x = Math.abs(aboutSsRect.left - heroSsRect.left);
  ssEndingXy.y = -(
    window.innerHeight -
    Math.abs(aboutSsRect.top - aboutContainerRect.top) +
    ssStartingXy.y
  );

  return { ssStartingXy, ssEndingXy };
};

const updateStarShip = ({
  t1,
  triggerElement,
  animateElement,
  ScrollTrigger,
  heroEl,
  aboutEl,
}) => {
  t1?.kill();
  t1 = gsap.timeline();
  let { ssStartingXy, ssEndingXy } = getPosition();

  //Have the scale 3 in the begin to avoid the bug it scale before scale, have the scale 1 after scale 3 will make it appear as scale 1.
  t1.fromTo(
    animateElement,
    {
      scale: 3,
    },
    {
      scrollTrigger: {
        id: "triggerSs1",
        trigger: aboutEl.container,
        start: "left center",
        end: "left left",
        horizontal: true,
        scroller: ".App",
        scrub: true,
        // markers: true,
      },
      ease: "none",
      scale: 1,
    }
  )
    .fromTo(
      animateElement,
      {
        scale: 1,
      },
      {
        scrollTrigger: {
          id: "triggerSs2",
          trigger: heroEl.container,
          start: "left left",
          end: "center left",
          horizontal: true,
          scroller: ".App",
          scrub: true,
          // markers: true,
        },
        ease: "none",
        scale: 3,
      }
    )
    .to(animateElement, {
      scrollTrigger: {
        id: "triggerSs3",
        trigger: heroEl.container,
        start: "left left",
        end: "+=100%",
        horizontal: true,
        scroller: ".App",
        scrub: true,
        // snap: 1,
        // markers: true,
      },
      ease: "none",
      x: ssEndingXy.x,
      y: ssEndingXy.y,
      // opacity: 1,
    })
    .to(aboutEl.ss, {
      scrollTrigger: {
        id: "triggerSs4",
        trigger: heroEl.container,
        start: "left left",
        end: "+=100%",
        horizontal: true,
        scroller: ".App",
        scrub: true,
        // markers: true,
        toggleClass : {
          targets: aboutEl.ss, 
          className: "opacity-0"
        }
      },
      // opacity: 1,
    })
    .to(animateElement, {
      scrollTrigger: {
        id: "triggerSs5",
        trigger: aboutEl.container,
        start: "left left",
        end: "right max",
        horizontal: true,
        scroller: ".App",
        scrub: true,
        // markers: true,
        toggleClass : {
          targets: animateElement, 
          className: "opacity-0"
        }
      },
      // opacity: 0,
    })
    .fromTo(
      tailEl,
      { width: 20, opacity: 1 },
      {
        scrollTrigger: {
          id: "triggerSs7",
          trigger: aboutEl.container,
          start: "left center",
          end: "left left",
          horizontal: true,
          scroller: ".App",
          scrub: true,
          // markers: true,
        },
        width: 0,
        opacity: 0,
        ease: "power4.in",
      }
    )
    .fromTo(
      tailEl,
      { width: 0, opacity: 0 },
      {
        scrollTrigger: {
          id: "triggerSs6",
          trigger: heroEl.container,
          start: "left left",
          end: "center left",
          horizontal: true,
          scroller: ".App",
          scrub: true,
          // markers: true,
        },
        width: 20,
        opacity: 1,
        ease: "power4.out",
      }
    )


  return t1;
};

const Starship = () => {
  gsap.registerPlugin(ScrollTrigger);

  const triggerEleRef = useRef(null);
  const animateEleRef = useRef(null);

  useEffect(() => {
    let triggerElement = triggerEleRef.current;
    let animateElement = heroEl.ss;
    let t1;
    const runUpdateSs = () => {
      for (let i = 1; i <= 7; i++) {
        ScrollTrigger.getById("triggerSs" + i)?.kill();
      }
      t1 = updateStarShip({
        t1,
        triggerElement,
        animateElement,
        ScrollTrigger,
        heroEl,
        aboutEl,
      });
      ScrollTrigger.refresh();
    };

    setTimeout(() => {
      runUpdateSs();
    }, 1000);
    window.addEventListener("resize", runUpdateSs);
    return () => {
      window.removeEventListener("resize", runUpdateSs);
      t1?.kill();
      for (let i = 1; i <= 5; i++) {
        ScrollTrigger.getById("triggerSs" + i)?.kill();
      }
    };
  }, []);
  return (
    <div ref={triggerEleRef} className="flex">
      {/* <div className="absolute" ref={animateEleRef}>
        STARSHIP🚀
      </div> */}
      <Main />
      <About />
    </div>
  );
};

export default Starship;
