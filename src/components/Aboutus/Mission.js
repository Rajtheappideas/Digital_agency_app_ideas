import React from "react";

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div
                className="image wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <img
                  src={require("../../assets/images/resource/mission.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              {/* Sec Title */}
              <div className="sec-title">
                <div className="title">WHO WE ARE ?</div>
                <h2>
                  Your future projects are
                  <br /> in our safe hands
                </h2>
              </div>
              <div className="bold-text">
                Appideas is the most well-known digital agency firms. We provide
                the best web development, app developement and digital marketing
                services for all types of organizations and industries.
              </div>
              <ul className="mission-list">
                <li>
                  <span className="icon">
                    <img
                      src={require("../../assets/images/icons/mission-1.png")}
                      alt=""
                    />
                  </span>
                  If Google can’t crawl your site, it’s not going to rank – but
                  that doesn’t mean avoiding Javascript.
                </li>
                <li>
                  <span className="icon">
                    <img
                      src={require("../../assets/images/icons/mission-2.png")}
                      alt=""
                    />
                  </span>
                  For businesses which sell products online &amp; and improve
                  their product listings in the search results..
                </li>
                <li>
                  <span className="icon">
                    <img
                      src={require("../../assets/images/icons/mission-3.png")}
                      alt=""
                    />
                  </span>
                  If you’re investing in a new website it’s important to ensure
                  it’s built to succeed in the search results too.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
