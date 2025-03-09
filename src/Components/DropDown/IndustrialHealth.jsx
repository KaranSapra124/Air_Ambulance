import React from "react";
import GlobalHero from "../Global/GlobalHero";
import GlobalServiceContent from "../Global/GlobalServiceContent";
import GlobalContentContainer from "../Global/GlobalContentContainer";

const IndustrialHealth = () => {
  return (
    <>
      <GlobalHero
        image={
          "https://plus.unsplash.com/premium_photo-1702599099948-5ed43d0a3048?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW5kdXN0cmlhbCUyMGhlYWx0aCUyMG1lZGljYWwlMjByb29tfGVufDB8fDB8fHww"
        }
        title={"Industrial Health (Medical Room) for Quick and Efficient Care"}
      />
      <GlobalServiceContent
        title={"Medical Rooms For Promoting Industrial Health"}
        content={[
          "If you are looking for a reliable and well-equipped Industrial Health (Medical Room) service, you have come to the right place. We provide comprehensive medical room facilities within industrial premises, ensuring quick and secure medical assistance for workers in case of injuries, health issues, or emergencies.",
        ]}
      />
      <GlobalContentContainer
        content={[
          "Excellent Medical Care: We offer top-notch industrial medical care with a dedicated medical team that includes nurses, paramedics, and health professionals for immediate assistance. Our facilities ensure that employees receive timely medical care without any delay, reducing the risk of severe health conditions.",
          "Cost-Effective Health Solution: Providing a dedicated medical room within your industrial unit is a cost-friendly alternative to frequent hospital visits or emergency ambulances. This facility reduces downtime in case of medical emergencies, ensuring that your workforce stays safe and productive.",
        ]}
        title={"Why Choose Our Industrial Health (Medical Room) Service?"}
      />
      <div className="lg:-mt-16 -mt-8">
        <GlobalContentContainer
          title={"Comprehensive Industrial Health Solution:"}
          content={[
            "👉 We offer a wide range of healthcare services under one roof, including:",
            "👉 First Aid Treatment for minor injuries like cuts, burns, or sprains.",
            "👉 Emergency Response for major injuries, ensuring prompt action and transportation if required.",
            "👉 Health Monitoring for employees exposed to hazardous chemicals or high-risk tasks.",
          ]}
        />
      </div>
    </>
  );
};

export default IndustrialHealth;
