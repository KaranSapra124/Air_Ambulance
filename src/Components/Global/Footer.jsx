import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#d1361b] text-white ">
      <div className="container lg:p-6 p-3 mx-auto flex lg:flex-row flex-col justify-between">
        {/* Quick Links Section */}
        <div className="flex flex-col">
          <h5 className="lg:text-lg text-md font-bold mb-2">Quick Links</h5>
          <ul className="text-xs lg:text-sm">
            <li>FAQ</li>
            <li>Our Pricing</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Payment</li>
            <li>Pay Online</li>
            <li>Download Brochure</li>
          </ul>
        </div>

        {/* Connect with us Section */}
        <div className="max-w-screen-sm lg:text-center text-left">
          <h5 className="text-md lg:text-lg font-bold mb-2 lg:my-0 my-2">Connect with us</h5>
          <div className="flex lg:flex-row flex-col items-start   lg:items-center">
            <p className="lg:text-sm text-xs font-semibold">Phone No: 9990499116, 9990075511</p>
            <div className="flex space-x-4 mx-0 lg:mx-auto rounded-full mt-2  lg:mt-4">
              <FaFacebook className="text-blue-500 bg-white w-fit rounded-full text-sm lg:text-2xl" />
              <FaInstagram className="text-pink-500 bg-white w-fit rounded-full text-sm lg:text-2xl" />
              <FaWhatsapp className="text-green-600 bg-white w-fit rounded-full text-sm lg:text-2xl" />
              <FaYoutube className="text-red-500 bg-white w-fit rounded-full text-sm lg:text-2xl" />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center">
            <div>
              <h6 className="font-bold mt-2 lg:text-lg text-sm lg:mt-4">Main Office:</h6>
              <p className="lg:text-sm text-xs">
                H. NO. 652, Ground floor, Front portion SHAHBAD Mohammadpur, New
                Delhi - 110061
              </p>
            </div>
            <div>
              <h6 className="font-bold mt-2 lg:text-lg text-sm lg:mt-4">BRANCH ADDRESS:</h6>
              <p className="lg:text-sm text-xs">
                Ground floor, Meharam nagar, Opposite IG domestic Airport, New
                Delhi - 110037
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center bg-[#FE817180]  lg:mt-4 mt-2">
        <p className="py-2 lg:text-sm text-xs text-gray-900 font-semibold">
          Copyright © All Rights Reserved. DriveLife Health Care & Human
          Resource
        </p>
      </div>
    </footer>
  );
};

export default Footer;
