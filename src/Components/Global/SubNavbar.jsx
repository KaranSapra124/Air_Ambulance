import React from "react";
import { Logo } from "../../assets/ImgExporter";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SubNavbar = () => {
  return (
    <div className="flex items-center justify-between bg-[#FEFFDE] px-4 py-3 md:px-8">
      {/* Logo */}
      <img className="w-8 lg:w-20" src="Logo.png" alt="Logo" />

      {/* Search Box */}
      <div className="relative flex items-center w-full max-w-xs md:max-w-md">
        <input
          className="w-fit ml-auto border rounded-full lg:px-3 px-2 lg:py-2 py-1 text-xs lg:text-sm md:text-base outline-none"
          placeholder="Search.."
          type="text"
        />
        <FaMagnifyingGlass className="absolute right-3 text-gray-600 text-xs md:text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default SubNavbar;
