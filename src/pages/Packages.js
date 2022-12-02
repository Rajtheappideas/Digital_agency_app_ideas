import React from "react";
import { Helmet } from "react-helmet";
import admin from "../assets/images/resource/admin.png";
import brochures from "../assets/document/Appideas-Brochure.pdf";
import bgbrochures from "../assets/images/background/pattern-19.jpg";
import TitleSection from "../components/TitleSection";

const Packages = () => {
  return (
    <>
      <Helmet title="Packages" />
      <TitleSection title="Packages" />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Side */}
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="our-blogs">
                {/* News Block One */}
                <div className="news-block-three">
                  <div className="inner-box">
                    <div className="image">
                      <a href="/package-digital-marketing">
                        <img
                          src={require("../assets/images/resource/digital.jpg")}
                          alt="digital-marketing"
                        />
                      </a>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="/package-digital-marketing">
                            <span className="icon fa fa-user" /> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="/package-digital-marketing">
                            <span className="icon fa fa-calendar" /> November
                            21, 2021
                          </a>
                        </li>
                      </ul>
                      <h4>
                        <a href="/package-digital-marketing">
                          Package : Digital-Marketing
                        </a>
                      </h4>
                      <div className="text">
                        A digital marketing plan is a strategic document that
                        takes the current situation of a particular organisation
                        to set some midterm goals and to determine the strategy
                        and means to accomplish them. This document also
                        describes the responsibilities, the time frame and
                        control tools for monitoring...
                      </div>
                      <div className="btn-box">
                        <div className="btn-box-inner">
                          <a
                            href="/package-digital-marketing"
                            className="theme-btn btn-style-eleven"
                          >
                            <span className="txt">Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* News Block Two */}
                <div className="news-block-three">
                  <div className="inner-box">
                    <div className="image">
                      <img
                        src={require("../assets/images/resource/hosting.jpg")}
                        alt=""
                      />
                      <a
                        href="https://www.youtube.com/watch?v=r4GdPRbVBOg&t=162s"
                        target="_blank"
                        className="lightbox-image overlay-box"
                      >
                        <span className="icon flaticon-play-button">
                          <i className="ripple" />
                        </span>
                      </a>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="/package-hosting">
                            <span className="icon fa fa-user" />
                            Alina Riaz
                          </a>
                        </li>
                        <li>
                          <a href="/package-hosting">
                            <span className="icon fa fa-calendar" /> November
                            21, 2021
                          </a>
                        </li>
                      </ul>
                      <h4>
                        <a href="/package-hosting">
                          Package : Website &amp; App Hosting
                        </a>
                      </h4>
                      <div className="text">
                        Web &amp; App Hosting is an online service that makes
                        your website’s content accessible on the internet. When
                        you purchase a hosting plan, you are renting space on a
                        physical server to store all the website’s files and
                        data.
                      </div>
                      <div className="btn-box">
                        <div className="btn-box-inner">
                          <a
                            href="/package-hosting"
                            className="theme-btn btn-style-eleven"
                          >
                            <span className="txt">Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* News Block Three */}
                <div className="news-block-three">
                  <div className="inner-box">
                    <div className="image">
                      <img
                        src={require("../assets/images/resource/video-editing.png")}
                        alt="video-editing"
                      />
                      <a
                        href="https://www.youtube.com/watch?v=xscbKrsuXOw"
                        target="_blank"
                        className="lightbox-image overlay-box"
                      >
                        <span className="icon flaticon-play-button">
                          <i className="ripple" />
                        </span>
                      </a>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="/package-video-editing">
                            <span className="icon fa fa-user" />
                            Alina Siddiqui
                          </a>
                        </li>
                        <li>
                          <a href="/package-video-editing">
                            <span className="icon fa fa-calendar" /> November
                            21, 2021
                          </a>
                        </li>
                      </ul>
                      <h4>
                        <a href="/package-video-editing">
                          Package : Video Editing
                        </a>
                      </h4>
                      <div className="text">
                        Video editing is a great way to deliver content of value
                        and increase brand awareness on those platforms. You can
                        put your message right in front of your target audience
                        without ever having to leave the office. Nearly 85% of
                        consumers said a brand's video helped them make a
                        decision to purchase a particular product.
                      </div>
                      <div className="btn-box">
                        <div className="btn-box-inner">
                          <a
                            href="/package-video-editing"
                            className="theme-btn btn-style-eleven"
                          >
                            <span className="txt">Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* News Block Four */}
                <div className="news-block-three">
                  <div className="inner-box">
                    <div className="image">
                      <a href="/package-maintenance">
                        <img
                          src={require("../assets/images/resource/maintenance.jpg")}
                          alt="maintenance.jpg"
                        />
                      </a>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="/package-maintenance">
                            <span className="icon fa fa-user" /> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="/package-maintenance">
                            <span className="icon fa fa-calendar" /> November
                            21, 2021
                          </a>
                        </li>
                      </ul>
                      <h4>
                        <a href="/package-maintenance">
                          Package : Maintenance And Support
                        </a>
                      </h4>
                      <div className="text">
                        What exactly is website maintenance? The practice of
                        monitoring your website's overall health and performance
                        is known as website maintenance. Keeping a website up to
                        date is critical to ensuring it is performing optimally
                        and engaging and retaining site visitors.
                      </div>
                      <div className="btn-box">
                        <div className="btn-box-inner">
                          <a
                            href="/package-maintenance"
                            className="theme-btn btn-style-eleven"
                          >
                            <span className="txt">Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* News Block Five */}
                <div className="news-block-four">
                  <div
                    className="inner-box"
                    style={{
                      backgroundImage: `url(${admin})`,
                    }}
                  >
                    <div className="post-date">
                      19 <span>JUL</span>
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
                        <span className="theme_color">Web Designer</span>
                      </li>
                      <li>Comments: 150</li>
                    </ul>
                    <h3>
                      <a href="/package-video-editing">
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
                        <a href="/tel:0032493986537">
                          <span className="icon fas fa-phone-alt" />
                          (+32) 493 98 65 37
                        </a>
                      </li>
                      <li>
                        <a href="/mailto:info@appideas.tech">
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

export default Packages;
