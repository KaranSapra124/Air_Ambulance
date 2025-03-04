import React from "react";
import GlobalHero from "../Global/GlobalHero";
import GlobalServiceContent from "../Global/GlobalServiceContent";
import GlobalContentContainer from "../Global/GlobalContentContainer";

const Ambulance = () => {
  return (
    <>
      <GlobalHero
        image={
          "https://s3-alpha-sig.figma.com/img/468f/e9ca/d8bc2dad3bea0641b946b88e13f89868?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kUPdArsLkJ2GKfZ6gfse7JFdJn6fL1O0YufmAqFco6QbrBHdK5Qdd~yaCE3R8xhbYpyx7ErC9NGTQLtE0twDBtAyRx-TlJZKmdCQOYBJRXNxaL59ZvceujB-lYn36NvUP73t6BHEQmp~LZRMuNoI0158KR9CsGYtKa7s0yrZkq3bqLe2di9LhGCmjnhowbO-FHf3V5pWkCCDoiL0h0UQ3xsFwpnURyv8kWTemE8ttSz30XMWw3gOgKU~rTq9~RPFcVNrzNJnO4nch8zeajCozIvorNlONY1b~fF7tdvO8cswcHU2xaib6mpmIrTjtdIhC51SUk8O2skMC7mTpihz4A__"
        }
        title={"ROAD AMBULANCE"}
      />
      <GlobalServiceContent
        title={"Road Ambulance Service with a Rare Sense Of Urgency"}
        content={[
          "If you are looking for the train ambulance in India, then you have just found the perfect service provider. Our service is fabricated to carry patients to the hospitals following a phenomenon or an accident at a lesser cost than air ambulance.",
        ]}
      />
      <GlobalContentContainer
        title={"Our philosophy of Road Ambulance Services:"}
        content={[
          "We as the best road ambulance services India thrive to offer super quick service through the help of our smart and well-trained staffs that includes doctors, medical escorts, nurses and drivers. All our staffs are trained to act quickly and that is our second nature.Equipped fleets: We are well aware of the fact that a second delay can cost a life. Therefore, we have a smart booking system that facilitates quicker booking and all our vehicles are equipped with advanced medical devices to keep our patients medically safe.Round the clock service: We as the best road ambulance services Delhioffer round the clock service so that patients can avail the service when things matter. We through our quick response team thrive to respond to each call with a sense of urgency. Our team with its skills and experience offers comfort and care along the way to keep things under control and that makes us the most preferred roadambulance service providerComplete support: We have an inventory that contains medicines and drugs. We also have an advanced life support system with us to keep our patients medically safe. From oxygen to ventilator and incubator, we have most of the advanced life-saving system with us to offer the highest degree of care and comfort.",
        ]}
        image={'https://s3-alpha-sig.figma.com/img/5937/03c3/2a56a5689b8f1d78fe38fa3e56c9b030?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C1f16Od2TpGCe9ab~3uAexvGF0Qo3315hqMcQuU76RWdttDnnfwjf0w7utpDPYp1GJ8iZZ-ZdQnIX5ZQuRJ9dFzq0e9ojCpFDtVw8nk1llDLpUdIf6JILybcQo9TlDoyPk7RRmq~GbNKW~LKkB78qcikoP9UcgUfS2YHdq9IO7yVlbwpi5E5v4iRVxWlV~R7QnsHEU2sXPj5fwyB~acXPW8vtGsGk2SIaxY-UId8mlmdhyjpDJ9k1BnDgEk0ymZKoqXtmvVFWe7vdfcEVvpj5LFqotcpkTY3pQfLq0o0mizTVLDgL6Dh1XufCY1oqRyrQ-V4wOTT8Ytiy27S52erlA__'}
      />
      <GlobalServiceContent title={'Why  choose us for Emergency Road Ambulance Services?'}
      content={['We are one of the leading service providers in the market that believes in offering the best possible service and matchless care to all our clients. We believe in a family-centric and humane approach. Therefore, we train our staffs, nurses and drivers to act compassionately We understand the fact that at the time of emerge relatives and family members are not in the right frame of mind, hence, we have induced sense of care and compassion in our staff’s consciousness so that they can act humanely.']}
      />
    </>
  );
};

export default Ambulance;
