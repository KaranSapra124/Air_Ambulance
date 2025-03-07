import React from "react";
import { useLocation } from "react-router-dom";
import Container from "../Global/Container";
import GlobalHero from "../Global/GlobalHero";
import { FaCalendar, FaTags, FaUser } from "react-icons/fa6";
import GlobalBlogs from "../Global/GlobalBlogs";

const IndividualBlog = () => {
  const location = useLocation();
  const { state } = location;
  const { title, image, image2, date, arr, desc, points } = state;
  return (
    <>
      <GlobalHero image={image} />
      <Container>
        <div className="lg:max-w-screen-lg  max-w-screen-sm mx-auto">
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
          <p className="text-primary-color lg:my-4 my-2 text-sm text-center font-medium">
            {desc}
          </p>
          <img
            src={image2}
            className="lg:my-4 my-2 mx-auto w-full"
            alt=""
            srcset=""
          />
          <GlobalBlogs blogData={arr} />
          <ul className="lg:-mt-10 -mt-7">
            {points?.map((point, index) => {
              return (
                <li className="text-primary-color list-decimal lg:my-4 my-2 text-sm text-center font-bold">
                  {point}
                </li>
              );
            })}
          </ul>
          <h2 className="text-primary-color list-decimal lg:my-6  my-2 lg:text-md text-sm text-center font-medium italic">
            If you have been looking for the Air Ambulance Cost, then you might
            have to look at the listed service offered by DHHR  because they are
            specialist and have been doing a great job for a long time in
            helping patients, talk to them now.
          </h2>
        </div>
      </Container>
    </>
  );
};

export default IndividualBlog;
