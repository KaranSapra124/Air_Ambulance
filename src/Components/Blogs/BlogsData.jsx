import React, { useEffect, useState } from "react";
import Container from "../Global/Container";
import { FaCalendar, FaUser } from "react-icons/fa6";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";

const BlogsData = ({ isHeading }) => {
  const navigate = useNavigate();
  const [slides, setSlides] = useState(3);
  const blogsData = [
    {
      title:
        "How Smart Ambulance Service Can Help You with Medical Emergencies",
      image:
        "https://s3-alpha-sig.figma.com/img/38ed/fc35/b0609b77a18a0bbf3e9262d849f061b3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gIbJEURWRwmOLVl7S9HeLRSjAEJ3EGm-A-OmYeGNEN~tjH2Zk2QdFNFZvOIu2jEs2KtOMza1tv8EPUSxlotqoDfoUZM3JTdKypKU-mqGz6hH8bhl-LzwVy~AoDg0i5STsG0kpalgRzKyLmrAXTMKeC8emb9WFzm~K1KwREJjIjy~Frh1diAD4GbKWThpA1liKAVp3blcQPrZYqSma2XgtshE0ryk8mgbBtr8zmuW59whPuhiafm2s0SOQdzgmUzFYBfjSPrFPwNzE33l9R5JIZW7jGx96QGxjmV9CikldjmkYn4n2iPl8O1RKMBSKGF8G1r7~tVrhM4j5x8Wk7ViJA__",
      date: "May 30, 2021",
      desc: "Confronted with medical emergencies, you are likely to get agile and stressed because those situations are not the easiest of the things to handle and people even with nerves of steels get broken during those medical emergency situations, you definitely need a good ambulance service provider at that time.",
      image2:
        "https://s3-alpha-sig.figma.com/img/b5a9/566b/98aba35d038d396d0d23f83a17927ee2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NWLhgKRPBAt~OMBLqW~WWlK4KvE6H8Ou6zPFckgWN-pvFyN~bQulokzLzAC9KArdejzZkwmjqzGR5OiyYjnGjnIJexHjDsI9AkstkZgiT9xKugI0C0pgXmCmcMKePbDPK8vo5xfPLFKzhkGZRfRiR4IO8LjM1US18DBO8pyeBpqAx6hZfC9M4Vpgq9J57uOAXoNPhcB4p~1Xw4snvc8pmPgV3gnk~sjePHtZ6jFHoKECHrwWefrCvTL~HbaKZinEnoV9RE-~Ag9iHGZYf7svRKZmMptb-7Zhpg91v5sEmO~yfWeX8mqFKOOacoc5bJ6SYYQa2zWYTXRREgfFprUpJw__",
      arr: [
        {
          title: "The need for ambulance services:",
          desc: "The first thing that you have to find out is the ways of transporting the patient to the right medical facility and here ambulance can do the job, moreover, they will have all the LS kits and paramedics to transport the patient safely to the medical facility.You can get Train Ambulance Services from companies like Lakshya Rescue and transport patients to different cities across the nation, train ambulance come in handy when you have patients who need constant medical attention during the transition process.",
        },
        {
          title: "Choosing the right ambulance type:",
          desc: "You have road ambulance that can help you in transporting patients to the medical facilities in your locality or in your city, and then you have a train ambulance that would help you in transporting you in a different city and then you have Air Ambulance Services that can make quick transportation both domestically and internationally.You have to choose the right type of ambulance and that would depend upon where you want to go for medical transportation how quickly you need to reach the medical facility. In addition, the cost of the different ambulance service would differ and vary, air ambulance might cost you more as that is fats, and train ambulance might take a little time.You have to understand each type of ambulance operational modalities and the cist factors before choosing the ambulance service for your needs.",
        },
        {
          title: "Find a good ambulance provider:",
          desc: "You have to make sure that you are getting the right ambulance service provider, which would mean that you have to look for one and you can get the best ambulance orders on the web or through references, you should make sure that you verify how good they are and that you can do by having a  look at the customer testimonials.However, there are many other factors that you must look at before picking a service provider for your ambulance and medical emergency needs and here are those points that you must consider.",
        },
      ],
      points: [
        "You have to find an ambulance service provider that has smart dispatching systems, they should be able to send the ambulance and arrange them for you as quickly as possible",
        "You have to find out how good they are in terms of transportation and how good their network is, a good service provider will have strong network through which you can get better medical facility quickly",
        "They should and must have good tools, medical devices, and smart paramedics because the thing would aid to your safety of transportation.",
      ],
    },
    {
      title:
        "What Benefits You Get When Using Air Ambulance Services In-Emergency?",
      image:
        "https://s3-alpha-sig.figma.com/img/9fcf/3e79/1a2734e7457497fdff1a438016dd85fd?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=baydOODNJPCuZOu6JKLuS7DK2Iz~VYjcD62nRcIYGbJqYt~PedxIfrkkvfRZ6uOV7Yd5YT9dYVanOGBiZai~YUMTQGP9I8ZlDPiRKyihYRuzmT1h61ltuyV2ex0b5OSZO3FZd-wmfM4cApCuqaohzhwk-kWsvPY2IH9962oKWEDODlaNF96ZRahC9UAJjUx55If1SPbOIj7tZyEqkxI~kcMayjtIM2hoZfo5OrmECefcRmQgUsCWSnRRQj~ghPMs1Rjute-DsJXvtnbDsbZSioGt5tW3LVuqBbOKRTgCLxvTiJPjs3kkOvMy3PePV1RstDt9ybxIcHBUHif1Dxr4LA__",

      date: "May 30, 2021",
      desc: "Medical emergencies may take place within an instance of time. You may meet an accident when driving on the road. You might have fallen accidentally. In any case, you need to be rushed to the best hospital nearby.You can always reach out for ambulance services that operate 24×7. But what if the traffic conditions are not good in your area? The ambulance may not be able to arrive on time.You can always check with the best Air Ambulance Price online before hiring. These services are maybe a little more expensive.Always ensure you only hire the best team from DHHR. They offer convenience to book services online as well.There are major benefits that you may get when hiring these services in case of emergency. Some better benefits are listed here below.",
      image2:
        "https://s3-alpha-sig.figma.com/img/babb/0096/75898b8ba75b1b3221eac0642efc4a2d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IKJP0AuEe4-ql24DrSxmlt8rSmOotRMx-l-KjAQMetFVRAAdW73Z3YPxIKx5MHN~TJ4M-wr-NNiH4nw4CIRoXDDVJssCvzMasp63cxzbYvQhXkEoRibwYPkRzpBiig2S3FJbagjvgFkCASbfzIvIfiUBtxzaJi-rMyidxo57~~9DFRzEs~hCuRcTNeM1ZLswHFZCwahFQ7dhIieysu0YJZbCCEIDlFMclHeSKctXW2MFN1SH59g9JtyNbQnm3l-2XIpYpPNTpyttrm5DK~3hMCt5EYa6BTQJ0mB4EGKZLrZiKLqcTjy4NuwTZpfq3L9vvh1HLvkLvj~CSv42IBIntA__",
      arr: [
        {
          title: "The services are available everywhere",
          desc: "Air ambulance services will operate in any geographical region. So you can hire them even in a most remote village. This is one of the most important benefits you get when hiring these services. Road ambulance may have their limitations.Air ambulance does not have many limitations. As long as the weather is clear, you will be able to hire these services at your convenience. You just have to book them to use them.",
        },
        {
          title: "Ideal for emergency patients",
          desc: "You just had an operation completed successfully. You may want to be rushed to the second hospital service. Your loved one may need an organ transplant. During the accident, you just had a broken limb and need immediate medical attention.These are all emergencies like situations. This is the best time when you should book services. For patients who need immediate medical assistance can best benefit from these services.",
        },
        {
          title: "Time-saving options",
          desc: "Medical emergencies may not have any time restrictions. If it happens, you may not want to wait for a longer time. It can happen as an accident or as a natural disaster. This is why you should hire the best service like DHHR.The services will act immediately as you book them. They will reach in no time and carry the patient to the medical facility. The services will always save a lot of your time.",
        },
      ],
      points: [
        "You need to hire the best air ambulance services",
        "You can check with these services in local hospitals",
        "You can also hire them online",
      ],
    },
    {
      title: "How Diligently DHHR Rescue Air Ambulance Service Saves Lives",
      image: "./Home/Blog-3.png",
      date: "May 14, 2021",
      desc: "Over the past two decades, the health infrastructure of India has developed substantially. Whether it is normal health checkups or critical care, treatment in Indian is very low. However, the quality of the treatment is comparable to European countries......",
    },
    {
      title: "How Diligently DHHR Rescue Air Ambulance Service Saves Lives",
      image: "./Home/Blog-3.png",
      date: "May 14, 2021",
      desc: "Over the past two decades, the health infrastructure of India has developed substantially. Whether it is normal health checkups or critical care, treatment in Indian is very low. However, the quality of the treatment is comparable to European countries......",
    },
  ];
  const handleOpenBlog = (item, index) => {
    navigate(`/Blog-Page`, {
      state: item,
    });
  };

  useEffect(() => {
    const updateSlides = () => {
      setSlides(window.outerWidth > 768 ? 3 : 1);
    };

    window.addEventListener("resize", updateSlides);
    updateSlides(); // Initial call

    return () => window.removeEventListener("resize", updateSlides);
  }, []);
  return (
    <ScrollAnimation animateIn="fadeIn" duration={1.5}>
      <Container>
        {isHeading && (
          <h1 className="lg:text-2xl text-sm text-center lg:my-4 my-2 font-bold text-primary-color">
            Our Blogs
          </h1>
        )}
        <Carousel
          autoplay
          autoplaySpeed={1500}
          slidesToShow={slides}
          infinite
          loop
          className="flex justify-between  mx-auto"
        >
          {blogsData?.map((elem, index) => {
            return (
              <>
                <div
                  onClick={() => handleOpenBlog(elem, index)}
                  className="lg:w-72 lg:my-2  w-64  mx-auto shadow-lg shadow-black relative h-96  rounded-4xl hover:scale-105 transition-all cursor-pointer bg-primary-color"
                >
                  <img
                    className="lg:w-full h-52 rounded-4xl"
                    src={elem?.image}
                    alt=""
                    srcset=""
                  />
                  <div className="bg-[#FEFFDE] flex flex-col gap-2 lg:w-52 w-44 mx-auto top-40 p-2 rounded inset-0 absolute">
                    <div className="flex justify-between">
                      <div className="flex  items-center">
                        <FaCalendar className="text-primary-color text-xs mx-0.5" />
                        <span className="lg:text-xs text-[0.6rem] font-semibold">
                          {elem?.date}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaUser className="text-primary-color text-xs mx-0.5" />
                        <span className="lg:text-xs text-[0.6rem] font-semibold">
                          admin
                        </span>
                      </div>
                    </div>
                    <h1 className="text-[0.7rem] text-primary-color font-extrabold text-center">
                      {elem?.title}
                    </h1>
                    <p className="lg:text-xs text-[0.65rem] line-clamp-6 text-center text-gray-900 font-medium">
                      {elem?.desc}
                    </p>
                  </div>
                </div>
                {/* {index !== blogsData.length - 1 && (
                  <div className="h-1 w-12 lg:block hidden bg-primary-color rounded-full rotate-90"></div>
                )} */}
              </>
            );
          })}
        </Carousel>
      </Container>
    </ScrollAnimation>
  );
};

export default BlogsData;
