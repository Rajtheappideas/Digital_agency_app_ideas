import React from "react";
import { Helmet } from "react-helmet";
import bgImg from "../../assets2/assets/images/banner/banner07.jpg";
import "../../assets2/assets/css/bootstrap.min.css";
import "../../assets2/assets/css/all.min.css";
import "../../assets2/assets/css/animate.css";
import "../../assets2/assets/css/magnific-popup.css";
import "../../assets2/assets/css/flaticon.css";
import "../../assets2/assets/css/odometer.css";
import "../../assets2/assets/css/nice-select.css";
import "../../assets2/assets/css/main.css";
import EventsSpeakerSlider from "./components/EventsSpeakerSlider";

const EventsSpeaker = () => {
  return (
    <>
      <Helmet title="Events-Speaker" />

      {/* banner */}
      <section
        className="speaker-banner bg_img"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="container">
          <div className="speaker-banner-content">
            <h2 className="title">Speaker Profile</h2>
            <ul className="breadcrumb">
              <li>
                <a href="/events">Home</a>
              </li>
              <li>
                <a href="/events">event</a>
              </li>
              <li>speaker profile</li>
            </ul>
          </div>
        </div>
      </section>
      {/* speaker details */}
      <section className="speaker-single padding-top pt-lg-0">
        <div className="container">
          <div className="speaker-wrapper bg-six padding-top padding-bottom">
            <div className="speaker-thumb">
              <img
                src={require("../../assets2/assets/images/speaker/speaker05.jpg")}
                alt="speaker"
              />
              <a href="#0">www.website.com</a>
            </div>
            <div className="speaker-content">
              <div className="author">
                <h2 className="title">Kelley Valdez </h2>
                <div className="info">
                  Independent consultant, coach and executive coach
                </div>
              </div>
              <div className="speak-con-wrapper">
                <div className="speak-con-area">
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
                  <ul className="social-icons">
                    <li>
                      <a href="#0">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-behance" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content">
                <h3 className="subtitle">About me</h3>
                <p>
                  A successful marketing plan relies heavily on the
                  pulling-power of advertising copy. Writing result-oriented ad
                  copy is difficult, as it must appeal to, entice, and convince
                  consumers to take action. There is no magic formula to write
                  perfect ad copy; it is based on a number of factors, including
                  ad placement, demographic, even the consumer’s mood when they
                  see your ad.{" "}
                </p>
                <p>
                  So how is any writer supposed to pen a stunning piece of
                  advertising copy — copy that sizzles and sells? The following
                  tips will jumpstart your creative thinking and help you write
                  a better ad.
                </p>
                <p>
                  Consumers are inundated with ads, so it’s vital that your ad
                  catches the eye and immediately grabs interest. You could do
                  this with a headline or slogan (such as VW’s “Drivers Wanted”
                  campaign), color or layout (Target’s new colorful, simple ads
                  are a testimony to this) or illustration (such as the Red Bull
                  characters or Zoloft’s depressed ball and his ladybug friend).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* event speaker */}
      <EventsSpeakerSlider />
    </>
  );
};

export default EventsSpeaker;
