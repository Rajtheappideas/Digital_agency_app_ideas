import React from "react";

const WhyChooseus = () => {
  return (
    <>
      <section className="skill-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Counter Column */}
            <div className="counter-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="title">Why Choose Us</div>
                  <h2>
                    We dedicate for Company <br /> with SEO work
                  </h2>
                </div>
                <div className="text">
                  From keyword research to technical auditing to site migration,
                  our team of technical SEOs are true experts in their field.
                </div>
                {/* Skills */}
                <div className="skills">
                  {/* Skill Item */}
                  <div className="skill-item">
                    <div className="skill-header clearfix">
                      <div className="skill-title">Keyword Research</div>
                      <div className="skill-percentage">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed={2000}
                            data-stop={70}
                          >
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div className="bar progress-line" data-width={70} />
                      </div>
                    </div>
                  </div>
                  {/* Skill Item */}
                  <div className="skill-item">
                    <div className="skill-header clearfix">
                      <div className="skill-title">Technical SEO Audit</div>
                      <div className="skill-percentage">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed={2000}
                            data-stop={80}
                          >
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div className="bar progress-line" data-width={80} />
                      </div>
                    </div>
                  </div>
                  {/* Skill Item */}
                  <div className="skill-item">
                    <div className="skill-header clearfix">
                      <div className="skill-title">Content Optimization</div>
                      <div className="skill-percentage">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed={2000}
                            data-stop={60}
                          >
                            0
                          </span>
                          %
                        </div>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div className="bar progress-line" data-width={60} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image titlt" data-tilt="" data-tilt-max={3}>
                  <img
                    src={require("../../assets/images/resource/skill.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Skill Section */}
      {/* Clients Section */}
      {/* <section className="clients-section style-two">
        <div className="auto-container">
          <div className="sponsors-outer">
            {/*Sponsors Carousel*/}
      {/* <ul className="sponsors-carousel owl-carousel owl-theme">
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img src={require("../../assets/images/clients/1.png")} alt="" />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img src={require("../../assets/images/clients/2.png")} alt="" />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img src={require("../../assets/images/clients/3.png")} alt="" />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img src={require("../../assets/images/clients/4.png")} alt="" />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img src={require("../../assets/images/clients/5.png")} alt="" />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img src={require("../../assets/images/clients/1.png")} alt="" />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img src={require("../../assets/images/clients/2.png")} alt="" />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img src={require("../../assets/images/clients/3.png")} alt="" />
                  </a>
                </figure>
              </li>
            </ul> */}
      {/* </div> */}
      {/* </div> */}
      {/* </section> */}
    </>
  );
};

export default WhyChooseus;
