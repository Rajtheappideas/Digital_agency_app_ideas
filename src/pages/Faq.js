import React from "react";
import { Helmet } from "react-helmet";
import TitleSection from "../components/TitleSection";

const Faq = () => {
  return (
    <>
      <Helmet title="Faq's" />
      <TitleSection title="Faq's" />
      <>
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
                  {/*Block*/}
                  <li className="accordion block">
                    <div className="acc-btn">
                      How long has Appideas been in business ?
                      <div className="icon flaticon-right-arrow-1" />
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
                      <div className="icon flaticon-right-arrow-1" />
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Our services include SEO Optimization, PPC
                          Advertising, Content Marketing, Social Marketing, Web
                          Developement, and App Developement.{" "}
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li className="accordion block active-block">
                    <div className="acc-btn active">
                      How long does it take to build a new project from scratch
                      ?
                      <div className="icon flaticon-right-arrow-1" />
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
                      Who will be working on my project ?
                      <div className="icon flaticon-right-arrow-1" />
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          You’ll have a dedicated team member to manage your
                          account, who’ll be your main, day-to-day point of
                          contact. Also depending on the project, various other
                          specialists will feed into your account, working on
                          specific areas of the project such as PPC, Social
                          Media, or Content Marketing.{" "}
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Column */}
              <div className="column col-lg-6 col-md-12 col-sm-12">
                <ul className="accordion-box">
                  {/*Block*/}
                  <li className="accordion block">
                    <div className="acc-btn">
                      My business is based in UK, Appideas is based in Belgium.
                      Does this matter ?
                      <div className="icon flaticon-right-arrow-1" />
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          Where your business is located doesn’t matter when it
                          comes to the work that we do. In fact, we work with
                          clients across the whole world.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li className="accordion block">
                    <div className="acc-btn">
                      What’s Appideas’s new client onboarding process ?{" "}
                      <div className="icon flaticon-right-arrow-1" />
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
                          a project plan and deliverables, including costs.{" "}
                          <br />
                          Step 4: You decide if you want to go ahead. <br />
                          Step 5: Project kick-off meeting.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li className="accordion block">
                    <div className="acc-btn">
                      How often will results be reported ?
                      <div className="icon flaticon-right-arrow-1" />
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">
                          We provide bespoke monthly performance dashboards and
                          reports that include all the metrics that are
                          important to you. Your Account Manager will spend time
                          taking you through these reports.{" "}
                        </div>
                      </div>
                    </div>
                  </li>
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
                      We provide best service for our customer check the list
                      now.
                    </div>
                  </div>
                  {/* Faq's Form */}
                  <div className="faq-form">
                    <form
                      method="POST"
                      action="https://formspree.io/f/xrgdpjze"
                    >
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
                        <textarea
                          name="message"
                          placeholder="Message"
                          defaultValue={""}
                        />
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
    </>
  );
};

export default Faq;
