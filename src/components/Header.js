import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/logo.png";
import { handleLogout } from "../redux/AuthSlice";
import SearchPopup from "./SearchPopup";
import SidebarOfPackages from "./SidebarOfPackages";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  const [activeSearchbar, setActiveSearchbar] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);
  const [showSidebarForPackages, setShowSidebarForPackages] = useState(false);
  const [activeTagForMobileMenu, setActiveTagForMobileMenu] = useState({
    showAboutus: false,
    showServices: false,
    showProjects: false,
    showEvents: false,
    showShop: false,
  });

  const { user, loading } = useSelector((State) => State.user);
  const dispatch = useDispatch();

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
        stickyHeader && !showSidebarForPackages && "fixed-header"
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
              {/* <span className="icon flaticon-menu" /> */}
              <Bars3Icon width={40} height={40} />
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
                      <li>
                        <a href="/services">See All</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a>Projects</a>
                    <ul>
                      <li>
                        <a href="/projects">Investigobank</a>
                      </li>
                      <li>
                        <a href="/projects">Pcspecialist</a>
                      </li>
                      <li>
                        <a href="/projects">Car Service All</a>
                      </li>
                      <li>
                        <a href="/projects">Bolt Usuario</a>
                      </li>
                      <li>
                        <a href="/projects">OnSortCeSoir</a>
                      </li>
                      <li>
                        <a href="/projects">See All</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a>Events</a>
                    <ul>
                      <li>
                        <a href="/events">Events</a>
                      </li>
                      <li>
                        <a href="/events-details">Events Details</a>
                      </li>
                      <li>
                        <a href="/events-speaker">Events Speaker</a>
                      </li>
                      <li>
                        <a href="/events-ticket">Events Ticket</a>
                      </li>
                      <li>
                        <a href="/events-checkout">Events Checkout</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/investments">Investments</a>
                  </li>
                  <li className="dropdown has-mega-menu">
                    <a>More</a>
                    <div className="mega-menu">
                      <div className="mega-menu-bar row clearfix">
                        <div className="column col-lg-4 col-md-4 col-sm-12">
                          <h3>About</h3>
                          <ul>
                            <li>
                              <a href="/about">About us</a>
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
                        <div className="column col-lg-4 col-md-4 col-sm-12">
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
                              <a href="/services">See all</a>
                            </li>
                          </ul>
                        </div>
                        <div className="column col-lg-4 col-md-4 col-sm-12">
                          <h3>Projects</h3>
                          <ul>
                            <li>
                              <a href="/projects">Investigobank</a>
                            </li>
                            <li>
                              <a href="/projects">Pcspecialist</a>
                            </li>
                            <li>
                              <a href="/projects">Car Service All</a>
                            </li>
                            <li>
                              <a href="/projects">Bolt Usuario</a>
                            </li>
                            <li>
                              <a href="/projects">OnSortCeSoir</a>
                            </li>
                            <li>
                              <a href="/projects">See all</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-btn">
                      <span className="fa fa-angle-down" />
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
                {loading === true ? (
                  <a
                    style={{
                      cursor: "pointer",
                      pointerEvents: loading && "none",
                    }}
                    className="theme-btn btn-style-one"
                  >
                    <span className="txt">...</span>
                  </a>
                ) : user === null ? (
                  <a href="/signup" className="theme-btn btn-style-one">
                    <span className="txt">Sign up</span>
                  </a>
                ) : (
                  <a
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "black",
                    }}
                    onClick={() => dispatch(handleLogout())}
                    className="theme-btn btn-style-one"
                  >
                    <span className="txt">Log out</span>
                  </a>
                )}
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
                    <div className="dropdown-btn">
                      <span className="fa fa-angle-down" />
                    </div>
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
                    <div className="dropdown-btn">
                      <span className="fa fa-angle-down" />
                    </div>
                  </li>
                  <li className="dropdown">
                    <a>Projects</a>
                    <ul>
                      <li>
                        <a href="/projects">Investigobank</a>
                      </li>
                      <li>
                        <a href="/projects">Pcspecialist</a>
                      </li>
                      <li>
                        <a href="/projects">Car Service All</a>
                      </li>
                      <li>
                        <a href="/projects">Bolt Usuario</a>
                      </li>
                      <li>
                        <a href="/projects">OnSortCeSoir</a>
                      </li>

                      <li>
                        <a href="/projects">See All</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a>Events</a>
                    <ul>
                      <li>
                        <a href="/events">Events</a>
                      </li>
                      <li>
                        <a href="/events-details">Events Details</a>
                      </li>
                      <li>
                        <a href="/events-speaker">Events Speaker</a>
                      </li>
                      <li>
                        <a href="/events-ticket">Events Ticket</a>
                      </li>
                      <li>
                        <a href="/events-checkout">Events Checkout</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/investments">Investments</a>
                  </li>
                  <li className="dropdown has-mega-menu">
                    <a>More</a>
                    <div className="mega-menu">
                      <div className="mega-menu-bar row clearfix">
                        <div className="column col-lg-4 col-md-4 col-sm-12">
                          <h3>About</h3>
                          <ul>
                            <li>
                              <a href="/about">About us</a>
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
                        <div className="column col-lg-4 col-md-4 col-sm-12">
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
                        <div className="column col-lg-4 col-md-4 col-sm-12">
                          <h3>Projects</h3>
                          <ul>
                            <li>
                              <a href="/projects">Investigobank</a>
                            </li>
                            <li>
                              <a href="/projects">Pcspecialist</a>
                            </li>
                            <li>
                              <a href="/projects">Car Service All</a>
                            </li>
                            <li>
                              <a href="/projects">Bolt Usuario</a>
                            </li>
                            <li>
                              <a href="/projects">OnSortCeSoir</a>
                            </li>
                            <li>
                              <a href="/projects">See all</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-btn">
                      <span className="fa fa-angle-down" />
                    </div>
                  </li>
                  <li>
                    <a href="/contactus">Contact us</a>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Main Menu End*/}
            {/* Main Menu End*/}
            <div className="outer-box clearfix">
              {/* Quote Btn */}
              <div className="btn-box">
                {loading === true ? (
                  <a
                    style={{
                      cursor: "pointer",
                      pointerEvents: loading && "none",
                    }}
                    className="theme-btn btn-style-one"
                  >
                    <span className="txt">...</span>
                  </a>
                ) : user === null ? (
                  <a href="/signup" className="theme-btn btn-style-two">
                    <span className="txt">Sign up</span>
                  </a>
                ) : (
                  <a
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "white",
                    }}
                    onClick={() => dispatch(handleLogout())}
                    className="theme-btn btn-style-two"
                  >
                    <span className="txt">Log out</span>
                  </a>
                )}
              </div>
              {/* Search Btn */}
              <div
                onClick={() => setActiveSearchbar(true)}
                className="search-box-btn search-box-outer"
              >
                <span className="icon fa fa-search" />
              </div>
              {/* Nav Btn */}
              {(window.location.pathname == "/package-hosting" ||
                window.location.pathname == "/package-video-editing" ||
                window.location.pathname == "/package-digital-marketing") && (
                <div
                  className="nav-btn navSidebar-button"
                  onClick={() => setShowSidebarForPackages(true)}
                >
                  <span
                    className="icon flaticon-menu"
                    onClick={() => setShowSidebarForPackages(true)}
                  />
                </div>
              )}
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
                <li
                  className="dropdown"
                  onClick={() =>
                    setActiveTagForMobileMenu({
                      ...activeTagForMobileMenu,
                      showAboutus: !activeTagForMobileMenu.showAboutus,
                    })
                  }
                >
                  <a>About</a>
                  <ul
                    style={{
                      display: activeTagForMobileMenu.showAboutus
                        ? "block"
                        : "none",
                    }}
                  >
                    <li>
                      <a href="/about">About us</a>
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
                  <div className="dropdown-btn">
                    <span className="fa fa-angle-down" />
                  </div>
                </li>
                <li
                  className="dropdown"
                  onClick={() =>
                    setActiveTagForMobileMenu({
                      ...activeTagForMobileMenu,
                      showServices: !activeTagForMobileMenu.showServices,
                    })
                  }
                >
                  <a>Services</a>
                  <ul
                    style={{
                      display: activeTagForMobileMenu.showServices
                        ? "block"
                        : "none",
                    }}
                  >
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
                  <div className="dropdown-btn">
                    <span className="fa fa-angle-down" />
                  </div>
                </li>
                <li
                  className="dropdown"
                  onClick={() =>
                    setActiveTagForMobileMenu({
                      ...activeTagForMobileMenu,
                      showProjects: !activeTagForMobileMenu.showProjects,
                    })
                  }
                >
                  <a>Projects</a>
                  <ul
                    style={{
                      display: activeTagForMobileMenu.showProjects
                        ? "block"
                        : "none",
                    }}
                  >
                    <li>
                      <a href="/projects">Investigobank</a>
                    </li>
                    <li>
                      <a href="/projects">Pcspecialist</a>
                    </li>
                    <li>
                      <a href="/projects">Car Service All</a>
                    </li>
                    <li>
                      <a href="/projects">Bolt Usuario</a>
                    </li>
                    <li>
                      <a href="/projects">OnSortCeSoir</a>
                    </li>

                    <li>
                      <a href="/projects">See all</a>
                    </li>
                  </ul>
                  <div className="dropdown-btn">
                    <span className="fa fa-angle-down" />
                  </div>
                </li>
                <li
                  className="dropdown"
                  onClick={() =>
                    setActiveTagForMobileMenu({
                      ...activeTagForMobileMenu,
                      showEvents: !activeTagForMobileMenu.showEvents,
                    })
                  }
                >
                  <a>Events</a>
                  <ul
                    style={{
                      display: activeTagForMobileMenu.showEvents
                        ? "block"
                        : "none",
                    }}
                  >
                    {" "}
                    <li>
                      <a href="/events">Our Events</a>
                    </li>
                    <li>
                      <a href="/events-details">Events Details</a>
                    </li>
                    <li>
                      <a href="/events-speaker">Events Speaker</a>
                    </li>
                    <li>
                      <a href="/events-ticket">Events Ticket</a>
                    </li>
                    <li>
                      <a href="/events-checkout">Events Checkout</a>
                    </li>
                  </ul>
                  <div className="dropdown-btn">
                    <span className="fa fa-angle-down" />
                  </div>
                </li>
                <li className="dropdown">
                  <a href="/investments">Investments</a>
                </li>
               
                <li>
                  {loading === true ? (
                    <a
                      style={{
                        cursor: "pointer",
                        pointerEvents: loading && "none",
                      }}
                      className="theme-btn btn-style-one"
                    >
                      <span className="txt">...</span>
                    </a>
                  ) : user === null ? (
                    <a href="/signup">Sign up</a>
                  ) : (
                    <a
                      style={{ cursor: "pointer", textDecoration: "none" }}
                      onClick={() => dispatch(handleLogout())}
                    >
                      Log out
                    </a>
                  )}
                </li>
                <li>
                  <a href="/contactus">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
      <SearchPopup setActiveSearchbar={setActiveSearchbar} />
      {/* sidebar for packages */}
    </header>
  );
};

export default Header;
