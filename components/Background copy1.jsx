import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Fog from "../public/assets/fog.copy.svg"

const Background = () => {
  const canvasRef = useRef(null);
  const fogRef = useRef(null);

  useEffect(() => {
      const STAR_COLOR = "#fff";
      const STAR_SIZE = 5;
      const STAR_MIN_SCALE = 0.1;
      const OVERFLOW_THRESHOLD = 50;
      const STAR_COUNT = (window.innerWidth + window.innerHeight) / 16;
      // const STAR_COUNT = 16;
      // const STAR_COUNT = 1;
  
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
  
      let scale = 1, // device pixel ratio
        width,
        height;
  
      let stars = [];
  
      let pointerX, pointerY, tScrollY;
  
      let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.001 };
  
      let touchInput = false;
  
      generate();
      resize();
      step();
  
      // window.onresize = resize;
      // // window.onmousemove = onMouseMove;
      // window.onmousedown = onMouseDown;
      // window.onmouseup = onMouseUp;
      // window.ontouchmove = onTouchMove;
      // window.ontouchend = onMouseLeave;
      // document.onmouseleave = onMouseLeave;
      // window.onscroll = onScroll;
      
      function randomHex(start = 0, end = 15) {
        const hex = '0123456789ABCDEF';
        return gsap.utils.random(hex.split('').slice(start, end));
      }
      function doubleRandomHex(start = 0, end = 15) {
        return randomHex(start, end) + randomHex(start, end);
      }
  
      function generate() {
        for (let i = 0; i < STAR_COUNT; i++) {
          stars.push({
            x: 0,
            y: 0,
            z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
            // alpha : context.globalAlpha = 0.5 + 0.5 * Math.random(),
            alpha : 1,
            color: "#"+ doubleRandomHex() + doubleRandomHex() + doubleRandomHex(),
            starSize : Math.exp(gsap.utils.random(-30, 2, 1)) + 1 ,
          });
        }

      }
  
      function placeStar(star) {
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      }

  
      function recycleStar(star) {
        let direction = "z";
  
        let vx = Math.abs(velocity.x),
          vy = Math.abs(velocity.y);
  
        if (vx > 1 || vy > 1) {
          let axis;
  
          if (vx > vy) {
            axis = Math.random() < vx / (vx + vy) ? "h" : "v";
          } else {
            axis = Math.random() < vy / (vx + vy) ? "v" : "h";
          }
  
          if (axis === "h") {
            direction = velocity.x > 0 ? "l" : "r";
          } else {
            direction = velocity.y > 0 ? "t" : "b";
          }
        }
  
        star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
        
        // star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
        if (direction === "z") {
          star.z = 0.1;
          star.x = Math.random() * width;
          star.y = Math.random() * height;
        } else if (direction === "l") {
          star.x = -OVERFLOW_THRESHOLD;
          star.y = height * Math.random();
        } else if (direction === "r") {
          star.x = width + OVERFLOW_THRESHOLD;
          star.y = height * Math.random();
        } else if (direction === "t") {
          star.x = width * Math.random();
          star.y = -OVERFLOW_THRESHOLD;
        } else if (direction === "b") {
          star.x = width * Math.random();
          star.y = height + OVERFLOW_THRESHOLD;
        }
      }
  
      function resize() {
        scale = window.devicePixelRatio || 1;
  
        width = window.innerWidth * scale;
        height = window.innerHeight * scale;
  
        canvas.width = width;
        canvas.height = height;
  
        stars.forEach(placeStar);

      }
  
      function step() {
        context.clearRect(0, 0, width, height);
  
        update();
        render();
  
        // requestAnimationFrame(step);
      }
  
      function update() {
        velocity.tx *= 0.96;
        velocity.ty *= 0.96;
  
        velocity.x += (velocity.tx - velocity.x) * 0.8;
        velocity.y += (velocity.ty - velocity.y) * 0.8;
  
        stars.forEach((star) => {
          star.x += velocity.x * star.z;
          star.y += velocity.y * star.z;
  
          star.x += (star.x - width / 2) * velocity.z * star.z;
          star.y += (star.y - height / 2) * velocity.z * star.z;
          star.z += velocity.z;
  
          // recycle when out of bounds
          if (
            star.x < -OVERFLOW_THRESHOLD ||
            star.x > width + OVERFLOW_THRESHOLD ||
            star.y < -OVERFLOW_THRESHOLD ||
            star.y > height + OVERFLOW_THRESHOLD
          ) {
            recycleStar(star);
          }
        });
      }
  
      function render() {
        stars.forEach((star) => {
          context.beginPath();
          context.lineCap = "round";
          // context.globalAlpha = 0.5 + 0.5 * Math.random();
          // context.globalAlpha = star.alpha;
          // let canvasDisPow = Math.pow((width / 2), 2) + Math.pow((height / 2), 2);
          // starToCenterDisPow = Math.pow((width / 2 - star.x), 2) + Math.pow((height / 2 - star.y), 2),
          // disScale = Math.pow((2 - starToCenterDisPow / canvasDisPow), 3)
          // context.lineWidth = STAR_SIZE * star.z * scale * disScale;
          let starSize = STAR_SIZE * scale * star.z * star.starSize;
          context.lineWidth = starSize;
          // context.lineWidth = STAR_SIZE * scale * star.z * (Math.exp(star.z)-1);
          // console.log(Math.exp(star.z));
          // context.lineWidth = STAR_SIZE * star.z * scale ;
          // context.strokeStyle = star.color;
  
          var gradStar = context.createRadialGradient(star.x, star.y, starSize*0.1, star.x, star.y, starSize);
          gradStar.addColorStop(0.5, "#ffffff");
          // grad.addColorStop(0, star.color);
          gradStar.addColorStop(0.6, star.color);
          gradStar.addColorStop(1, star.color + '00');
  
          // context.strokeStyle = "#fff";
          context.strokeStyle = gradStar;
          context.shadowColor = star.color;
          context.shadowBlur = STAR_SIZE * scale * star.z * 10;
          // context.beginPath();
          context.moveTo(star.x, star.y);
  
          var tailX = velocity.x * 2,
            tailY = velocity.y * 2;
  
          // stroke() wont work on an invisible line
          if (Math.abs(tailX) < 0.1) tailX = 0.5;
          if (Math.abs(tailY) < 0.1) tailY = 0.5;
  
          // context.lineTo(star.x + tailX, star.y + tailY);
          context.lineTo(star.x, star.y);
  
          context.stroke();
  
  
          // //Tails
          // context.beginPath();
          // context.lineCap = "round";
          // // context.globalAlpha = 0.5 + 0.5 * Math.random();
          // // context.globalAlpha = star.alpha;
          // context.lineWidth = STAR_SIZE * star.z * scale * 0.2;
          // // context.beginPath();
          // context.moveTo(star.x, star.y);
          // let tails = 5;
          // var tailX = star.x - (star.x - width / 2) * velocity.z * star.z * tails,
          // tailY =  star.y - (star.y - height / 2) * velocity.z * star.z * tails;
          // // stroke() wont work on an invisible line
          // // if (Math.abs(tailX) < 0.1) tailX = 0.5;
          // // if (Math.abs(tailY) < 0.1) tailY = 0.5;
          // var grad= context.createLinearGradient(star.x, star.y, tailX, tailY);
          // grad.addColorStop(0, "#ffffff");
          // // grad.addColorStop(0, star.color);
          // grad.addColorStop(1, "#ffffff00");
          // // grad.addColorStop(1, "#ffffff");
          // context.shadowColor = star.color;
          // context.shadowBlur = 5;
          // context.strokeStyle = grad;
          // context.lineTo( tailX,  tailY);
  
          // context.stroke();
          
        });
  
      }
  
      function movePointer(x, y) {
  
        if (typeof pointerY === "number") {
  
          // let oy = y - pointerY;
          let oy = y - pointerY + (window.pageYOffset - tScrollY)/3;
          velocity.ty = velocity.ty + (oy / 8) * scale * (touchInput ? 1 : -1);
        }
        if (typeof pointerX === "number" ) {
          let ox = x - pointerX;
          velocity.tx = velocity.tx + (ox / 8) * scale * (touchInput ? 1 : -1);
        }
        
        pointerX = x;
        pointerY = y;
        tScrollY = window.pageYOffset;
        
        
      }
  
      function onMouseMove(event) {
        // console.log(event);
        touchInput = false;
        movePointer(event.clientX, event.clientY);
      }
  
      function onTouchMove(event) {
        touchInput = true;
  
        movePointer(event.touches[0].clientX, event.touches[0].clientY, true);
  
        event.preventDefault();
      }
  
      function onMouseLeave() {
        pointerX = null;
        pointerY = null;
      }
  
      function onScroll() {
        pointerX = null;
        movePointer(null, pointerY);
      }
  
      function onMouseDown(event) {
        // console.log(event);
        window.addEventListener("mousemove",onMouseMove);
      }
  
      function onMouseUp(event) {
        // console.log(event);
        window.removeEventListener("mousemove",onMouseMove);
      }


      let fogConEl = fogRef.current;
      let fogQ = gsap.utils.selector(fogConEl);
      let fogEl = fogQ('#fog')[0];
      let viewBox = fogEl.viewBox.baseVal;
      

      
      console.log(viewBox);
      // gsap.to(
      //   viewBox,
      //   10,
      //   {
      //       x: 2000-200,
      //       y: 800-80,
      //       width: 400,
      //       height: 160,
            
      //   },
      // );

      // gsap.to(
      //   fogEl,
      //   10,
      //   {
      //       scale: 10,       
      //   },
      // );
  }, []);

  return (
    <div className="fixed top-0 -z-10 animate-hue-rotate" ref={fogRef} >
      <canvas data-scroll-sticky className=" " ref={canvasRef}></canvas>
      <Fog className="absolute top-0 left-0  " style={{width: '4000px', }}/>
    </div>
    
  );
};

export default Background;
