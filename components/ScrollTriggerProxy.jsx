// To use gsap with locomotive scroll, we have to use scroller proxy provided by gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

let scrollInstance ;


const ScrollTriggerProxy = () => {
  // first let's get instance of locomotive scroll

  const { scroll } = useLocomotiveScroll();
  // Register scroll trigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!scroll) {
      return;
    }
    // if (scroll) {
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

    // const scrollSnap = () => {
    //   console.log(scroll.scroll.instance);
    //   // console.log(ScrollTrigger.direction);
    //   if (scroll.scroll.instance.direction == 'right') {
    //     let position = Math.ceil(scroll.scroll.instance.scroll.x/window.innerWidth)*window.innerWidth
    //     // console.log(scroll.scroll.instance.scroll.x);
    //     // console.log(position);
    //     scroll.scrollTo(position);
    //   }
    //   if (scroll.scroll.instance.direction == 'left') {
    //     let position = Math.floor(scroll.scroll.instance.scroll.x/window.innerWidth)*window.innerWidth
    //     // console.log(scroll.scroll.instance.scroll.x);
    //     // console.log(position);
    //     scroll.scrollTo(position);
    //   }
    // }
    // ScrollTrigger.addEventListener("scrollEnd",scrollSnap);
    const scrollSnap = (event) => {
      // console.log(event);
      if (event.deltaY > 0) {
        let position =
          (Math.round(scroll.scroll.instance.scroll.x / window.innerWidth)+1) *
          window.innerWidth;

        scroll.scrollTo(position);
      }
      if (event.deltaY < 0) {
        let position =
          (Math.round(scroll.scroll.instance.scroll.x / window.innerWidth)-1) *
          window.innerWidth;
        if (position< 0) position =0;

        scroll.scrollTo(position);
      }
    };
    window.addEventListener("wheel", scrollSnap);
    
    scrollInstance = scroll;
    return () => {
      // ScrollTrigger.addEventListener("refresh", () => scroll?.update());
      // ScrollTrigger.refresh();
      // let triggers = ScrollTrigger.getAll();
      // triggers.forEach((trigger) => {
      //   trigger.kill();
      // });
      // scroll.off("scroll", ScrollTrigger.update);
      // ScrollTrigger.removeEventListener("scrollEnd",scrollSnap);
      window.removeEventListener("wheel", scrollSnap);
    };
  }, [scroll]);

  return null;
};

export default ScrollTriggerProxy;
export {scrollInstance};