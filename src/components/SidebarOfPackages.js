import React, { useState } from "react";

const SidebarOfPackages = ({
  showSidebarForPackages,
  setShowSidebarForPackages,
}) => {
  return (
    <div
      className={`xs-sidebar-group info-group ${
        showSidebarForPackages && "isActive"
      }`}
      onClick={() => setShowSidebarForPackages(false)}
    >
      <div
        className="xs-overlay xs-bg-black"
        onClick={() => setShowSidebarForPackages(false)}
      />
      <div className="xs-sidebar-widget">
        <div className="sidebar-widget-container">
          <div
            className="widget-heading"
            onClick={() => setShowSidebarForPackages(false)}
          >
            <a style={{ cursor: "pointer" }} className="close-side-widget">
              X
            </a>
          </div>
          <div className="sidebar-textwidget">
            {/* Sidebar Info Content */}
            <div className="sidebar-info-contents">
              <div className="content-inner">
                <div className="logo">
                  <a href="/">
                    <img src={require("../assets/images/logo.png")} alt="" />
                  </a>
                </div>
                <div className="content-box">
                  <h2>About Us</h2>
                  <p className="text">
                    One of the most well-known web design and development
                    company. For all types of enterprises and sectors, we offer
                    the best web development, app development, and digital
                    marketing services.
                  </p>
                  <a href="/contact" className="theme-btn btn-style-two">
                    <span className="txt">Contact Now</span>
                  </a>
                </div>
                <div className="contact-info">
                  <h2>Contact Info</h2>
                  <ul className="list-style-one">
                    <li>
                      <span className="icon fas fa-location-arrow" />
                      Wolstraat 70, 1000 Brussel, Belgium
                    </li>
                    <li>
                      <span className="icon fas fa-phone-alt" />
                      <a href="tel:+32493986537">0032 493 98 65 37</a>
                    </li>
                    <li>
                      <span className="icon fa fa-envelope" />
                      <a href="mailto:info@appideas.tech">info@appideas.tech</a>
                    </li>
                    <li>
                      <span className="icon fas fa-clock" />
                      Week Days: 09.00 to 17.00 Sunday: Closed
                    </li>
                  </ul>
                </div>
                {/* Social Box */}
                <ul className="social-box">
                  <li className="facebook">
                    <a href="comming-/soon" className="fab fa-facebook-f" />
                  </li>
                  <li className="twitter">
                    <a href="comming-/soon" className="fab fa-twitter" />
                  </li>
                  <li className="linkedin">
                    <a
                      href="comming-soon.html"
                      className="fab fa-linkedin-in"
                    />
                  </li>
                  <li className="instagram">
                    <a href="comming-/soon" className="fab fa-instagram" />
                  </li>
                  <li className="youtube">
                    <a href="comming-/soon" className="fab fa-youtube" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarOfPackages;
