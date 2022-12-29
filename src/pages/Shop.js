import React from "react";
import { Helmet } from "react-helmet";
import "../assets/css/bootstrap-custom.css";
// import "../assets/css/custom.css";
// import "../assets/css/main.css";
// import "../assets/css/main.min.css";
import "../assets/css/rtl.css";
import "../assets/css/theme.css";
import Header from "../components/Shop/Header";
import HeroSection from "../components/Shop/HeroSection";
import Products from "../components/Shop/Products";

const Shop = () => {
  return (
    <>
      <Helmet title="Shop" />
      {/* header */}
      <Header />
      {/* main content */}
      <main role="main">
        <div className="warpper">
          <HeroSection />
          <Products />
          {/* info */}
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="info-box p-4">
                    <h6 className="text-primary">Get paid for your work</h6>
                    <h3>Sell your work to a global community of art lovers</h3>
                    <p className="lead">
                      Create your MarketSpot account and start selling your your
                      work today.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="info-box p-4">
                    <h6 className="text-primary">Customers</h6>
                    <h3>UI assets for startup owners &amp; busy designers</h3>
                    <p className="lead">
                      Find the perfect creative asset to bring your project to
                      life.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="info-box p-4">
                    <h6 className="text-primary">Partnership</h6>
                    <h3>Earn up to 75% selling your work with us !</h3>
                    <p className="lead">
                      We pay commissions to our partners for over 7 years
                      already.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bg dark section */}
        <div className="bg-dark">
          <section className="cta-big section">
            <div className="container">
              <div className="cta-big-content bg-primary py-5 px-5 mt-4 rounded text-white position-relative">
                <img
                  alt="bg image"
                  className="bg-image"
                  src={require("../assets/images/bg-3.png")}
                />
                <div className="row d-flex align-items-center justify-content-center">
                  <div className="col-lg-8 col-md-7">
                    <h3 className="h1">
                      Empowering creative people to make a living doing what
                      they love!
                    </h3>
                    <p className="subtitle">Sign-up today </p>
                  </div>
                  <div className="col-lg-3 offset-lg-1 col-md-5 align-self-center">
                    <img
                      src={require("../assets/images/illustrations/03.svg")}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Shop;
