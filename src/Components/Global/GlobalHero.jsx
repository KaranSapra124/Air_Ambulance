import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
// https://s3-alpha-sig.figma.com/img/0e91/0ee5/021902518f91ef73f152bd16180389be?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bfh0xVBmx5OtE5K8jrl~wXZzJGRmW~HLEb4KcoAj2-6ANUeXH~1RiAM3Yoojnm0SugCc2ES69bJyRwsFSC2a2mYMS0YyzZOzhH5QuYUPexoOGowsTLh8qcyt5oskQW484haeYMNqV7uR1bjFroJwiFO9KQcBtIvfGJSicEkA9zeHoZy3z5fdaww~2EBlJVdlxhp07kpaJGGVBmcLdlIPJGwd68LDyLQfyGNPL5b9eL~hQ69L-MHOgCIQxYUuY5dpy0pee0FJo8WwLdEevpCa6Jc~-40a5~lpgt9FGhHvzrOzbziqnZqAoRltbwx8yTacm7tecspEtckdifnUtGYB~Q__
const GlobalHero = ({ image, title }) => {
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
            <div className="absolute w-full inset-0 bg-black/50"></div>

            {/* Background Image */}
            <img
              src={image}
              alt=""
              className="lg:w-full lg:h-full  object-cover"
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col lg:gap-4 gap-1 justify-center items-center text-center px-4">
              <h1 className="uppercase text-white font-extrabold lg:text-5xl text-sm md:text-2xl">
                {title}
              </h1>
              {/* <button className="bg-white text-black rounded-full lg:px-6 lg:py-3 p-0.5 font-semibold lg:text-sm text-xs md:text-base">
                download brochure
              </button> */}
            </div>

            {/* Scroll Indicator */}
            <div className="h-1 lg:w-8 w-4 bg-white shadow shadow-black mx-auto rotate-90 lg:mt-0 -mt-1"></div>
          </div>
        </ScrollAnimation>
   
    </>
  );
};

export default GlobalHero;
