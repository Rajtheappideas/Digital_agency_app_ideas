import React from "react";

const HeaderOfPackages = () => {
  const [activeSearchbar, setActiveSearchbar] = useState(false);

  return (
    <header className="main-header header-style-three">
      {/* Header Upper */}
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
            <a href="/index" title="">
              <img src="images/logo-small.png" alt="" title="" />
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
              {/* Cart Box */}
              {/* <div class="cart-box">
								<div class="dropdown">
									<button class="cart-box-btn dropdown-toggle" type="button" id="dropdownMenu1"
										data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span
											class="flaticon-cart"></span><span class="total-cart">2</span></button>
									<div class="dropdown-menu pull-right cart-panel" aria-labelledby="dropdownMenu1">
										<div class="cart-product">
											<div class="inner">
												<div class="cross-icon"><span class="icon fa fa-remove"></span></div>
												<div class="image"><img src="images/resource/post-thumb-1.jpg" alt="" />
												</div>
												<h3><a href="shop-/single">Product 01</a></h3>
												<div class="quantity-text">Quantity 1</div>
												<div class="price">$99.00</div>
											</div>
										</div>
										<div class="cart-product">
											<div class="inner">
												<div class="cross-icon"><span class="icon fa fa-remove"></span></div>
												<div class="image"><img src="images/resource/post-thumb-2.jpg" alt="" />
												</div>
												<h3><a href="shop-/single">Product 02</a></h3>
												<div class="quantity-text">Quantity 1</div>
												<div class="price">$99.00</div>
											</div>
										</div>
										<div class="cart-total">Sub Total: <span>$198</span></div>
										<ul class="btns-boxed">
											<li><a href="shoping-/cart">View Cart</a></li>
											<li><a href="/checkout">CheckOut</a></li>
										</ul>
									</div>
								</div>
							</div> */}
              {/* Search Btn */}
              <div className="search-box-btn search-box-outer">
                <span className="icon fa fa-search" />
              </div>
              {/* Quote Btn */}
              <div className="btn-box">
                <a href="/contact" className="theme-btn btn-style-two">
                  <span className="txt">Get A Quote</span>
                </a>
              </div>
              {/* Nav Btn */}
              <div className="nav-btn navSidebar-button">
                <span className="icon flaticon-menu" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Sticky Menu */}
      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <span className="icon flaticon-multiply" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <a href="/index">
              <img src="images/logo-3.png" alt="" title="" />
            </a>
          </div>
          <div className="menu-outer">
            {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </header>
  );
};

export default HeaderOfPackages;
