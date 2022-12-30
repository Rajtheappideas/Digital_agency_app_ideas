import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import CallToAction from "../components/Home/CallToAction";
import Counts from "../components/Home/Counts";
import Question from "../components/Services/Question";
import ServicesSection from "../components/Services/ServicesSection";
import TitleSection from "../components/TitleSection";
import { getServices, getServicesById } from "../redux/ContentSlice";

const Services = () => {
  const { services, loading } = useSelector((state) => state.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
    dispatch(getServicesById());
  }, []);
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
