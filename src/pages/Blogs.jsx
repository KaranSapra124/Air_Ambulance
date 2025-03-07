import React from "react";
import GlobalHero from "../Components/Global/GlobalHero";
import Banner from "../Components/Home/Banner";
import Contact from "../Components/Home/Contact";
import BlogsData from "../Components/Blogs/BlogsData";

const BlogsPage = () => {
  return (
    <>
      <GlobalHero
        bgColor={"bg-red-500/40"}
        title={"Blogs"}
        image={
          "https://s3-alpha-sig.figma.com/img/6d18/aba7/f531c8da3cb69c86a45dae6e3df62467?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e6mtLC9bLL9b-99iw-TG-wbcpvFZ1fRXS6yMxWnbdfXha34y3hjJaCRuQQ75fBzalvMoz75cJft3gnpFBm7NozMroQflW2ams68zbVUfwZ-KgSPidYYohguSiYz3bYorVaKwjJlfCY0gENNvUKssSOXbl2s9i5PSBrhhcg1WY50Kqe~TkNUz0XQfA~PzBOI1P60nn2W3ToyBbL~rUKQl15Zp-r3VhCSNkIb6NlWnB8LUF-dVMxiFPi0LaXDd0yUFzNFSM9kQfUUZ2LoHyMx22obal~xwG7WxTAT~-5LRSAyXquWcFQFdINatFSVzBt8ca-9QSHiUC5gnSSyy19FU8g__"
        }
      />
      <BlogsData isHeading={true} />
      <Banner />
      <BlogsData/>
      <Contact />
    </>
  );
};

export default BlogsPage;
