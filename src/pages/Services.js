import React from "react";
import { Helmet } from "react-helmet";
import CallToAction from "../components/Home/CallToAction";
import Counts from "../components/Home/Counts";
import Question from "../components/Services/Question";
import ServicesSection from "../components/Services/ServicesSection";
import TitleSection from "../components/TitleSection";

const Services = () => {
  return (
    <>
      <Helmet title="Services" />
      <TitleSection title="Services" />
      <ServicesSection />
      <CallToAction />
      <Counts page="Services" />
      <Question />
    </>
  );
};

export default Services;
