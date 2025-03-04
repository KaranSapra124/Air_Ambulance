import React from "react";

import Hero from "./Components/AirAmbulance/Air_Ambulance_Hero";
import GlobalServiceContent from "../Global/GlobalServiceContent";
import GlobalContentContainer from "../Global/GlobalContentContainer";
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
      <GlobalContentContainer
        title={"Our ideology and approach of Air Ambulance Services:"}
        content={[
          "Ideology: Sometimes, some situations demand you to hire affordable air ambulance Services. Our Air ambulances are specially designed aircraft meant for relocating patients from one destination to another facility while ensuring continuous medical monitoring along the way to ensure safety.Our approach: When the time runs out and ground ambulance support system threatens the safety of the patient our air ambulance services come into the scene. When the patient is in a remote place, our service also helps the patient in getting the right care",
        ]}
        image={
          "https://s3-alpha-sig.figma.com/img/6afa/bc58/4968e18e6f1c7acedd06b2f3a8a6e2d3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pyONVYhvfohQkKWdn~NiFixfFtxmaFpgdx5Bfa02ZV1K~0vQwIN-b5xaVEWJkDx3EsWuFoQtfzgcMsJ9Vujti4XhSSCoM2CZaz~5eGIGQTGsj9Sk3V~BN3zl-PS2mP8NpSJVEsxycqxeork6nv5Ct7~zzxSyUePbFfbRzPJCqtnsbdEXW51EdIJZjMiOJ5ln9opotOY8Urk2QwKYlkGj7MX8fk-kef6qu18R06VX81Bg6H7R3qQSq4l9j1CI34w-3cI4LQSKYBKjT-4z6CPGNZUqiaooL~EDo-~SyKHvCNXKuO5vqFIEjVmtZfQlrlPwGDVzqj3e0UzwTfHfuaKGAg__"
        }
      />
      <GlobalServiceContent
        title={"A glimpse into our Air Charter ambulance service:"}
        content={[
          "International charter:We have flight nurses and doctors with visas to accompany patients to almost all the parts of the globe. We have medical escorts also for medical assistance. We as the best international air ambulance services have all life support devices that include oxygen and advanced life support system.Commercial flightsMedical escorts and nurses are available for stretcher cases for serious illness. We offer these services both for domestic and international air charter service.",
        ]}
      />
      <GlobalContentContainer
        title={"Book Domestic charter"}
        content={[
          "Our domestic service is available with advanced life support system like ventilators, incubators and another support system to ensure complete safety.Why should you choose us?",
          "👉 We are a specialized ambulance service provider with the matchless network, advanced tools and expertise",
          "👉 We act quickly and house trained professionals to serve our clients in a secure manner",
          "👉 We have smart computerized dispatch system to streamline the booking process If you have been looking for air ambulance Services in India cost, then you should look at our cost and we guarantee you that we can give you the best price, we thrive to serve our clients with a sense of urgency. We love life and for that reason, we act mindfully and intelligently. Call us now if you have an emergency case",
        ]}
        image={null}
      />
    </>
  );
};

export default Air_Ambulance;
