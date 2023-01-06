import React, { useRef, useState } from "react";
import "../../../assets2/assets/css/bootstrap.min.css";
import "../../../assets2/assets/css/all.min.css";
import "../../../assets2/assets/css/animate.css";
import "../../../assets2/assets/css/magnific-popup.css";
import "../../../assets2/assets/css/flaticon.css";
import "../../../assets2/assets/css/odometer.css";
import "../../../assets2/assets/css/nice-select.css";
import "../../../assets2/assets/css/main.css";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const EventsSpeakerSlider = () => {
  const [slide, setSlide] = useState({ start: true, end: false });

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="speaker-section padding-bottom padding-top">
      <div className="container">
        <div className="section-header-3">
          <span className="cate">listen to the</span>
          <h2 className="title">event speakers</h2>
          <p>
            World is committed to making participation in the event a harassment
            free experience for everyone, regardless of level of experience,
            gender, gender identity and expression
          </p>
        </div>
        <div className="speaker--slider">
          <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={4}
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
            <SwiperSlide style={{ width: "262.5px", marginRight: 30 }}>
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="/events-speaker">
                    <img
                      src={require("../../../assets2/assets/images/speaker/speaker01.jpg")}
                      alt="speaker"
                    />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="/events-speaker">Gerard Bryan</a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="owl-item cloned"
              style={{ width: "262.5px", marginRight: 30 }}
            >
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="/events-speaker">
                    <img
                      src={require("../../../assets2/assets/images/speaker/speaker02.jpg")}
                      alt="speaker"
                    />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="/events-speaker">Raihan Rafuj</a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="owl-item cloned"
              style={{ width: "262.5px", marginRight: 30 }}
            >
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="event-speaker.html">
                    <img
                      src={require("../../../assets2/assets/images/speaker/speaker03.jpg")}
                      alt="speaker"
                    />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="/events-speaker">Bela Bose</a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="owl-item cloned"
              style={{ width: "262.5px", marginRight: 30 }}
            >
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="/events-speaker">
                    <img
                      src={require("../../../assets2/assets/images/speaker/speaker04.jpg")}
                      alt="speaker"
                    />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="/events-speaker">Grass Hopper</a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="owl-item"
              style={{ width: "262.5px", marginRight: 30 }}
            >
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="/events-speaker">
                    <img
                      src={require("../../../assets2/assets/images/speaker/speaker01.jpg")}
                      alt="speaker"
                    />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="/events-speaker">Gerard Bryan</a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="owl-item active"
              style={{ width: "262.5px", marginRight: 30 }}
            >
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="/events-speaker">
                    <img
                      src={require("../../../assets2/assets/images/speaker/speaker02.jpg")}
                      alt="speaker"
                    />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="/events-speaker">Raihan Rafuj</a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="owl-item active"
              style={{ width: "262.5px", marginRight: 30 }}
            >
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="/events-speaker">
                    <img
                      src={require("../../../assets2/assets/images/speaker/speaker03.jpg")}
                      alt="speaker"
                    />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="/events-speaker">Bela Bose</a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="owl-item active"
              style={{ width: "262.5px", marginRight: 30 }}
            >
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="/events-speaker">
                    <img
                      src={require("../../../assets2/assets/images/speaker/speaker04.jpg")}
                      alt="speaker"
                    />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="/events-speaker">Grass Hopper</a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="owl-item cloned active"
              style={{ width: "262.5px", marginRight: 30 }}
            >
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="/events-speaker">
                    <img
                      src={require("../../../assets2/assets/images/speaker/speaker01.jpg")}
                      alt="speaker"
                    />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="/events-speaker">Gerard Bryan</a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="owl-item cloned"
              style={{ width: "262.5px", marginRight: 30 }}
            >
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="/events-speaker">
                    <img
                      src={require("../../../assets2/assets/images/speaker/speaker02.jpg")}
                      alt="speaker"
                    />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="/events-speaker">Raihan Rafuj</a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="owl-item cloned"
              style={{ width: "262.5px", marginRight: 30 }}
            >
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="/events-speaker">
                    <img
                      src={require("../../../assets2/assets/images/speaker/speaker03.jpg")}
                      alt="speaker"
                    />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="/events-speaker">Bela Bose</a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="owl-item cloned"
              style={{ width: "262.5px", marginRight: 30 }}
            >
              <div className="speaker-item">
                <div className="speaker-thumb">
                  <a href="/events-speaker">
                    <img
                      src={require("../../../assets2/assets/images/speaker/speaker04.jpg")}
                      alt="speaker"
                    />
                  </a>
                </div>
                <div className="speaker-content">
                  <h5 className="title">
                    <a href="/events-speaker">Grass Hopper</a>
                  </h5>
                  <span>lead speaker</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div
            className="speaker-prev"
            style={{ display: slide.start && "none" }}
            ref={prevRef}
          >
            <i className="flaticon-double-right-arrows-angles" />
          </div>
          <div
            className="speaker-next"
            style={{ display: slide.end && "none" }}
            ref={nextRef}
          >
            <i className="flaticon-double-right-arrows-angles" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSpeakerSlider;
