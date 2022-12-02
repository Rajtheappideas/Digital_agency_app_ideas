import React from "react";
import img from "../assets/images/background/map-pattern-2.png";

const Footer = () => {
  return (
    <footer
      className="footer-style-two"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="auto-container">
        {/*Widgets Section*/}
        <div className="widgets-section">
          <div className="row clearfix">
            {/* Column */}
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/* Footer Column */}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget logo-widget">
                    <div className="logo">
                      <a href="/">
                        <img
                          src={require("../assets/images/logo-small.png")}
                          alt=""
                        />
                      </a>
                    </div>
                    <p className="text">
                      One of the most well-known web design and development
                      company. For all types of enterprises and sectors, we
                      offer the best web development, app development, and
                      digital marketing services.
                    </p>
                  </div>
                </div>
                {/* Footer Column */}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h4>Quicky links</h4>
                    <div className="row clearfix">
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <ul className="list-link-two">
                          <li>
                            <a href="/aboutus">About</a>
                          </li>
                          <li>
                            <a href="/services">Services</a>
                          </li>
                          <li>
                            <a href="/packages">Packages</a>
                          </li>
                          <li>
                            <a href="/projects">Projects</a>
                          </li>
                        </ul>
                      </div>
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <ul className="list-link-two">
                          <li>
                            <a href="/blogs">Blog</a>
                          </li>
                          <li>
                            <a href="/contactus">Contact</a>
                          </li>
                          <li>
                            <a href="/faq">Faq's</a>
                          </li>
                          <li>
                            <a href="/privacy">Privacy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Column */}
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/*Footer Column*/}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget contact-info-widget">
                    <h4>Contact us</h4>
                    <div className="widget-content">
                      <ul>
                        <li>Mon – Fri 09am - 05pm</li>
                        <li>
                          <a href="mailto:info@appideas.tech">
                            info@appideas.tech
                          </a>
                        </li>
                        <li>Wolstraat 70, 1000 Brussel, Belgium</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Footer Column */}
                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                  <div className="footer-widget app-widget">
                    <h4>Appideas</h4>
                    <a href="/">
                      <img
                        src={require("../assets/images/resource/video-bg.png")}
                        alt="appideas"
                      />
                    </a>
                    {/* Social Box */}
                    {/* <ul class="social-box">
											<li class="facebook"><a href="comming-soon.html" class="fab fa-facebook-f"></a></li>
											<li class="twitter"><a href="comming-soon.html" class="fab fa-twitter"></a></li>
											<li class="linkedin"><a href="comming-soon.html" class="fab fa-linkedin-in"></a></li>
											<li class="instagram"><a href="comming-soon.html" class="fab fa-instagram"></a></li>
											<li class="youtube"><a href="comming-soon.html" class="fab fa-youtube"></a></li>
										</ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Copyright Column */}
            <div className="copyright-column col-lg-6 col-md-12 col-sm-12">
              <div className="copyright">
                Copyright © 2020. All Rights Reserved By
                <a href="https://appideas.tech/">Appideas Digital Agency.</a>
              </div>
            </div>
            {/* Nav Column */}
            <div className="nav-column col-lg-6 col-md-12 col-sm-12">
              <ul>
                <li>
                  <a href="/privacy">Privacy</a>
                </li>
                <li>
                  <a href="/faq">FAQs</a>
                </li>
                <li>
                  <a href="/comming-soon">Account</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
