import React from "react";
import GlobalHero from "../Global/GlobalHero";
import GlobalServiceContent from "../Global/GlobalServiceContent";
import GlobalContentContainer from "../Global/GlobalContentContainer";

const AmbulanceFabrication = () => {
  return (
    <>
      <GlobalHero
        image={
          "https://images.unsplash.com/photo-1600959907703-125ba1374a12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1idWxhbmNlJTIwZmFicmljYXRpb258ZW58MHx8MHx8fDA%3D"
        }
        title={
          "Professional Ambulance Fabrication Services for Quick and Reliable Medical Transport"
        }
      />
      <GlobalServiceContent
        title={"We Promote Quick & Efficient Medical Transportation"}
        content={[
          "If you are looking for high-quality Ambulance Fabrication Services, you have come to the right place. We specialize in designing and fabricating customized ambulances to meet your specific needs, ensuring quick and safe patient transportation during emergencies.",
        ]}
      />
      <GlobalContentContainer
        title={"Why Choose Our Ambulance Fabrication Service?"}
        content={[
          "👉 Superior Ambulance Fabrication: We offer top-notch ambulance fabrication services with high-quality materials and advanced medical equipment. Our fabrication ensures that the ambulance is fully equipped to handle any medical emergency. We build ambulances with the latest technology and customized interiors for patient safety and comfort.",
          "👉 Affordable Fabrication Solutions: Our ambulance fabrication service is cost-effective, ensuring you get the best quality without exceeding your budget. We understand the importance of medical transport and ensure that our services remain affordable and reliable.",
        ]}
        image={
          "https://plus.unsplash.com/premium_photo-1664299503603-237d266dc7cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFtYnVsYW5jZSUyMGZhYnJpY2F0aW9ufGVufDB8fDB8fHww"
        }
      />
      <GlobalServiceContent
        title={"Book Our Ambulance Fabrication Service Today"}
        content={[
          "If you are looking for a reliable and affordable Ambulance Fabrication Service, we are your ideal solution. We guarantee quick fabrication, high-quality medical equipment installation, and after-sale support to ensure smooth and safe patient transportation. ✅ Contact us today to get your customized ambulance fabricated. We assure you the best service at an affordable price.",
        ]}
      />
    </>
  );
};

export default AmbulanceFabrication;
