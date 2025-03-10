import React from "react";
import Hero from "../Components/Home/Hero";
import Banner from "../Components/Home/Banner";
import Services from "../Components/Home/Services";
import ContactBanner from "../Components/Home/ContactBanner";
import Blogs from "../Components/Home/Blogs";
import SeeWhatWeDid from "../Components/Home/SeeWhatWeDid";
import Testimonial from "../Components/Home/Testimonial";
import Faq from "../Components/Home/Faq";
import Contact from "../Components/Home/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <Services />
      <ContactBanner />
      <Blogs />
      <SeeWhatWeDid />
      <Testimonial />
      <Faq />
      <Contact />

      {/* Floating WhatsApp Button */}
      {/* <a
        href="https://wa.me/7678126262" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </a> */}
    </>
  );
};

export default Home;
