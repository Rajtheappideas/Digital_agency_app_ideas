import React, { useState } from "react";

const Faq = ({ question, answer }) => {
  const [activeFaq, setActiveFaq] = useState(false);
  return (
    <>
      {/* <li className="accordion block">
        <div className="acc-btn">
          What services does Appideas offer ?
          <div className="icon flaticon-right-arrow-1" />
        </div>
        <div className="acc-content">
          <div className="content">
            <div className="text">
              Our services include SEO Optimization, PPC Advertising, Content
              Marketing, Social Marketing, Web Developement, and App
              Developement.{" "}
            </div>
          </div>
        </div>
      </li> */}
      <li className={`accordion block ${activeFaq && "active-block"}`}>
        <div className={`acc-btn ${activeFaq && "active"} `}>
          {/* How long does it take to build a new project from scratch ? */}
          {question}
          <div
            onClick={() => setActiveFaq(!activeFaq)}
            className="icon flaticon-right-arrow-1"
          />
        </div>
        <div className={`acc-content ${activeFaq && "current"} `}>
          <div className="content">
            <div className="text">{answer}</div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Faq;
