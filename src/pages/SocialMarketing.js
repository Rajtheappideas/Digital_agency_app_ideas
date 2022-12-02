import React from "react";
import TitleSection from "../components/TitleSection";
import { Helmet } from "react-helmet";
import bgbrochures from "../assets/images/background/pattern-19.jpg";
import brochures from "../assets/document/Appideas-Brochure.pdf";

const SocialMarketing = () => {
  return (
    <>
      <Helmet title="Service | Social Marketing" />
      <TitleSection title="Social Marketing" />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Sidebar Side */}
            <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar sticky-top">
                {/* Services */}
                <div className="sidebar-widget">
                  <ul className="service-list">
                    <li>
                      <a href="/services">
                        <span className="color-layer" />
                        All Services
                      </a>
                    </li>
                    <li>
                      <a href="/content-marketing">
                        <span className="color-layer" />
                        Content Marketing
                      </a>
                    </li>
                    <li>
                      <a href="/social-marketing">
                        <span className="color-layer" />
                        Social Marketing
                      </a>
                    </li>
                    <li>
                      <a href="/app-development">
                        <span className="color-layer" />
                        App Development
                      </a>
                    </li>
                    <li>
                      <a href="/seo">
                        <span className="color-layer" />
                        SEO Optimization
                      </a>
                    </li>
                    <li>
                      <a href="/web-development">
                        <span className="color-layer" />
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a href="/advertising">
                        <span className="color-layer" />
                        Advertising
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Brochures Widget */}
                <div className="broucher-widget">
                  <div
                    className="widget-content"
                    style={{
                      backgroundImage: `url(${bgbrochures})`,
                    }}
                  >
                    <h3>Our Brochures</h3>
                    <div className="icon flaticon-pdf-1" />
                    <div className="text">
                      Business is a marketing discipline focused on growing
                      visibility in organic (non-paid) technic required.
                    </div>
                    <a href={brochures} download className="download">
                      Download Our Brochure
                    </a>
                  </div>
                </div>
                {/* Help Widget */}
                <div className="help-widget">
                  <div className="widget-content">
                    <h4>Need Help ?</h4>
                    <div className="text">
                      Please feel free to contact us. We will get back to you
                      with 1-2 business days. Or just call us now
                    </div>
                    <ul className="help-list">
                      <li>
                        <a href="tel:0032493986537">
                          <span className="icon fas fa-phone-alt" />
                          (+32) 493 98 65 37
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@appideas.tech">
                          <span className="icon fa fa-envelope" />
                          info@appideas.tech
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
            {/* Content Side */}
            <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
              <div className="service-detail">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src={require("../assets/images/resource/social.png")}
                      alt="social-marketing"
                    />
                  </div>
                  <div className="lower-content">
                    <h3>Social-Marketing</h3>
                    <p>
                      Social media marketing and advertising are excellent ways
                      to expand your brand's audience, listen to what they have
                      to say, and strengthen your relationship with them. It can
                      be used in a variety of ways, but the most common ones are
                      to communicate key messages, increase website traffic and
                      sales, raise brand awareness, and build trust.
                    </p>
                    <div className="two-columns">
                      <div className="row clearfix">
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <p>
                            Social media marketing and advertising encompass an
                            ever-expanding range of platforms. Social media
                            sites with large user bases range from social media
                            behemoths like Facebook to newer and disruptive
                            platforms like Pinterest. This allows you to get
                            your service or product in front of people who are
                            likely to benefit from it.
                          </p>
                          <p>
                            We can assist you in using social media to advertise
                            your business as well as day-to-day marketing
                            through your pages and communities.
                          </p>
                        </div>
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <div className="image">
                            <img
                              src={require("../assets/images/gifs/5.gif")}
                              alt="social-marketing"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4>
                      Are you on the lookout for the greatest Social Media
                      services available?
                    </h4>
                    <p>
                      If you answered yes, now is definitely the greatest moment
                      to consider and invest in digitalizing your business with
                      advanced features. We would be delighted to assist you in
                      launching a successful website building service that will
                      be beneficial to your company.
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

export default SocialMarketing;
