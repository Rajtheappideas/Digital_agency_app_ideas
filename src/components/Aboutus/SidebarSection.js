import React from "react";
import bgbrochures from "../../assets/images/background/pattern-19.jpg";
import brochures from '../../assets/document/Appideas-Brochure.pdf'
import admin from '../../assets/images/resource/admin.png'

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
                  <div className="single-item-carousel owl-carousel owl-theme">
                    <div className="image">
                      <a href="/projects">
                        <img
                          src={require("../../assets/images/resource/project-1.png")}
                          alt="project-1"
                        />
                      </a>
                    </div>
                    <div className="image">
                      <a href="/projects">
                        <img
                          src={require("../../assets/images/resource/project-2.png")}
                          alt="project-2"
                        />
                      </a>
                    </div>
                    <div className="image">
                      <a href="/projects">
                        <img
                          src={require("../../assets/images/resource/project-3.png")}
                          alt="project-3"
                        />
                      </a>
                    </div>
                    <div className="image">
                      <a href="/projects">
                        <img
                          src={require("../../assets/images/resource/project-4.png")}
                          alt="project-4"
                        />
                      </a>
                    </div>
                    <div className="image">
                      <a href="/projects">
                        <img
                          src={require("../../assets/images/resource/project-5.png")}
                          alt="project-5"
                        />
                      </a>
                    </div>
                    <div className="image">
                      <a href="/projects">
                        <img
                          src={require("../../assets/images/resource/project-6.png")}
                          alt="project-6"
                        />
                      </a>
                    </div>
                  </div>
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
                  <a
                    href={brochures}
                    download
                    className="download"
                  >
                    Download Our Brochure
                  </a>
                </div>
              </div>
              {/* Help Widget */}
              <div className="help-widget">
                <div className="widget-content">
                  <h4>Need Help ?</h4>
                  <div className="text">
                    Please feel free to contact us. We will get back to you with
                    1-2 business days. Or just call us now
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
  );
};

export default SidebarSection;
