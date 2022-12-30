import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFaqs } from "../../redux/ContentSlice";
import Faq from "../../components/Faq";

const Faqs = () => {
  const { loading, faqs } = useSelector((state) => state.content);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFaqs());
  }, []);

  return (
    <>
      {/* Faq's Section */}
      <section className="faq-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Accordian Column */}
            <div className="accordian-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Sec Title */}
                <div className="sec-title">
                  <div className="title">Some Faq’s</div>
                  <h2>Work with a Dedicated SEO Company</h2>
                </div>
                <ul className="accordion-box">
                  {loading ? (
                    <p className="loading">Loading...</p>
                  ) : (
                    faqs
                      .slice(0, 4)
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
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image titlt" data-tilt="" data-tilt-max={3}>
                  <img
                    src={require("../../assets/images/resource/faq.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Faq's Section */}
    </>
  );
};

export default Faqs;
