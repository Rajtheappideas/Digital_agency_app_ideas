import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import bgImg from "../../assets2/assets/images/banner/banner06.jpg";
import bgImgTicket from "../../assets2/assets/images/ticket/ticket-bg01.jpg";
import bgImgStatistics from "../../assets2/assets/images/statistics/statistics-bg01.jpg";
import "../../assets2/assets/css/bootstrap.min.css";
import "../../assets2/assets/css/all.min.css";
import "../../assets2/assets/css/animate.css";
import "../../assets2/assets/css/magnific-popup.css";
import "../../assets2/assets/css/flaticon.css";
import "../../assets2/assets/css/odometer.css";
import "../../assets2/assets/css/nice-select.css";
import "../../assets2/assets/css/main.css";
import EventsSpeakerSlider from "./components/EventsSpeakerSlider";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const EventsDetails = () => {
  const [faqId, setFaqId] = useState(0);
  const [activeSponser, setActiveSponser] = useState("Platinum Sponsors");

  return (
    <>
      <Helmet title="Event-Details" />
      {/* banner */}
      <section
        className="event-banner-section bg_img"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="container">
          <div className="event-banner">
            <a
              href="https://www.youtube.com/embed/GT6-H4BRyqQ"
              className="video-popup"
            >
              <span />
              <i className="flaticon-play-button" />
            </a>
          </div>
        </div>
      </section>
      {/* event book search */}
      <section className="event-book-search padding-top pt-lg-0">
        <div className="container">
          <div
            className="event-search bg_img"
            style={{
              backgroundImage: `url(${bgImgTicket})`,
            }}
          >
            <div className="event-search-top">
              <div className="left">
                <h3 className="title">Digital Marketing Conference -2020</h3>
              </div>
              <div className="right">
                <ul className="countdown">
                  <li>
                    <h2>
                      <span className="days">10905</span>
                    </h2>
                    <p className="days_text">Days</p>
                  </li>
                  <li>
                    <h2>
                      <span className="hours">15</span>
                    </h2>
                    <p className="hours_text">Hours</p>
                  </li>
                  <li>
                    <h2>
                      <span className="minutes">02</span>
                    </h2>
                    <p className="minu_text">min</p>
                  </li>
                  <li>
                    <h2>
                      <span className="seconds">56</span>
                    </h2>
                    <p className="seco_text">sec</p>
                  </li>
                </ul>
                <a href="/events-ticket" className="custom-button">
                  book tickets
                </a>
              </div>
            </div>
            <div className="event-search-bottom">
              <div className="contact-side">
                <div className="item">
                  <div className="item-thumb">
                    <img
                      src={require("../../assets2/assets/images/event/icon/event-icon01.png")}
                      alt="event"
                    />
                  </div>
                  <div className="item-content">
                    <span className="up">3 Days (Friday-Sunday)</span>
                    <span>70+ Workshops</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item-thumb">
                    <img
                      src={require("../../assets2/assets/images/event/icon/event-icon02.png")}
                      alt="event"
                    />
                  </div>
                  <div className="item-content">
                    <span className="up">17 South Sherman Street</span>
                    <span>Astoria, NY 11106</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item-thumb">
                    <img
                      src={require("../../assets2/assets/images/event/icon/event-icon03.png")}
                      alt="event"
                    />
                  </div>
                  <div className="item-content">
                    <span className="up">Drop us a line:</span>
                    <a href="MailTo:hello@Boleto .com">hello@Boleto .com</a>
                  </div>
                </div>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#0">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#0" className="">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a href="#0" className="">
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
          </div>
        </div>
      </section>
      {/* event about */}
      <section className="event-about padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-between flex-wrap-reverse">
            <div className="col-lg-7 col-xl-6">
              <div className="event-about-content">
                <div className="section-header-3 left-style m-0">
                  <span className="cate">are you ready to attend?</span>
                  <h2 className="title">
                    Digital Marketing Conference - <span>2020</span>
                  </h2>
                  <p>
                    Morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae,
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas ultricies eget, tempor sit amet, ante. Donec eu
                    libero sit amet quam egestas semper.Aenean ultricies mi
                    vitae est. Mauris Eonec eu ribero sit amet quam egestas
                    semper. Aenean are ultricies mi senectus et netus et
                    malesuada fames ac turpis egestas.
                  </p>
                  <a href="/events-ticket" className="custom-button">
                    book tickets
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-7">
              <div className="event-about-thumb">
                <img
                  src={require("../../assets2/assets/images/event/event-about.jpg")}
                  alt="event"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* event gallery */}
      <div className="speaker-gallery">
        <div className="row m-0">
          <div className="col-md-6 p-0">
            <div className="row m-0">
              <div className="col-sm-6 p-0">
                <div className="gallery-item two">
                  <div className="gallery-thumb">
                    <a
                      href={require("../../assets2/assets/images/gallery/gallery01.jpg")}
                      className="img-pop"
                    >
                      <i className="flaticon-loupe" />
                    </a>
                    <img
                      src={require("../../assets2/assets/images/gallery/gallery01.jpg")}
                      alt="gallery"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-0">
                <div className="gallery-item two">
                  <div className="gallery-thumb">
                    <a
                      href={require("../../assets2/assets/images/gallery/gallery02.jpg")}
                      className="img-pop"
                    >
                      <i className="flaticon-loupe" />
                    </a>
                    <img
                      src={require("../../assets2/assets/images/gallery/gallery02.jpg")}
                      alt="gallery"
                    />
                  </div>
                </div>
                <div className="gallery-item two">
                  <div className="gallery-thumb">
                    <a
                      href={require("../../assets2/assets/images/gallery/gallery03.jpg")}
                      className="img-pop"
                    >
                      <i className="flaticon-loupe" />
                    </a>
                    <img
                      src={require("../../assets2/assets/images/gallery/gallery03.jpg")}
                      alt="gallery"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="gallery-item">
              <div className="gallery-thumb">
                <a
                  href={require("../../assets2/assets/images/gallery/gallery04.jpg")}
                  className="img-pop"
                >
                  <i className="flaticon-loupe" />
                </a>
                <img
                  src={require("../../assets2/assets/images/gallery/gallery04.jpg")}
                  alt="gallery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* event speaker */}
      <EventsSpeakerSlider />
      {/* statictics section */}
      <section
        className="statistics-section padding-top padding-bottom bg_img pb-lg-0"
        style={{
          backgroundImage: `url(${bgImgStatistics})`,
        }}
      >
        <div className="container">
          <div className="section-header-3">
            <span className="cate">what we have done</span>
            <h2 className="title">our recent STATISTICS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida
            </p>
          </div>
          <div className="statistics-wrapper">
            <div className="row mb--20">
              <div className="col-md-4">
                <div className="stat-item">
                  <div className="stat-thumb">
                    <img
                      src={require("../../assets2/assets/images/statistics/stat01.png")}
                      alt="statistics"
                    />
                  </div>
                  <div className="stat-content">
                    <h3
                      className="counter-item odometer odometer-auto-theme"
                      data-odometer-final={450}
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">4</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">5</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">0</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </h3>
                    <span className="info">Tickets Booked</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stat-item">
                  <div className="stat-thumb">
                    <img
                      src={require("../../assets2/assets/images/statistics/stat02.png")}
                      alt="statistics"
                    />
                  </div>
                  <div className="stat-content">
                    <h3
                      className="counter-item odometer odometer-auto-theme"
                      data-odometer-final={500}
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">5</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">0</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">0</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </h3>
                    <span className="info">Usefull Sessions</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stat-item">
                  <div className="stat-thumb">
                    <img
                      src={require("../../assets2/assets/images/statistics/stat03.png")}
                      alt="statistics"
                    />
                  </div>
                  <div className="stat-content">
                    <h3
                      className="counter-item odometer odometer-auto-theme"
                      data-odometer-final={28}
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">2</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">8</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </h3>
                    <span className="info">Talented Speakers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq section */}
      <section className="faq-section padding-top">
        <div className="container">
          <div className="section-header-3">
            <span className="cate">HOW CAN WE HELP?</span>
            <h2 className="title">Frequently Asked Questions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida
            </p>
          </div>
          <div className="faq-area padding-bottom">
            <div className="faq-wrapper">
              <div
                className={`faq-item ${faqId === 1 && "active open"}`}
                onClick={() => setFaqId(faqId === 0 ? 1 : 0)}
              >
                {" "}
                <div className="faq-title">
                  <h6 className="title">
                    Can I Upgrade my Tickets after Placing an Order?
                  </h6>
                  <span className="right-icon" />
                </div>
                <div className="faq-content">
                  <p>
                    Being that Tickto does not own any of the tickets sold on
                    our site, we do not have the ability to exchange or replace
                    tickets with other inventory.{" "}
                  </p>
                  <p>
                    If you would like to "upgrade" or change the location of
                    your seats, you can relist your current tickets for sale
                    here and purchase other tickets of your choice.{" "}
                  </p>
                </div>
              </div>
              <div
                className={`faq-item ${faqId === 2 && "active open"}`}
                onClick={() => setFaqId(faqId === 0 ? 2 : 0)}
              >
                <div className="faq-title">
                  <h6 className="title">
                    Why did the delivery method of my tickets change?
                  </h6>
                  <span className="right-icon" />
                </div>
                <div className="faq-content">
                  <p>
                    Being that Tickto does not own any of the tickets sold on
                    our site, we do not have the ability to exchange or replace
                    tickets with other inventory.{" "}
                  </p>
                  <p>
                    If you would like to "upgrade" or change the location of
                    your seats, you can relist your current tickets for sale
                    here and purchase other tickets of your choice.{" "}
                  </p>
                </div>
              </div>
              <div
                className={`faq-item ${faqId === 3 && "active open"}`}
                onClick={() => setFaqId(faqId === 0 ? 3 : 0)}
              >
                {" "}
                <div className="faq-title">
                  <h6 className="title">
                    Why is there a different name printed on the tickets and
                    will this give me problems at my event?
                  </h6>
                  <span className="right-icon" />
                </div>
                <div className="faq-content">
                  <p>
                    Being that Tickto does not own any of the tickets sold on
                    our site, we do not have the ability to exchange or replace
                    tickets with other inventory.{" "}
                  </p>
                  <p>
                    If you would like to "upgrade" or change the location of
                    your seats, you can relist your current tickets for sale
                    here and purchase other tickets of your choice.{" "}
                  </p>
                </div>
              </div>
              <div
                className={`faq-item ${faqId === 4 && "active open"}`}
                onClick={() => setFaqId(faqId === 0 ? 4 : 0)}
              >
                {" "}
                <div className="faq-title">
                  <h6 className="title">
                    My tickets are not consecutive seats, are they still
                    guaranteed together?
                  </h6>
                  <span className="right-icon" />
                </div>
                <div className="faq-content">
                  <p>
                    Being that Tickto does not own any of the tickets sold on
                    our site, we do not have the ability to exchange or replace
                    tickets with other inventory.{" "}
                  </p>
                  <p>
                    If you would like to "upgrade" or change the location of
                    your seats, you can relist your current tickets for sale
                    here and purchase other tickets of your choice.{" "}
                  </p>
                </div>
              </div>
              <div
                className={`faq-item ${faqId === 5 && "active open"}`}
                onClick={() => setFaqId(faqId === 0 ? 5 : 0)}
              >
                {" "}
                <div className="faq-title">
                  <h6 className="title">
                    Why is there a different name printed on the tickets and
                    will this give me problems at my event?
                  </h6>
                  <span className="right-icon" />
                </div>
                <div className="faq-content">
                  <p>
                    Being that Tickto does not own any of the tickets sold on
                    our site, we do not have the ability to exchange or replace
                    tickets with other inventory.{" "}
                  </p>
                  <p>
                    If you would like to "upgrade" or change the location of
                    your seats, you can relist your current tickets for sale
                    here and purchase other tickets of your choice.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* event sponsers */}
      <section className="event-details padding-bottom padding-top">
        <div className="container">
          <div className="section-header-3">
            <span className="cate">EVENT SPONSORS</span>
            <h2 className="title">Partners &amp; Sponsors</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida
            </p>
          </div>
          <div className="tabTwo sponsor-tab">
            <ul className="tab-menu">
              <li
                className={`${
                  activeSponser === "Platinum Sponsors" && "active"
                } `}
                onClick={() => setActiveSponser("Platinum Sponsors")}
              >
                Platinum Sponsors
              </li>
              <li
                className={`${activeSponser === "gold Sponsors" && "active"} `}
                onClick={() => setActiveSponser("gold Sponsors")}
              >
                gold Sponsors
              </li>
              <li
                className={`${
                  activeSponser === "silver Sponsors" && "active"
                } `}
                onClick={() => setActiveSponser("silver Sponsors")}
              >
                silver Sponsors
              </li>
            </ul>
            <div className="tab-area">
              <div
                className={`tab-item ${
                  activeSponser === "Platinum Sponsors" && "active"
                } `}
              >
                <div className="owl-theme owl-carousel sponsor-slider owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <Swiper
                      modules={[Navigation]}
                      spaceBetween={20}
                      slidesPerView={5}
                      autoplay
                      loop={true}
                    >
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/1.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/2.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/3.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/4.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/5.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item active"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/1.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item active"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/2.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item active"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/3.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item active"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/4.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item active"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/5.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/1.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/2.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/3.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/4.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/5.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div
                className={`tab-item ${
                  activeSponser === "gold Sponsors" && "active"
                } `}
              >
                <div className="owl-theme owl-carousel sponsor-slider owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <Swiper
                      modules={[Navigation]}
                      spaceBetween={20}
                      slidesPerView={5}
                      autoplay
                      loop={true}
                    >
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/1.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/2.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/3.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/4.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/5.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item active"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/1.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item active"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/2.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item active"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/3.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item active"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/4.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item active"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/5.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/1.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/2.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/3.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/4.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/5.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div
                className={`tab-item ${
                  activeSponser === "silver Sponsors" && "active"
                } `}
              >
                <div className="owl-theme owl-carousel sponsor-slider owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <Swiper
                      modules={[Navigation]}
                      spaceBetween={20}
                      slidesPerView={5}
                      autoplay
                      loop={true}
                    >
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/1.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/2.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/3.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/4.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/5.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item active"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/1.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item active"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/2.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item active"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/3.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item active"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/4.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item active"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/5.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/1.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/2.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/3.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/4.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="owl-item cloned"
                        style={{ width: 192, marginRight: 30 }}
                      >
                        <div className="sponsor-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sponsor/5.png")}
                              alt="sponsor"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default EventsDetails;
