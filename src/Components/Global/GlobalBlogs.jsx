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
                  <h1 className="text-sm text-primary-color">{elem?.title}</h1>
                  <p className="text-xs text-primary-color">{elem?.desc}</p>
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
