import React from "react";

const Steps = () => {
  return (
    <>
      {/* Steps Section */}
      <section className="steps-section">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="title">HOW WE DO IT</div>
            <h2>
              Steps to Build a Successful <br />
              Digital Product
            </h2>
          </div>
          <div className="row clearfix">
            {/* Step Block */}
            <div className="step-block col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="icon-box">
                  <div className="number">01</div>
                </div>
                <h6>Advertising and Marketing</h6>
              </div>
            </div>
            {/* Step Block */}
            <div className="step-block col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="icon-box">
                  <div className="number">02</div>
                </div>
                <h6>
                  Web <br />
                  Development
                </h6>
              </div>
            </div>
            {/* Step Block */}
            <div className="step-block col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="icon-box">
                  <div className="number">03</div>
                </div>
                <h6>
                  Mobile App <br />
                  Development
                </h6>
              </div>
            </div>
            {/* Step Block */}
            <div className="step-block col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="icon-box">
                  <div className="number">04</div>
                </div>
                <h6>Search Engine Optimization</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Steps Section */}
    </>
  );
};

export default Steps;
