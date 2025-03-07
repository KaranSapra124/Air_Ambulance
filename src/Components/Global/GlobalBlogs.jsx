import React from "react";
import Container from "../Global/Container";

const GlobalBlogs = ({ blogData }) => {
  return (
    <>
      <Container>
        <div>
          {blogData?.map((elem, index) => {
            return (
              <>
                <div>
                  <h1 className="lg:text-lg  text-sm text-center font-bold  text-primary-color">{elem?.title}</h1>
                  <p className="text-[0.7rem] lg:text-sm font-medium lg:my-2 my-2 text-center text-primary-color">{elem?.desc}</p>
                </div>
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default GlobalBlogs;
