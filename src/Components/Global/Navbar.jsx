import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import SubNavbar from "../Global/SubNavbar";
import Footer from "./Footer";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linksArr = [
    { title: "Home", link: "/" },
    { title: "About us", link: "/about-us" },
    { title: "Services", link: "/services", hasDropdown: true },
    { title: "WorldWide Solutions", link: "#", hasDropdown: true },
    { title: "Blogs", link: "/blogs" },
  ];

  const servicesDropdown = [
    { title: "Air Ambulance", link: "/air-ambulance" },
    { title: "Train Ambulance", link: "/train-ambulance" },
    { title: "Road Ambulance", link: "/road-ambulance" },
    { title: "Medical Assistance", link: "/medical-assistance" },
    { title: "Stretcher Assistance", link: "/stretcher" },
    { title: "Emergency Ambulance", link: "/emergency" },
    { title: "IGI Ambulance", link: "/ambulance-igi" },
  ];

  const worldwideDropdown = [
    { title: "National Services", link: "/national-services" },
    { title: "International Services", link: "/international-services" },
  ];

  return (
    <>
      <SubNavbar />
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
          <div className="hidden lg:flex items-center gap-6">
            {linksArr.map((elem, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(elem.hasDropdown ? index : null)}
                onMouseLeave={() => setIsDropdownOpen(null)}
              >
                {elem.hasDropdown ? (
                  <div className="text-white cursor-pointer relative lg:text-lg text-xs">
                    {elem.title}
                    {isDropdownOpen === index && (
                      <div className="absolute z-50 left-0 mt-2 w-48 bg-primary-color shadow-md">
                        {(elem.title === "Services" ? servicesDropdown : worldwideDropdown).map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.link}
                            className="block px-4 py-2 text-white border-b text-center lg:text-lg text-xs hover:bg-red-800"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link className="text-white lg:text-lg text-xs" to={elem.link}>
                    {elem.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Pay Online Button */}
          <button className="bg-white px-3 py-1.5 rounded-full lg:text-lg text-xs">
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
                    onClick={() => setIsDropdownOpen(isDropdownOpen === index ? null : index)}
                  >
                    {elem.title}
                    {isDropdownOpen === index && (
                      <div className="mt-2 bg-primary-color shadow-md">
                        {(elem.title === "Services" ? servicesDropdown : worldwideDropdown).map((subItem, subIndex) => (
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
                  <Link className="text-white block lg:text-lg text-xs" to={elem.link}>
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
