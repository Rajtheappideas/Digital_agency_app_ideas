import React from "react";
import service1 from "../../assets/images/icons/service-pattern.png";
import service2 from "../../assets/images/icons/service-pattern-2.png";

const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section className="services-section style-two">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Service Block / Style Two */}
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{
                    backgroundImage: `url(${service1})`,
                  }}
                />
                <div
                  className="pattern-layer-two"
                  style={{
                    backgroundImage: `url(${service2})`,
                  }}
                />
                <div className="icon-box">
                  <span className="icon flaticon-shuttle" />
                </div>
                <h5>
                  <a href="services.html">Speed</a>
                </h5>
                <div className="text">
                  With our mastermind tricks a webpage load faster
                </div>
                <a
                  href="services.html"
                  className="arrow-icon flaticon-arrow-pointing-to-right"
                />
              </div>
            </div>
            {/* Service Block / Style Two */}
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="150ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{
                    backgroundImage: `url(${service1})`,
                  }}
                />
                <div
                  className="pattern-layer-two"
                  style={{
                    backgroundImage: `url(${service2})`,
                  }}
                />
                <div className="icon-box">
                  <span className="icon flaticon-globe" />
                </div>
                <h5>
                  <a href="/services">Optimization</a>
                </h5>
                <div className="text">
                  We take care about your website Optimization
                </div>
                <a
                  href="/services"
                  className="arrow-icon flaticon-arrow-pointing-to-right"
                />
              </div>
            </div>
            {/* Service Block / Style Two */}
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInRight"
                data-wow-delay="150ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{
                    backgroundImage: `url(${service1})`,
                  }}
                />
                <div
                  className="pattern-layer-two"
                  style={{
                    backgroundImage: `url(${service2})`,
                  }}
                />
                <div className="icon-box">
                  <span className="icon flaticon-network" />
                </div>
                <h5>
                  <a href="/services">Growth</a>
                </h5>
                <div className="text">
                  We can grow your business and make it international
                </div>
                <a
                  href="/services"
                  className="arrow-icon flaticon-arrow-pointing-to-right"
                />
              </div>
            </div>
            {/* Service Block / Style Two */}
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{
                    backgroundImage: `url(${service1})`,
                  }}
                />
                <div
                  className="pattern-layer-two"
                  style={{
                    backgroundImage: `url(${service2})`,
                  }}
                />
                <div className="icon-box">
                  <span className="icon flaticon-bar-chart" />
                </div>
                <h5>
                  <a href="/services">Important ROI</a>
                </h5>
                <div className="text">
                  We have seen great successes of our clients
                </div>
                <a
                  href="/services"
                  className="arrow-icon flaticon-arrow-pointing-to-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}
    </>
  );
};

export default Services;
