import React from "react";

import Hero from "./Components/AirAmbulance/Air_Ambulance_Hero";
import GlobalServiceContent from "../Global/GlobalServiceContent";
const Air_Ambulance = () => {
  return (
    <>
      <Hero />
      <GlobalServiceContent
        title={"Air Ambulance Services for Faster and Safer Care"}
        content={[
          "When it comes to quick, safe and comfortable intensive care transportation services, we offer the best air ambulance services in India. We thrive to serve those who are in a need for the air ambulance in a manner that is safe, medically secure and affordable.",
        ]}
      />
    </>
  );
};

export default Air_Ambulance;
