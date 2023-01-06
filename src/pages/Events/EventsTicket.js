import React from "react";
import bgImg from "../../assets2/assets/images/banner/banner07.jpg";
import "../../assets2/assets/css/bootstrap.min.css";
import "../../assets2/assets/css/all.min.css";
import "../../assets2/assets/css/animate.css";
import "../../assets2/assets/css/magnific-popup.css";
import "../../assets2/assets/css/flaticon.css";
import "../../assets2/assets/css/odometer.css";
import "../../assets2/assets/css/nice-select.css";
import "../../assets2/assets/css/main.css";
import { Helmet } from "react-helmet";

const EventsTicket = () => {
  return (
    <>
      <Helmet title="Events-Ticket" />
      {/* banner */}
      <section
        className="details-banner event-details-banner hero-area bg_img seat-plan-banner"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="container">
          <div className="details-banner-wrapper">
            <div className="details-banner-content style-two">
              <h3 className="title">
                <span className="d-block">Digital Marketing</span>
                <span className="d-block">Conference -2020</span>
              </h3>
              <div className="tags">
                <span>17 South Sherman Street Astoria, NY 11106</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* page title */}
      <section className="page-title bg-one">
        <div className="container">
          <div className="page-title-area">
            <div className="item md-order-1">
              <a href="#0" className="custom-button back-button">
                <i className="flaticon-double-right-arrows-angles" />
                back
              </a>
            </div>
            <div className="item date-item">
              <span className="date">MON, SEP 09 2020</span>
            </div>
            <div className="item">
              <h5 className="title">05:00</h5>
              <p>Mins Left</p>
            </div>
          </div>
        </div>
      </section>
      {/* pricing */}
      <div className="event-facility padding-bottom padding-top">
        <div className="container">
          <div className="section-header-3">
            <span className="cate">simple pricing</span>
            <h2 className="title">make an appointment</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida
            </p>
          </div>
          <div className="row justify-content-center mb-30-none">
            <div className="col-md-6 col-lg-4 col-sm-10">
              <div className="ticket--item">
                <div className="ticket-thumb">
                  <img
                    src={require("../../assets2/assets/images/event/ticket/ticket01.png")}
                    alt="event"
                  />
                </div>
                <div className="ticket-content">
                  <span className="ticket-title">Standard Ticket</span>
                  <h2 className="amount">
                    <sup>$</sup>49
                  </h2>
                  <ul>
                    <li>Full access to all lectures and workshops</li>
                    <li className="del">
                      <del>Video presentations</del>
                    </li>
                    <li className="del">
                      <del>Meet all of our event speakers</del>
                    </li>
                  </ul>
                  <a href="/events-checkout" className="custom-button">
                    book tickets
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-10">
              <div className="ticket--item two">
                <div className="hot">
                  <span>hot</span>
                </div>
                <div className="ticket-thumb">
                  <img
                    src={require("../../assets2/assets/images/event/ticket/ticket02.png")}
                    alt="event"
                  />
                </div>
                <div className="ticket-content">
                  <span className="ticket-title">Premium Ticket</span>
                  <h2 className="amount">
                    <sup>$</sup>79
                  </h2>
                  <ul>
                    <li>Full access to all lectures and workshops</li>
                    <li>Video presentations</li>
                    <li className="del">
                      <del>Meet all of our event speakers</del>
                    </li>
                  </ul>
                  <a href="/events-checkout" className="custom-button">
                    book tickets
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-10">
              <div className="ticket--item three">
                <div className="ticket-thumb">
                  <img
                    src={require("../../assets2/assets/images/event/ticket/ticket03.png")}
                    alt="event"
                  />
                </div>
                <div className="ticket-content">
                  <span className="ticket-title">VIP Ticket</span>
                  <h2 className="amount">
                    <sup>$</sup>99
                  </h2>
                  <ul>
                    <li>Full access to all lectures and workshops</li>
                    <li>Video presentations</li>
                    <li>Meet all of our event speakers</li>
                  </ul>
                  <a href="/events-checkout" className="custom-button">
                    book tickets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default EventsTicket;
