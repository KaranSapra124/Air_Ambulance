import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SubNavbar from "../Global/SubNavbar";
import Footer from "./Footer";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const linksArr = [
    { title: "Home", link: "/" },
    { title: "About us", link: "/about-us" },
    { title: "Services", link: "/services", hasDropdown: true },
    { title: "WorldWide Solutions", link: "/worldwide-solutions" },
    { title: "Blogs", link: "/blogs" },
  ];

  const servicesDropdown = [
    { title: "Air Ambulance", link: "/services/air-ambulance" },
    { title: "Train Ambulance", link: "/services/train-ambulance" },
  ];

  return (
    <>
      <SubNavbar />
      <div className="flex items-center p-4 justify-evenly bg-primary-color relative">
        {linksArr.map((elem, index) => (
          <div key={index} className="relative">
            {elem.hasDropdown ? (
              <div
                className="text-white cursor-pointer relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {elem.title}
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute z-[999]   left-0 mt-2 w-48 bg-primary-color shadow-md ">
                    {servicesDropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.link}
                        className="block  px-4 py-2 text-white border-2 text-center  border-red-900 hover:bg-gray-100"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link className="text-white" to={elem.link}>
                {elem.title}
              </Link>
            )}
          </div>
        ))}
        <button className="bg-white px-3 py-1.5 rounded-full">Pay Online</button>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
