import React from "react";

const Counts = ({ page }) => {
  return (
    <>
      {/* Counter Section */}
      <section
        className={`counter-section ${page === "Home" && "style-two"} pb-lg-5`}
      >
        <div className="auto-container">
          <div className="inner-container">
            {/* Fact Counter */}
            <div className="fact-counter">
              <div className="row clearfix">
                {/* Column */}
                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed={2500}
                          data-stop={230}
                          style={{ color: "#ffffff" }}
                        >
                          230
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
                      <div className="count-outer count-box alternate">
                        <span
                          className="count-text"
                          data-speed={2000}
                          data-stop={95}
                          style={{ color: "#ffffff" }}
                        >
                          95
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
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed={4000}
                          data-stop={820}
                          style={{ color: "#ffffff" }}
                        >
                          820
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
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed={2000}
                          data-stop={25}
                          style={{ color: "#ffffff" }}
                        >
                          25
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
      {/* End Counter Section */}
    </>
  );
};

export default Counts;
