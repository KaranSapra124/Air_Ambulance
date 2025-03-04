import React from "react";
import Container from "./Container";

const GlobalServiceContent = ({ content, title }) => {
  return (
    <>
      <div className="bg-primary-color">
        <Container>
          <h1 className="lg:text-2xl text-sm text-center font-semibold text-white lg:my-4 my-2">
            {title}
          </h1>
          <div>
            {content?.map((elem, index) => {
              return (
                <p className="text-center my-1.5 lg:font-normal font-semibold text-[0.6rem] lg:text-sm text-white">
                  {elem}
                </p>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default GlobalServiceContent;
