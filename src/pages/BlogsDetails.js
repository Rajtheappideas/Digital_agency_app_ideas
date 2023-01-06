import React, { useEffect, useRef, useState } from "react";
import "../assets2/assets/css/bootstrap.min.css";
import "../assets2/assets/css/all.min.css";
import "../assets2/assets/css/animate.css";
import "../assets2/assets/css/magnific-popup.css";
import "../assets2/assets/css/flaticon.css";
import "../assets2/assets/css/odometer.css";
import "../assets2/assets/css/nice-select.css";
import "../assets2/assets/css/main.css";
import bgImg from "../assets2/assets/images/banner/banner07.jpg";
import { Helmet } from "react-helmet";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const BlogsDetails = () => {
  const [slide, setSlide] = useState({ start: true, end: false });

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <Helmet title="Blog-details" />
      {/* banner */}
      <section
        className="main-page-header speaker-banner bg_img"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="container">
          <div className="speaker-banner-content">
            <h2 className="title">Blog Details</h2>
            <ul className="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>blog</li>
            </ul>
          </div>
        </div>
      </section>
      {/* blog details */}
      <section className="blog-section padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center mb-30-none">
            <div className="col-lg-8 mb-50 mb-lg-0">
              <article>
                <div className="post-item post-details">
                  <div className="post-thumb">
                    <img
                      src={require("../assets2/assets/images/blog/blog01.jpg")}
                      alt="blog"
                    />
                  </div>
                  <div className="post-content">
                    <div className="post-meta text-center">
                      <div className="item">
                        <a href="#0">
                          <i className="flaticon-conversation" />
                          <span>30</span>
                        </a>
                      </div>
                      <div className="item">
                        <a href="#0">
                          <i className="flaticon-share-1" />
                          <span>22</span>
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="entry-content p-0">
                        <div className="left">
                          <span className="date">Dece 15, 2020 BY </span>
                        </div>
                      </div>
                      <div className="post-header">
                        <h4 className="m-title">
                          Cheap Movie Tickets - Bring Your Loved Ones to See New
                          Releases
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor dunt ut labore et dolore
                          magna aliqua.Quis ipsum suspendisse ultrices gravida.
                          Risus do viverra maecenas accumsan lacus vel
                          facilisis.
                        </p>
                        <blockquote>
                          Modi perferendis ipsa, dolorum eaque accusantium!
                          Velitlibero fugit dolores repellendus consequatur
                          nisi, deserunt aperiam a ea ex hic, iusto atque, quas.
                          Aliquam rerum dolores saepe sunt, assumenda voluptas.
                        </blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor dunt ut labore et dolore
                          magna aliqua.Quis ipsum suspendisse ultrices gravida.
                          Risus do viverra maecenas accumsan lacus vel
                          facilisis.
                        </p>
                        <h4 className="title">
                          Bring Your Loved Ones to See New Releases
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor dunt ut labore et dolore
                          magna aliqua.Quis ipsum suspendisse ultrices gravida.
                          Risus do viverra maecenas accumsan lacus vel
                          facilisis.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor dunt ut labore et dolore
                          magna aliqua.Quis ipsum suspendisse ultrices gravida.
                          Risus do viverra maecenas accumsan lacus vel
                          facilisis.
                        </p>
                      </div>
                      <div className="tags-area">
                        <div className="tags">
                          <span>Tags :</span>
                          <div className="tags-item">
                            <a href="#0"> Tickets </a>
                            <a href="#0"> Coming Soon </a>
                            <a href="#0"> Movies </a>
                          </div>
                        </div>
                        <ul className="social-icons">
                          <li>
                            <a href="#0">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#0" className="active">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#0">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#0">
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a href="#0">
                              <i className="fab fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-author">
                  <div className="author-thumb">
                    <a href="#0">
                      <img
                        src={require("../assets2/assets/images/blog/author.jpg")}
                        alt="blog"
                      />
                    </a>
                  </div>
                  <div className="author-content">
                    <h5 className="title">
                      <a href="#0">Lee Burke</a>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor dunt ut labore et dolore magna
                      aliqua.Quis ipsum suspendisse .
                    </p>
                  </div>
                </div>
                <div className="blog-comment">
                  <h5 className="title">comments</h5>
                  <ul className="comment-area">
                    <li>
                      <div className="blog-thumb">
                        <a href="#0">
                          <img
                            src={require("../assets2/assets/images/blog/author.jpg")}
                            alt="blog"
                          />
                        </a>
                      </div>
                      <div className="blog-thumb-info">
                        <span>13 days ago</span>
                        <h6 className="title">
                          <a href="#0">carl morgan</a>
                        </h6>
                      </div>
                      <div className="blog-content">
                        <p>
                          Maecenas at velit eu erat egestas vestibulum id ut
                          tellus. Sed et semper mauris. Quisque eu lorem libero.
                          Donec finibus metus tellus, eget rutrum est mattis
                          non.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="blog-thumb">
                        <a href="#0">
                          <img
                            src={require("../assets2/assets/images/blog/author.jpg")}
                            alt="blog"
                          />
                        </a>
                      </div>
                      <div className="blog-thumb-info">
                        <span>13 days ago</span>
                        <h6 className="title">
                          <a href="#0">john flores</a>
                        </h6>
                      </div>
                      <div className="blog-content">
                        <p>
                          Maecenas at velit eu erat egestas vestibulum id ut
                          tellus. Sed et semper mauris. Quisque eu lorem libero.
                          Donec finibus metus tellus, eget rutrum est mattis
                          non.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="blog-thumb">
                        <a href="#0">
                          <img
                            src={require("../assets2/assets/images/blog/author.jpg")}
                            alt="blog"
                          />
                        </a>
                      </div>
                      <div className="blog-thumb-info">
                        <span>13 days ago</span>
                        <h6 className="title">
                          <a href="#0">carl morgan</a>
                        </h6>
                      </div>
                      <div className="blog-content">
                        <p>
                          Maecenas at velit eu erat egestas vestibulum id ut
                          tellus. Sed et semper mauris. Quisque eu lorem libero.
                          Donec finibus metus tellus, eget rutrum est mattis
                          non.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="leave-comment">
                    <h5 className="title">leave comment</h5>
                    <form className="blog-form">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Enter Your Full Name"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Enter Your Email Address"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          placeholder="Write A Message"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group">
                        <input type="submit" defaultValue="Submit Now" />
                      </div>
                    </form>
                  </div>
                </div>
              </article>
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

export default BlogsDetails;
