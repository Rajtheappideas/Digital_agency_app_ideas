import React from "react";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="intro-2 poition-relative">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-8">
            <h1 className="intro-title">
              UI assets for startup owners &amp; busy designers
            </h1>
            <p className="lead">
              Find the perfect creative asset to <br />
              bring your project to life
            </p>
            <div className="row">
              <div className="col-md-7">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control border-0 bg-white"
                    placeholder="Search assets ..."
                    aria-label="search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <a
                      style={{ cursor: "pointer" }}
                      className="btn btn-primary"
                      type="button"
                    >
                      <i className="las la-search" />
                    </a>
                  </div>
                </div>
                <ul className="nav search-links">
                  <li className="nav-item">
                    <a
                      className="nav-link text-body-color"
                      href="search-page.html"
                    >
                      Try all:
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="search-page.html">
                      UI kits
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="search-page.html">
                      Templates
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="search-page.html">
                      WordPress
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-none d-sm-block">
            <img
              className="card-img-top opacity-8"
              src={require("../../assets/images/theme-illustration.png")}
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
