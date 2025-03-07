import React, { useEffect, useState } from "react";
import Container from "../Global/Container";
import { FaCalendar, FaUser } from "react-icons/fa6";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "antd";

const BlogsData = ({ isHeading }) => {
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
          desc: "You have to make sure that you are getting the right ambulance service provider, which would mean that you have to look for one and you can get the best ambulance orders on the web or through references, you should make sure that you verify how good they are and that you can do by having a  look at the customer testimonials.However, there are many other factors that you must look at before picking a service provider for your ambulance and medical emergency needs and here are those points that you must consider.👉 You have to find an ambulance service provider that has smart dispatching systems, they should be able to send the ambulance and arrange them for you as quickly as possible.👉 You have to find out how good they are in terms of transportation and how good their network is, a good service provider will have strong network through which you can get better medical facility quickly.👉 They should and must have good tools, medical devices, and smart paramedics because the thing would aid to your safety of transportation.If you have been looking for the Air Ambulance Cost, then you might have to look at the listed service offered by DHHR  because they are specialist and have been doing a great job for a long time in helping patients, talk to them now.",
        },
      ],
    },
    {
      title:
        "What Benefits You Get When Using Air Ambulance Services In-Emergency?",
      image: "./Home/Blog-2.png",
      date: "May 20, 2021",
      desc: "Medical emergencies may take place within an instance of time. You may meet an accident when driving on the road. You might have fallen accidentally. In any case, you need to be rushed to the best hospital nearby. You can always.....",
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
                  onClick={() => handleOpenBlog(elem)}
                  className="lg:w-72 lg:my-2  w-64  mx-auto shadow-lg shadow-black relative h-96  rounded-4xl hover:scale-105 transition-all cursor-pointer bg-primary-color"
                >
                  <img
                    className="lg:w-full "
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
