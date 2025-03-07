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
                  <h1>{elem?.title}</h1>
                  <p>{elem?.desc}</p>
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
