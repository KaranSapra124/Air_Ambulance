import React from "react";
import Container from "../Global/Container";

const ContactBanner = () => {
  return (
    <div className="bg-primary-color ">
      <Container>
        <div className="flex flex-col items-center text-center lg:space-y-4 space-y-2">
          <h1 className="text-white lg:text-2xl text-sm font-bold">
            You can count on us, anytime, anywhere.
          </h1>
          <p className="text-white lg:text-sm text-xs ">
            Need an ambulance? We're here for you 24/7, providing reliable
            service you can trust.
          </p>
          <div className="flex justify-center w-full lg:gap-10 gap-1.5">
            <button className="bg-white lg:text-sm cursor-pointer text-[0.6rem] text-[#d1361b] font-bold lg:px-4 px-1.5 lg:py-2 py-1 rounded-full shadow-md">
              Call Us on +91 9990499116
            </button>
            <button className="bg-white lg:text-sm cursor-pointer text-[0.6rem] text-[#d1361b] font-bold lg:px-4 px-1.5 lg:py-2 py-1 rounded-full shadow-md">
              Chat on Whatsapp
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactBanner;
