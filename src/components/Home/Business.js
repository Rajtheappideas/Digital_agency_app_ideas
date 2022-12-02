import React from "react";
import img from "../../assets/images/background/pattern-23.png";

const Business = () => {
  return (
    <>
      {/* Business Section */}
      <section className="business-section">
        <div
          className="pattern-layer"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title light">
            <div className="title">WHY US CHOOSE NOW</div>
            <h2>We Provide the Best Facilites For Business</h2>
            <div className="text">
              From keyword research to technical auditing to site migration, our
              team of technical <br />
              SEOs are true experts in their field.
            </div>
          </div>
          <a href="/aboutus" className="theme-btn btn-style-eight">
            <span className="txt">Lets Start</span>
          </a>
          <div className="inner-container">
            <div className="row clearfix">
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div
                    className="image wow slideInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <img src={require("../../assets/images/resource/business.png")} alt="" />
                  </div>
                  <div
                    className="arrow-image wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <img
                      src={require("../../assets/images/resource/business-arrow.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Business Block */}
                  <div className="business-block">
                    <div className="inner-box">
                      <div className="box-number">01</div>
                      <div className="icon-box">
                        <span className="icon flaticon-safe" />
                      </div>
                      <div className="content">
                        <h4>Best Security</h4>
                        <div className="text">
                          We have seen great successes with everyone companies.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Business Block */}
                  <div className="business-block">
                    <div className="inner-box">
                      <div className="box-number">02</div>
                      <div className="icon-box">
                        <span className="icon flaticon-chat-2" />
                      </div>
                      <div className="content">
                        <h4>Risk Manage</h4>
                        <div className="text">
                          Every business and industry requires an approach in
                          our Heand.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Business Block */}
                  <div className="business-block">
                    <div className="inner-box">
                      <div className="box-number">03</div>
                      <div className="icon-box">
                        <span className="icon flaticon-growth" />
                      </div>
                      <div className="content">
                        <h4>Growth Revenue</h4>
                        <div className="text">
                          You make sure you know how campaign is performing
                          Business
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Business Block */}
                  <div className="business-block">
                    <div className="inner-box">
                      <div className="box-number">04</div>
                      <div className="icon-box">
                        <span className="icon flaticon-management" />
                      </div>
                      <div className="content">
                        <h4>Greate Support</h4>
                        <div className="text">
                          To generate highly focused leads ready to purchases
                          our service
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Business Block */}
                  <div className="business-block">
                    <div className="inner-box">
                      <div className="box-number">05</div>
                      <div className="icon-box">
                        <span className="icon flaticon-united" />
                      </div>
                      <div className="content">
                        <h4>Expert Team Work</h4>
                        <div className="text">
                          Get access to everyone in your organization with a
                          team directory.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Business Section */}
    </>
  );
};

export default Business;
