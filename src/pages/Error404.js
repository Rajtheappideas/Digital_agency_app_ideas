import React from "react";
import TitleSection from "../components/TitleSection";
import { Helmet } from "react-helmet";

const Error404 = () => {
  return (
    <>
      <Helmet title="Page Not Found | 404" />
      <TitleSection title="Not Found" />
      <section className="error-section">
        <div className="auto-container">
          <div className="content">
            <div className="error-image">
              <img
                src={require("../assets/images/resource/error.png")}
                alt=""
              />
            </div>
            <h2>Oops.... Page Not Found</h2>
            <div className="text">
              Sorry, but the page you are looking for does not existing
            </div>
            <a href="/" className="theme-btn btn-style-five">
              <span className="txt">Go to home page</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error404;
