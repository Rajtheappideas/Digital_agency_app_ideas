import React, { useState } from "react";
import { Helmet } from "react-helmet";
import WhyChooseus from "../components/Aboutus/WhyChooseus";
import Pakcages from "../components/Home/Packages";
import Testomonial from "../components/Home/Testomonial";
import img1 from "../assets/images/icons/icon-16.png";
import img2 from "../assets/images/icons/icon-17.png";
import img3 from "../assets/images/background/pattern-12.png";
import Pricing from "../components/Pricing";
import WhatWeOffer from "../components/WhatWeOffer";
import ContactUs from "../components/ContactUs";
import SidebarOfPackages from "../components/SidebarOfPackages";

const PackageDigitalMarketing = () => {

  return (
    <>
      <Helmet title="Packag eDigital Marketing" />

      {/* banner */}
      <section className="banner-section-three">
        <div
          className="icon-layer-one"
          style={{ backgroundImage: `url(${img1})` }}
        />
        <div
          className="icon-layer-two"
          style={{ backgroundImage: `url(${img2})` }}
        />
        <div
          className="icon-layer-three"
          style={{ backgroundImage: `url(${img3})` }}
        ></div>
        {/* Social Box */}
        <ul className="social-box">
          <li>
            <a href="/comming-soon" className="fab fa-facebook-f" />
          </li>
          <li>
            <a href="/comming-soon" className="fab fa-linkedin-in" />
          </li>
          <li>
            <a href="/comming-soon" className="fab fa-twitter" />
          </li>
          <li>
            <a href="/comming-soon" className="fab fa-instagram" />
          </li>
        </ul>
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <h1>
                  Package <br /> Digital Marketing
                </h1>
                <p className="text">
                  Digital marketing helps brands reach their target audience and
                  promote their product or service. While that's the goal of a
                  traditional marketing campaign too, digital marketing allows
                  brands to target a more specific or niche audience
                </p>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image">
                  <img src="images/resource/marketing-banner.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Waves Container*/}
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={0}
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={3}
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={5}
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
            </g>
          </svg>
        </div>
        {/*Waves end*/}
      </section>
      <WhyChooseus />
      <Pricing />
      {/* faq */}
      <WhatWeOffer />
      <Testomonial />
      <Pakcages />
      {/* contact us form */}
      <ContactUs />
    </>
  );
};

export default PackageDigitalMarketing;
