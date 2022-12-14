import React, { useRef, useState } from "react";
import sliderimg from "../../assets/images/main-slider/image-2.jpg";
import img from "../../assets/images/main-slider/dotted-layer-1.png";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Herosection = () => {
  const [index, setIndex] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      {/* Banner Section Four */}
      <section className="banner-section-four">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          loop={true}
          autoplay
          onSlideChange={(e) => {
            setIndex(e.realIndex);
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
            className={`slide ${index == 0 && "active"}`}
            style={{
              backgroundImage: `url(${sliderimg})`,
            }}
          >
            <>
              <div
                className="dotted-layer"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              />
              <div className="auto-container">
                <div className="row clearfix">
                  {/* Content Column */}
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="title">With us</div>
                      <h1>Make your dream ideas come true</h1>
                      <div className="btns-box">
                        <a
                          href="/services"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Lets Start</span>
                        </a>
                        <a
                          href="/contactus"
                          className="theme-btn btn-style-nine"
                        >
                          <span className="txt">Contact Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Image Column */}
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image">
                        <img
                          src={require("../../assets/images/main-slider/slider2.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`slide ${index == 1 && "active"}`}
              style={{
                backgroundImage: `url(${sliderimg})`,
              }}
            >
              <div
                className="dotted-layer"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              />
              <div className="auto-container">
                <div className="row clearfix">
                  {/* Content Column */}
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="title">We have</div>
                      <h1>
                        Everything you need to build your awesome ideas in no
                        time
                      </h1>
                      <div className="btns-box">
                        <a
                          href="/services"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Lets Start</span>
                        </a>
                        <a
                          href="/contactus"
                          className="theme-btn btn-style-nine"
                        >
                          <span className="txt">Contact Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Image Column */}
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image">
                        <img
                          src={require("../../assets/images/main-slider/slider3.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`slide ${index == 2 && "active"}`}
              style={{
                backgroundImage: `url(${sliderimg})`,
              }}
            >
              <div
                className="dotted-layer"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              />
              <div className="auto-container">
                <div className="row clearfix">
                  {/* Content Column */}
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="title">
                        Do you have an idea of project ?
                      </div>
                      <h1>
                        We Help Power Millions Of Businesses in 100+ Nations
                      </h1>
                      <div className="btns-box">
                        <a href="/about" className="theme-btn btn-style-ten">
                          <span className="txt">Lets Start</span>
                        </a>
                        <a
                          href="/contactus"
                          className="theme-btn btn-style-nine"
                        >
                          <span className="txt">Contact Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Image Column */}
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image">
                        <img
                          src={require("../../assets/images/main-slider/slider1.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`slide ${index == 3 && "active"}`}
              style={{
                backgroundImage: `url(${sliderimg})`,
              }}
            >
              <div
                className="dotted-layer"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              />
              <div className="auto-container">
                <div className="row clearfix">
                  {/* Content Column */}
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="title">With us</div>
                      <h1>Make your dream ideas come true</h1>
                      <div className="btns-box">
                        <a
                          href="/services"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Lets Start</span>
                        </a>
                        <a
                          href="/contactus"
                          className="theme-btn btn-style-nine"
                        >
                          <span className="txt">Contact Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Image Column */}
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image">
                        <img
                          src={require("../../assets/images/main-slider/slider2.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`slide ${index == 4 && "active"}`}
              style={{
                backgroundImage: `url(${sliderimg})`,
              }}
            >
              <div
                className="dotted-layer"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              />
              <div className="auto-container">
                <div className="row clearfix">
                  {/* Content Column */}
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="title">We have</div>
                      <h1>
                        Everything you need to build your awesome ideas in no
                        time
                      </h1>
                      <div className="btns-box">
                        <a
                          href="/services"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Lets Start</span>
                        </a>
                        <a
                          href="/contactus"
                          className="theme-btn btn-style-nine"
                        >
                          <span className="txt">Contact Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Image Column */}
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image">
                        <img
                          src={require("../../assets/images/main-slider/slider3.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`slide ${index == 5 && "active"}`}
              style={{
                backgroundImage: `url(${sliderimg})`,
              }}
            >
              <div
                className="dotted-layer"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              />
              <div className="auto-container">
                <div className="row clearfix">
                  {/* Content Column */}
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="title">
                        Do you have an idea of project ?
                      </div>
                      <h1>
                        We Help Power Millions Of Businesses in 100+ Nations
                      </h1>
                      <div className="btns-box">
                        <a href="/about" className="theme-btn btn-style-ten">
                          <span className="txt">Lets Start</span>
                        </a>
                        <a
                          href="/contactus"
                          className="theme-btn btn-style-nine"
                        >
                          <span className="txt">Contact Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Image Column */}
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image">
                        <img
                          src={require("../../assets/images/main-slider/slider1.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`slide ${index == 6 && "active"}`}
              style={{
                backgroundImage: `url(${sliderimg})`,
              }}
            >
              <div
                className="dotted-layer"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              />
              <div className="auto-container">
                <div className="row clearfix">
                  {/* Content Column */}
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="title">With us</div>
                      <h1>Make your dream ideas come true</h1>
                      <div className="btns-box">
                        <a
                          href="/services"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Lets Start</span>
                        </a>
                        <a
                          href="/contactus"
                          className="theme-btn btn-style-nine"
                        >
                          <span className="txt">Contact Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Image Column */}
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image">
                        <img
                          src={require("../../assets/images/main-slider/slider2.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* arrows */}
        <div className="owl-nav">
          <div className="owl-prev">
            <span
              className="flaticon-back prev"
              style={{ cursor: "pointer" }}
              ref={prevRef}
            />
          </div>
          <div className="owl-next">
            <span
              className="flaticon-arrow-pointing-to-right next "
              ref={nextRef}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        {/* Waves Container */}
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
        {/* Waves End */}
      </section>

      {/* End Banner Section */}
    </>
  );
};

export default Herosection;
