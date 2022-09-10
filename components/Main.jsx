import React, { useLayoutEffect, useEffect, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
let heroEl = {};
let tailEl;


function Main() {
  gsap.registerPlugin(ScrollTrigger);
  const ssRef = useRef();
  const heroRef = useRef();
  const tailElRef = useRef(null);

  useEffect(() => {
    heroEl.ss = ssRef.current;
    heroEl.container = heroRef.current;
    tailEl = tailElRef.current;
    


    let t1;
    console.log
    const updateScrollMain = () => {
      ScrollTrigger.getById("triggerMain1")?.kill();
      t1?.kill();
      t1 = gsap.timeline();
      t1.to(
        heroEl.container,
        {
          scrollTrigger: {
            id: "triggerMain1",
            trigger: heroEl.container,
            start: "left left",
            end: "+=100%",
            horizontal: true,
            scroller: ".App", // locomotive element
            scrub: true,
            // markers: true,

          },
          // we have to increase scrolling height of this section same as the scrolling element width
          // ease: "power1.out,",
          ease: "none",
          y: heroEl.container.offsetHeight,
          // opacity: 1,
        }
      );
      ScrollTrigger.refresh();
    }
    setTimeout(() => {
      updateScrollMain();
    }, 1000);
    window.addEventListener("resize", updateScrollMain);
    return () => {
      window.removeEventListener("resize", updateScrollMain);
      t1?.kill();
      ScrollTrigger.getById("triggerMain1")?.kill();
    };
  });

  return (
    <div
      id="hero"
      // className=" w-screen h-screen flex justify-center items-center"
      className=" w-screen h-screen flex justify-center items-center z-10"
      ref={heroRef}
    >
      <div className="max-w-[1240px] pl-4 pr-8 lg:px-16" >
        <h1 className="  text-gray-200 flex ">
          Hi, I&#39;m&nbsp;
          {/* hover:drop-shadow-[0_10px_10px_#FFFFFF] */}
          <span
            data-scroll
            data-scroll-speed="0.1"
            data-scroll-position="top"
            // data-scroll-delay="0.04"
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
            // data-scroll-delay="0.1"
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
            // data-scroll-delay="0.2"
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
            // data-scroll-delay="0.5"
            data-scroll-target="#hero"
            data-scroll-direction="vertical"
            className="text-secondary block"
          >
            X
          </span>
        </h1>

        <h1 className="  text-primary-light">A Full Stack Developer</h1>
        <div className=" text-gray-200">
          who can build the&nbsp;
          <span ref={ssRef} id="heross" className="inline-block relative ">
            STARSHIP🚀
            <span ref={tailElRef} className="absolute -z-10 block w-0 h-[6px] bg-orange-400 border border-black rotate-[135deg] origin-top-left rounded-r-lg left-[92px] top-[18px] "></span>
          </span>
          &nbsp;website you just need.
        </div>
        <div className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"></div>
      </div>
    </div>
  );
}

export default Main;
export { heroEl };
export {tailEl};