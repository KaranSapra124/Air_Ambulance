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
          image={
            "https://plus.unsplash.com/premium_photo-1661377235003-ba4de23dff90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW1wbG95ZWUlMjBoZWFsdGh8ZW58MHx8MHx8fDA%3D"
          }
        />
      </div>
      <GlobalServiceContent
        title={"Features of Our Medical Rooms"}
        content={[
          "👉 Medical Assistance on Site: We provide a team of qualified healthcare professionals, including paramedics and trained medical staff, to ensure that your employees receive quick medical attention without leaving the premises. Our round-the-clock service helps in minimizing health risk.",
          "👉 International Standards of Care: We follow international industrial health standards to ensure that the medical room is equipped with the latest facilities and advanced first aid equipment. Our services comply with the Factories Act, 1948, ensuring a safe working environment.",
          "👉 Robust Support System: We have a strong support network to ensure that if any critical situation arises, we can quickly arrange an ambulance or connect with nearby hospitals. Our team also coordinates with your existing health policies to make the treatment seamless.",
          "👉 Health Consultation and Guidance: We understand that some workers may face difficulty in finding the right medical guidance. Our team provides health consultation, ensuring that they receive proper guidance regarding medical facilities, treatments, and health improvement plans.",
        ]}
      />
      <GlobalContentContainer
        title={"Book Our Industrial Health (Medical Room) Service Today"}
        content={[
          "If you are looking for a reliable and affordable Industrial Health (Medical Room) service, we are your ideal solution. We ensure quick response, expert medical care, and seamless support to keep your employees safe and healthy.",
          "✅ Contact us today to set up a medical room in your industry. We guarantee you the best service at an affordable cost.",
        ]}
      />
    </>
  );
};

export default IndustrialHealth;
