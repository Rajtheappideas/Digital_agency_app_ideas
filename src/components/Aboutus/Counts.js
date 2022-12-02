import React from "react";

const Counts = () => {
  return (
    <>
      {/* Counter Section Two */}
      <section className="counter-section-two">
        <div className="auto-container">
          <div className="inner-container">
            {/* Fact Counter */}
            <div className="fact-counter-two">
              <div className="row clearfix">
                {/* Column */}
                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon flaticon-in-love" />
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed={2500}
                          data-stop={230}
                        >
                          0
                        </span>
                        +
                      </div>
                      <h4 className="counter-title">ACTIVE CLIENTS</h4>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon flaticon-mentor" />
                      <div className="count-outer count-box alternate">
                        <span
                          className="count-text"
                          data-speed={2000}
                          data-stop={95}
                        >
                          0
                        </span>
                        +
                      </div>
                      <h4 className="counter-title">TEAM ADVISORS</h4>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon flaticon-target" />
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed={4000}
                          data-stop={820}
                        >
                          0
                        </span>
                        +
                      </div>
                      <h4 className="counter-title">PROJECTS DONE</h4>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="900ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon flaticon-united" />
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed={2000}
                          data-stop={25}
                        >
                          0
                        </span>
                        +
                      </div>
                      <h4 className="counter-title">GLORIOUS YEARS</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Counter Section Two */}
    </>
  );
};

export default Counts;
