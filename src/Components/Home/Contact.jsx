import React from "react";
import Container from "../Global/Container";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Container>
        <div className="flex gap-4 max-w-screen-xl  mx-auto">
          <div className="flex flex-col  w-1/2 shadow-md shadow-black bg-[#d1361b] text-white p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-2 ">Get In Touch</h1>
            <div className="font-semibold flex flex-col px-2 bg-white text-gray-900 rounded-md justify-center items-center h-full">
              <h2 className="text-lg text-center  text-primary-color font-bold">Phone No:</h2>
              <div className="h-1 w-10 mx-auto my-1.5 bg-primary-color rounded-full"></div>
              <p className="mb-4 text-center font-medium">9990499116, 9990075511</p>
              <h2 className="text-lg text-center text-primary-color font-bold">Main Office:</h2>
              <div className="h-1 w-10 mx-auto my-1.5 bg-primary-color rounded-full"></div>
              <p className="mb-4 text-center font-medium">
                H. NO. 652, Ground floor, Front portion SHAHBAD Mohammadpur, New
                Delhi -110061
              </p>
              <h2 className="text-lg text-center text-primary-color font-bold">BRANCH ADDRESS:</h2>
              <div className="h-1 w-10 mx-auto my-1.5 bg-primary-color rounded-full"></div>
              <p className="text-center font-medium">
                Ground floor, Meharam nagar, Opposite IG domestic Airport, New
                Delhi-110037
              </p>
              <div className="flex space-x-4  mx-auto rounded-full  mt-4">
                <FaFacebook className="text-blue-500  w-fit hover:scale-110 transition-all cursor-pointer  text-2xl" />
                <FaInstagram className="text-pink-500  w-fit hover:scale-110 transition-all cursor-pointer  text-2xl" />
                <FaWhatsapp className="text-green-600  w-fit hover:scale-110 transition-all cursor-pointer  text-2xl" />
                <FaYoutube className="text-red-500  w-fit hover:scale-110 transition-all cursor-pointer  text-2xl" />
              </div>
            </div>
          </div>

          <div className="flex  shadow-black flex-col bg-primary-color text-black p-6 w-1/2 rounded-md shadow-md ">
            <h1 className="text-2xl font-bold mb-4 text-white">
              Book An Ambulance
            </h1>
            <label className="mb-1 text-white">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name..."
              className="border bg-white border-gray-300 p-2 rounded mb-4"
            />

            <label className="mb-1 text-white">Mobile No.</label>
            <input
              type="number"
              placeholder="Enter Your Number..."
              className="border bg-white border-gray-300 p-2 rounded mb-4"
            />

            <label className="mb-1 text-white">City</label>
            <input
              type="text"
              placeholder="Enter Your City..."
              className="border bg-white border-gray-300 p-2 rounded mb-4"
            />

            <label className="mb-1 text-white">Service</label>
            <input
              type="text"
              placeholder="Enter Your Service..."
              className="border bg-white border-gray-300 p-2 rounded mb-4"
            />

            <button className="bg-white w-fit mx-auto font-semibold text-primary-color p-2 rounded-full hover:bg-gray-200 transition duration-200">
              BOOK NOW
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
