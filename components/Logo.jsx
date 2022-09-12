import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const Logo = () => {
  const logoRef = useRef(null);
  useEffect(() => {
    let logoEl = logoRef.current;
    let q = gsap.utils.selector(logoEl);
    let t1 = gsap.timeline();
    let displayTime = 4;
    let repeatTime = displayTime * 4;
    q("span").forEach((spanEl) => {
      // console.log(spanEl)
      t1.to(spanEl, {
        duration: displayTime,
        repeat: -1,
        repeatDelay: repeatTime,
        keyframes: {
          opacity: [0, 1, 0],
          display: ["none", "inline", "none"],
        },
        easeEach: "expo.inOut",
        ease: "none",
      });
    });
    t1.to(q("span"), {
      duration: displayTime,
      repeat: -1,
      repeatDelay: repeatTime,
      keyframes: {
        opacity: [0, 1, 0],
        display: ["none", "inline", "none"],
      },
      easeEach: "expo.inOut",
      ease: "none",
    });

    return () => {
      t1?.kill();
    };
  });
  return (
    <div
      className="text-secondary text-6xl font-bold absolute left-4 z-10"
      ref={logoRef}
    >
      {/* initial="hidden" animate="visible" */}
      <span style={{ display: "none", opacity: 0 }}>A</span>
      <span style={{ display: "none", opacity: 0 }}>L</span>
      <span style={{ display: "none", opacity: 0 }}>E</span>
      <span style={{ display: "none", opacity: 0 }}>X</span>
    </div>
  );
};

export default Logo;
