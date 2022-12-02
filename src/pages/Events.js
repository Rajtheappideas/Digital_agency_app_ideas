import React from "react";
import TitleSection from "../components/TitleSection";
import { Helmet } from "react-helmet";
import bgbrochures from "../assets/images/background/pattern-19.jpg";
import brochures from "../assets/document/Appideas-Brochure.pdf";
import admin from "../assets/images/resource/admin.png";

const Events = () => {
  return (
    <>
      <Helmet title="Events" />
      <TitleSection title="Events" />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Side */}
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="our-blogs">
                {/* News Block Four */}
                <div className="news-block-four">
                  <div
                    className="inner-box"
                    style={{
                      backgroundImage: `url(${admin})`,
                    }}
                  >
                    <div className="post-date">
                      01 <span>JAN</span>
                    </div>
                    <ul className="post-info">
                      <li>
                        <span className="author-image">
                          <img
                            src={require("../assets/images/resource/author-4.jpg")}
                            alt=""
                          />
                        </span>
                        By: Admin
                      </li>
                      <li>
                        Category:{" "}
                        <span className="theme_color">Web Design</span>
                      </li>
                    </ul>
                    <h3>
                      <a href="projects.html">
                        How to increase your ROI through scientific SEM?
                      </a>
                    </h3>
                  </div>
                </div>
                {/* News Block Four */}
                <div className="news-block-four">
                  <div
                    className="inner-box"
                    style={{
                      backgroundImage: `url(${admin})`,
                    }}
                  >
                    <div className="post-date">
                      19 <span>FEB</span>
                    </div>
                    <ul className="post-info">
                      <li>
                        <span className="author-image">
                          <img
                            src={require("../assets/images/resource/author-4.jpg")}
                            alt=""
                          />
                        </span>
                        By: Admin
                      </li>
                      <li>
                        Category:{" "}
                        <span className="theme_color">Trending App</span>
                      </li>
                    </ul>
                    <h3>
                      <a href="projects.html">
                        How to increase your ROI through scientific SEM?
                      </a>
                    </h3>
                  </div>
                </div>
                {/* News Block Four */}
                <div className="news-block-four">
                  <div
                    className="inner-box"
                    style={{
                      backgroundImage: `url(${admin})`,
                    }}
                  >
                    <div className="post-date">
                      03 <span>MAR</span>
                    </div>
                    <ul className="post-info">
                      <li>
                        <span className="author-image">
                          <img
                            src={require("../assets/images/resource/author-4.jpg")}
                            alt=""
                          />
                        </span>
                        By: Admin
                      </li>
                      <li>
                        Category:{" "}
                        <span className="theme_color">Cyber Security</span>
                      </li>
                    </ul>
                    <h3>
                      <a href="projects.html">
                        How to increase your ROI through scientific SEM?
                      </a>
                    </h3>
                  </div>
                </div>
                {/* News Block Four */}
                <div className="news-block-four">
                  <div
                    className="inner-box"
                    style={{
                      backgroundImage: `url(${admin})`,
                    }}
                  >
                    <div className="post-date">
                      04 <span>APR</span>
                    </div>
                    <ul className="post-info">
                      <li>
                        <span className="author-image">
                          <img
                            src={require("../assets/images/resource/author-4.jpg")}
                            alt=""
                          />
                        </span>
                        By: Admin
                      </li>
                      <li>
                        Category: <span className="theme_color">AI</span>
                      </li>
                    </ul>
                    <h3>
                      <a href="projects.html">
                        How to increase your ROI through scientific SEM?
                      </a>
                    </h3>
                  </div>
                </div>
                {/* News Block Four */}
                <div className="news-block-four">
                  <div
                    className="inner-box"
                    style={{
                      backgroundImage: `url(${admin})`,
                    }}
                  >
                    <div className="post-date">
                      05 <span>MAY</span>
                    </div>
                    <ul className="post-info">
                      <li>
                        <span className="author-image">
                          <img
                            src={require("../assets/images/resource/author-4.jpg")}
                            alt=""
                          />
                        </span>
                        By: Admin
                      </li>
                      <li>
                        Category:{" "}
                        <span className="theme_color">Conference Appideas</span>
                      </li>
                    </ul>
                    <h3>
                      <a href="projects.html">
                        How to increase your ROI through scientific SEM?
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar Side */}
            <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar sticky-top">
                {/* Services */}
                <div className="sidebar-widget">
                  <ul className="service-list">
                    <li>
                      <a href="/services">
                        <span className="color-layer" />
                        All Services
                      </a>
                    </li>
                    <li>
                      <a href="/content-marketing">
                        <span className="color-layer" />
                        Content Marketing
                      </a>
                    </li>
                    <li>
                      <a href="/social-marketing">
                        <span className="color-layer" />
                        Social Marketing
                      </a>
                    </li>
                    <li>
                      <a href="/app-development">
                        <span className="color-layer" />
                        App Development
                      </a>
                    </li>
                    <li>
                      <a href="/seo">
                        <span className="color-layer" />
                        SEO Optimization
                      </a>
                    </li>
                    <li>
                      <a href="/web-development">
                        <span className="color-layer" />
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a href="/advertising">
                        <span className="color-layer" />
                        Advertising
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Brochures Widget */}
                <div className="broucher-widget">
                  <div
                    className="widget-content"
                    style={{
                      backgroundImage: `url(${bgbrochures})`,
                    }}
                  >
                    <h3>Our Brochures</h3>
                    <div className="icon flaticon-pdf-1" />
                    <div className="text">
                      Business is a marketing discipline focused on growing
                      visibility in organic (non-paid) technic required.
                    </div>
                    <a href={brochures} download className="download">
                      Download Our Brochure
                    </a>
                  </div>
                </div>
                {/* Help Widget */}
                <div className="help-widget">
                  <div className="widget-content">
                    <h4>Need Help ?</h4>
                    <div className="text">
                      Please feel free to contact us. We will get back to you
                      with 1-2 business days. Or just call us now
                    </div>
                    <ul className="help-list">
                      <li>
                        <a href="tel:0032493986537">
                          <span className="icon fas fa-phone-alt" />
                          (+32) 493 98 65 37
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@appideas.tech">
                          <span className="icon fa fa-envelope" />
                          info@appideas.tech
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
