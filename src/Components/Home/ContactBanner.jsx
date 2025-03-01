import React from "react";
import Container from "../Global/Container";

const ContactBanner = () => {
  return (
    <div className="bg-primary-color ">
      <Container>
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-white text-2xl font-bold">
            You can count on us, anytime, anywhere.
          </h1>
          <p className="text-white ">
            Need an ambulance? We're here for you 24/7, providing reliable
            service you can trust.
          </p>
          <div className="flex justify-center w-full gap-10">
            <button className="bg-white text-sm text-[#d1361b] font-bold px-4 py-2 rounded-full shadow-md">
              Call Us on +91 9990499116
            </button>
            <button className="bg-white text-sm text-[#d1361b] font-bold px-4 py-2 rounded-full shadow-md">
              Chat on Whatsapp
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactBanner;
