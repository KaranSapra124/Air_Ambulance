import React from "react";
import Container from "../Global/Container";
import WhatWeDid from "../Home/SeeWhatWeDid";

const AboutUsData = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl  mx-auto text-center md:text-left gap-6">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h1 className="text-primary-color font-bold text-lg md:text-xl ">
              About DHHR
            </h1>
            <div className="h-1 w-12 lg:mr-auto lg:mx-0  mx-auto bg-primary-color rounded-full my-2"></div>
            <p className="text-primary-color font-medium text-xs md:text-sm leading-relaxed max-w-lg">
              If you have been looking for best private ambulance service, then
              you should dial us because we are operating in the market with an
              intention to provide quick service to eliminate the risk in life
              and death situations.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2">
            <p className="text-primary-color font-medium text-xs md:text-sm leading-relaxed max-w-2xl mb-4">
              Our nationwide network includes both ground and air ambulances,
              staffed by highly trained rescue teams equipped with life-saving
              technology. We understand the critical nature of emergencies and
              ensure our staff are prepared to respond quickly and effectively.
            </p>
            <p className="text-primary-color font-medium text-xs md:text-sm leading-relaxed max-w-2xl">
              We thrive to offer cost-friendly solutions to all our clients. We
              do not deny any call just because they cannot pay our price. In
              fact, we have a certain price but we can negotiate. We are into
              the business not because we want to make a lot of money it is
              because of our love for life.
            </p>
          </div>
        </div>
      </Container>
        <WhatWeDid />
    </>
  );
};

export default AboutUsData;
