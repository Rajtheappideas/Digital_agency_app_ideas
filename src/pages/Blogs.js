import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs, getBlogsById } from "../redux/ContentSlice";
import "../assets2/assets/css/bootstrap.min.css";
import "../assets2/assets/css/all.min.css";
import "../assets2/assets/css/animate.css";
import "../assets2/assets/css/magnific-popup.css";
import "../assets2/assets/css/flaticon.css";
import "../assets2/assets/css/odometer.css";
import "../assets2/assets/css/nice-select.css";
import "../assets2/assets/css/main.css";
import bgImg from "../assets2/assets/images/banner/banner07.jpg";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Blogs = () => {
  const [slide, setSlide] = useState({ start: true, end: false });

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { blogs, loading } = useSelector((state) => state.content);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getBlogs());
  //   dispatch(getBlogsById());
  // }, []);
  return (
    <>
      <Helmet title="Blogs" />
      {/* banner */}
      <section
        className="main-page-header speaker-banner bg_img"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="container">
          <div className="speaker-banner-content">
            <h2 className="title">Blogs</h2>
            <ul className="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>blog</li>
            </ul>
          </div>
        </div>
      </section>
      {/* blog section */}
      <section className="blog-section padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 mb-50 mb-lg-0">
              <article>
                <div className="post-item">
                  <div className="post-thumb">
                    <a href="/blog-details">
                      <img
                        src={require("../assets2/assets/images/blog/blog01.jpg")}
                        alt="blog"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-header">
                      <h4 className="title">
                        <a href="/blog-details">
                          Increase Event Ticket Sales For Film Production With
                          the Right Advertising Strategies
                        </a>
                      </h4>
                      <div className="meta-post">
                        <a href="#0" className="mr-4">
                          <i className="flaticon-conversation" />
                          20 Comments
                        </a>
                        <a href="#0">
                          <i className="flaticon-view" />
                          466 View
                        </a>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus ac cursus leo. Nullam dolor nunc, hendrerit
                        non velit id, pharetra viverra elit.
                      </p>
                    </div>
                    <div className="entry-content">
                      <div className="left">
                        <span className="date">Dece 15, 2020 BY </span>
                        <div className="authors">
                          <div className="thumb">
                            <a href="#0">
                              <img
                                src={require("../assets2/assets/images/blog/author.jpg")}
                                alt="#0"
                              />
                            </a>
                          </div>
                          <h6 className="title">
                            <a href="#0">Alvin Mcdaniel</a>
                          </h6>
                        </div>
                      </div>
                      <a href="#0" className="buttons">
                        Read More <i className="flaticon-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="post-item">
                  <div className="post-thumb">
                    <div className="owl-carousel owl-theme blog-slider owl-loaded owl-drag">
                      <div className="owl-stage-outer">
                        <Swiper
                          modules={[Navigation]}
                          spaceBetween={0}
                          slidesPerView={1}
                          navigation={{
                            prevEl: prevRef?.current,
                            nextEl: nextRef?.current,
                          }}
                          autoplay
                          onSlideChange={(e) => {
                            setSlide({ end: e.isEnd, start: e.isBeginning });
                          }}
                          onSwiper={(swiper) => {
                            // Delay execution for the refs to be defined
                            setTimeout(() => {
                              // Override prevEl & nextEl now that refs are defined
                              swiper.params.navigation.prevEl = prevRef.current;
                              swiper.params.navigation.nextEl = nextRef.current;

                              // Re-init navigation
                              swiper.navigation.destroy();
                              swiper.navigation.init();
                              swiper.navigation.update();
                            });
                          }}
                        >
                          <SwiperSlide
                            className="owl-item cloned"
                            style={{ width: 750 }}
                          >
                            <img
                              src={require("../assets2/assets/images/blog/blog04.jpg")}
                              alt="blog"
                            />
                          </SwiperSlide>
                          <SwiperSlide
                            className="owl-item cloned"
                            style={{ width: 750 }}
                          >
                            <img
                              src={require("../assets2/assets/images/blog/blog01.jpg")}
                              alt="blog"
                            />
                          </SwiperSlide>
                          <SwiperSlide
                            className="owl-item"
                            style={{ width: 750 }}
                          >
                            <img
                              src={require("../assets2/assets/images/blog/blog02.jpg")}
                              alt="blog"
                            />
                          </SwiperSlide>
                          <SwiperSlide
                            className="owl-item active"
                            style={{ width: 750 }}
                          >
                            <img
                              src={require("../assets2/assets/images/blog/blog03.jpg")}
                              alt="blog"
                            />
                          </SwiperSlide>
                          <SwiperSlide
                            className="owl-item"
                            style={{ width: 750 }}
                          >
                            <img
                              src={require("../assets2/assets/images/blog/blog04.jpg")}
                              alt="blog"
                            />
                          </SwiperSlide>
                          <SwiperSlide
                            className="owl-item"
                            style={{ width: 750 }}
                          >
                            <img
                              src={require("../assets2/assets/images/blog/blog01.jpg")}
                              alt="blog"
                            />
                          </SwiperSlide>
                          <SwiperSlide
                            className="owl-item cloned"
                            style={{ width: 750 }}
                          >
                            <img
                              src={require("../assets2/assets/images/blog/blog02.jpg")}
                              alt="blog"
                            />
                          </SwiperSlide>
                          <SwiperSlide
                            className="owl-item cloned"
                            style={{ width: 750 }}
                          >
                            <img
                              src={require("../assets2/assets/images/blog/blog03.jpg")}
                              alt="blog"
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                    <div
                      className="blog-prev"
                      style={{ display: slide.start && "none" }}
                      ref={prevRef}
                    >
                      <i className="flaticon-double-right-arrows-angles" />
                    </div>
                    <div
                      className="blog-next active"
                      style={{ display: slide.end && "none" }}
                      ref={nextRef}
                    >
                      <i className="flaticon-double-right-arrows-angles" />
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-header">
                      <h4 className="title">
                        <a href="/blog-details">
                          Factors To Take Into Consideration When You Want To
                          Buy Tickets Online
                        </a>
                      </h4>
                      <div className="meta-post">
                        <a href="#0" className="mr-4">
                          <i className="flaticon-conversation" />
                          20 Comments
                        </a>
                        <a href="#0">
                          <i className="flaticon-view" />
                          466 View
                        </a>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus ac cursus leo. Nullam dolor nunc, hendrerit
                        non velit id, pharetra viverra elit.
                      </p>
                    </div>
                    <div className="entry-content">
                      <div className="left">
                        <span className="date">Dece 15, 2020 BY </span>
                        <div className="authors">
                          <div className="thumb">
                            <a href="#0">
                              <img
                                src={require("../assets2/assets/images/blog/author.jpg")}
                                alt="#0"
                              />
                            </a>
                          </div>
                          <h6 className="title">
                            <a href="#0">Alvin Mcdaniel</a>
                          </h6>
                        </div>
                      </div>
                      <a href="#0" className="buttons">
                        Read More <i className="flaticon-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="post-item">
                  <div className="post-thumb">
                    <img
                      src={require("../assets2/assets/images/blog/blog03.jpg")}
                      alt="blog"
                    />
                    <a
                      href="https://www.youtube.com/embed/GT6-H4BRyqQ"
                      className="video-button video-popup"
                    >
                      <i className="flaticon-play-button" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-header">
                      <h4 className="title">
                        <a href="/blog-details">
                          Movie Ticket Prices: One Size Fits All? It's Time to
                          Experiment
                        </a>
                      </h4>
                      <div className="meta-post">
                        <a href="#0" className="mr-4">
                          <i className="flaticon-conversation" />
                          20 Comments
                        </a>
                        <a href="#0">
                          <i className="flaticon-view" />
                          466 View
                        </a>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus ac cursus leo. Nullam dolor nunc, hendrerit
                        non velit id, pharetra viverra elit.
                      </p>
                    </div>
                    <div className="entry-content">
                      <div className="left">
                        <span className="date">Dece 15, 2020 BY </span>
                        <div className="authors">
                          <div className="thumb">
                            <a href="#0">
                              <img
                                src={require("../assets2/assets/images/blog/author.jpg")}
                                alt="#0"
                              />
                            </a>
                          </div>
                          <h6 className="title">
                            <a href="#0">Alvin Mcdaniel</a>
                          </h6>
                        </div>
                      </div>
                      <a href="#0" className="buttons">
                        Read More <i className="flaticon-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="post-item">
                  <div className="post-thumb">
                    <a href="/blog-details">
                      <img
                        src={require("../assets2/assets/images/blog/blog04.jpg")}
                        alt="blog"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-header">
                      <h4 className="title">
                        <a href="/blog-details">
                          Movie Ticket Prices: One Size Fits All? It's Time to
                          Experiment
                        </a>
                      </h4>
                      <div className="meta-post">
                        <a href="#0" className="mr-4">
                          <i className="flaticon-conversation" />
                          20 Comments
                        </a>
                        <a href="#0">
                          <i className="flaticon-view" />
                          466 View
                        </a>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus ac cursus leo. Nullam dolor nunc, hendrerit
                        non velit id, pharetra viverra elit.
                      </p>
                    </div>
                    <div className="entry-content">
                      <div className="left">
                        <span className="date">Dece 15, 2020 BY </span>
                        <div className="authors">
                          <div className="thumb">
                            <a href="#0">
                              <img
                                src={require("../assets2/assets/images/blog/author.jpg")}
                                alt="#0"
                              />
                            </a>
                          </div>
                          <h6 className="title">
                            <a href="#0">Alvin Mcdaniel</a>
                          </h6>
                        </div>
                      </div>
                      <a href="#0" className="buttons">
                        Read More <i className="flaticon-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <div className="pagination-area text-center">
                <a href="#0">
                  <i className="fas fa-angle-double-left" />
                  <span>Prev</span>
                </a>
                <a href="#0">1</a>
                <a href="#0">2</a>
                <a href="#0" className="active">
                  3
                </a>
                <a href="#0">4</a>
                <a href="#0">5</a>
                <a href="#0">
                  <span>Next</span>
                  <i className="fas fa-angle-double-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-10 col-md-8">
              <aside>
                <div className="widget widget-search">
                  <h5 className="title">search</h5>
                  <form className="search-form">
                    <input
                      type="text"
                      placeholder="Enter your Search Content"
                      required=""
                    />
                    <button type="submit">
                      <i className="flaticon-loupe" />
                      Search
                    </button>
                  </form>
                </div>
                <div className="widget widget-post">
                  <h5 className="title">latest post</h5>
                  <div className="slider-nav">
                    <span className="flaticon-angle-pointing-to-left widget-prev" />
                    <span className="flaticon-right-arrow-angle widget-next active" />
                  </div>
                  <div className="widget-slider owl-carousel owl-theme owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <Swiper
                        modules={[Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                          prevEl: prevRef?.current,
                          nextEl: nextRef?.current,
                        }}
                        autoplay
                        onSlideChange={(e) => {
                          setSlide({ end: e.isEnd, start: e.isBeginning });
                        }}
                        onSwiper={(swiper) => {
                          // Delay execution for the refs to be defined
                          setTimeout(() => {
                            // Override prevEl & nextEl now that refs are defined
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;

                            // Re-init navigation
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                          });
                        }}
                      >
                        <SwiperSlide style={{ width: 300, marginRight: 30 }}>
                          <div className="item">
                            <div className="thumb">
                              <a href="#0">
                                <img
                                  src={require("../assets2/assets/images/blog/slider01.jpg")}
                                  alt="blog"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h6 className="p-title">
                                <a href="#0">
                                  Three Ways to Book Sporting Event Tickets
                                </a>
                              </h6>
                              <div className="meta-post">
                                <a href="#0" className="mr-4">
                                  <i className="flaticon-loupe" />
                                  20 Comments
                                </a>
                                <a href="#0">
                                  <i className="flaticon-loupe" />
                                  466 View
                                </a>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 300, marginRight: 30 }}>
                          <div className="item">
                            <div className="thumb">
                              <a href="#0">
                                <img
                                  src={require("../assets2/assets/images/blog/slider01.jpg")}
                                  alt="blog"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h6 className="p-title">
                                <a href="#0">
                                  Three Ways to Book Sporting Event Tickets
                                </a>
                              </h6>
                              <div className="meta-post">
                                <a href="#0" className="mr-4">
                                  <i className="flaticon-loupe" />
                                  20 Comments
                                </a>
                                <a href="#0">
                                  <i className="flaticon-loupe" />
                                  466 View
                                </a>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 300, marginRight: 30 }}>
                          <div className="item">
                            <div className="thumb">
                              <a href="#0">
                                <img
                                  src={require("../assets2/assets/images/blog/slider01.jpg")}
                                  alt="blog"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h6 className="p-title">
                                <a href="#0">
                                  Three Ways to Book Sporting Event Tickets
                                </a>
                              </h6>
                              <div className="meta-post">
                                <a href="#0" className="mr-4">
                                  <i className="flaticon-loupe" />
                                  20 Comments
                                </a>
                                <a href="#0">
                                  <i className="flaticon-loupe" />
                                  466 View
                                </a>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 300, marginRight: 30 }}>
                          <div className="item">
                            <div className="thumb">
                              <a href="#0">
                                <img
                                  src={require("../assets2/assets/images/blog/slider01.jpg")}
                                  alt="blog"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h6 className="p-title">
                                <a href="#0">
                                  Three Ways to Book Sporting Event Tickets
                                </a>
                              </h6>
                              <div className="meta-post">
                                <a href="#0" className="mr-4">
                                  <i className="flaticon-loupe" />
                                  20 Comments
                                </a>
                                <a href="#0">
                                  <i className="flaticon-loupe" />
                                  466 View
                                </a>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 300, marginRight: 30 }}>
                          <div className="item">
                            <div className="thumb">
                              <a href="#0">
                                <img
                                  src={require("../assets2/assets/images/blog/slider01.jpg")}
                                  alt="blog"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h6 className="p-title">
                                <a href="#0">
                                  Three Ways to Book Sporting Event Tickets
                                </a>
                              </h6>
                              <div className="meta-post">
                                <a href="#0" className="mr-4">
                                  <i className="flaticon-loupe" />
                                  20 Comments
                                </a>
                                <a href="#0">
                                  <i className="flaticon-loupe" />
                                  466 View
                                </a>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 300, marginRight: 30 }}>
                          <div className="item">
                            <div className="thumb">
                              <a href="#0">
                                <img
                                  src={require("../assets2/assets/images/blog/slider01.jpg")}
                                  alt="blog"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h6 className="p-title">
                                <a href="#0">
                                  Three Ways to Book Sporting Event Tickets
                                </a>
                              </h6>
                              <div className="meta-post">
                                <a href="#0" className="mr-4">
                                  <i className="flaticon-loupe" />
                                  20 Comments
                                </a>
                                <a href="#0">
                                  <i className="flaticon-loupe" />
                                  466 View
                                </a>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
                <div className="widget widget-follow">
                  <h5 className="title">Follow Us</h5>
                  <ul className="social-icons">
                    <li>
                      <a href="#0" className="">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-google" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-categories">
                  <h5 className="title">categories</h5>
                  <ul>
                    <li>
                      <a href="#0">
                        <span>Showtimes &amp; Tickets</span>
                        <span>50</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <span>Latest Trailers</span>
                        <span>43</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <span>Coming Soon </span>
                        <span>34</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <span>In Theaters</span>
                        <span>63</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <span>Release Calendar</span>
                        <span>11</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <span>Stars</span>
                        <span>30</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <span>Horror Movie </span>
                        <span>55</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-tags">
                  <h5 className="title">featured tags</h5>
                  <ul>
                    <li>
                      <a href="#0">creative</a>
                    </li>
                    <li>
                      <a href="#0">design</a>
                    </li>
                    <li>
                      <a href="#0">skill</a>
                    </li>
                    <li>
                      <a href="#0">template</a>
                    </li>
                    <li>
                      <a href="#0" className="active">
                        landing
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
