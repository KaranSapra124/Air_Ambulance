import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger
import SubNavbar from "../Global/SubNavbar";
import Footer from "./Footer";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  const linksArr = [
    { title: "Home", link: "/" },
    { title: "About us", link: "/about-us" },
    { title: "Services", link: "/services", hasDropdown: true },
    { title: "WorldWide Solutions", link: "/worldwide-solutions" },
    { title: "Blogs", link: "/blogs" },
  ];

  const servicesDropdown = [
    { title: "Air Ambulance", link: "/air-ambulance" },
    { title: "Train Ambulance", link: "/train-ambulance" },
  ];

  return (
    <>
      <SubNavbar />
      {/* Navbar Container */}
      <div className="bg-primary-color p-4">
        <div className="flex items-center justify-between">
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Links for Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {linksArr.map((elem, index) => (
              <div key={index} className="relative">
                {elem.hasDropdown ? (
                  <div
                    className="text-white cursor-pointer relative text-xs"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {elem.title}
                    {isDropdownOpen && (
                      <div className="absolute z-50 left-0 mt-2 w-48 bg-primary-color shadow-md">
                        {servicesDropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.link}
                            className="block px-4 py-2 text-white border-b text-center text-xs hover:bg-gray-100"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link className="text-white text-xs" to={elem.link}>
                    {elem.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Pay Online Button */}
          <button className="bg-white px-3 py-1.5 rounded-full text-xs">
            Pay Online
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {linksArr.map((elem, index) => (
              <div key={index}>
                {elem.hasDropdown ? (
                  <div
                    className="text-white cursor-pointer text-xs"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {elem.title}
                    {isDropdownOpen && (
                      <div className="mt-2 bg-primary-color shadow-md">
                        {servicesDropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.link}
                            className="block px-4 py-2 text-white border-b text-center text-xs hover:bg-gray-100"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link className="text-white block text-xs" to={elem.link}>
                    {elem.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
