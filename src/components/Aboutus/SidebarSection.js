import React from "react";
import bgbrochures from "../../assets/images/background/pattern-19.jpg";
import brochures from "../../assets/document/Appideas-Brochure.pdf";
import admin from "../../assets/images/resource/admin.png";
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SidebarLeft from "../SidebarLeft";

const SidebarSection = () => {
  return (
    <div className="sidebar-page-container">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Content Side */}
          <div className="content-side col-lg-8 col-md-12 col-sm-12">
            <div className="our-blogs">
              {/* News Block Two */}
              <div className="news-block-three">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src={require("../../assets/images/resource/preview.png")}
                      alt=""
                    />
                    <a
                      href="/https://www.youtube.com/watch?v=Z729Q11a9qQ"
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
                        <a href="/news-detail">
                          <span className="icon fa fa-user" /> Asad Siddiqui
                        </a>
                      </li>
                      <li>
                        <a href="/news-detail">
                          <span className="icon fa fa-calendar" /> May 27, 2022
                        </a>
                      </li>
                    </ul>
                    <h4>
                      <a href="/news-detail">Appideas digital agency</a>
                    </h4>
                    <div className="text">
                      Do you have an idea of project and no tools where to find
                      clients ? Appideas is here for you. You tell us what you
                      want and we build it for you 😁.
                    </div>
                  </div>
                </div>
              </div>
              {/* News Block Two */}
              <div className="news-block-three">
                <div className="inner-box">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}
                  >
                    <SwiperSlide>
                      <div className="image">
                        <a href="/projects">
                          <img
                            src={require("../../assets/images/resource/project-1.png")}
                            alt="project-1"
                          />
                        </a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image">
                        <a href="/projects">
                          <img
                            src={require("../../assets/images/resource/project-2.png")}
                            alt="project-2"
                          />
                        </a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image">
                        <a href="/projects">
                          <img
                            src={require("../../assets/images/resource/project-3.png")}
                            alt="project-3"
                          />
                        </a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image">
                        <a href="/projects">
                          <img
                            src={require("../../assets/images/resource/project-4.png")}
                            alt="project-4"
                          />
                        </a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="image">
                        <a href="/projects">
                          <img
                            src={require("../../assets/images/resource/project-5.png")}
                            alt="project-5"
                          />
                        </a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image">
                        <a href="/projects">
                          <img
                            src={require("../../assets/images/resource/project-6.png")}
                            alt="project-6"
                          />
                        </a>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="lower-content">
                    <ul className="post-meta">
                      <li>
                        <a href="/projects">
                          <span className="icon fa fa-user" />
                          Zahid Chaudhry
                        </a>
                      </li>
                      <li>
                        <a href="/projects">
                          <span className="icon fa fa-calendar" /> May 22, 2022
                        </a>
                      </li>
                    </ul>
                    <h4>
                      <a href="/projects">Our latest projects in progress</a>
                    </h4>
                    <div className="text">
                      We choose the best technologies and tools to build your
                      project.{" "}
                    </div>
                    <div className="btn-box">
                      <div className="btn-box-inner">
                        <a
                          href="/projects"
                          className="theme-btn btn-style-five"
                        >
                          <span className="txt">Learn More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* News Block Four */}
              <div className="news-block-four">
                <div
                  className="inner-box"
                  style={{ backgroundImage: `url(${admin})` }}
                >
                  <div className="post-date">
                    19 <span>JUL</span>
                  </div>
                  <ul className="post-info">
                    <li>
                      <span className="author-image">
                        <img
                          src={require("../../assets/images/resource/author-4.jpg")}
                          alt=""
                        />
                      </span>
                      By: Admin
                    </li>
                    <li>
                      Category:{" "}
                      <span className="theme_color">Web Designer</span>
                    </li>
                  </ul>
                  <h3>
                    <a href="/projects">
                      How to increase your ROI through scientific SEM?
                    </a>
                  </h3>
                </div>
              </div>
              {/* Post Share Options */}
              <div className="styled-pagination text-center">
                <ul className="clearfix">
                  <li className="prev">
                    <a href="/comming-soon">
                      <span className="fa fa-angle-left" />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/comming-soon">01</a>
                  </li>
                  <li className="active">
                    <a href="/comming-soon">02</a>
                  </li>
                  <li>
                    <a href="/comming-soon">03</a>
                  </li>
                  <li className="next">
                    <a href="/comming-soon">
                      <span className="fa fa-angle-right" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Sidebar Side */}
          <SidebarLeft />
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
