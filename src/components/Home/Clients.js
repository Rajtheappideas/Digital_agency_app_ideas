import React from "react";
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
const Clients = () => {
  return (
    <>
      {/* Clients Section */}
      <section className="clients-section">
        <div className="auto-container">
          <div className="sponsors-outer">
            {/*Sponsors Carousel*/}
            <Swiper
              spaceBetween={50}
              slidesPerView={5}
              breakpoints={{
                250: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1199: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img
                        src={require("../../assets/images/clients/client-05.png")}
                        alt=""
                      />
                    </a>
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img
                        src={require("../../assets/images/clients/client-06.png")}
                        alt=""
                      />
                    </a>
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img
                        src={require("../../assets/images/clients/client-07.png")}
                        alt=""
                      />
                    </a>
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img
                        src={require("../../assets/images/clients/client-08.png")}
                        alt=""
                      />
                    </a>
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img
                        src={require("../../assets/images/clients/client-09.png")}
                        alt=""
                      />
                    </a>
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img
                        src={require("../../assets/images/clients/client-10.png")}
                        alt=""
                      />
                    </a>
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img
                        src={require("../../assets/images/clients/client-11.png")}
                        alt=""
                      />
                    </a>
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img
                        src={require("../../assets/images/clients/client-12.png")}
                        alt=""
                      />
                    </a>
                  </figure>
                </li>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* End Clients Section */}
    </>
  );
};

export default Clients;
