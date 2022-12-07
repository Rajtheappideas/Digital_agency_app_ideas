import React from "react";
import img from "../../assets/images/background/pattern-10.png";
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testomonial = () => {
  return (
    <>
      {/* Testimonial Section Two */}
      <section className="testimonial-section-two">
        <div
          className="pattern-layer"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="title">Our Testimonials</div>
            <h2>
              What They Say About Our <br />
              Company?
            </h2>
            <div className="text">
              We know how important customer experience is for a busines and
              therefore, <br />
              we trive to make your company excel in this.
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
              <div className="testimonial-block-two">
                <div className="inner-box">
                  <div className="author-image-outer">
                    <div className="author-image">
                      <img
                        src={require("../../assets/images/resource/author-1.jpg")}
                        alt=""
                      />
                    </div>
                    <h6>Margaret Sunsan</h6>
                    <div className="designation">Client</div>
                    <div className="quote-icon fa fa-quote-right" />
                  </div>
                  <div className="text">
                    I had so much fun working with your specialists on my
                    business project we’re producing exceptional SEO for
                    business.
                  </div>
                  <div className="rating">
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-block-two">
                <div className="inner-box">
                  <div className="author-image-outer">
                    <div className="author-image">
                      <img
                        src={require("../../assets/images/resource/author-2.jpg")}
                        alt=""
                      />
                    </div>
                    <h6>Eizabeth Blackwell</h6>
                    <div className="designation">Client</div>
                    <div className="quote-icon fa fa-quote-right" />
                  </div>
                  <div className="text">
                    I highly recommend Appideas digital agency due to their
                    expertise, knowledge, passion, professionalism, and
                    leadership skills in the world of project management.
                  </div>
                  <div className="rating">
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-block-two">
                <div className="inner-box">
                  <div className="author-image-outer">
                    <div className="author-image">
                      <img
                        src={require("../../assets/images/resource/author-3.jpg")}
                        alt=""
                      />
                    </div>
                    <h6>Margaret Sunsan</h6>
                    <div className="designation">Client</div>
                    <div className="quote-icon fa fa-quote-right" />
                  </div>
                  <div className="text">
                    Love it! I couldn’t manage my projects without it.
                  </div>
                  <div className="rating">
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-block-two">
                <div className="inner-box">
                  <div className="author-image-outer">
                    <div className="author-image">
                      <img
                        src={require("../../assets/images/resource/author-4.jpg")}
                        alt=""
                      />
                    </div>
                    <h6>Margot Clems</h6>
                    <div className="designation">Client</div>
                    <div className="quote-icon fa fa-quote-right" />
                  </div>
                  <div className="text">
                    Je vous remercie pour la réussite de mon projet
                  </div>
                  <div className="rating">
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-block-two">
                <div className="inner-box">
                  <div className="author-image-outer">
                    <div className="author-image">
                      <img
                        src={require("../../assets/images/resource/author-5.jpg")}
                        alt=""
                      />
                    </div>
                    <h6>Margaret Sunsan</h6>
                    <div className="designation">Client</div>
                    <div className="quote-icon fa fa-quote-right" />
                  </div>
                  <div className="text">
                    You are producing exceptional SEO for business.
                  </div>
                  <div className="rating">
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-block-two">
                <div className="inner-box">
                  <div className="author-image-outer">
                    <div className="author-image">
                      <img
                        src={require("../../assets/images/resource/author-6.jpg")}
                        alt=""
                      />
                    </div>
                    <h6>Eizabeth Blackwell</h6>
                    <div className="designation">Client</div>
                    <div className="quote-icon fa fa-quote-right" />
                  </div>
                  <div className="text">
                    exceptional packages that include all services Businesses
                    require it.
                  </div>
                  <div className="rating">
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* End Testimonial Section Two */}
    </>
  );
};

export default Testomonial;
