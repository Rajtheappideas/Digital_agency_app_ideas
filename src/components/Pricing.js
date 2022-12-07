import React from "react";
import img from "../assets/images/background/pattern-11.jpg";

const Pricing = () => {
  return (
    <section className="pricing-section style-two">
      <div className="news-section-two">
        <div
          className="pattern-layer"
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="title">Packages</div>
            <h2>Our Pricing Table</h2>
            <div className="text">
              We take a consultative approach to every client engagement and
              find actionable
              <br /> solutions that will help your organization achieve the best
              outcomes.
            </div>
          </div>
          <div className="pricing-tabs tabs-box">
            {/*Tabs Container*/}
            <div className="tabs-content">
              {/*Tab*/}
              <div className="tab active-tab" id="prod-monthly">
                <div className="content">
                  <div className="row clearfix">
                    {/* Price Block */}
                    <div className="price-block col-lg-4 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="title">Package</div>
                        <div className="price">Maintenance</div>
                        <ul className="price-list">
                          <li>Review Metrics</li>
                          <li>Back Up Site</li>
                          <li>Moderate Comments</li>
                          <li>Update Themes and Plugins</li>
                          <li>Check and Fix Broken Links</li>
                          <li>Schedule User Testing</li>
                          <li>Scan for Malware</li>
                          <li>Test Site’s Speed</li>
                          <li>Create New Content</li>
                          <li>Check and remove spam</li>
                          <li>Improve Site’s SEO</li>
                          <li>Optimize Database</li>
                          <li>Test Site’s Forms</li>
                          <li>Test Checkout Process</li>
                          <li>Check Social Media Links</li>
                          <li>Review Domain and Hosting Renewals</li>
                          <li>Perform a Content Audit</li>
                          <li>Review ‘About’ Page</li>
                          <li>Update Header, Footer &amp; Legal Policies</li>
                        </ul>
                        <a
                          href="contact.html"
                          className="theme-btn btn-style-three"
                        >
                          <span className="txt">Contact us</span>
                        </a>
                        <div
                          className="price-attern-layer"
                          style={{
                            backgroundImage:
                              "url(images/background/price-pattern-1.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                    {/* Price Block */}
                    <div className="price-block active col-lg-4 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="title">Package</div>
                        <div className="price">Marketing</div>
                        <ul className="price-list">
                          <li>Body Content Optimization</li>
                          <li>Keyword Research</li>
                          <li>Competitors Analysis</li>
                          <li>Initial Keyword ranking Analysis</li>
                          <li>Meta Tag Creation &amp; Optimisation</li>
                          <li>Image ALT Tag Optimisation</li>
                          <li>XML Sitemap Creation &amp; Updating</li>
                          <li>Google Analytics</li>
                          <li>GWT Setup &amp; Monitoring</li>
                          <li>Robots.txt Optimisation</li>
                          <li>404 redirect (301 redirect)</li>
                          <li>Internal navigation</li>
                          <li>Manual Seo &amp; directory submission</li>
                          <li>Social Bookmarking</li>
                          <li>Article Submission</li>
                          <li>Press Release Distribution</li>
                          <li>Blog Creation, Updating and Promotion</li>
                          <li>Classified ads Creation &amp; Posting</li>
                          <li>PDF and PPT Submission</li>
                        </ul>
                        <a
                          href="contact.html"
                          className="theme-btn btn-style-three"
                        >
                          <span className="txt">Contact us</span>
                        </a>
                        <div
                          className="price-pattern-layer style-two"
                          style={{
                            backgroundImage:
                              "url(images/background/price-pattern-3.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                    {/* Price Block */}
                    <div className="price-block col-lg-4 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="title">Package</div>
                        <div className="price">Hosting</div>
                        <ul className="price-list">
                          <li>100 Websites</li>
                          <li>100 GB SSD Storage</li>
                          <li>~25 000 Visits Monthly</li>
                          <li>Free Email</li>
                          <li>Unlimited Bandwidth</li>
                          <li>Unlimited Databases</li>
                          <li>Unlimited Free SSL</li>
                          <li>Cloudflare Protected Nameservers</li>
                          <li>Free Domain ($9.99 value)</li>
                          <li>Weekly Backups</li>
                          <li>Managed WordPress</li>
                          <li>WordPress Acceleration</li>
                          <li>GIT Access</li>
                          <li>SSH Access</li>
                          <li>DNS Management</li>
                          <li>Access Manager</li>
                          <li>100 Subdomains</li>
                          <li>Unlimited FTP Account</li>
                          <li>Unlimited Cronjobs</li>
                          <li />
                        </ul>
                        <a
                          href="contact.html"
                          className="theme-btn btn-style-three"
                        >
                          <span className="txt">Contact us</span>
                        </a>
                        <div
                          className="price-pattern-layer"
                          style={{
                            backgroundImage:
                              "url(images/background/price-pattern-2.png)",
                          }}
                        ></div>
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
  );
};

export default Pricing;
