import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Shop/Header";
import "../assets/css/bootstrap-custom.css";
import "../assets/css/custom.css";
import "../assets/css/main.css";
import "../assets/css/main.min.css";
import "../assets/css/rtl.css";
import "../assets/css/theme.css";
import svg from "../assets/images/icons/ae-icon.svg";

const SingleProduct = () => {
  return (
    <>
      <Helmet title="Single Product" />
      <Header />
      {/* main */}
      <main role="main">
        <div className="wrapper">
          {/*  navigation & share/like info*/}
          <div className="breadcrumb-wrap">
            <div className="container py-3">
              <div
                // className="row d-flex justify-content-md-between justify-content-sm-center"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.5rem 0",
                }}
              >
                <div className="">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item mr-1 font-weight-bold">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item ml-1 font-weight-bold active"
                        aria-current="page"
                      >
                        Library
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="header-actions">
                  <button className="btn btn-ghost grey-dark font-weight-bold">
                    <i className="las la-share-alt" />
                    <span>Share</span>
                  </button>
                  <button className="btn btn-ghost grey-dark like-button font-weight-bold">
                    <i className="las la-hand-holding-heart" />
                    <span>150 Likes</span>
                  </button>
                  <button className="btn btn-ghost grey-dark font-weight-bold">
                    <i className="las la-bookmark" />
                    <span>
                      <span>Save for Later</span>
                    </span>
                  </button>
                  {/**/}
                </div>
              </div>
            </div>
          </div>

          {/* main section */}
          <section>
            <div className="container">
              <div className="row">
                {/* right side */}
                <div className="col-md-7 col-lg-9">
                  <div className="product-info">
                    {/* Item Img Slider */}
                    <div className="swiper-container rounded border swiper-container-initialized swiper-container-horizontal">
                      <div
                        className="swiper-wrapper"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          className="swiper-slide swiper-slide-active"
                          style={{ width: 948 }}
                        >
                          <img
                            src={require("../assets/images/950x500.png")}
                            alt=""
                          />
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          style={{ width: 948 }}
                        >
                          <img
                            src={require("../assets/images/950x500.png")}
                            alt=""
                          />
                        </div>
                        <div className="swiper-slide" style={{ width: 948 }}>
                          <img
                            src={require("../assets/images/950x500.png")}
                            alt=""
                          />
                        </div>
                        <div className="swiper-slide" style={{ width: 948 }}>
                          <img
                            src={require("../assets/images/950x500.png")}
                            alt=""
                          />
                        </div>
                      </div>
                      {/* Add Pagination */}
                      <div
                        className="swiper-pagination swiper-pagination-bullets swiper-pagination-bullets-dynamic"
                        style={{ width: 80 }}
                      >
                        <span
                          className="swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main"
                          style={{ left: 24 }}
                        />
                        <span
                          className="swiper-pagination-bullet swiper-pagination-bullet-active-next"
                          style={{ left: 24 }}
                        />
                        <span
                          className="swiper-pagination-bullet swiper-pagination-bullet-active-next-next"
                          style={{ left: 24 }}
                        />
                        <span
                          className="swiper-pagination-bullet"
                          style={{ left: 24 }}
                        />
                      </div>
                      <span
                        className="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                      />
                    </div>
                  </div>
                  <div className="demo-bar card rounded mt-3 card px-3 text-sm-center">
                    <div className="row d-flex justify-content-between justify-content-md-center align-items-center my-3">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <a href="#" className="btn btn-success-alt btn-block">
                          Live Preview
                          <i className="las la-desktop ml-2" />
                        </a>
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-4">
                        <p className="m-0 text-lg-right text-md-right text-md-center">
                          Spread the word and earn !
                        </p>
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Send link to somene"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-success-alt text-success"
                              type="button"
                            >
                              Send <i className="las la-envelope" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  product info */}
                  <div className="product-description-text pr-lg-2">
                    <h1 className="mt-4 mb-4">
                      Front-end UI kit to create a e-commerce websites with html
                      templates and code snippets.
                    </h1>
                    <p className="lead">
                      Ecommerce code UI Kit for e-commerece projects on
                      Bootstrap 4. The developer version of Bootstrap-ecommerce
                      comes with clearly-coded and with files in HTML, CSS and
                      SASS. Fully customizable and easy-to-use and
                      easy-to-implement in any e-commerce projects.
                    </p>
                    <p>
                      Cicero famously orated against his political opponent
                      Lucius Sergius Catilina. Occasionally the first Oration
                      against Catiline is taken for type specimens: Quo usque
                      tandem abutere.
                    </p>
                    <p>
                      Catilina, patientia nostra? Quam diu etiam furor iste tuus
                      nos eludet? (How long, O Catiline, will you abuse our
                      patience? And for how long will that madness of yours mock
                      us?) Cicero's version of Liber Primus (first Book),
                      sections 1.10.32–3 (fragments included in most Lorem Ipsum
                      variants in red):
                    </p>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="sidebar-widget bg-light-soft">
                          <div className="row">
                            <div className="col-12">
                              <span className="sidebar-widget-title--sm">
                                Features
                              </span>
                              <ul className="list-unstyled mb-0">
                                <li>
                                  <i className="las la-check mr-2 text-success" />
                                  25 Illustrations
                                </li>
                                <li>
                                  <i className="las la-check mr-2 text-success" />
                                  Bright &amp; Modern Style
                                </li>
                                <li>
                                  <i className="las la-check mr-2 text-success" />
                                  Fully Vector
                                </li>
                                <li>
                                  <i className="las la-check mr-2 text-success" />
                                  AI, SVG, PNG Sources
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <h6 className="mb-2">Frequently asked questions</h6>
                        <p>
                          Catilina, patientia nostra? Quam diu etiam furor iste
                          tuus nos eludet? (How long, O Catiline, will you abuse
                          our patience?
                        </p>
                        <p>
                          {" "}
                          And for how long will that madness of yours mock us?)
                        </p>
                        <h6 className="mb-2">Frequently asked questions</h6>
                        <p>
                          {" "}
                          Cicero's version of Liber Primus (first Book),
                          sections 1.10.32–3 (fragments included in most Lorem
                          Ipsum variants in red):
                        </p>
                      </div>
                    </div>
                    <img
                      src={require("../assets/images/950x700.png")}
                      alt=""
                      className="img-fluid mt-5 rounded"
                    />
                    <img
                      src={require("../assets/images/950x700.png")}
                      alt=""
                      className="img-fluid my-5  rounded"
                    />
                    <div className="row mb-4 d-flex justify-content-between">
                      <div className="col-md-8">
                        <h6 className="mb-2">Frequently asked questions</h6>
                        <p>
                          For anything else (licensing, billing, etc), please
                          visit our
                          <a href="#" clas="btn btn-link">
                            Help Center
                          </a>
                          .
                        </p>
                      </div>
                      <div className="col-md-4">
                        <a href="#" className="btn btn-link float-right">
                          <i className="las la-envelope mr-1" />
                          Need additional help?
                        </a>
                      </div>
                    </div>
                    {/* Accordions*/}
                    <div id="faq-accordion" className="mb-5">
                      <div className="card mb-2 mb-md-3">
                        <a
                          href="#accordion-1"
                          data-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          className="p-3 p-md-4"
                        >
                          <div className="d-flex justify-content-between align-items-center">
                            <h6 className="mb-0 mr-2">
                              How do I contact support?
                            </h6>
                            <i className="las la-arrow-right icon" />
                          </div>
                        </a>
                        <div
                          className="collapse"
                          id="accordion-1"
                          data-parent="#faq-accordion"
                        >
                          <div className="px-3 px-md-4 pb-3 pb-md-4">
                            f you need help with the product, please contact the
                            shop owner by visiting their shop profile and
                            sending them a message. For anything else
                            (licensing, billing, etc), please visit our Help
                            Center.
                          </div>
                        </div>
                      </div>
                      <div className="card mb-2 mb-md-3">
                        <a
                          href="#accordion-2"
                          data-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          className="p-3 p-md-4"
                        >
                          <div className="d-flex justify-content-between align-items-center">
                            <h6 className="mb-0 mr-2">
                              How can I unzip product files?
                            </h6>
                            <i className="las la-arrow-right icon" />
                          </div>
                        </a>
                        <div
                          className="collapse"
                          id="accordion-2"
                          data-parent="#faq-accordion"
                        >
                          <div className="px-3 px-md-4 pb-3 pb-md-4">
                            PC: To extract a single file or folder, double-click
                            the compressed folder to open it. Then, drag the
                            file or folder from the compressed folder to a new
                            location. To extract the entire contents of the
                            compressed folder, right-click the folder, click
                            Extract All, and then follow the instructions. Mac:
                            Double click the .zip file, then search for the
                            product folder or product file. If you continue to
                            have trouble, check out this help file for more
                            tips.
                          </div>
                        </div>
                      </div>
                      <div className="card mb-2 mb-md-3">
                        <a
                          href="#accordion-3"
                          data-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          className="p-3 p-md-4"
                        >
                          <div className="d-flex justify-content-between align-items-center">
                            <h6 className="mb-0 mr-2">
                              What happens when my support expires?
                            </h6>
                            <i className="las la-arrow-right icon" />
                          </div>
                        </a>
                        <div
                          className="collapse"
                          id="accordion-3"
                          data-parent="#faq-accordion"
                        >
                          <div className="px-3 px-md-4 pb-3 pb-md-4">
                            Cicero famously orated against his political
                            opponent Lucius Sergius Catilina. Occasionally the
                            first Oration against Catiline is taken for type
                            specimens:
                          </div>
                        </div>
                      </div>
                      <div className="card mb-2 mb-md-3">
                        <a
                          href="#accordion-4"
                          data-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          className="p-3 p-md-4 collapsed"
                        >
                          <div className="d-flex justify-content-between align-items-center">
                            <h6 className="mb-0 mr-2">
                              What payment option do we have?
                            </h6>
                            <i className="las la-arrow-right icon" />
                          </div>
                        </a>
                        <div
                          className="collapse"
                          id="accordion-4"
                          data-parent="#faq-accordion"
                        >
                          <div className="px-3 px-md-4 pb-3 pb-md-4">
                            Cicero famously orated against his political
                            opponent Lucius Sergius Catilina. Occasionally the
                            first Oration against Catiline is taken for type
                            specimens: Quo usque tandem abutere, Catilina,
                            patientia nostra? Quam diu etiam furor iste tuus nos
                            eludet? (How long, O Catiline, will you abuse our
                            patience? And for how long will that madness of
                            yours mock us?)
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ end: accordion */}
                  </div>
                  <hr />
                  {/* other products */}
                  <section className="my-5">
                    <div className="row mb-4 d-flex justify-content-between">
                      <div className="col-md-8">
                        <h6 className="mb-2">
                          Exclusive Icons &amp; Illustrations
                        </h6>
                        <p>
                          Checkout our latest themes, templates and
                          illustrations.
                        </p>
                      </div>
                      <div className="col-md-4">
                        <a href="#" className="btn btn-link float-right">
                          Explore all →{" "}
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="card item-card h-100 border-0">
                          <div className="item-card__image rounded">
                            <a href="/single-product">
                              <img
                                src={require("../assets/images/520x400.png")}
                                className="img-fluid rounded"
                                alt=""
                              />
                            </a>
                            <div className="hover-icons">
                              <ul className="list-unstyled">
                                <li>
                                  <a
                                    href="/single-product"
                                    data-toggle="tooltip"
                                    data-placement="left"
                                    title="Demo"
                                  >
                                    <i className="las la-desktop" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    data-placement="left"
                                    title="Bookmark"
                                  >
                                    <i className="lar la-bookmark" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* end: Item card image */}
                          <div className="card-body px-0 pt-3">
                            <div className="d-flex justify-content-between align-items-start">
                              <div className="item-title">
                                <a href="#">
                                  <h3 className="h5 mb-0 text-truncate">
                                    Mockup Bundle Vol 3
                                  </h3>
                                </a>
                              </div>
                              <div className="item-price">
                                <span>$14</span>
                              </div>
                            </div>
                            {/* end: Card info */}
                            <div className="d-flex justify-content-between align-items-center item-meta">
                              <div className="short-description mb-0">
                                <p className="mb-0 extension-text">
                                  <a href="#">UI Kit</a>
                                  <span className="ml-1">in</span>{" "}
                                  <a href="#">Corporate</a>{" "}
                                </p>
                              </div>
                            </div>
                            {/* end: Card meta */}
                          </div>
                          {/* edn:Card body */}
                        </div>
                        {/* end: Card */}
                      </div>
                      <div className="col-lg-4">
                        <div className="card item-card h-100 border-0">
                          <div className="item-card__image rounded">
                            <a href="/single-product" className="swap-link">
                              <img
                                src={require("../assets/images/520x400.png")}
                                className="img-fluid rounded"
                                alt=""
                              />
                            </a>
                            <div className="hover-icons">
                              <ul className="list-unstyled">
                                <li>
                                  <a href="/single-product">
                                    <i className="las la-desktop" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="lar la-bookmark" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* end: Item card image */}
                          <div className="card-body px-0 pt-3">
                            <div className="d-flex justify-content-between align-items-start">
                              <div className="item-title">
                                <a href="#">
                                  <h3 className="h5 mb-0 text-truncate">
                                    Font Bundle 99% OFF
                                  </h3>
                                </a>
                              </div>
                              <div className="item-price">
                                <span>$14</span>
                              </div>
                            </div>
                            {/* end: Card info */}
                            <div className="d-flex justify-content-start align-items-center item-meta">
                              <div className="short-description mb-0">
                                <p className="mb-0 extension-text">
                                  <a href="#">WordPress</a>
                                  <span className="ml-1">in</span>{" "}
                                  <a href="#">Creative</a>{" "}
                                </p>
                              </div>
                            </div>
                            {/* end: Card meta */}
                          </div>
                          {/* edn:Card body */}
                        </div>
                        {/* end: Card */}
                      </div>
                      <div className="col-lg-4">
                        <div className="card item-card h-100 border-0">
                          <div className="item-card__image rounded">
                            <a href="/single-product" className="swap-link">
                              <img
                                src={require("../assets/images/520x400.png")}
                                className="img-fluid rounded"
                                alt=""
                              />
                            </a>
                            <div className="hover-icons">
                              <ul className="list-unstyled">
                                <li>
                                  <a href="/single-product">
                                    <i className="las la-desktop" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="lar la-bookmark" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* end: Item card image */}
                          <div className="card-body px-0 pt-3">
                            <div className="d-flex justify-content-between align-items-start">
                              <div className="item-title">
                                <a href="#">
                                  <h3 className="h5 mb-0 text-truncate">
                                    Retro Font
                                  </h3>
                                </a>
                              </div>
                              <div className="item-price">
                                <span>$14</span>
                              </div>
                            </div>
                            {/* end: Card info */}
                            <div className="d-flex justify-content-start align-items-center item-meta">
                              <div className="short-description mb-0">
                                <p className="mb-0 extension-text">
                                  <a href="#">HTML</a>
                                  <span className="ml-1">in</span>{" "}
                                  <a href="#">Landing page</a>{" "}
                                </p>
                              </div>
                            </div>
                            {/* end: Card meta */}
                          </div>
                          {/* edn:Card body */}
                        </div>
                        {/* end: Card */}
                      </div>
                    </div>
                  </section>
                </div>
                {/* left side */}
                <div className="col-md-5 col-lg-3">
                  <div className="sidebar sticky-lg-top sticky-md-top">
                    <div className="sidebar-widget">
                      <h3 className="mb-4">
                        Front-end UI kit to create a websites
                      </h3>
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-8">
                          <div className="form-group">
                            <select id="inputState" className="form-control">
                              <option selected="">Regular licence</option>
                              <option>Extended licence</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group text-md-right text-sm-center">
                            <h2 className="item-widget-price">$28</h2>
                          </div>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-12">
                          <div className="custom-control custom-radio mt-3 mb-2 d-flex justify-content-between align-items-center">
                            <input
                              type="radio"
                              id="customRadio1"
                              name="customRadio"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio1"
                            >
                              Install Theme
                            </label>
                            <div className="label-price">$15</div>
                          </div>
                          <div className="custom-control custom-radio mb-4 d-flex justify-content-between align-items-center">
                            <input
                              type="radio"
                              defaultChecked=""
                              id="customRadio2"
                              name="customRadio"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio2"
                            >
                              +1 year Support
                            </label>
                            <div className="label-price">$49</div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn btn-primary btn-block"
                        type="button"
                      >
                        Purchase → <span className="price"> $77</span>
                      </button>
                    </div>
                    <div className="sidebar-widget">
                      <div className="row">
                        <div className="col-12">
                          <span className="sidebar-widget-title--sm">
                            Compatible with
                          </span>
                          {/* FULL COMPATIBILITY */}
                          <div className="compatibility d-flex">
                            <div className="col-2 p-0 text-center">
                              <img
                                src={require("../assets/images/icons/photoshop.png")}
                                alt="PS"
                                width="#"
                                title="Adobe After Effects"
                                height="22px"
                              />
                            </div>
                            <div className="col-2 p-0 text-center">
                              <img
                                src={require("../assets/images/icons/ae-icon.png")}
                                alt="Ae"
                                width="#"
                                title="Adobe After Effects"
                                height="25px"
                              />
                            </div>
                            <div className="col-2 p-0 text-center">
                              <img
                                src={require("../assets/images/icons/xd-icon.png")}
                                alt="Xd"
                                title="#"
                                width="25px"
                                height="25px"
                              />
                            </div>
                            <div className="col-2 p-0 text-center">
                              <img
                                src={require("../assets/images/icons/sketch-icon.png")}
                                alt="Sketch"
                                title="#"
                                width="25px"
                                height="25px"
                              />
                            </div>
                            <div className="col-2 p-0 text-center">
                              <img
                                src={require("../assets/images/icons/figma-icon.png")}
                                alt="#"
                                title="Figma"
                                width="25px"
                                height="25px"
                              />
                            </div>
                            <div className="col-2 p-0 text-center">
                              <img
                                src={require("../assets/images/icons/ai-icon.png")}
                                alt="Ai"
                                title="#"
                                width="25px"
                                height="25px"
                              />
                            </div>
                          </div>
                          <hr />
                          <span className="sidebar-widget-title--sm">
                            Features
                          </span>
                          <ul className="list-unstyled">
                            <li>
                              <i className="las la-check mr-2 text-success" />
                              25 Illustrations
                            </li>
                            <li>
                              <i className="las la-check mr-2 text-success" />
                              Bright &amp; Modern Style
                            </li>
                            <li>
                              <i className="las la-check mr-2 text-success" />
                              AI, SVG, PNG Sources
                            </li>
                          </ul>
                          <hr />
                          <span className="sidebar-widget-title--sm">
                            Compatible Browsers
                          </span>
                          <ul className="list-unstyled">
                            <li>
                              <i className="las la-check mr-2 text-success" />
                              Chrome
                            </li>
                            <li>
                              <i className="las la-check mr-2 text-success" />
                              Firefox
                            </li>
                            <li>
                              <i className="las la-check mr-2 text-success" />
                              Edge
                            </li>
                          </ul>
                          <hr />
                          <span className="sidebar-widget-title--sm">Tags</span>
                          <div className="tags">
                            <a
                              href="#"
                              className="badge badge-soft-success text-success mb-1"
                            >
                              CSS
                            </a>
                            <a
                              href="#"
                              className="badge badge-soft-success text-success mb-1"
                            >
                              Bootstrap
                            </a>
                            <a
                              href="#"
                              className="badge badge-soft-success text-success mb-1"
                            >
                              WordPress
                            </a>
                            <a
                              href="#"
                              className="badge badge-soft-success text-success mb-1"
                            >
                              Digital
                            </a>
                          </div>
                          <hr />
                          <div className="col-12 p-0">
                            <div className="d-flex flex-row justify-content-between">
                              <span className="small">File size</span>
                              <strong className="small text-dark">1 GB</strong>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <span className="small">Update</span>
                              <strong className="small text-dark">
                                Januar 03, 2020
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default SingleProduct;
