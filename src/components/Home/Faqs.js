import React from "react";

const Faqs = () => {
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
                  {/*Block*/}
                  <li className="accordion block">
                    <div className="acc-btn">
                      How long has Appideas been in business ?
                      <div className="icon flaticon-right-arrow-1"></div>
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Since 2018, we've been providing our experienced
                          digital service.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li className="accordion block">
                    <div className="acc-btn">
                      What services does Appideas offer ?
                      <div className="icon flaticon-right-arrow-1"></div>
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Our services include SEO Optimization, Advertising,
                          Content Marketing, Social Marketing, Web Developement,
                          and App Developement.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li className="accordion block active-block">
                    <div className="acc-btn active">
                      How long does it take to build a new project from scratch
                      ?<div className="icon flaticon-right-arrow-1"></div>
                    </div>
                    <div className="acc-content current">
                      <div className="content">
                        <div className="text">
                          We will first study your business needs and implement
                          a strategy that will start to generate the results you
                          want. Depending on the project we always ask minimum
                          of 3 months for big projects and 1 month for small
                          projects.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li className="accordion block">
                    <div className="acc-btn">
                      What’s Appideas’s new client onboarding process ?
                      <div className="icon flaticon-right-arrow-1"></div>
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Step 1: We arrange a call to scope out your
                          requirements. <br />
                          Step 2: One of our Business developer will arrange a
                          face-to-face meeting, video conference or call
                          (depending on location) to further discuss working
                          together. <br />
                          Step 3: We deliver a proposal, examples of past work,
                          a project plan and deliverables, including costs.
                          <br />
                          Step 4: You decide if you want to go ahead.
                          <br />
                          Step 5: Project kick-off meeting.
                        </div>
                      </div>
                    </div>
                  </li>
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
