import React from "react";
import img from "../../assets/images/background/pattern-24.png";

const OurBlogs = () => {
  return (
    <>
      {/* News Section Two */}
      <section className="news-section-two style-two">
        <div
          className="pattern-layer-two"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="title">OUR BLOG</div>
            <h2>Our Latest Media</h2>
            <div className="text">
              Our campaigns get your business in front of the right people at
              the
              <br />
              right time to increase organic traffic and boost engagement.
            </div>
          </div>
          <div className="row clearfix">
            {/* News Block Two / Style Two */}
            <div className="news-block-two style-two col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <img
                    src={require("../../assets/images/resource/news-14.jpg")}
                    alt=""
                  />
                  {/* Overlay Box */}
                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <a
                          href="/comming-soon"
                          className="icon flaticon-unlink"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <ul className="post-meta">
                    <li>
                      <a href="/comming-soon">
                        <span className="icon fa fa-user" />
                        Pablo Villalpando
                      </a>
                    </li>
                    <li>
                      <a href="/comming-soon">
                        <span className="icon fa fa-calendar" />
                        November 21, 2021
                      </a>
                    </li>
                  </ul>
                  <h5>
                    <a href="/comming-soon">
                      The key to make your audience feel emotionally connected
                    </a>
                  </h5>
                  {/* Social Boxed */}
                  <div className="social-boxed">
                    <div className="social-inner">
                      <span className="share-now fa fa-share-alt" />
                      <a href="#">
                        <span className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <span className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <span className="fab fa-dribbble-square" />
                      </a>
                      <a href="#">
                        <span className="fab fa-behance" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* News Block Two / Style Two */}
            <div className="news-block-two style-two col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <img
                    src={require("../../assets/images/resource/news-15.jpg")}
                    alt=""
                  />
                  {/* Overlay Box */}
                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <a
                          href="/comming-soon"
                          className="icon flaticon-unlink"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <ul className="post-meta">
                    <li>
                      <a href="/comming-soon">
                        <span className="icon fa fa-user" />
                        Adam Pando
                      </a>
                    </li>
                    <li>
                      <a href="/comming-soon">
                        <span className="icon fa fa-calendar" />
                        November 21, 2021
                      </a>
                    </li>
                  </ul>
                  <h5>
                    <a href="/comming-soon">
                      Attract your potential customers with trending web design
                    </a>
                  </h5>
                  {/* Social Boxed */}
                  <div className="social-boxed">
                    <div className="social-inner">
                      <span className="share-now fa fa-share-alt" />
                      <a href="#">
                        <span className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <span className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <span className="fab fa-dribbble-square" />
                      </a>
                      <a href="#">
                        <span className="fab fa-behance" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* News Block Two / Style Two */}
            <div className="news-block-two style-two col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <img
                    src={require("../../assets/images/resource/news-16.jpg")}
                    alt=""
                  />
                  {/* Overlay Box */}
                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <a
                          href="/comming-soon"
                          className="icon flaticon-unlink"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <ul className="post-meta">
                    <li>
                      <a href="/comming-soon">
                        <span className="icon fa fa-user" />
                        Jason Roy
                      </a>
                    </li>
                    <li>
                      <a href="/comming-soon">
                        <span className="icon fa fa-calendar" />
                        November 21, 2021
                      </a>
                    </li>
                  </ul>
                  <h5>
                    <a href="/comming-soon">
                      Improve direct communication with clients and customers.
                    </a>
                  </h5>
                  {/* Social Boxed */}
                  <div className="social-boxed">
                    <div className="social-inner">
                      <span className="share-now fa fa-share-alt" />
                      <a href="#">
                        <span className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <span className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <span className="fab fa-dribbble-square" />
                      </a>
                      <a href="#">
                        <span className="fab fa-behance" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End News Section Two */}
    </>
  );
};

export default OurBlogs;
