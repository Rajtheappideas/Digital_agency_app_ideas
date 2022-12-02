import React from "react";
import TitleSection from "../components/TitleSection";
import { Helmet } from "react-helmet";
import bgbrochures from "../assets/images/background/pattern-19.jpg";
import brochures from "../assets/document/Appideas-Brochure.pdf";

const ContentMarketing = () => {
  return (
    <>
      <Helmet title="Service | Content Marketing" />
      <TitleSection title="Content Marketing" />
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
                      src={require("../assets/images/resource/content.png")}
                      alt="content-marketing"
                    />
                  </div>
                  <div className="lower-content">
                    <h3>Content Marketing</h3>
                    <h4>Why do I need content-marketing ?</h4>
                    <p>
                      With content marketing, you can increase engagement, meet
                      your users' needs, and connect with your audience.
                      Appideas content marketing team has experience in creative
                      writing, SEO, web writing, marketing, video, and public
                      relations, putting us in a unique position to deliver
                      supercharged content strategies.
                    </p>
                    <div className="two-columns">
                      <div className="row clearfix">
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <p>
                            Content ranges from YouTube videos to 'How To'
                            guides, as well as general blog posts,
                            thought-leadership pieces, and website graphics. It
                            is the process of creating unique content for your
                            target audience and then delivering it to them.{" "}
                          </p>
                          <p>
                            Content marketing is critical for establishing the
                            trust and brand awareness required to persuade
                            visitors to take action on your website.the best
                            solutions.
                          </p>
                        </div>
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <div className="image">
                            <img
                              src={require("../assets/images/gifs/10.gif")}
                              alt="web-development"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4>
                      Are you on the lookout for the greatest Content Marketing
                      services available?
                    </h4>
                    <p>
                      If yes, our talented team of writers and content creators
                      has led content marketing campaigns for a variety of
                      business types. We ensure that your audience sees your
                      powerful content at the right time through careful and
                      strategic promotion. The goal is straightforward: to
                      engage your audience and guide them to a desired outcome
                      on your website.
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

export default ContentMarketing;
