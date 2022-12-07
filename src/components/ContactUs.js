import React from "react";

const ContactUs = () => {
  return (
    <section className="faq-form-section">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Form Column */}
          <div className="form-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              {/* Sec Title */}
              <div className="sec-title">
                <div className="title">Your Quesiton</div>
                <h2>Choose packages you need for your Business</h2>
                <div className="text">
                  We provide best service for our customer check the list now.
                </div>
              </div>
              {/* Faq's Form */}
              <div className="faq-form">
                <form method="POST" action="https://formspree.io/f/xrgdpjze">
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
                      <option selected="">Select a package :</option>
                      <option value="Package Maintenance">
                        Package Maintenance
                      </option>
                      <option value="Package Marketing">
                        Package Marketing
                      </option>
                      <option value="Package Hosting">Package Hosting</option>
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
                    <button type="submit" className="theme-btn btn-style-three">
                      <span className="txt">Send</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div
                className="image titlt"
                data-tilt=""
                data-tilt-max={3}
                style={{
                  willChange: "transform",
                  transform: "perspective(300px) rotateX(0deg) rotateY(0deg)",
                }}
              >
                <img
                  src={require("../assets/images/resource/package.png")}
                  alt="package"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
