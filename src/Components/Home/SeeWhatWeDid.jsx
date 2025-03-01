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
        <h1 className="font-bold text-center my-4 text-primary-color text-2xl">
          See What We Did
        </h1>
        <div className="flex justify-between gap-8  mx-auto max-w-screen-xl">
          {data?.map((elem, index) => {
            return (
              <div className="bg-primary-color shadow-md shadow-black hover:scale-105 transition-all cursor-pointer rounded-md py-9 w-full p-5 ">
                <img
                  className="w-32 mb-2 mx-auto"
                  src={elem?.vector}
                  alt=""
                  srcset=""
                />
                <h1 className="text-4xl font-extrabold text-center text-white">
                  {elem?.count}
                </h1>
                <div className="h-1 w-12 bg-white rounded-full my-2 mx-auto"></div>
                <h2 className="text-center  text-white  font-semibold">
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
