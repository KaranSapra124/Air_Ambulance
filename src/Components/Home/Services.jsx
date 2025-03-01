import React from "react";
import Container from "../Global/Container";
import { Carousel } from "antd";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Services = () => {
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

  return (
    <Container>
      <Carousel
        autoplay
        dots={false}
        prevArrow={<FaArrowLeft />}
        nextArrow={<FaArrowRight />}
        slidesToShow={window.outerWidth > 768 ? 4 : 1}
        adaptiveHeight
        arrows
        infinite
        className="max-w-screen-xl    mx-auto "
      >
        {servicesArr?.map((elem, index) => (
          <div
            key={index}
            className="bg-primary-color    p-4 rounded-xl shadow-xl hover:scale-105 transition-all cursor-pointer flex flex-col  items-center text-white border-2 border-gray-200"
          >
            <img
              src={elem?.image}
              className="w-52 h-52 mx-auto mb-4  object-contain"
              alt={elem?.title}
            />
            <div className="bg-yellow-200/50 p-2 rounded">
              <h1 className="text-sm  text-red-600  font-bold text-center mb-2">
                {elem?.title}
              </h1>
              <div className="lg:h-1 h-0.5 w-8 mx-auto bg-white rounded-full my-2"></div>
              <p className="text-xs max-w-52 mx-auto text-center opacity-80 leading-4 text-white font-semibold">
                {elem?.desc}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
      <AmbulanceConnection />
    </Container>
  );
};

const AmbulanceConnection = () => {
  return (
    <Container>
      <div className="bg-primary-color relative h-80 flex max-w-screen-xl mx-auto rounded-xl shadow-lg p-6">
        <div className="w-1/2 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Connecting you with critical care, instantly.
          </h1>
          <p className="text-sm max-w-lg text-center opacity-90">
            We provide top-tier medical care during patient transfers, with a
            dedicated team of specialists and paramedics available around the
            clock. Emergency Charter Air Ambulance offers this superior service
            at a competitive cost, prioritizing your patients' well-being.
          </p>
        </div>
        <img
          className="absolute -top-24 right-10 w-[34rem]  "
          src="./Home/ambulance.png"
          alt="Ambulance"
        />
      </div>
    </Container>
  );
};

export default Services;
