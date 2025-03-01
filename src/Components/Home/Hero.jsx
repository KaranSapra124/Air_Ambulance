import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = () => {
  return (
    <>
      <ScrollAnimation animateIn="backInRight" animateOnce duration={1.5} initiallyVisible>
        <div className="relative h-full">
          <div className="absolute bg-black/30 h-full w-full"></div>
          <img src="./Home/Hero-bg.png" alt="" />
          <div className="absolute inset-0 flex flex-col justify-center items-center space-y-24 mt-32">
            <h1 className="uppercase  text-5xl font-extrabold text-white text-center">
              your health is our priority
            </h1>
            <div className="flex flex-col items-center justify-center  gap-5">
              <button className="bg-white text-black rounded-full px-4 py-2 font-semibold">
                download brochure
              </button>
              <p className="text-white uppercase">see our services</p>
            </div>
          </div>
          <div className="h-1 w-8 bg-white shadow shadow-black mx-auto rotate-90"></div>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default Hero;
