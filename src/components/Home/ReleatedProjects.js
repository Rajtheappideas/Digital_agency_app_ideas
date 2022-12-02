import React from "react";

const ReleatedProjects = () => {
  return (
    <>
      {/* Related Projects Section */}
      <section className="related-projects-section">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="title">Our Partnerships</div>
            <h2>Our Latest Partnerships</h2>
            <a href="/contactus" className="theme-btn btn-style-eleven mt-3">
              <span className="txt">Become our partner</span>
            </a>
          </div>
          <div className="three-item-carousel owl-carousel owl-theme">
            {/* Gallery Block */}
            <div className="gallery-block">
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src={require("../../assets/images/gallery/1.jpg")}
                    alt="github-image"
                  />
                  {/* Overlay Box */}
                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <a
                          href={`../../assets/images/gallery/1.jpg`}
                          data-fancybox="gallery"
                          data-caption=""
                          className="icon flaticon-plus"
                        />
                      </div>
                    </div>
                  </div>
                </figure>
                <div className="lower-content">
                  <div className="title">Programming</div>
                  <h5>
                    <a href="/projects-detail">Github</a>
                  </h5>
                </div>
              </div>
            </div>
            {/* Gallery Block */}
            <div className="gallery-block">
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src={require("../../assets/images/gallery/2.jpg")}
                    alt="Investigo"
                  />
                  {/* Overlay Box */}
                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <a
                          href="/images/gallery/2.jpg"
                          data-fancybox="gallery"
                          data-caption=""
                          className="icon flaticon-plus"
                        />
                      </div>
                    </div>
                  </div>
                </figure>
                <div className="lower-content">
                  <div className="title">Investment Bank</div>
                  <h5>
                    <a href="/projects-detail">Investigo</a>
                  </h5>
                </div>
              </div>
            </div>
            {/* Gallery Block */}
            <div className="gallery-block">
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src={require("../../assets/images/gallery/3.jpg")}
                    alt="Stripe"
                  />
                  {/* Overlay Box */}
                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <a
                          href="/images/gallery/3.jpg"
                          data-fancybox="gallery"
                          data-caption=""
                          className="icon flaticon-plus"
                        />
                      </div>
                    </div>
                  </div>
                </figure>
                <div className="lower-content">
                  <div className="title">Online Payements Gateway</div>
                  <h5>
                    <a href="/projects-detail">Stripe</a>
                  </h5>
                </div>
              </div>
            </div>
            {/* Gallery Block */}
            <div className="gallery-block">
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src={require("../../assets/images/gallery/4.jpg")}
                    alt="Binance"
                  />
                  {/* Overlay Box */}
                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <a
                          href="/images/gallery/4.jpg"
                          data-fancybox="gallery"
                          data-caption=""
                          className="icon flaticon-plus"
                        />
                      </div>
                    </div>
                  </div>
                </figure>
                <div className="lower-content">
                  <div className="title">Crypto Exchange Platform</div>
                  <h5>
                    <a href="/projects-detail">Binance</a>
                  </h5>
                </div>
              </div>
            </div>
            {/* Gallery Block */}
            <div className="gallery-block">
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src={require("../../assets/images/gallery/5.jpg")}
                    alt="Meta"
                  />
                  {/* Overlay Box */}
                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <a
                          href="/images/gallery/5.jpg"
                          data-fancybox="gallery"
                          data-caption=""
                          className="icon flaticon-plus"
                        />
                      </div>
                    </div>
                  </div>
                </figure>
                <div className="lower-content">
                  <div className="title">Virtual World</div>
                  <h5>
                    <a href="/projects-detail">Meta</a>
                  </h5>
                </div>
              </div>
            </div>
            {/* Gallery Block */}
            <div className="gallery-block">
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src={require("../../assets/images/gallery/6.jpg")}
                    alt="Lunc"
                  />
                  {/* Overlay Box */}
                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <a
                          href="/images/gallery/6.jpg"
                          data-fancybox="gallery"
                          data-caption=""
                          className="icon flaticon-plus"
                        />
                      </div>
                    </div>
                  </div>
                </figure>
                <div className="lower-content">
                  <div className="title">Blockchain Project</div>
                  <h5>
                    <a href="/projects-detail">Lunc - Terrra Classic</a>
                  </h5>
                </div>
              </div>
            </div>
            {/* Gallery Block */}
            <div className="gallery-block">
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src={require("../../assets/images/gallery/7.jpg")}
                    alt="Coinbase"
                  />
                  {/* Overlay Box */}
                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <a
                          href="/images/gallery/7.jpg"
                          data-fancybox="gallery"
                          data-caption=""
                          className="icon flaticon-plus"
                        />
                      </div>
                    </div>
                  </div>
                </figure>
                <div className="lower-content">
                  <div className="title">Crypto Exchange</div>
                  <h5>
                    <a href="/projects-detail">Coinbase</a>
                  </h5>
                </div>
              </div>
            </div>
            {/* Gallery Block */}
            <div className="gallery-block">
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src={require("../../assets/images/gallery/8.jpg")}
                    alt="Google"
                  />
                  {/* Overlay Box */}
                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <a
                          href="/images/gallery/8.jpg"
                          data-fancybox="gallery"
                          data-caption=""
                          className="icon flaticon-plus"
                        />
                      </div>
                    </div>
                  </div>
                </figure>
                <div className="lower-content">
                  <div className="title">Api</div>
                  <h5>
                    <a href="/projects-detail">Google</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Related Projects Section */}
    </>
  );
};

export default ReleatedProjects;
