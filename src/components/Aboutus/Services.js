import React from "react";
import img8 from "../../assets/images/icons/icon-8.png";
import img9 from "../../assets/images/icons/icon-9.png";
import img10 from "../../assets/images/icons/icon-10.png";

const Services = () => {
  return (
    <>
      {/* Services Section Three */}
      <section className="services-section-three style-two">
        <div
          className="pattern-layer-one"
          style={{ backgroundImage: `url(${img8})` }}
        />
        <div
          className="pattern-layer-two"
          style={{ backgroundImage: `url(${img9})` }}
        />
        <div
          className="pattern-layer-three"
          style={{ backgroundImage: `url(${img10})` }}
        />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Blocks Column */}
            <div className="blocks-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="row clearfix">
                  {/* Service Block Three */}
                  <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInUp"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="icon-box">
                        <span className="icon flaticon-badge" />
                      </div>
                      <h5>
                        <a href="/content-marketing">Best Security</a>
                      </h5>
                      <div className="text">
                        We have seen great successes with everyone companies.
                      </div>
                    </div>
                  </div>
                  {/* Service Block Three */}
                  <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInUp"
                      data-wow-delay="150ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="icon-box">
                        <span className="icon flaticon-chat-3" />
                      </div>
                      <h5>
                        <a href="/content-marketing">Risk Manage</a>
                      </h5>
                      <div className="text">
                        Every business and industry requires an approach in our
                        Heand.
                      </div>
                    </div>
                  </div>
                  {/* Service Block Three */}
                  <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInUp"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="icon-box">
                        <span className="icon flaticon-growth" />
                      </div>
                      <h5>
                        <a href="/content-marketing">Growth Revenue</a>
                      </h5>
                      <div className="text">
                        You make sure you know how campaign is performing
                        Business
                      </div>
                    </div>
                  </div>
                  {/* Service Block Three */}
                  <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInUp"
                      data-wow-delay="150ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="icon-box">
                        <span className="icon flaticon-management" />
                      </div>
                      <h5>
                        <a href="/content-marketing">Greate Support</a>
                      </h5>
                      <div className="text">
                        To generate highly focused leads ready to purchases our
                        service
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Sec Title */}
                <div className="sec-title">
                  <div className="title">WHY US CHOOSE NOW</div>
                  <h2>
                    We Provide the Best <br /> Facilites For Business
                  </h2>
                </div>
                <div className="bold-text">
                  From keyword research to technical auditing to site migration,
                  our team of technical SEOs are true experts in their field.
                </div>
                <ul className="list-style-three">
                  <li>
                    We believe in modern technologies since the beginning.
                  </li>
                  <li>
                    Perfect for large sites or agencies managing multiple
                    clients.
                  </li>
                  <li>Our easy-to-use control panel and API let you spend</li>
                </ul>
                <a href="/contact" className="theme-btn btn-style-five">
                  <span className="txt">Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section Three */}
    </>
  );
};

export default Services;
