import React from "react";
import Container from "../Global/Container";
import ScrollAnimation from "react-animate-on-scroll";
const GlobalContentContainer = ({ title, content, image }) => {
  return (
    <Container>
      <ScrollAnimation animateIn="backInUp" animateOnce>
        <div>
          <h1 className="text-primary-color my-2 text-center lg:text-2xl text-[0.7rem] font-bold">
            {title}
          </h1>
          <div className="w-10 h-0.5 lg:h-1  bg-primary-color rounded-full mx-auto my-1"></div>

          {content?.map((elem, index) => {
            return (
              <p className="text-primary-color lg:my-4 my-1 font-semibold text-center lg:text-sm text-[0.6rem] ">
                {elem}
              </p>
            );
          })}
          {image && (
            <img
              src={image}
              className="mx-auto lg:w-full lg:h-96 object-cover"
              alt=""
              srcset=""
            />
          )}
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export default GlobalContentContainer;
