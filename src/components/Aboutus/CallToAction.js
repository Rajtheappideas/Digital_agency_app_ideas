import React from "react";
import img1 from "../../assets/images/background/map-pattern-1.png";
import img2 from "../../assets/images/background/pattern-22.png";
import img3 from "../../assets/images/background/pattern-9.png";

const CallToAction = () => {
  return (
    <>
      {/* Call To Action Section Two */}
      <section
        className="call-to-action-section-two"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div
          className="pattern-layer-one"
          style={{ backgroundImage: `url(${img2})` }}
        />
        <div
          className="pattern-layer-two"
          style={{ backgroundImage: `url(${img3})` }}
        />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image titlt" data-tilt="" data-tilt-max={3}>
                  <img
                    src={require("../../assets/images/resource/cta-1.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* Title Column */}
            <div className="title-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <h2>Take Your Site to Next Level At this moment!</h2>
                <div className="text">
                  Make the Right Choice for Your Future. Choose Moto!
                </div>
                <a href="/packages" className="theme-btn btn-style-eight">
                  <span className="txt">Lets Start</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Call To Action Section Two */}
    </>
  );
};

export default CallToAction;
