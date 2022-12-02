import React from "react";
import { Helmet } from "react-helmet";
import Aboutus from "../components/Home/Aboutus";
import Business from "../components/Home/Business";
import CallToAction from "../components/Home/CallToAction";
import Clients from "../components/Home/Clients";
import Counts from "../components/Home/Counts";
import Demo from "../components/Home/Demo";
import Faqs from "../components/Home/Faqs";
import Herosection from "../components/Home/Herosection";
import OurBlogs from "../components/Home/OurBlogs";
import Packages from "../components/Home/Packages";
import ReleatedProjects from "../components/Home/ReleatedProjects";
import Seo from "../components/Home/Seo";
import Services from "../components/Home/Services";
import Services2 from "../components/Home/Services2";
import Steps from "../components/Home/Steps";
import Testomonial from "../components/Home/Testomonial";

const Home = () => {
  return (
    <>
      <Helmet title="Home" />
      <Herosection />
      <Aboutus />
      <Services />
      <Demo />
      <Services2 />
      <Steps />
      <Packages />
      <Counts page="Home" />
      <Seo />
      <Business />
      <CallToAction />
      <Clients />
      <ReleatedProjects />
      <Testomonial />
      <OurBlogs />
      <Faqs />
    </>
  );
};

export default Home;
