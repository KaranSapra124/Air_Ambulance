import React from "react";
import { useLocation } from "react-router-dom";
import Container from "../Global/Container";
import GlobalHero from "../Global/GlobalHero";
import { FaCalendar, FaTags, FaUser } from "react-icons/fa6";

const IndividualBlog = () => {
  const location = useLocation();
  const { state } = location;
  const { title, image, image2, date, arr, desc } = state;
  return (
    <>
      <GlobalHero image={image} />
      <Container>
        <div className="lg:max-w-screen-lg max-w-screen-sm mx-auto">
          <h1 className="text-primary-color lg:text-xl text-sm text-center font-bold">
            {title}
          </h1>
          <div className="flex lg:my-4 my-2 justify-evenly mx-auto items-center">
            <div className="flex items-center lg:text-sm text-xs text-gray-700 font-semibold">
              <FaCalendar className="text-primary-color mx-2" />
              {date}
            </div>
            <div className="flex items-center lg:text-sm text-xs text-gray-700 font-semibold">
              <FaUser className="text-primary-color mx-2" />
              admin
            </div>
            <div className="flex items-center lg:text-sm text-xs text-gray-700 font-semibold">
              <FaTags className="text-primary-color mx-2" />
              Air Ambulance Cost, air ambulance services
            </div>
          </div>
          <p className="text-primary-color text-sm text-center font-medium">{desc}</p>
        </div>
      </Container>
    </>
  );
};

export default IndividualBlog;
