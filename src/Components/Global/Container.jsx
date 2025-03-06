import React from "react";

const Container = ({ children }) => {
  return <div className="lg:max-w-screen-xl mx-auto lg:py-8 py-4 max-w-72">{children}</div>;
};

export default Container;
