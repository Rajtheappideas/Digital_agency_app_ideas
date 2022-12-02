import React from "react";
import { Helmet } from "react-helmet";
import TitleSection from "../components/TitleSection";
import bgbrochures from "../assets/images/background/pattern-19.jpg";
import brochures from "../assets/document/Appideas-Brochure.pdf";

const Projects = () => {
  return (
    <>
      <Helmet title="Projects" />
      <TitleSection title="Projects" />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
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
            {/* Content Side */}
            <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/* Gallery Block */}
                <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src={require("../assets/images/gallery/1.jpg")}
                        alt=""
                      />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/1.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">System Project</div>
                      <h5>
                        <a href="projects-detail.html">Movie Recommendation</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src={require("../assets/images/gallery/2.jpg")}
                        alt=""
                      />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/2.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Machine Learning</div>
                      <h5>
                        <a href="projects-detail.html">Customer Segmentation</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src={require("../assets/images/gallery/3.jpg")}
                        alt=""
                      />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/3.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Web Project</div>
                      <h5>
                        <a href="projects-detail.html">Data Analysis</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src={require("../assets/images/gallery/4.jpg")}
                        alt=""
                      />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/4.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Programming</div>
                      <h5>
                        <a href="projects-detail.html">Detection Project</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src={require("../assets/images/gallery/5.jpg")}
                        alt=""
                      />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/5.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Data Science</div>
                      <h5>
                        <a href="projects-detail.html">Data Scientist</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src={require("../assets/images/gallery/6.jpg")}
                        alt=""
                      />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/6.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Science Projects</div>
                      <h5>
                        <a href="projects-detail.html">Benefits Research</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
