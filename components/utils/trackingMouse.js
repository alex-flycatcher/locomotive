import gsap from "gsap";

/**
 *
 * @param {*} element
 * @param {*} options see example for all the options
 * @example
 * trackingMouse(element, options= {
 * rRange: 30
 * ryMin: -30
 * ryMax: 30
 * rxMin: -30
 * rxMax: 30
 * 
 * p: 15 //Range
 * yMin: -15
 * yMax: 15
 * xMin: -15
 * xMax: 15
 * })
 */

const trackingMouse = (element, options = {}) => {


  const rxSetter = gsap.quickSetter(element, "rotateX", "deg"); //vertical rotate
  const rySetter = gsap.quickSetter(element, "rotateY", "deg"); //horizontal rotate
  const xSetter = gsap.quickSetter(element, "x", "px");
  const ySetter = gsap.quickSetter(element, "y", "px");

  const elementTop = element.getBoundingClientRect().top;
  const elementLeft = element.getBoundingClientRect().left;
  const rotateRange = options.rRange ? options.rRange : 30;
  const rotateRyMin = options.ryMin ? options.ryMin : -rotateRange;
  const rotateRyMax = options.ryMax ? options.ryMax : rotateRange;
  const rotateRxMin = options.rxMin ? options.rxMin : -rotateRange;
  const rotateRxMax = options.rxMax ? options.rxMax : rotateRange;

  const p = options.p ? options.p : 15
  const positionYMin = options.yMin ? options.yMin : -p;
  const positionYMax = options.yMax ? options.yMax : p;
  const positionXMin = options.xMin ? options.xMin : -p;
  const positionXMax = options.xMax ? options.xMax : p;

  return (event) => {
    const elementRy = gsap.utils.mapRange(
      -window.innerHeight,
      window.innerHeight,
      rotateRyMin,
      rotateRyMax,
      event.clientY - elementTop
    );
    const elementRx = gsap.utils.mapRange(
      -window.innerWidth,
      window.innerWidth,
      rotateRxMin,
      rotateRxMax,
      event.clientX - elementLeft
    );
    const elementY = gsap.utils.mapRange(
      -window.innerHeight,
      window.innerHeight,
      positionYMin,
      positionYMax,
      event.clientY - elementTop
    );
    const elementX = gsap.utils.mapRange(
      -window.innerWidth,
      window.innerWidth,
      positionXMin,
      positionXMax,
      event.clientX - elementLeft
    );
    rxSetter(elementRy);
    rySetter(elementRx);
    xSetter(elementX);
    ySetter(elementY);
  };
};

export default trackingMouse;
