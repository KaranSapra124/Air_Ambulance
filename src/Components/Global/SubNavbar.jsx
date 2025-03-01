import React from "react";
import { Logo } from "../../assets/ImgExporter";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SubNavbar = () => {
  return (
    <>
      <div className="flex bg-[#FEFFDE] justify-between px-4">
        <img className="w-20" src="./Home/Logo.png" alt="" />
        <div className="flex px-10  relative items-center ">
          <input className="border rounded-full px-2 " placeholder="Search.." type="text" />
          <FaMagnifyingGlass className="bg-black absolute left-[13.5rem] text-white p-1 text-2xl rounded-full"/>
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
