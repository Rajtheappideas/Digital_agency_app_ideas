import React from "react";
import img1 from "../../assets/images/background/map-pattern.png";
import img2 from "../../assets/images/resource/cta-bg.png";

const CallToAction = () => {
  return (
    <>
      {/* Call To Action Section */}
      <section
        className="call-to-action-section style-two"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div
          className="circle-layer"
          style={{ backgroundImage: `url(${img2})` }}
        />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Title Column */}
            <div className="title-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <h2>Take Your Site to Next Level At this moment!</h2>
                <div className="text">
                  Make the Right Choice for Your Future. Choose Moto!
                </div>
                <a href="services.html" className="theme-btn btn-style-eight">
                  <span className="txt">Lets Start</span>
                </a>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image titlt" data-tilt="" data-tilt-max={3}>
                  <img
                    src={require("../../assets/images/resource/cta.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Call To Action Section */}
    </>
  );
};

export default CallToAction;
