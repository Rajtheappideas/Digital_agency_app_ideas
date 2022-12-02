import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import SearchPopup from "./SearchPopup";

const Header = () => {
  const [activeSearchbar, setActiveSearchbar] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);

  // for sticky header
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setStickyHeader(true);
      } else {
        return setStickyHeader(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [window.scrollY]);

  // for check inner width
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        setShowMobileNav(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [window.innerWidth]);
  return (
    <header
      className={`main-header header-style-one ${
        stickyHeader && "fixed-header"
      } ${showMobileNav && "mobile-menu-visible"}  ${
        activeSearchbar && "search-active"
      }`}
    >
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="auto-container clearfix">
          <div className="pull-left logo-box">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="logo" title="Appideas" />
              </a>
            </div>
          </div>
          <div className="nav-outer clearfix">
            {/*Mobile Navigation Toggler*/}
            <div
              onClick={() => setShowMobileNav(true)}
              className="mobile-nav-toggler"
            >
              <span className="icon flaticon-menu" />
            </div>
            {/* Main Menu */}
            <nav className="main-menu navbar-expand-md">
              <div className="navbar-header">
                {/* Toggle Button */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div
                className="navbar-collapse collapse clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="dropdown">
                    <a>About</a>
                    <ul>
                      <li>
                        <a href="/aboutus">About us</a>
                      </li>
                      <li>
                        <a href="/faq">Faq</a>
                      </li>
                      <li>
                        <a href="/terms">Terms &amp; Condition</a>
                      </li>
                      <li>
                        <a href="/privacy">Privacy &amp; Policy</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a>Services</a>
                    <ul>
                      <li>
                        <a href="/services">Our Services</a>
                      </li>
                      <li>
                        <a href="/content-marketing">Content Marketing</a>
                      </li>
                      <li>
                        <a href="/social-marketing">Social Marketing</a>
                      </li>
                      <li>
                        <a href="/app-development">App Development</a>
                      </li>
                      <li>
                        <a href="/seo">SEO Optimization</a>
                      </li>
                      <li>
                        <a href="/web-development">Web Development</a>
                      </li>
                      <li>
                        <a href="/advertising">Advertising</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a>Packages</a>
                    <ul>
                      <li>
                        <a href="/packages">Our Packages</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a>Projects</a>
                    <ul>
                      <li>
                        <a href="/projects">Our Projects</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a>Blogs</a>
                    <ul>
                      <li>
                        <a href="/blogs">Our Blogs</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown has-mega-menu">
                    <a>Sitemap</a>
                    <div className="mega-menu">
                      <div className="mega-menu-bar row clearfix">
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                          <h3>About</h3>
                          <ul>
                            <li>
                              <a href="/aboutus">About us</a>
                            </li>
                            <li>
                              <a href="/faq">Faq</a>
                            </li>
                            <li>
                              <a href="/terms">Terms &amp; Condition</a>
                            </li>
                            <li>
                              <a href="/privacy">Privacy &amp; Policy</a>
                            </li>
                          </ul>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                          <h3>Services</h3>
                          <ul>
                            <li>
                              <a href="/content-marketing">Content Marketing</a>
                            </li>
                            <li>
                              <a href="/social-marketing">Social Marketing</a>
                            </li>
                            <li>
                              <a href="/app-development">App Development</a>
                            </li>
                            <li>
                              <a href="/seo">SEO Optimization</a>
                            </li>
                            <li>
                              <a href="/web-development">Web Development</a>
                            </li>
                            <li>
                              <a href="/advertising">Advertising</a>
                            </li>
                          </ul>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                          <h3>Blogs</h3>
                          <ul>
                            <li>
                              <a href="/blogs">Our Blogs</a>
                            </li>
                          </ul>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                          <h3>Packages &amp; Projects</h3>
                          <ul>
                            <li>
                              <a href="/packages">Our Packages</a>
                            </li>
                            <li>
                              <a href="/projects">Our Projects</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="/contactus">Contact us</a>
                  </li>
                </ul>
              </div>
            </nav>
            {/* Main Menu End*/}
            <div className="outer-box clearfix">
              {/* Quote Btn */}
              <div className="btn-box">
                <a href="/contactus" className="theme-btn btn-style-one">
                  <span className="txt">Get in touch</span>
                </a>
              </div>
              {/* Search Btn */}
              <div
                onClick={() => setActiveSearchbar(true)}
                className="search-box-btn search-box-outer"
              >
                <span className="icon fa fa-search" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
      {/* Sticky Header  */}
      <div className="sticky-header">
        <div className="auto-container clearfix">
          {/*Logo*/}
          <div className="logo pull-left">
            <a href="/" title="">
              <img
                src={require("../assets/images/logo-small.png")}
                alt="small-logo"
                title="logo"
              />
            </a>
          </div>
          {/*Right Col*/}
          <div className="pull-right">
            {/* Main Menu */}
            <nav className="main-menu">
              {/*Keep This Empty / Menu will come through Javascript*/}
            </nav>
            {/* Main Menu End*/}
            {/* Main Menu End*/}
            <div className="outer-box clearfix">
              {/* Quote Btn */}
              <div className="btn-box">
                <a href="/contactus" className="theme-btn btn-style-two">
                  <span className="txt">Get in touch</span>
                </a>
              </div>
              {/* Search Btn */}
              <div
                onClick={() => setActiveSearchbar(true)}
                className="search-box-btn search-box-outer"
              >
                <span className="icon fa fa-search" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Sticky Menu */}
      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div onClick={() => setShowMobileNav(false)} className="close-btn">
          <span className="icon flaticon-multiply" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <a href="/">
              <img src={require("../assets/images/logo.png")} alt="" title="" />
            </a>
          </div>
          <div className="menu-outer">
            {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
      <SearchPopup setActiveSearchbar={setActiveSearchbar} />
    </header>
  );
};

export default Header;
