import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = () => {
  return (
    <>
      <ScrollAnimation
        animateIn="backInRight"
        animateOnce
        duration={1.5}
        initiallyVisible
      >
        <div className="relative lg:h-screen h-full w-full">
          {/* Overlay */}
          <div className="absolute  inset-0 bg-black/50"></div>

          {/* Background Image */}
          <img
            src="./Home/Hero-bg.png"
            alt=""
            className="lg:w-full lg:h-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col lg:gap-4 gap-1 justify-center items-center text-center px-4">
            <h1 className="uppercase text-white font-extrabold lg:text-5xl text-sm md:text-2xl">
              your health is our priority
            </h1>
            <button className="bg-white text-black rounded-full lg:px-6 lg:py-3 p-0.5 font-semibold lg:text-sm text-xs md:text-base">
              download brochure
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="h-1 lg:w-8 w-4 bg-white shadow shadow-black mx-auto rotate-90 lg:mt-0 -mt-1"></div>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default Hero;
