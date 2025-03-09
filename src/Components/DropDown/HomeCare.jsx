import React from "react";
import GlobalHero from "../Global/GlobalHero";
import GlobalServiceContent from "../Global/GlobalServiceContent";
import GlobalContentContainer from "../Global/GlobalContentContainer";

const HomeCare = () => {
  return (
    <>
      <GlobalHero
        title={
          "Professional Home Care Services for Compassionate and Reliable Medical Assistance"
        }
        image={
          "https://plus.unsplash.com/premium_photo-1731540601782-0b701ec87f2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGNhcmUlMjBtZWRpY2FsfGVufDB8fDB8fHww"
        }
      />
      <GlobalServiceContent
        title={"We Priortize Your Health!"}
        content={[
          "If you are looking for high-quality Home Care Services, you have come to the right place. We specialize in providing compassionate medical care at home, ensuring that patients receive personalized healthcare services in the comfort of their homes.",
        ]}
      />
      <GlobalContentContainer
        title={"Why Choose Our Home Care Services?"}
        content={[
          "👉 Personalized Patient Care: We offer tailored healthcare services designed to meet the unique medical needs of each patient. Whether it's post-surgery recovery, elderly care, or managing chronic illnesses our trained medical professionals are equipped to provide the best care.",
          "👉 Affordable Home Care Solutions: Our Home Care Services are designed to be cost-effective, ensuring that you receive high-quality care without any financial burden. We offer customized care plans to suit different medical conditions and budgets.",
        ]}
        image={
          "https://media.istockphoto.com/id/1180156904/photo/male-and-female-nurse-checking-senior-mans-blood-pressure-on-house-call.webp?a=1&b=1&s=612x612&w=0&k=20&c=If32zc7q6iwSi5N7NFpISlZB0nwi92OOJzJOWg7ztZQ="
        }
      />
      <GlobalServiceContent
        title={"Book Our Home Care Services Today"}
        content={[
          "If you are looking for reliable and compassionate Home Care Services, we are here to help. We ensure quality medical care at home, keeping your loved ones safe and healthy. ✅ Contact us today to get personalized home care services at an affordable price. We assure you the best medical care right at your doorstep.",
        ]}
      />
    </>
  );
};

export default HomeCare;
