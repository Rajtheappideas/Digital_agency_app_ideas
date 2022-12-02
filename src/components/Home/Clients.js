import React from "react";

const Clients = () => {
  return (
    <>
      {/* Clients Section */}
      <section className="clients-section">
        <div className="auto-container">
          <div className="sponsors-outer">
            {/*Sponsors Carousel*/}
            <ul className="sponsors-carousel owl-carousel owl-theme">
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img
                      src={require("../../assets/images/clients/client-05.png")}
                      alt=""
                    />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img
                      src={require("../../assets/images/clients/client-06.png")}
                      alt=""
                    />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img
                      src={require("../../assets/images/clients/client-07.png")}
                      alt=""
                    />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img
                      src={require("../../assets/images/clients/client-08.png")}
                      alt=""
                    />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img
                      src={require("../../assets/images/clients/client-09.png")}
                      alt=""
                    />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img
                      src={require("../../assets/images/clients/client-10.png")}
                      alt=""
                    />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img
                      src={require("../../assets/images/clients/client-11.png")}
                      alt=""
                    />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#">
                    <img
                      src={require("../../assets/images/clients/client-12.png")}
                      alt=""
                    />
                  </a>
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* End Clients Section */}
    </>
  );
};

export default Clients;
