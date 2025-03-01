import React from "react";
import Container from "../Global/Container";
import { FaArrowDown } from "react-icons/fa6";
import ScrollAnimation from "react-animate-on-scroll";

const Faq = () => {
  const faqData = [
    "What Is An Air Ambulance ?",
    "Who needs an Air Ambulance ?",
    "Can you Take Patients anywhere ? ",
    "Can you provide international ambulance ?",
    "How to avail air travel services ?",
    "How to avail air travel services ?",
    "Why Choose Us ?",
  ];
  return (
    <ScrollAnimation animateIn="backInLeft" duration={1.5}>
      <Container>
        <div>
          <h1 className="text-center text-primary-color text-2xl font-bold my-4">
            FAQ
          </h1>
          <div className="flex justify-between mx-auto max-w-screen-xl">
            <div className="w-1/2 flex flex-col  gap-2">
              {faqData?.map((elem) => {
                return (
                  <details className=" p-2 rounded font-bold bg-primary-color text-white justify-between">
                    <summary> {elem} </summary>
                    <p className="bg-white p-2 rounded my-2 text-gray-900">
                      Test Content
                    </p>
                  </details>
                );
              })}
            </div>
            <div className="relative w-1/2 flex justify-center items-center">
              {/* Image 2 (Behind) */}
              <img
                className="absolute shadow-md shadow-black w-52 top-32  left-[20rem] z-0"
                src="https://s3-alpha-sig.figma.com/img/723f/e49f/8f77135737fa76f5748c12939da7cbb5?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nHeM77S-3QP0kahPiLoEAV9liGPTMlykGqatClvMS7vtTaNZzmowQv-lHBQPvDFHHaXhUJMxU079b9bky8nYaqq3EjyidhlhOqhSsfP9-rU9lN7dKZnU0YDAoUZctjHdDvLHiGdu7WutgPizWV70domFrFbBCpDCuJ5~azypFdAmThGlH0jKqa18RL~YMXdxXjR~9KLn8TkqJHbm~W09J-cjWNXgXW292s4Ggu~LtXFNhAtzKda6fGjzUhXjIEpp538-WyM5JD-34hT9vwmdOa6jGnuh-Y3zHRxm0cpox-zkQ3q5bF~HPZm~xcqx2HqUHecWQGBQhgIWPh5Z0MLkXA__"
                alt=""
              />

              {/* Image 1 (Front) */}
              <img
                className="absolute shadow-md shadow-black w-52 top-0  left-[15rem] z-10"
                src="https://s3-alpha-sig.figma.com/img/6d18/aba7/f531c8da3cb69c86a45dae6e3df62467?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ij2w9Wg5FVJ~7w6UAVIIkwbspfY4kgpzu3jrfwk8VY2v5VTECSG37a5VoorGC52i49VLOnckp3BpQKYoqYB3w4C9SCqzOg~nfzstVuzxp2AhiI7sRgupjnj-GO1rYnVQAHaVbWHJVm60LTtRZDWvJm1luXkU~e-V2CtKvZKlPjfpISP9J7hm3oF8fR5ud6zVifX4eI9xFSvcLneufT3LI3QYGkPxls3G34jjpj5oXIjY8Z14A8ybmS8ChoJPqBRuMw0zwvTA7qc~KGV0pwAQn~9RX7Hha62dtclfGAkx6rYtr7w~UZPLT58DCgXd-6BhDQWt4-R8rO7VrQNFxp~CEA__"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </ScrollAnimation>
  );
};

export default Faq;
