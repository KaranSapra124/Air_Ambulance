import React from "react";
import GlobalHero from "../Global/GlobalHero";
import GlobalServiceContent from "../Global/GlobalServiceContent";
import GlobalContentContainer from "../Global/GlobalContentContainer";

const Emergency = () => {
  return (
    <>
      <GlobalHero
        image={
          "https://s3-alpha-sig.figma.com/img/8f37/16bf/c8fe031a41b30385465bb702d44e0f86?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VwXhTxWfKYzKx88fo~vFVvOgBt7WwxwvIp49xTnTJyKYZIOz2m5Nvn9blGF2sRXU93zUHsM7IMakvZbyyqET0U~pVCmyw65DAV0vN1GwqCtkv4W5zpecahoHXAR3OuEDCQ~yng5rNrWBo2nJT-9UwfEf87VFdSVWvou4CBvGlWIyaS60zr1QbWceF2IG~Oj6cYUORv2AfkmRG8in11gWvhZN57U6vkNIHiikLyK9RHwAQlnPgkWHongG8DvZHQMVoeLQ2jUMtq2uElPqDGMyC30rRASmQKVNjlomlm3Fb4Dt13P91rdf5ls7NQZpMlAZiHVz5XIBntqCu8pjXv0D8A__"
        }
        title={"Emergency Ambulance"}
      />
      <GlobalServiceContent
        title={"Super Fast Emergency Ambulance Service At Your Service"}
        content={[
          "If you are looking for efficient and quick emergency medical services, then you should find us because we are one of the most trusted and reliable ambulance providers in the country with expertise, knowledge and passion for life.",
        ]}
      />
      <GlobalContentContainer
        title={"Our philosophy and approach of emergency medical services:"}
        content={[
          "Passion: We are into the business because we love life and we thrive to standby life when it needs care and comfort the most. Therefore, we have deployed highly sophisticated vehicles equipped with medical devices and manned with professionals who can take care of the patients.",
          "Quick response: We offer a quick response to all our patients because we understand the fact that it is important to act fast because minutes delay on an emergency situation can be fatal for the patients. Hence, we have smart dispatcher system to send ambulances as quickly as possible.",
        ]}
      />
      <div className="-mt-16">
        <GlobalContentContainer
          image={
            "https://s3-alpha-sig.figma.com/img/5937/03c3/2a56a5689b8f1d78fe38fa3e56c9b030?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C1f16Od2TpGCe9ab~3uAexvGF0Qo3315hqMcQuU76RWdttDnnfwjf0w7utpDPYp1GJ8iZZ-ZdQnIX5ZQuRJ9dFzq0e9ojCpFDtVw8nk1llDLpUdIf6JILybcQo9TlDoyPk7RRmq~GbNKW~LKkB78qcikoP9UcgUfS2YHdq9IO7yVlbwpi5E5v4iRVxWlV~R7QnsHEU2sXPj5fwyB~acXPW8vtGsGk2SIaxY-UId8mlmdhyjpDJ9k1BnDgEk0ymZKoqXtmvVFWe7vdfcEVvpj5LFqotcpkTY3pQfLq0o0mizTVLDgL6Dh1XufCY1oqRyrQ-V4wOTT8Ytiy27S52erlA__"
          }
          title={"Comprehensive ambulance service:"}
          content={[
            "Emergency situations are dynamic and demand immediate and appropriate response, therefore, we offer complete ambulance service that includes emergency train ambulance services, ground transport and air ambulance too.",
            "We have trained doctors with a visa to accompany patients across the globe. We also have a complete database if ground transport system across the nation and the globe to streamline the transportation. When it came to rail ambulance, we are quickest to get the seats",
          ]}
        />
      </div>
    </>
  );
};

export default Emergency;
