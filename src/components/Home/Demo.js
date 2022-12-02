import React from "react";
import img from "../../assets/images/background/pattern-15.png";

const Demo = () => {
  return (
    <>
      {/* Demo Section */}
      <section
        className="demo-section"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="auto-container">
          <div className="row clearfix">
            {/* Counter Column */}
            <div className="counter-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <h2>Watch a Video Demo</h2>
                <div className="text">
                  Retarget past customers with second-chance offers and reach
                  new audiences with geo-targeted campaigns during peak dining
                  times using Forks’ push notifications.
                </div>
                <a
                  href="https://www.youtube.com/watch?v=AmbbgDRYYJc"
                  className="lightbox-image theme-btn btn-style-three"
                >
                  <span className="txt">Play Video Now</span>
                </a>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image titlt" data-tilt="" data-tilt-max={3}>
                  <img src={require("../../assets/images/resource/video-bg.png")} alt="" />
                  <a
                    href="https://www.youtube.com/watch?v=AmbbgDRYYJc"
                    className="lightbox-image video-box"
                  >
                    <span className="fa fa-play">
                      <i className="ripple" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Demo Section */}
    </>
  );
};

export default Demo;
