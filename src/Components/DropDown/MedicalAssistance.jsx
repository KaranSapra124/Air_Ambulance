import React from "react";
import GlobalHero from "../Global/GlobalHero";
import GlobalServiceContent from "../Global/GlobalServiceContent";
import GlobalPointsContainer from "../Global/GlobalPointsContainer";
import Container from "../Global/Container";
import ScrollAnimation from "react-animate-on-scroll";

const MedicalAssistance = () => {
  const services = [
    {
      title: "Personal Care Assistance",
      points: [
        "Bathing, grooming, and hygiene support",
        "Dressing and mobility assistance",
        "Toileting and incontinence care",
      ],
    },
    {
      title: "Companion Care",
      points: [
        "Meaningful conversation and emotional support",
        "Assistance with hobbies and recreational activities",
        "Accompaniment to appointments and outings",
      ],
    },
    {
      title: "Meal Preparation & Nutrition Support",
      points: [
        "Healthy meal planning and preparation",
        "Assistance with feeding if needed",
        "Grocery shopping and dietary monitoring",
      ],
    },
    {
      title: "Medication Reminders & Health Monitoring",
      points: [
        "Ensuring timely medication intake",
        "Monitoring vital signs",
        "Complete ICU Care At Home",
        "Coordinating with healthcare professionals",
      ],
    },
    {
      title: "Light Housekeeping & Errands",
      points: [
        "Laundry and linen changes",
        "Tidying up living spaces",
        "Assistance with shopping and errands",
      ],
    },
    {
      title: "Why Choose Us ?",
      points: [
        "Experienced and compassionate Medical Team",
        "Customized care plans tailored to your needs",
        "Flexible scheduling: hourly, daily, or live-in care",
        "Family-focused approach with open communication",
        "Licensed, bonded, and insured for your peace of mind",
      ],
    },
  ];

  return (
    <>
      <GlobalHero
        title={"Compassionate Home Care Services for Your Loved Ones"}
        image={
          "https://plus.unsplash.com/premium_photo-1731540601782-0b701ec87f2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGNhcmUlMjBtZWRpY2FsfGVufDB8fDB8fHww"
        }
      />

      <Container>
        <h1 className="text-primary-color my-2 text-center lg:text-2xl text-[0.7rem] font-bold">
          Our Services
        </h1>
        <div className="w-10 h-0.5 lg:h-1 bg-primary-color rounded-full mx-auto my-1"></div>
        
        {services.map((service, index) => (
          <ScrollAnimation key={index} animateIn="backInUp" duration={1.5}>
            <GlobalPointsContainer title={service.title} points={service.points} />
          </ScrollAnimation>
        ))}
      </Container>

      <GlobalServiceContent
        title={"Get Started Today!"}
        content={[
          "Let us provide the care and support your loved ones deserve. Contact us today for a free consultation and personalized care plan.",
          "📞 +91 93551 95077",
          "📧 test@test.com",
          "📍 address",
        ]}
      />
    </>
  );
};

export default MedicalAssistance;
