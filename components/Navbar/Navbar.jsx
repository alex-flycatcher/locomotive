import React, { useEffect } from "react";
import Circle from "../../public/assets/circle.svg";

const Navbar = () => {
  return (
    <div className="z-50 fixed w-screen h-screen ">
      <div className="absolute top-0 left-0"></div>
      <div className="absolute top-0 right-0">
        <div className="mt-5 mr-5">
          <Circle className="w-40 max-w-[30vw]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
