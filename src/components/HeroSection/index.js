import React from "react";
import { Bg1 } from "../../assets";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center object-contain">
      <img src={Bg1} alt="Home" className="bg-cover object-cover bg-center h-5/6 w-full -z-10" />
    </div>
  );
};

export default HeroSection;
