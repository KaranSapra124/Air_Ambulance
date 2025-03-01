import React from "react";
import Container from "../Global/Container";

const Banner = () => {
  return (
    <div className="bg-primary-color my-8">
      <Container>
      <div className="flex flex-col gap-2">
      <h1 className="text-2xl text-center font-semibold text-white">
          Welcome to Drivelife Health Care & Human Resource
        </h1>
        <p className="text-center text-lg text-white">
          DHHR is the best air ambulance services provider in India and serves
          the world’s best <br/> medical patients exchange Service.
        </p>
      </div>
      </Container>
    </div>
  );
};

export default Banner;
