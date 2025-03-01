import React from "react";
import Container from "../Global/Container";

const Testimonial = () => {
  const testimonialData = [
    {
      review:
        "Calling DHHR was the easiest part of a stressful situation.  Their quick response and smooth process made everything so much less overwhelming.  Highly recommend!",
      image:
        "https://s3-alpha-sig.figma.com/img/405b/1c26/7174605681cc1489af235b745e8929ac?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UtwAfsN1k2q2e0oo2LfTVpiPKKf8Dnhp9xBWY8uCDunh3t7X9mCSoUVEaCH-cX-ciyzScRIjYHgTMnjuM2dI68xikKDwrzhHAWaqUMRIiDKfGLzrKZPptPPqmEju3aLWz0hqCows-gyXHDV3CPwTYwR4ghidOgCDUGSg5G0mpBPKqHpC~f94kLQ6AWviZgDI8A0Qi85u~L96Myix-r0W4MvHg6ecqwL5mh0tc~kIMhp5mM8KDdumdQbXxNs80rXiBhCswXdJHBBlUpjOrNXWtaiiN2AfCPUnc9XKNdmEjhv4T8-pJgGIyzta4046njB-0vgBz9iineK1BD6PMP6Y2A__",
      Name: "Shivani Goel",
    },
    {
      review:
        "I was so relieved by how simple it was to book an ambulance with DHHR.Their online system was user-friendly, and they arrived promptly. A truly convenient service.",
      image:
        "https://s3-alpha-sig.figma.com/img/4bc8/dd02/9b99ba509e072c284b01df833f26633d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R5PIrWrWRncSjyf9q4iH8g7c0swrGYZkur4R7b0KHokNSR3VcVxN-7Z1FEk03NxsYJcM79IbxeyfDvbGxhHE8SnXLzHFYIIXsEqFvqEvpVhGAPzZOiXZWwnM15aEqia1rnMsX4I9lruoPiMvSG8DCIIfUrXcfSMTSyI75p7REWeajqy3EQIDdcCceb8WbJK6lu7Z5op0wgTwwhZR1q4JPEL63yAWAydpU9DQYgVRYcicKA9pMn5u0-02eJUUF75NVvPpUDYUX8FCnjsusBz~U4tvE2BHXHH030tAqvAh-pCf7Z1M68tOHi7Ea0VlBssI0Ots-eT16UyF6TdH6oLFXA__",
      Name: "Himesh Roy",
    },
    {
      review:
        "DHHR made it incredibly easy.  From the initial call to the drop-off, everything was seamless and convenient.  Thank you!",
      image:
        "https://s3-alpha-sig.figma.com/img/6ac9/0b59/d2dfa5323209876990aa260b15ff7884?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A5qGXBAcTBqjvpOkh-Dj7aE-1fV6tiftBaXG-Q9Sy9MPPNYRHCEg8LqPX53I0mqywqbIJn7jM5FZksQQ3T61uUJhe2~QgfYoJO5RNhI3iYJz3XfTc08~fKhItKeblw-GmQj1d~Jj1p1ltcNMlGfoDN~3LUwRtK1VUji9GU~KTmpZ-nq1ZbtEjrTIiOu4mWiaj4MQZnrxQ44lYnxAc-m0A1oY~nVekcsK4wOqbNRmswUo0LbEwzQuk~3s5pCecVaLjDrjb8Gn-w8Zd6CCBCMFLAL~PjMtL~tT0S7NPCd2u5XawZNTp6bVIcd3AMT2lSa4FemtuJHfH0kb~-c5dlElgA__",
      Name: "Rohan Sharma",
    },
    {
      review:
        "In a medical emergency, every second counts. DHHR’ s streamlined process and efficient dispatch saved us precious time.  Their convenience was a lifesaver.",
      image:
        "https://s3-alpha-sig.figma.com/img/9e29/a16b/2c73379d198ac35f67a37c5cba2fc44f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YTFoWVzQJDLK~OmzeMSaf7eEcC0~CVkX~27qWDESMWUNv42oBG7qhxhWE6-15TluT28HHTl0OEM0-2MR8BC7ND1jpiHepGQqukMDPbIeXqH0HQimhfOK61bi1SKq4YFtrvyrLH69XGlF2dOWrSNqrX0AC7UF~PmoHkhQTGCJRgwBxoodGFTbp3TchNqJIFATA9b-tcs94eUzpKO61K-sl80sPRWFNJ-lVE-1sGfJSwn~cLsg-kmngLMoow8oq-W8~b8LlGCKXrO9iknetkqmpk7PWhdSwrIhbrjJI6K4c7VmNiVO-p2W1igaNmDokOpWAmpJV1~tTQKb6aj1lE~SPw__",
      Name: "Reena Sahai",
    },
  ];
  return (
    <Container>
      <div>
        <h1 className="text-center text-2xl text-primary-color font-bold my-2">
          Testimonials
        </h1>
        <div className="flex gap-8 max-w-screen-lg mx-auto">
          {testimonialData?.map((elem, index) => {
            return (
              <div className="flex flex-col p-2 w-full rounded gap-4 bg-primary-color">
                <p className="text-white text-lg font-semibold">"{elem?.review}"</p>
                <div className="flex mt-auto items-center">
                  <img className="w-10 h-10 shadow shadow-white rounded-full" src={elem?.image} alt="" srcset="" />
                  <h2 className="text-white text-sm font-semibold mx-1">{elem?.Name}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
