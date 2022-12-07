import React from "react";
import img1 from "../../assets/images/icons/icon-1.png";
import img2 from "../../assets/images/icons/icon-2.png";
import img3 from "../../assets/images/icons/icon-3.png";
import img4 from "../../assets/images/icons/icon-4.png";
import img6 from "../../assets/images/icons/icon-6.png";
import img7 from "../../assets/images/icons/icon-7.png";
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Services2 = () => {
  return (
    <>
      {/* Services Section Four */}
      <section className="services-section-four style-two">
        <div
          className="pattern-layer-one"
          style={{ backgroundImage: `url(${img3})` }}
        />
        <div
          className="pattern-layer-two"
          style={{ backgroundImage: `url(${img7})` }}
        />
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="title">Our Services</div>
            <h2>You Take Growth For Business</h2>
            <div className="text">
              Our strategy includes consistently evolving, to ensure we’re
              producing
              <br />
              exceptional SEO for business.
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
            style={{ marginTop: "7rem" }}
            breakpoints={{
              250: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <div className="service-block-four style-two">
                <div className="inner-box">
                  <div className="color-layer" />
                  <div
                    className="icon-one"
                    style={{
                      backgroundImage: `url(${img1})`,
                    }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{
                      backgroundImage: `url(${img2})`,
                    }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{
                      backgroundImage: `url(${img3})`,
                    }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{
                      backgroundImage: `url(${img4})`,
                    }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-pie-chart" />
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: `url(${img6})`,
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="/content-marketing">Content Marketing</a>
                  </h5>
                  <div className="text">
                    You can provide the answers that your potential customers
                    are trying to find, so you can become the industry.
                  </div>
                  <a
                    href="/content-marketing"
                    className="arrow-icon flaticon-arrow-pointing-to-right"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-block-four style-two">
                <div className="inner-box">
                  <div className="color-layer" />
                  <div
                    className="icon-one"
                    style={{
                      backgroundImage: `url(${img1})`,
                    }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{
                      backgroundImage: `url(${img2})`,
                    }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{
                      backgroundImage: `url(${img3})`,
                    }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{
                      backgroundImage: `url(${img4})`,
                    }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-line-chart" />
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: `url(${img6})`,
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="/social-marketing">Social Marketing</a>
                  </h5>
                  <div className="text">
                    Create and manage top-performing social campaigns and start
                    developing a dedicated customer fan base.
                  </div>
                  <a
                    href="/social-marketing"
                    className="arrow-icon flaticon-arrow-pointing-to-right"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-block-four style-two">
                <div className="inner-box">
                  <div className="color-layer" />
                  <div
                    className="icon-one"
                    style={{
                      backgroundImage: `url(${img1})`,
                    }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{
                      backgroundImage: `url(${img2})`,
                    }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{
                      backgroundImage: `url(${img3})`,
                    }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{
                      backgroundImage: `url(${img4})`,
                    }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-search-1" />
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: `url(${img6})`,
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="/seo">SEO Optimization</a>
                  </h5>
                  <div className="text">
                    Get more website traffic, more customers, and more online
                    visibility with powerful SEO services.
                  </div>
                  <a
                    href="/seo"
                    className="arrow-icon flaticon-arrow-pointing-to-right"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-block-four style-two">
                <div className="inner-box">
                  <div className="color-layer" />
                  <div
                    className="icon-one"
                    style={{
                      backgroundImage: `url(${img1})`,
                    }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{
                      backgroundImage: `url(${img2})`,
                    }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{
                      backgroundImage: `url(${img3})`,
                    }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{
                      backgroundImage: `url(${img4})`,
                    }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-bar-chart" />
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: `url(${img6})`,
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="/app-development">App Development</a>
                  </h5>
                  <div className="text">
                    Build an mobile app to improve direct communication with
                    clients and customers.
                  </div>
                  <a
                    href="/app-development"
                    className="arrow-icon flaticon-arrow-pointing-to-right"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-block-four style-two">
                <div className="inner-box">
                  <div className="color-layer" />
                  <div
                    className="icon-one"
                    style={{
                      backgroundImage: `url(${img1})`,
                    }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{
                      backgroundImage: `url(${img2})`,
                    }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{
                      backgroundImage: `url(${img3})`,
                    }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{
                      backgroundImage: `url(${img4})`,
                    }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-gear" />
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: `url(${img6})`,
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="/web-development">Web Development</a>
                  </h5>
                  <div className="text">
                    Your website has to impress your visitors within just a few
                    seconds. If it runs slow, if it feels outdated.
                  </div>
                  <a
                    href="/web-development"
                    className="arrow-icon flaticon-arrow-pointing-to-right"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="service-block-four style-two">
                <div className="inner-box">
                  <div className="color-layer" />
                  <div
                    className="icon-one"
                    style={{
                      backgroundImage: `url(${img1})`,
                    }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{
                      backgroundImage: `url(${img2})`,
                    }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{
                      backgroundImage: `url(${img3})`,
                    }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{
                      backgroundImage: `url(${img4})`,
                    }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-search-1" />
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: `url(${img6})`,
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="/advertising">Advertising</a>
                  </h5>
                  <div className="text">
                    Online advertising can be used to increase traffic to your
                    website while also raising brand awareness.
                  </div>
                  <a
                    href="/advertising"
                    className="arrow-icon flaticon-arrow-pointing-to-right"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* End Services Section Four */}
    </>
  );
};

export default Services2;
