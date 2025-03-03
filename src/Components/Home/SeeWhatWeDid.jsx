import React from "react";
import Container from "../Global/Container";
import ScrollAnimation from "react-animate-on-scroll";

const SeeWhatWeDid = () => {
  const data = [
    {
      count: 42,
      title: "domestic flights",
      vector: "./Home/Vector.png",
    },
    {
      count: 95,
      title: "Qualified Doctors",
      vector: "./Home/doctor-01-stroke-rounded 1.png",
    },
    {
      count: 10,
      title: "Years of experience",
      vector: "./Home/ambulance-stroke-rounded 1.png",
    },
    {
      count: 4000,
      title: "Medical Escorts",
      vector: "./Home/medicine-bottle-01-stroke-rounded 1.png",
    },
  ];
  return (
    <ScrollAnimation animateIn="backInUp" duration={1.5}>
      <Container>
        <h1 className="font-bold text-center my-2 lg:my-4 text-primary-color text-sm lg:text-2xl">
          See What We Did
        </h1>
        <div className="flex lg:flex-row flex-col justify-between gap-8  mx-auto max-w-screen-xl">
          {data?.map((elem, index) => {
            return (
              <div className="bg-primary-color shadow-md shadow-black hover:scale-105 transition-all cursor-pointer rounded-md lg:py-9 py-3.5 w-64 lg:mx-0 mx-auto lg:w-full lg:p-5 p-3 ">
                <img
                  className="lg:w-32 w-16 mb-2 mx-auto"
                  src={elem?.vector}
                  alt=""
                  srcset=""
                />
                <h1 className="text-sm lg:text-4xl font-extrabold text-center text-white">
                  {elem?.count}
                </h1>
                <div className="h-1 lg:w-12 w-6 bg-white rounded-full my-2 mx-auto"></div>
                <h2 className="lg:text-sm text-xs text-center  text-white  font-semibold">
                  {elem?.title}
                </h2>
              </div>
            );
          })}
        </div>
      </Container>
    </ScrollAnimation>
  );
};

export default SeeWhatWeDid;
