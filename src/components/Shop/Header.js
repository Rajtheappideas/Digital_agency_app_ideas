import React from "react";

const Header = () => {
  return (
    <header className="nav-wrap bg-dark fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark px-lg-0">
          <a className="navbar-brand mr-3 swap-link" href="/">
            <img
              src={require("../../assets/images/logo-small.png")}
              alt="small-logo"
              title="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item swap-link">
                {" "}
                <a href="" className="nav-link">
                  Presentation
                </a>{" "}
              </li>

              <li className="nav-item swap-link">
                {" "}
                <a href="" className="nav-link">
                  Business Card
                </a>{" "}
              </li>
              <li className="nav-item swap-link">
                {" "}
                <a href="" className="nav-link">
                  Web Design
                </a>{" "}
              </li>
              <li className="nav-item swap-link">
                {" "}
                <a href="" className="nav-link">
                  Graphic Templates
                </a>{" "}
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown megamenu">
                <a
                  className="nav-link dropdown-toggle no-arrow"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="las la-user mr-2" style={{ fontSize: 22 }} />
                </a>
                <div className="dropdown-menu dropdown-menu-right" role="menu">
                  <a
                    className="dropdown-item font-weight-bold swap-link"
                    href="dashboard.html"
                  >
                    <i className="las la-user bg-info-alt p-1 rounded text-info" />{" "}
                    Profile
                  </a>
                  <a
                    className="dropdown-item swap-link"
                    href="dash-settings.html"
                  >
                    <i className="las la-sign-out-alt bg-warning-alt text-warning p-1 rounded" />{" "}
                    Settings
                  </a>
                  <a
                    className="dropdown-item swap-link"
                    href="dash-downloads.html"
                  >
                    <i className="las la-cloud-download-alt bg-success-alt text-success p-1 rounded" />{" "}
                    Downloads
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item swap-link" href="dashboard.html">
                    <i className="dropdown-icon" /> Dashboard
                  </a>
                  <a
                    className="dropdown-item swap-link"
                    href="dash-my-items.html"
                  >
                    <i className="dropdown-icon" /> My Items
                  </a>
                  <a
                    className="dropdown-item swap-link"
                    href="dash-settings.html"
                  >
                    <i className="dropdown-icon" /> Settings
                    <span className="badge badge-soft-success ml-2">
                      25 New
                    </span>
                  </a>
                  <a
                    className="dropdown-item swap-link"
                    href="dash-invoice.html"
                  >
                    <i className="dropdown-icon" /> Invoice
                  </a>
                  <div className="dropdown-divider" />
                  <a
                    className="dropdown-item swap-link"
                    href="javascript:void(0)"
                  >
                    <i className="las la-sign-out-alt bg-danger-alt text-danger p-1 rounded" />{" "}
                    Logout
                  </a>
                </div>
              </li>
              <li className="nav-item d-flex align-items-center"></li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle no-arrow btn btn-primary swap-link text-white"
                  href="/signup"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
