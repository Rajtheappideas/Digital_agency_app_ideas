import React from "react";
import img from "../../assets/images/background/pattern-21.png";

const Seo = () => {
  return (
    <>
      {/* SEO Section Two */}
      <section className="seo-section-two">
        <div
          className="image-layer"
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Form Column */}
            <div className="form-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Sec Title */}
                <div className="sec-title">
                  <div className="title">Web SEO</div>
                  <h2>Check Your Website For SEO</h2>
                </div>
                {/* Seo Form Two */}
                <div className="seo-form-two">
                  <form method="post" action="contact.html">
                    <div className="form-group clearfix">
                      <input
                        type="text"
                        name="website"
                        defaultValue=""
                        placeholder="Your Website URL"
                        required=""
                      />
                      <input
                        type="email"
                        name="email"
                        defaultValue=""
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                    <button
                      type="submit"
                      className="theme-btn btn-style-eleven"
                    >
                      <span className="txt">Send Now</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div
                className="inner-column wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                {/* Seo Image */}
                <div className="seo-image titlt" data-tilt="" data-tilt-max={5}>
                  <img src={require("../../assets/images/resource/seo-1.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End SEO Section */}
    </>
  );
};

export default Seo;
