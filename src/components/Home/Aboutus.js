import React from "react";
import img from "../../assets/images/icons/about-circle.png";

const Aboutus = () => {
  return (
    <>
      {/* About Section / Style Two */}
      <section className="about-section style-two">
        <div
          className="circle-layer"
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image titlt" data-tilt="" data-tilt-max={1}>
                  <img
                    src={require("../../assets/images/resource/about-1.png")}
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
                  <div className="title">ABOUT US</div>
                  <h2>Grow Business with Appideas</h2>
                </div>
                <div className="bold-text">
                  Over 5 years Appideas helping companies &amp; retailers reach
                  their projects goals.
                </div>
                <div className="text">
                  Over the years, we have worked with Fortune 500s and brand-new
                  startups. We help ambitious businesses like yours generate
                  more profits by building awareness, driving web traffic,
                  connecting with customers, and growing overall sales. Give us
                  a call.
                </div>
                <a href="/aboutus" className="theme-btn btn-style-ten">
                  <span className="txt">Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section / Style Two */}
    </>
  );
};

export default Aboutus;
