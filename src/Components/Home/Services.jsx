import React, { useEffect, useState } from "react";
import Container from "../Global/Container";
import { Carousel } from "antd";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

const Services = () => {
  const [slides, setSlides] = useState(3);
  const servicesArr = [
    {
      image: "./Home/plane.png",
      title: "Air Ambulance",
      desc: "Air Ambulance is one of the fastest and most advantageous emergency services...",
    },
    {
      image: "./Home/train.png",
      title: "Train Medical",
      desc: "Our Emergency Services provide the most dependable bed-to-bed ICU support...",
    },
    {
      image: "./Home/ambulance.png",
      title: "Standby Medical Assistance",
      desc: "We offer road ambulance services primarily in Delhi-NCR with a large fleet...",
    },
    {
      image: "./Home/Doctor.png",
      title: "Road Ambulance",
      desc: "Every second counts in emergencies. Our road ambulance service ensures swift response...",
    },
  ];

  useEffect(() => {
    const updateSlides = () => {
      setSlides(window.outerWidth > 768 ? 3 : 1);
    };
  
    window.addEventListener("resize", updateSlides);
    updateSlides(); // Initial call
  
    return () => window.removeEventListener("resize", updateSlides);
  }, []);
  return (
    <>
      <ScrollAnimation animateIn="backInUp" duration={1.5}>
        <Container>
          <Carousel
            autoplay
            dots={false}
            arrows
            infinite
            className="lg:max-w-screen-xl max-w-sm mx-auto"
            slidesToShow={slides}
            adaptiveHeight
          >
            {servicesArr.map((elem, index) => (
              <div
                key={index}
                className="bg-primary-color lg:w-full w-fit  lg:p-4 p-2 rounded-xl shadow-lg hover:scale-105 transition-all cursor-pointer flex flex-col items-center text-white border border-gray-300"
              >
                <img
                  src={elem.image}
                  className="lg:w-40 lg:h-40 w-32 h-32 mx-auto mb-3 object-contain"
                  alt={elem.title}
                />
                <div className="bg-yellow-200/50 lg:w-full w-fit lg:mx-0 mx-auto p-2 rounded text-center">
                  <h1 className="lg:text-lg text-sm text-red-600 font-bold mb-1">
                    {elem.title}
                  </h1>
                  <div className="h-1 w-8 mx-auto bg-white rounded-full my-2"></div>
                  <p className="text-xs max-w-48 mx-auto opacity-80 font-semibold">
                    {elem.desc}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
          <AmbulanceConnection />
        </Container>
      </ScrollAnimation>
    </>
  );
};

const AmbulanceConnection = () => {
  return (
    <div className="bg-primary-color lg:my-6 my-2 relative flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto rounded-xl shadow-lg lg:p-6 p-2 md:h-80">
      {/* Text Content */}
      <div className="w-full flex md:w-3/5 justify-between items-center text-white text-center md:text-left px-4 md:px-8">
        <div className="flex flex-col">
          <h1 className="lg:text-4xl text-sm md:text-xl font-bold mb-3 leading-snug">
            Connecting you with critical care, instantly.
          </h1>
          <p className="lg:text-xs text-[0.6rem] opacity-90 lg:max-w-lg max-w-sm">
            We provide top-tier medical care during patient transfers, with a
            dedicated team of specialists and paramedics available 24/7. Our
            Emergency Charter Air Ambulance offers this superior service at a
            competitive cost, prioritizing patient well-being.
          </p>
        </div>
        <div className="h-1 w-32 bg-white rounded-full rotate-90 hidden md:block"></div>
      </div>

      {/* Image */}
      <div className="w-full md:w-2/5 flex justify-center md:justify-end">
        <img
          className="lg:w-full  w-32 drop-shadow-lg"
          src="./Home/ambulance.png"
          alt="Ambulance"
        />
      </div>
    </div>
  );
};

export default Services;
