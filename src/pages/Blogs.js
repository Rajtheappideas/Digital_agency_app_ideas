import React from "react";
import TitleSection from "../components/TitleSection";
import { Helmet } from "react-helmet";
import bgbrochures from "../assets/images/background/pattern-19.jpg";
import brochures from "../assets/document/Appideas-Brochure.pdf";

const Blogs = () => {
  return (
    <>
      <Helmet title="Blogs" />
      <TitleSection title="Blogs" />
      <>
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
                        <a href="services.html">
                          <span className="color-layer" />
                          All Services
                        </a>
                      </li>
                      <li>
                        <a href="content-marketing.html">
                          <span className="color-layer" />
                          Content Marketing
                        </a>
                      </li>
                      <li>
                        <a href="social-marketing.html">
                          <span className="color-layer" />
                          Social Marketing
                        </a>
                      </li>
                      <li>
                        <a href="app-development.html">
                          <span className="color-layer" />
                          App Development
                        </a>
                      </li>
                      <li>
                        <a href="seo.html">
                          <span className="color-layer" />
                          SEO Optimization
                        </a>
                      </li>
                      <li>
                        <a href="web-development.html">
                          <span className="color-layer" />
                          Web Development
                        </a>
                      </li>
                      <li>
                        <a href="advertising.html">
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
                  {/* News Block 1 */}
                  <div className="news-block col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="image">
                        <img
                          src={require("../assets/images/blog/advertising.jpg")}
                          alt="advertising"
                        />
                        {/* Overlay Box */}
                        <div className="overlay-box">
                          <div className="overlay-inner">
                            <div className="content">
                              <a
                                href="/comming-soon"
                                className="icon flaticon-unlink"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-meta">
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-user" />
                              Zoya
                            </a>
                          </li>
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-calendar" />
                              Updated May 31, 2022
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <a href="/comming-soon">
                            14 Types of Advertising14 Types of Advertising
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* News Block 2 */}
                  <div className="news-block col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInUp"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="image">
                        <img
                          src={require("../assets/images/blog/blockchain.jpg")}
                          alt="blockchain"
                        />
                        {/* Overlay Box */}
                        <div className="overlay-box">
                          <div className="overlay-inner">
                            <div className="content">
                              <a
                                href="/comming-soon"
                                className="icon flaticon-unlink"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-meta">
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-user" /> Pablo
                              Villalpando
                            </a>
                          </li>
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-calendar" /> November
                              21, 2021
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <a href="/comming-soon">What is Blockchain ?</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* News Block 3 */}
                  <div className="news-block col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInRight"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="image">
                        <img
                          src={require("../assets/images/blog/business-investment.jpg")}
                          alt="business-investment"
                        />
                        {/* Overlay Box */}
                        <div className="overlay-box">
                          <div className="overlay-inner">
                            <div className="content">
                              <a
                                href="/comming-soon"
                                className="icon flaticon-unlink"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-meta">
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-user" /> Pablo
                              Villalpando
                            </a>
                          </li>
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-calendar" /> November
                              21, 2021
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <a href="/comming-soon">
                            Top 10 reasons why you should invest
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* News Block 4 */}
                  <div className="news-block col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="image">
                        <img
                          src={require("../assets/images/blog/business-startup.jpg")}
                          alt="business-startup"
                        />
                        {/* Overlay Box */}
                        <div className="overlay-box">
                          <div className="overlay-inner">
                            <div className="content">
                              <a
                                href="/comming-soon"
                                className="icon flaticon-unlink"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-meta">
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-user" /> Zoya
                            </a>
                          </li>
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-calendar" />
                              Updated June 21, 2022
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <a href="/comming-soon">
                            Starting a new small business?{" "}
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* News Block 5 */}
                  <div className="news-block col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInUp"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="image">
                        <img
                          src={require("../assets/images/blog/google-analystics.jpg")}
                          alt="google-analystics"
                        />
                        {/* Overlay Box */}
                        <div className="overlay-box">
                          <div className="overlay-inner">
                            <div className="content">
                              <a
                                href="/comming-soon"
                                className="icon flaticon-unlink"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-meta">
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-user" /> Pablo
                              Villalpando
                            </a>
                          </li>
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-calendar" /> November
                              21, 2021
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <a href="/comming-soon">
                            Ingtegrate Google Analytics to your Business
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* News Block 6 */}
                  <div className="news-block col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInRight"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="image">
                        <img
                          src={require("../assets/images/blog/online-shopping.jpg")}
                          alt="online-shopping"
                        />
                        {/* Overlay Box */}
                        <div className="overlay-box">
                          <div className="overlay-inner">
                            <div className="content">
                              <a
                                href="/comming-soon"
                                className="icon flaticon-unlink"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-meta">
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-user" /> Pablo
                              Villalpando
                            </a>
                          </li>
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-calendar" /> November
                              21, 2021
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <a href="/comming-soon">Build an App like Amazon</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* News Block 7 */}
                  <div className="news-block col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInRight"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="image">
                        <img
                          src={require("../assets/images/resource/web.png")}
                          alt="website"
                        />
                        {/* Overlay Box */}
                        <div className="overlay-box">
                          <div className="overlay-inner">
                            <div className="content">
                              <a
                                href="/comming-soon"
                                className="icon flaticon-unlink"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-meta">
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-user" />
                              Zoya
                            </a>
                          </li>
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-calendar" /> November
                              21, 2021
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <a href="/comming-soon">Get your Business online</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* News Block 8 */}
                  <div className="news-block col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInRight"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="image">
                        <img
                          src={require("../assets/images/blog/meta.png")}
                          alt="meta-projects"
                        />
                        {/* Overlay Box */}
                        <div className="overlay-box">
                          <div className="overlay-inner">
                            <div className="content">
                              <a
                                href="/comming-soon"
                                className="icon flaticon-unlink"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-meta">
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-user" /> Zoya
                            </a>
                          </li>
                          <li>
                            <a href="/comming-soon">
                              <span className="icon fa fa-calendar" /> November
                              21, 2021
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <a href="/comming-soon">
                            Why meta project will change the world ?
                          </a>
                        </h5>
                      </div>
                    </div>
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
          </div>
        </div>
      </>
    </>
  );
};

export default Blogs;
