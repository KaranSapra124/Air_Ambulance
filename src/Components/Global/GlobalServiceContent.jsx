import React from "react";
import Container from "./Container";
import ScrollAnimation from "react-animate-on-scroll";

const GlobalServiceContent = ({ content, title }) => {
  return (
    <>
      <div className="bg-primary-color mb-2">
        <Container>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <h1 className="lg:text-2xl text-[0.7rem] text-center font-semibold text-white lg:my-4 my-2">
              {title}
            </h1>
            <div className="w-10 h-0.5 lg:h-1  bg-white rounded-full mx-auto my-1"></div>
            <div>
              {content?.map((elem, index) => {
                return (
                  <p className="text-center my-1.5 lg:font-normal font-semibold text-[0.6rem] lg:text-sm text-white">
                    {elem}
                  </p>
                );
              })}
            </div>
          </ScrollAnimation>
        </Container>
      </div>
    </>
  );
};

export default GlobalServiceContent;
