import React from "react";
import GlobalHero from "../Components/Global/GlobalHero";
import Banner from "../Components/Home/Banner";
import Contact from "../Components/Home/Contact";
import BlogsData from "../Components/Blogs/BlogsData";
import Paagination from "../Components/Blogs/Paagination";

const BlogsPage = () => {
  return (
    <>
      <GlobalHero
        bgColor={"bg-red-500/40"}
        title={"Blogs"}
        image={"Group 72.png"}
      />
      <BlogsData isHeading={true} />
      <Banner />
      <BlogsData />
      <Paagination />
      <Contact />
    </>
  );
};

export default BlogsPage;
