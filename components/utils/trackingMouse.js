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

  let elementTop = element.getBoundingClientRect().top;
  let elementLeft = element.getBoundingClientRect().left;
  let rotateRange = options.rRange ? options.rRange : 30;
  let rotateRyMin = options.ryMin ? options.ryMin : -rotateRange;
  let rotateRyMax = options.ryMax ? options.ryMax : rotateRange;
  let rotateRxMin = options.rxMin ? options.rxMin : -rotateRange;
  let rotateRxMax = options.rxMax ? options.rxMax : rotateRange;

  let p = options.p ? options.p : 15
  let positionYMin = options.yMin ? options.yMin : -p;
  let positionYMax = options.yMax ? options.yMax : p;
  let positionXMin = options.xMin ? options.xMin : -p;
  let positionXMax = options.xMax ? options.xMax : p;

  return (event) => {
    let elementRy = gsap.utils.mapRange(
      -window.innerHeight,
      window.innerHeight,
      rotateRyMin,
      rotateRyMax,
      event.clientY - elementTop
    );
    let elementRx = gsap.utils.mapRange(
      -window.innerWidth,
      window.innerWidth,
      rotateRxMin,
      rotateRxMax,
      event.clientX - elementLeft
    );
    let elementY = gsap.utils.mapRange(
      -window.innerHeight,
      window.innerHeight,
      positionYMin,
      positionYMax,
      event.clientY - elementTop
    );
    let elementX = gsap.utils.mapRange(
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
