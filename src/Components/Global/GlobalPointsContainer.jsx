import React from "react";
import Container from "./Container";

const GlobalPointsContainer = ({ title, para, points }) => {
  return (
    <>
      <div className="py-2">
        <h1 className="text-primary-color my-2 text-center lg:text-2xl text-[0.7rem] font-bold">
          {title}
        </h1>
        <div className="w-10 h-0.5 lg:h-1  bg-primary-color rounded-full mx-auto my-1"></div>
        <p className="text-primary-color lg:my-4 my-1 font-bold text-center lg:text-sm text-[0.6rem] ">
          {para}
        </p>
        {points && (
          <ol>
            {points?.map((elem, index) => {
              return (
                <li className="text-primary-color lg:my-2 my-1 font-semibold text-center lg:text-sm text-[0.6rem] ">
                <span className="font-extrabold"> {index+1}.</span> {elem}
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </>
  );
};

export default GlobalPointsContainer;
