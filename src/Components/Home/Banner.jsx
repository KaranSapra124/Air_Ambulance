import React from "react";
import Container from "../Global/Container";

const Banner = () => {
  return (
    <div className="bg-primary-color lg:my-8 my-4">
      <Container>
      <div className="flex flex-col lg:gap-2 gap-1.5">
      <h1 className="lg:text-2xl text-sm text-center font-semibold text-white">
          Welcome to Drivelife Health Care & Human Resource
        </h1>
        <p className="text-center lg:font-normal font-semibold text-[0.6rem] lg:text-lg text-white">
          DHHR is the best air ambulance services provider in India and serves
          the world’s best <br className="lg:block hidden"/> medical patients exchange Service.
        </p>
      </div>
      </Container>
    </div>
  );
};

export default Banner;
