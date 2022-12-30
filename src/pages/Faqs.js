import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import Faq from "../components/Faq";
import TitleSection from "../components/TitleSection";
import { getFaqs } from "../redux/ContentSlice";

const Faqs = () => {
  const { loading, faqs } = useSelector((state) => state.content);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFaqs());
  }, []);

  return (
    <>
      <Helmet title="Faq's" />
      <TitleSection title="Faq's" />
      <section className="faq-page-section">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="title">Some Faq’s</div>
            <h2>Work with a Dedicated Digital Agency Company</h2>
            <div className="text">
              Our approach is to build amazing assets for ours clients. Our
              quality of work has proven through 820+ projects
            </div>
          </div>
          <div className="row clearfix">
            {/* Column */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <ul className="accordion-box">
                {loading ? (
                  <p className="loading">Loading...</p>
                ) : (
                  faqs
                    .slice(0, faqs.length - 3)
                    .map((faq, index) => (
                      <Faq
                        question={faq.question}
                        answer={faq.answer}
                        key={index}
                      />
                    ))
                )}
              </ul>
            </div>
            {/* Column */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <ul className="accordion-box">
                {loading ? (
                  <p className="loading">Loading...</p>
                ) : (
                  faqs
                    .slice(faqs.length - 4, faqs.length - 1)
                    .map((faq, index) => (
                      <Faq
                        question={faq.question}
                        answer={faq.answer}
                        key={index}
                      />
                    ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Faq Page Section */}
      {/* Faq's Form Section */}
      <section className="faq-form-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Form Column */}
            <div className="form-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Sec Title */}
                <div className="sec-title">
                  <div className="title">Your Quesiton</div>
                  <h2>Tell Us Any Question</h2>
                  <div className="text">
                    We provide best service for our customer check the list now.
                  </div>
                </div>
                {/* Faq's Form */}
                <div className="faq-form">
                  <form method="POST" action="https://formspree.io/f/xrgdpjze">
                    <div className="form-group">
                      <input
                        type="text"
                        name="username"
                        defaultValue=""
                        placeholder="Name"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        defaultValue=""
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <textarea name="message" placeholder="Message" />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="theme-btn btn-style-three"
                      >
                        <span className="txt">Send Question</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image titlt" data-tilt="" data-tilt-max={3}>
                  <img
                    src={require("../assets/images/resource/faq.png")}
                    alt="faq"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
