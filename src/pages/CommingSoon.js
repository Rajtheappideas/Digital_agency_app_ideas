import React from "react";
import bg from "../assets/images/background/1.jpg";
import { Helmet } from "react-helmet";

const CommingSoon = () => {
  return (
    <div>
      <Helmet title="Comming Soon" />
      <section
        className="coming-soon"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="content">
          <div className="content-inner">
            <div className="auto-container">
              <div className="logo">
                <a href="/">
                  <img src={require("../assets/images/logo.png")} alt="" />
                </a>
              </div>
              <div className="sec-title">
                <h2>Coming Soon</h2>
              </div>
              <div className="time-counter">
                {/* Time Countdown */}
                <div
                  className="time-countdown clearfix"
                  data-countdown="2021/12/9"
                />
                {/* Clock / Bg Clock */}
                <div className="clock-wrapper">
                  <div className="clock-base">
                    <div className="click-indicator">
                      <div>
                        <span />
                      </div>
                      <div>
                        <span />
                      </div>
                      <div>
                        <span />
                      </div>
                      <div>
                        <span />
                      </div>
                      <div>
                        <span />
                      </div>
                      <div>
                        <span />
                      </div>
                      <div>
                        <span />
                      </div>
                      <div>
                        <span />
                      </div>
                      <div>
                        <span />
                      </div>
                      <div>
                        <span />
                      </div>
                      <div>
                        <span />
                      </div>
                      <div>
                        <span />
                      </div>
                    </div>
                    <div className="clock-hour" />
                    <div className="clock-minute" />
                    <div className="clock-second" />
                    <div className="clock-center" />
                  </div>
                </div>
              </div>
              {/*Emailed Form*/}
              <div className="emailed-form">
                <h3>Our Website is under construction.</h3>
                <div className="text">
                  stay tuned for something amazing! <br />
                  Subscribe to be notified
                </div>
                <div className="btn-box">
                  <a href="/" className="theme-btn btn-style-two">
                    <span className="txt">return to home</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommingSoon;
