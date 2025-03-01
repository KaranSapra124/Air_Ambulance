import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#d1361b] text-white ">
      <div className="container p-6 mx-auto flex justify-between">
        {/* Quick Links Section */}
        <div className="flex flex-col">
          <h5 className="text-lg font-bold mb-2">Quick Links</h5>
          <ul>
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
        <div className="max-w-screen-sm text-center">
          <h5 className="text-lg font-bold mb-2">Connect with us</h5>
          <div className="flex items-center">
            <p className="font-semibold">Phone No: 9990499116, 9990075511</p>
            <div className="flex space-x-4  mx-auto rounded-full  mt-4">
              <FaFacebook className="text-blue-500 bg-white w-fit rounded-full text-2xl" />
              <FaInstagram className="text-pink-500 bg-white w-fit rounded-full text-2xl" />
              <FaWhatsapp className="text-green-600 bg-white w-fit rounded-full text-2xl" />
              <FaYoutube className="text-red-500 bg-white w-fit rounded-full text-2xl" />
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <h6 className="font-bold mt-4">Main Office:</h6>
              <p>
                H. NO. 652, Ground floor, Front portion SHAHBAD Mohammadpur, New
                Delhi - 110061
              </p>
            </div>
            <div>
              <h6 className="font-bold mt-4">BRANCH ADDRESS:</h6>
              <p>
                Ground floor, Meharam nagar, Opposite IG domestic Airport, New
                Delhi - 110037
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center bg-[#FE817180]  mt-4">
        <p className="py-2 text-gray-900 font-semibold">
          Copyright © All Rights Reserved. DriveLife Health Care & Human
          Resource
        </p>
      </div>
    </footer>
  );
};

export default Footer;
