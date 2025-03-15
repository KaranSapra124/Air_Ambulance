import React, { useState } from "react";
import GlobalHero from "../Global/GlobalHero";
import GlobalServiceContent from "../Global/GlobalServiceContent";
import GlobalContentContainer from "../Global/GlobalContentContainer";
import GlobalPointsContainer from "../Global/GlobalPointsContainer";
import Container from "../Global/Container";
import { Carousel } from "antd";

const AmbulanceFabrication = () => {
  const [animateKey, setAnimateKey] = useState(0);

  const ambulancePics = [
    "AmbulancePics/20191201_124721.jpg",
    "AmbulancePics/20191201_124738.jpg",
    "AmbulancePics/20191201_182911.jpg",
    "AmbulancePics/20200421_131440.jpg",
    "AmbulancePics/20200423_123843.jpg",
    "AmbulancePics/20200718_185721.jpg",
    "AmbulancePics/20200718_185736.jpg",
    "AmbulancePics/20200718_185915.jpg",
    "AmbulancePics/20200718_190402.jpg",
    "AmbulancePics/20200810_160621.jpg",
    "AmbulancePics/20200810_160649.jpg",
    "AmbulancePics/20200816_162153.jpg",
    "AmbulancePics/20200816_162157.jpg",
    "AmbulancePics/20200816_162207.jpg",
    "AmbulancePics/20200816_162211.jpg",
    "AmbulancePics/20200911_180623.jpg",
    "AmbulancePics/20200911_184500.jpg",
  ];

  return (
    <>
      <GlobalHero
        image={
          "https://images.unsplash.com/photo-1600959907703-125ba1374a12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1idWxhbmNlJTIwZmFicmljYXRpb258ZW58MHx8MHx8fDA%3D"
        }
        title={
          "Leading Ambulance Fabrication Solutions – Custom-Built for Safety & Efficiency"
        }
      />
      <GlobalServiceContent
        title={"We Promote Quick & Efficient Medical Transportation"}
        content={[
          "At DHHR, we specialize in designing and fabricating high-quality ambulances tailored to meet the needs of emergency medical services. With a commitment to safety, durability, and innovation, we create fully customized ambulances equipped with state-of-the-art technology and robust structural designs.",
        ]}
      />
      <Container>
        <h1 className="text-primary-color my-2 text-center lg:text-2xl text-[0.7rem] font-bold">
          Our Services
        </h1>
        <div className="w-10 h-0.5 lg:h-1  bg-primary-color rounded-full mx-auto my-1"></div>
        <GlobalPointsContainer
          title={"Custom Ambulance Fabrication"}
          para={
            "👉 We manufacture ambulances that adhere to national and international safety standards, ensuring maximum efficiency and reliability."
          }
          points={[
            "Types of Ambulances We Fabricate:",
            "Basic Life Support (BLS) Ambulances",
            "	Advanced Life Support (ALS) Ambulances",
            "	Patient Transport Vehicles (PTV)",
            "	Mobile ICU & Cardiac Ambulances",
            "	Disaster Response Vehicles",
          ]}
        />
        <GlobalPointsContainer
          title={"Interior & Equipment Customization"}
          para={
            "👉 We provide tailor-made interiors with ergonomic designs to ensure easy access to medical equipment and patient comfort."
          }
          points={[
            "High-quality medical-grade materials",
            "Oxygen systems and emergency lighting",
            "Advanced life-saving equipment integration",
          ]}
        />
        <GlobalPointsContainer
          title={"Graphics & Branding"}
          para={
            "👉 Custom decals, reflective markings, and logos for enhanced visibility and professional branding."
          }
        />
        <GlobalPointsContainer
          title={"Repairs & Upgrades"}
          para={
            "👉 We offer refurbishment, upgrades, and modifications for existing ambulances to meet evolving industry standards."
          }
        />
        <GlobalPointsContainer
          title={"Why Choose Us ?"}
          para={""}
          points={[
            "High-Quality Fabrication: Built with precision and top-grade materials",
            " Customization: Tailored solutions to fit your specific needs",
            " Safety Compliance: Meets all regulatory and industry standards",
            " Durability & Reliability: Designed for long-term performance",
            " Affordable & Timely Delivery: Cost-effective solutions with fast turner",
          ]}
        />
      </Container>
      {/* <GlobalContentContainer
        image={
          "https://plus.unsplash.com/premium_photo-1664299503603-237d266dc7cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFtYnVsYW5jZSUyMGZhYnJpY2F0aW9ufGVufDB8fDB8fHww"
        }
      /> */}
      <div className="relative">
        <Container>
          <Carousel
            autoplay
            autoplaySpeed={3500}
            dots={false}
            beforeChange={() => setAnimateKey((prev) => prev + 1)} // Update animation key
          >
            {ambulancePics?.map((pic, index) => {
              return (
                <div key={index} className="relative">
                  {/* Background Image */}
                  <img
                    className="lg:max-h-[30rem] h-52 w-full"
                    src={pic}
                    alt={`Slide ${index}`}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-red-500/20 bg-opacity-50 flex items-center justify-center">
                    <h2
                      key={animateKey} // Key update forces re-animation
                      className="text-white ambulance-animation text-md lg:text-3xl font-bold text-center"
                    >
                      You Will Think, We Will Do
                    </h2>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </Container>
      </div>

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
