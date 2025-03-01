import React from "react";
import Container from "../Global/Container";
import { FaCalendar, FaUser } from "react-icons/fa6";
import ScrollAnimation from "react-animate-on-scroll";

const Blogs = () => {
  const blogsData = [
    {
      title:
        "How Smart Ambulance Service Can Help You with Medical Emergencies",
      image: "./Home/Blog-1.png",
      date: "May 30, 2021",
      desc: "Confronted with medical emergencies, you are likely to get agile and stressed because those situations are not the easiest of the things to handle and people even with nerves of steels get broken during those medical.....",
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
  ];
  return (
    <ScrollAnimation animateIn="fadeIn" duration={1.5} >
      <Container>
        <h1 className="text-2xl text-center my-4 font-bold text-primary-color">
          Our Blogs
        </h1>
        <div className="flex max-w-screen-xl items-center mx-auto justify-between">
          {blogsData?.map((elem, index) => {
            return (
              <>
                <div className="w-72 shadow-lg shadow-black relative h-96 rounded-4xl hover:scale-105 transition-all cursor-pointer bg-primary-color">
                  <img className="w-full" src={elem?.image} alt="" srcset="" />
                  <div className="bg-[#FEFFDE] flex flex-col gap-2 w-52 mx-auto top-40 p-2 rounded inset-0 absolute">
                    <div className="flex justify-between">
                      <div className="flex  items-center">
                        <FaCalendar className="text-primary-color text-xs mx-0.5" />
                        <span className="text-xs font-semibold">
                          {elem?.date}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaUser className="text-primary-color text-xs mx-0.5" />
                        <span className="text-xs font-semibold">admin</span>
                      </div>
                    </div>
                    <h1 className="text-[0.7rem] text-primary-color font-extrabold text-center">
                      {elem?.title}
                    </h1>
                    <p className="text-xs text-center text-gray-900 font-medium">
                      {elem?.desc}
                    </p>
                  </div>
                </div>
                {index !== blogsData.length - 1 && (
                  <div className="h-1 w-12 bg-primary-color rounded-full rotate-90"></div>
                )}
              </>
            );
          })}
        </div>
      </Container>
    </ScrollAnimation>
  );
};

export default Blogs;
