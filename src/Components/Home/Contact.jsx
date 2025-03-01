import React from "react";
import Container from "../Global/Container";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Container>
        <div className="flex gap-4 max-w-screen-lg mx-auto">
          <div className="flex flex-col w-1/2 shadow-md shadow-black bg-[#d1361b] text-white p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-2 ">Get In Touch</h1>
            <div className="font-semibold ">
              <h2 className="text-lg text-center ">Phone No</h2>
              <p className="mb-4 text-center">9990499116, 9990075511</p>
              <h2 className="text-lg text-center">Main Office:</h2>
              <p className="mb-4 text-center">
                H. NO. 652, Ground floor, Front portion SHAHBAD Mohammadpur, New
                Delhi -110061
              </p>
              <h2 className="text-lg text-center">BRANCH ADDRESS:</h2>
              <p className="text-center">
                Ground floor, Meharam nagar, Opposite IG domestic Airport, New
                Delhi-110037
              </p>
            </div>

            <div className="flex space-x-4  mx-auto rounded-full  mt-4">
              <FaFacebook className="text-blue-500 bg-white w-fit rounded-full text-2xl" />
              <FaInstagram className="text-pink-500 bg-white w-fit rounded-full text-2xl" />
              <FaWhatsapp className="text-green-600 bg-white w-fit rounded-full text-2xl" />
              <FaYoutube className="text-red-500 bg-white w-fit rounded-full text-2xl" />
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
