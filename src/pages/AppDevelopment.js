import React from "react";
import TitleSection from "../components/TitleSection";
import { Helmet } from "react-helmet";
import bgbrochures from "../assets/images/background/pattern-19.jpg";
import brochures from "../assets/document/Appideas-Brochure.pdf";
import SidebarLeft from "../components/SidebarLeft";

const AppDevelopment = () => {
  return (
    <>
      <Helmet title="Service | App Development" />
      <TitleSection title="App Development" />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Sidebar Side */}
            <SidebarLeft />
            {/* Content Side */}
            <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
              <div className="service-detail">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src={require("../assets/images/resource/app-developement.png")}
                      alt="app-developement"
                    />
                  </div>
                  <div className="lower-content">
                    <h3>App Developement</h3>
                    <p>
                      App Ideas is known for its expertise in mobile app
                      development. The App Ideas is a well-known web and mobile
                      app development firm. Because of the high demand for a
                      digital solution, many business owners and entrepreneurs
                      are investing heavily in mobile applications to increase
                      profit rates. App Ideas has a team of experts who provide
                      the best native, cross-platform, and hybrid platform
                      solutions at the most competitive prices. Hire our
                      developers and take advantage of our low-cost services.
                    </p>
                    <div className="two-columns">
                      <div className="row clearfix">
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <p>
                            App Ideas is a leading web and mobile app
                            development company. We have extensive experience in
                            providing the best Mobile app services for both
                            Android and iOS devices. We have a team of highly
                            skilled iOS app developers who are capable of
                            providing effective iPhone app development services.
                            We are highly skilled at deploying successful iPhone
                            Mobile app development based on the needs of the
                            client.{" "}
                          </p>
                        </div>
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <div className="image">
                            <img
                              src={require("../assets/images/gifs/13.gif")}
                              alt="app-development"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4>
                      Are you looking for the best iPhone or Android App
                      Development services ?
                    </h4>
                    <p>
                      If that's the case, let's get connected right away. We are
                      delighted to assist you in launching a successful iPhone
                      Mobile app services that will be extremely profitable for
                      your company. We primarily follow the steps of gathering
                      requirements, analyzing the client's requirements, holding
                      a meeting to clear all client doubts, dividing the overall
                      project into milestones, obtaining client approval at each
                      stage, and delivering the project on time.
                    </p>
                  </div>
                  <div className="inner-column pb-5">
                    {/* Sec Title */}
                    <div className="sec-title">
                      <div className="title">Your Quesiton</div>
                      <h2>Choose packages you need for your Business</h2>
                      <div className="text">
                        We provide best service for our customer check the list
                        now.
                      </div>
                    </div>
                    {/* Faq's Form */}
                    <div className="faq-form">
                      <form
                        method="POST"
                        action="https://formspree.io/f/xrgdpjze"
                      >
                        <div className="form-group">
                          <input
                            type="text"
                            name="username"
                            defaultValue=""
                            placeholder="Name"
                            required="true"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            defaultValue=""
                            placeholder="Email"
                            required="true"
                          />
                        </div>
                        <div className="form-group">
                          <select>
                            <option selected="">Select a service :</option>
                            <option value="Web Design & Development">
                              Web Design &amp; Development
                            </option>
                            <option value="App Design & Development">
                              App Design &amp; Development
                            </option>
                            <option value="Digital-Marketing">
                              Digital-Marketing
                            </option>
                          </select>
                        </div>
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Message"
                            data-gramm="false"
                            wt-ignore-input="true"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="theme-btn btn-style-three"
                          >
                            <span className="txt">Send</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDevelopment;
