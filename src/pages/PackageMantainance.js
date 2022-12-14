import React from "react";
import { Helmet } from "react-helmet";
import img1 from "../assets/images/icons/icon-16.png";
import img2 from "../assets/images/icons/icon-17.png";
import img3 from "../assets/images/background/pattern-12.png";
import Pricing from "../components/Pricing";
import WhatWeOffer from "../components/WhatWeOffer";
import Testomonial from "../components/Home/Testomonial";
import ContactUs from "../components/ContactUs";
import Pakcages from "../components/Home/Packages";

const PackageMantainance = () => {
  return (
    <>
      <Helmet title="Package-Mantainance" />
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
        />
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
                  Package <br /> Maintainenace &amp; Support
                </h1>
                <p className="text">
                  We included all kinds of website maintenance and support
                  services you require in order to ensure both the short and
                  long-term success of your online Business.
                </p>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image">
                  <img
                    src={require("../assets/images/resource/banner-2.png")}
                    alt=""
                  />
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
      {/* End Banner Section Three */}
      {/* Analysis Section */}
      <section className="analysis-section">
        <div className="pattern-layer" />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Title Column */}
            <div className="title-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="title">Package Maintenance</div>
                  <h2>
                    Website, Application
                    <br /> Maintenance and Support
                  </h2>
                </div>
                <p className="text">
                  Our website maintenance services ensure that your website is
                  always updated and secured. We???ve organized Website
                  Maintenance Program to keep your website Secure, Fast Loading,
                  and High Performing:
                </p>
                <a href="/contactus" className="theme-btn btn-style-eleven">
                  <span className="txt">Lets Start</span>
                </a>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div
                  className="image titlt"
                  data-tilt=""
                  data-tilt-max={3}
                  style={{
                    willChange: "transform",
                    transform: "perspective(300px) rotateX(0deg) rotateY(0deg)",
                  }}
                >
                  <img
                    src={require("../assets/images/resource/skill.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pricing />
      <WhatWeOffer />
      <Testomonial />
      <Pakcages />
      {/* contact us form */}
      <ContactUs />
    </>
  );
};

export default PackageMantainance;
