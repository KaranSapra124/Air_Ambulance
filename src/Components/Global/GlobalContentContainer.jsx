import React from "react";
import Container from "../Global/Container";
const GlobalContentContainer = ({ title, content, image }) => {
  return (
    <Container>
      <div>
        <h1 className="text-primary-color my-2 text-center lg:text-2xl text-sm font-bold">
          {title}
        </h1>
        <p className="text-primary-color my-2 font-semibold text-center lg:text-sm text-xs ">{content}</p>
        <img src={image} alt="" srcset="" />
      </div>
    </Container>
  );
};

export default GlobalContentContainer;
