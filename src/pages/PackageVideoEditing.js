import React, { useState } from "react";
import img1 from "../assets/images/icons/icon-16.png";
import img2 from "../assets/images/icons/icon-17.png";
import img3 from "../assets/images/background/pattern-12.png";
import { Helmet } from "react-helmet";
import Pricing from "../components/Pricing";
import WhatWeOffer from "../components/WhatWeOffer";
import Testomonial from "../components/Home/Testomonial";
import Packages from "../components/Home/Packages";
import ContactUs from "../components/ContactUs";

const PackageVideoEditing = () => {
  return (
    <>
      <Helmet title="Package-Video-Editing" />

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
                  Package <br /> Video-Editing
                </h1>
                <p className="text">
                  It's a great way to deliver content of value and increase
                  brand awareness on those platforms. You can put your message
                  right in front of your target audience without ever having to
                  leave the office.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=xscbKrsuXOw"
                  className="btn-style-one"
                >
                  <span className="txt">Play Video</span>
                </a>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image">
                  <img
                    src={require("../assets/images/resource/video-banner.png")}
                    alt="video-banner"
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
      {/* anaylsis */}
      <section className="analysis-section">
        <div className="pattern-layer" />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Title Column */}
            <div className="title-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="title">Package Video-Editing</div>
                  <h2>
                    Build videos with us
                    <br /> for Website, Application
                  </h2>
                </div>
                <p className="text">
                  Video editing can also help businesses to save time and money
                  by allowing them to reuse footage and create videos more
                  quickly. Additionally, video editing can help businesses to
                  improve their communication and marketing strategies by
                  allowing them to better target their audience and create more
                  engaging content.
                </p>
                <a href="contact.html" className="theme-btn btn-style-eleven">
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
                    src={require("../assets/images/resource/video-bg.png")}
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
      <Packages />
      <ContactUs />
    </>
  );
};

export default PackageVideoEditing;
