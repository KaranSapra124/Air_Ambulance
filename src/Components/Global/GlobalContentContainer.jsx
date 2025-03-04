import React from "react";
import Container from "../Global/Container";
const GlobalContentContainer = ({ title, content, image }) => {
  return (
    <Container>
      <div>
        <h1 className="text-primary-color my-2 text-center lg:text-2xl text-sm font-bold">
          {title}
        </h1>
        {content?.map((elem, index) => {
          return (
            <p className="text-primary-color my-2 font-semibold text-center lg:text-sm text-[0.6rem] ">
              {elem}
            </p>
          );
        })}
        {image && <img src={image} className="mx-auto lg:w-full lg:h-96 object-cover" alt="" srcset="" />}
      </div>
    </Container>
  );
};

export default GlobalContentContainer;
