import React from "react";

const Packages = () => {
  return (
    <>
      {/* Start Section Packages */}
      <section className="services-section-five">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="title">Our Packages</div>
            <h2>Create Awesome Service With Our Tools</h2>
            <div className="text">
              Our packages includes all digital assets that your business need,
              to ensure we’re producing <br />
              exceptional SEO for business.
            </div>
          </div>
          <div className="services-carousel owl-carousel owl-theme">
            {/* Service Block Five */}
            <div className="service-block-five">
              <div className="inner-box">
                <div className="side-layer-one" />
                <div className="side-layer-two" />
                <div className="icon-box">
                  <div className="border-layer" />
                  <div className="dott-layer" />
                  <span className="icon">
                    <img src={require("../../assets/images/icons/service-3.png")} alt="" />
                  </span>
                </div>
                <h5>
                  <a href="/package-digital-marketing">Digital Marketing</a>
                </h5>
                <div className="text">
                  Digital Marketing packages are critical for establishing a
                  successful firm. There are several digital marketing
                  strategies
                </div>
                <a href="/package-digital-marketing" className="learn-more">
                  Learn More
                </a>
              </div>
            </div>
            {/* Service Block Five */}
            <div className="service-block-five">
              <div className="inner-box">
                <div className="side-layer-one" />
                <div className="side-layer-two" />
                <div className="icon-box">
                  <div className="border-layer" />
                  <div className="dott-layer" />
                  <span className="icon">
                    <img src={require("../../assets/images/icons/service-5.png")} alt="" />
                  </span>
                </div>
                <h5>
                  <a href="/package-hosting">Web &amp; App Hosting</a>
                </h5>
                <div className="text">
                  Get things moving with a free domain, lifetime SSL, and DDoS
                  protection included with a yearly subscription.
                </div>
                <a href="/package-hosting" className="learn-more">
                  Learn More
                </a>
              </div>
            </div>
            {/* Service Block Five */}
            <div className="service-block-five">
              <div className="inner-box">
                <div className="side-layer-one" />
                <div className="side-layer-two" />
                <div className="icon-box">
                  <div className="border-layer" />
                  <div className="dott-layer" />
                  <span className="icon">
                    <img src={require("../../assets/images/icons/service-2.png")} alt="" />
                  </span>
                </div>
                <h5>
                  <a href="/package-maintenance">
                    Maintenance &amp; Support
                  </a>
                </h5>
                <div className="text">
                  Website maintenance is the practice of monitoring your
                  website’s overall health and performance.
                </div>
                <a href="/package-maintenance" className="learn-more">
                  Learn More
                </a>
              </div>
            </div>
            {/* Service Block Five */}
            <div className="service-block-five">
              <div className="inner-box">
                <div className="side-layer-one" />
                <div className="side-layer-two" />
                <div className="icon-box">
                  <div className="border-layer" />
                  <div className="dott-layer" />
                  <span className="icon">
                    <img
                      src={require("../../assets/images/icons/service-4.png")}
                      alt="video-icon"
                    />
                  </span>
                </div>
                <h5>
                  <a href="/package-video-editing">Video Editing</a>
                </h5>
                <div className="text">
                  is the key to blending images and sounds to make us feel
                  emotionally connected and sometimes truly there in the film.
                </div>
                <a href="/package-video-editing" className="learn-more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Section Packages */}
    </>
  );
};

export default Packages;
