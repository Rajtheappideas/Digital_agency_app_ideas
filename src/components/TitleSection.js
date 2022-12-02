import React from "react";
import img1 from "../assets/images/background/pattern-16.png";
import img2 from "../assets/images/main-slider/pattern-1.png";
import img3 from "../assets/images/background/pattern-17.png";
import img4 from "../assets/images/background/pattern-18.png";
import img5 from "../assets/images/icons/cross-icon.png";

const TitleSection = ({ title }) => {
  return (
    <>
      <section
        className="page-title"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div
          className="pattern-layer-one"
          style={{ backgroundImage: `url(${img2})` }}
        />
        <div
          className="pattern-layer-two"
          style={{ backgroundImage: `url(${img3})` }}
        />
        <div
          className="pattern-layer-three"
          style={{ backgroundImage: `url(${img4})` }}
        />
        <div
          className="pattern-layer-four"
          style={{ backgroundImage: `url(${img5})` }}
        />
        <div className="auto-container">
          <h2>{title}</h2>
          <ul className="page-breadcrumb">
            <li>
              <a href="/">home</a>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </section>
      {/* End Page Title Section */}
    </>
  );
};

export default TitleSection;
