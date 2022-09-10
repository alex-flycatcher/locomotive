// To use gsap with locomotive scroll, we have to use scroller proxy provided by gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const ScrollTriggerProxy = () => {
  // first let's get instance of locomotive scroll

  const { scroll } = useLocomotiveScroll();
  // Register scroll trigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (scroll) {
      // locomotive scrolling element, in our case it's app (main)
      const element = scroll.el;
      // on scroll of locomotive, update scrolltrigger
      scroll.on("scroll", ScrollTrigger.update);

      //  let's use scroller proxy
      ScrollTrigger.scrollerProxy(element, {
        scrollLeft(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.x;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: element.style.transform ? "transform" : "fixed",
      });
      ScrollTrigger.defaults({
        scroller: element,
      });

    }

    return () => {
      // ScrollTrigger.addEventListener("refresh", () => scroll?.update());
      // ScrollTrigger.refresh();
      let triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [scroll]);

  return null;
};

export default ScrollTriggerProxy;
