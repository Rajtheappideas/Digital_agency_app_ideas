import React from "react";
import { Helmet } from "react-helmet";
import CallToAction from "../components/Aboutus/CallToAction";
import Counts from "../components/Aboutus/Counts";
import Mission from "../components/Aboutus/Mission";
import Services from "../components/Aboutus/Services";
import SidebarSection from "../components/Aboutus/SidebarSection";
import WhyChooseus from "../components/Aboutus/WhyChooseus";
import ColorPalate from "../components/ColorPalate";
import Steps from "../components/Home/Steps";
import TitleSection from "../components/TitleSection";

const Aboutus = () => {
  return (
    <>
      <Helmet title="Aboutus" />
      {/* <ColorPalate /> */}
      <TitleSection title="About us" />
      <SidebarSection />
      <Services />
      <CallToAction />
      <Counts />
      <Mission />
      <Steps />
      <WhyChooseus />
    </>
  );
};

export default Aboutus;
