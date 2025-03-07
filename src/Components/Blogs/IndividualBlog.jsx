import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Container from "../Global/Container";
import GlobalHero from "../Global/GlobalHero";
import { FaCalendar, FaTags, FaUser } from "react-icons/fa6";
import GlobalBlogs from "../Global/GlobalBlogs";
import ScrollAnimation from "react-animate-on-scroll";

const IndividualBlog = () => {
  const location = useLocation();
  const { id } = useParams();
  const [index, setIndex] = useState(Number(id) || 0);
  const state = location?.state || { title: "", image: "", image2: "", date: "", arr: [], desc: "", points: [] };
  
  useEffect(() => {
    if (index < 0) setIndex(0);
    if (index >= state?.length) setIndex(state?.length - 1);
  }, [index, state?.length]);

  if (!state || state?.length === 0) {
    return <p className="text-center text-red-500">No blog data found.</p>;
  }

  const { title, image, image2, date, arr, desc, points } = state[index] || {};

  return (
    <>
      <GlobalHero image={image} />
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <Container>
          <div className="lg:max-w-screen-lg  max-w-screen-sm mx-auto">
            <h1 className="text-primary-color lg:text-xl text-sm text-center font-bold">
              {title || "Blog Title"}
            </h1>
            <div className="flex  w-full  lg:my-4 my-3.5  justify-evenly mx-auto lg:items-center">
              <div className="flex lg:flex-row flex-col lg:max-w-full max-w-32 items-center lg:text-sm text-[0.6rem] text-gray-700 font-semibold">
                <FaCalendar className="text-primary-color lg:text-sm text-xs mx-2" />
                {date || "Unknown Date"}
              </div>
              <div className="flex lg:flex-row flex-col  lg:max-w-full max-w-32 items-center lg:text-sm text-[0.6rem] text-gray-700 font-semibold">
                <FaUser className="text-primary-color lg:text-sm text-xs mx-2" />
                admin
              </div>
              <div className="flex lg:flex-row flex-col  lg:max-w-full max-w-32 items-center lg:text-sm text-[0.6rem] text-gray-700 font-semibold">
                <FaTags className="text-primary-color lg:text-sm text-xs mx-2" />
                Air Ambulance Cost, air ambulance services
              </div>
            </div>
            <p className="text-primary-color lg:my-4 my-2 lg:text-sm text-xs text-center font-medium">
              {desc || "No description available."}
            </p>
            {title?.includes(
              "What Benefits You Get When Using Air Ambulance Services In-Emergency?"
            ) && (
              <ul className="lg:-mt-2 ">
                {points?.map((point, idx) => (
                  <li key={idx} className="text-primary-color lg:my-4 my-2 lg:text-sm text-[0.64rem] text-center font-bold">
                    <span className="mx-1">{idx + 1}.</span> {point}
                  </li>
                ))}
              </ul>
            )}
            <img src={image2} className="lg:my-4 my-2 mx-auto w-full" alt="Blog Image" />
            <GlobalBlogs blogData={arr} />
            {!title?.includes(
              "What Benefits You Get When Using Air Ambulance Services In-Emergency?"
            ) && (
              <ul className="">
                {points?.map((point, idx) => (
                  <li key={idx} className="text-primary-color lg:my-4 my-2 lg:text-sm text-[0.64rem] text-center font-bold">
                    <span className="mx-1">{idx + 1}.</span> {point}
                  </li>
                ))}
              </ul>
            )}
            <h2 className="text-primary-color list-decimal lg:my-3.5  my-2 lg:text-md text-sm text-center font-medium italic">
              If you have been looking for the Air Ambulance Cost, then you
              might have to look at the listed service offered by DHHR  because
              they are specialists and have been doing a great job for a long
              time in helping patients, talk to them now.
            </h2>
          </div>
          <div className="flex justify-between max-w-screen-lg mx-auto">
            <button
              onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
              className="bg-primary-color py-1 px-2 rounded-full text-white font-semibold"
              disabled={index === 0}
            >
              Prev
            </button>
            <button
              onClick={() => setIndex((prev) => Math.min(state?.length - 1, prev + 1))}
              disabled={index >= state?.length - 1}
              className="bg-primary-color py-1 px-2 rounded-full text-white font-semibold"
            >
              Next
            </button>
          </div>
        </Container>
      </ScrollAnimation>
    </>
  );
};

export default IndividualBlog;
