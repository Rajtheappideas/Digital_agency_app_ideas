import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, getEventsById } from "../../redux/ContentSlice";
import bgImg from "../../assets2/assets/images/banner/banner01.jpg";
import bgImgTicket from "../../assets2/assets/images/ticket/ticket-bg01.jpg";
import "../../assets2/assets/css/bootstrap.min.css";
import "../../assets2/assets/css/all.min.css";
import "../../assets2/assets/css/animate.css";
import "../../assets2/assets/css/magnific-popup.css";
import "../../assets2/assets/css/flaticon.css";
import "../../assets2/assets/css/odometer.css";
import "../../assets2/assets/css/nice-select.css";
import "../../assets2/assets/css/main.css";

const Events = () => {
  const [openSelectDropdown, setOpenSelectDropdown] = useState({
    firstDropdown: false,
    twoDropdown: false,
    threeDropdown: false,
  });

  const { loading } = useSelector((state) => state.content);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
    dispatch(getEventsById());
  }, []);
  return (
    <>
      <Helmet title="Events" />
      {/* banner */}
      <section className="banner-section">
        <div
          className="banner-bg bg_img bg-fixed"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
        <div className="container">
          <div className="banner-content">
            <h1 className="title  cd-headline clip">
              <span className="d-block">book your</span> tickets for
              <span className="color-theme cd-words-wrapper p-0 m-0">
                &nbsp;
                <b className="is-visible">Movie</b>
                {/* <b>Event</b>
                <b>Sport</b> */}
              </span>
            </h1>
            <p>
              Safe, secure, reliable ticketing.Your ticket to live
              entertainment!
            </p>
          </div>
        </div>
      </section>
      <>
        {/* ==========Ticket-Search========== */}
        <section className="search-ticket-section padding-top pt-lg-0">
          <div className="container">
            <div
              className="search-tab bg_img"
              style={{ backgroundImage: `url(${bgImgTicket})` }}
            >
              <div className="row align-items-center mb--20">
                <div className="col-lg-6 mb-20">
                  <div className="search-ticket-header">
                    <h6 className="category">welcome to Boleto </h6>
                    <h3 className="title">what are you looking for</h3>
                  </div>
                </div>
                <div className="col-lg-6 mb-20">
                  <ul className="tab-menu ticket-tab-menu">
                    <li className="active">
                      <div className="tab-thumb">
                        <img
                          src={require("../../assets2/assets/images/ticket/ticket-tab01.png")}
                          alt="ticket"
                        />
                      </div>
                      <span>movie</span>
                    </li>
                    <li>
                      <div className="tab-thumb">
                        <img
                          src={require("../../assets2/assets/images/ticket/ticket-tab02.png")}
                          alt="ticket"
                        />
                      </div>
                      <span>events</span>
                    </li>
                    <li>
                      <div className="tab-thumb">
                        <img
                          src={require("../../assets2/assets/images/ticket/ticket-tab03.png")}
                          alt="ticket"
                        />
                      </div>
                      <span>sports</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-area">
                <div className="tab-item active">
                  <form className="ticket-search-form">
                    <div className="form-group large">
                      <input type="text" placeholder="Search for Movies" />
                      <button type="submit">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                    <div className="form-group">
                      <div className="thumb">
                        <img
                          src={require("../../assets2/assets/images/ticket/city.png")}
                          alt="ticket"
                        />
                      </div>
                      <span className="type">city</span>
                      <select
                        className="select-bar"
                        style={{ display: "none" }}
                      >
                        <option value="london">London</option>
                        <option value="dhaka">dhaka</option>
                        <option value="rosario">rosario</option>
                        <option value="madrid">madrid</option>
                        <option value="koltaka">kolkata</option>
                        <option value="rome">rome</option>
                        <option value="khoksa">khoksa</option>
                      </select>
                      <div
                        className={`nice-select select-bar ${
                          openSelectDropdown.firstDropdown && "open"
                        }`}
                        onClick={() =>
                          setOpenSelectDropdown({
                            ...openSelectDropdown,
                            firstDropdown: !openSelectDropdown.firstDropdown,
                          })
                        }
                        tabIndex={0}
                      >
                        <span className="current">London</span>
                        <ul className="list">
                          <li
                            data-value="london"
                            className="option selected focus"
                          >
                            London
                          </li>
                          <li data-value="dhaka" className="option">
                            dhaka
                          </li>
                          <li data-value="rosario" className="option">
                            rosario
                          </li>
                          <li data-value="madrid" className="option">
                            madrid
                          </li>
                          <li data-value="koltaka" className="option">
                            kolkata
                          </li>
                          <li data-value="rome" className="option">
                            rome
                          </li>
                          <li data-value="khoksa" className="option">
                            khoksa
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="thumb">
                        <img
                          src={require("../../assets2/assets/images/ticket/date.png")}
                          alt="ticket"
                        />
                      </div>
                      <span className="type">date</span>
                      <select
                        className="select-bar"
                        style={{ display: "none" }}
                      >
                        <option value="26-12-19">23/10/2020</option>
                        <option value="26-12-19">24/10/2020</option>
                        <option value="26-12-19">25/10/2020</option>
                        <option value="26-12-19">26/10/2020</option>
                      </select>
                      <div
                        className={`nice-select select-bar ${
                          openSelectDropdown.twoDropdown && "open"
                        }`}
                        onClick={() =>
                          setOpenSelectDropdown({
                            ...openSelectDropdown,
                            twoDropdown: !openSelectDropdown.twoDropdown,
                          })
                        }
                      >
                        <span className="current">23/10/2020</span>
                        <ul className="list">
                          <li data-value="26-12-19" className="option selected">
                            23/10/2020
                          </li>
                          <li data-value="26-12-19" className="option">
                            24/10/2020
                          </li>
                          <li data-value="26-12-19" className="option">
                            25/10/2020
                          </li>
                          <li data-value="26-12-19" className="option">
                            26/10/2020
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="thumb">
                        <img
                          src={require("../../assets2/assets/images/ticket/cinema.png")}
                          alt="ticket"
                        />
                      </div>
                      <span className="type">cinema</span>
                      <select
                        className="select-bar"
                        style={{ display: "none" }}
                      >
                        <option value="Awaken">Awaken</option>
                        <option value="dhaka">dhaka</option>
                        <option value="rosario">rosario</option>
                        <option value="madrid">madrid</option>
                        <option value="koltaka">kolkata</option>
                        <option value="rome">rome</option>
                        <option value="khoksa">khoksa</option>
                      </select>
                      <div
                        className={`nice-select select-bar ${
                          openSelectDropdown.threeDropdown && "open"
                        }`}
                        onClick={() =>
                          setOpenSelectDropdown({
                            ...openSelectDropdown,
                            threeDropdown: !openSelectDropdown.threeDropdown,
                          })
                        }
                      >
                        {" "}
                        <span className="current">Awaken</span>
                        <ul className="list">
                          <li data-value="Awaken" className="option selected">
                            Awaken
                          </li>
                          <li data-value="dhaka" className="option">
                            dhaka
                          </li>
                          <li data-value="rosario" className="option">
                            rosario
                          </li>
                          <li data-value="madrid" className="option">
                            madrid
                          </li>
                          <li data-value="koltaka" className="option">
                            kolkata
                          </li>
                          <li data-value="rome" className="option">
                            rome
                          </li>
                          <li data-value="khoksa" className="option">
                            khoksa
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="tab-item">
                  <form className="ticket-search-form">
                    <div className="form-group large">
                      <input type="text" placeholder="Search for Events" />
                      <button type="submit">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                    <div className="form-group">
                      <div className="thumb">
                        <img
                          src={require("../../assets2/assets/images/ticket/city.png")}
                          alt="ticket"
                        />
                      </div>
                      <span className="type">city</span>
                      <select className="select-bar">
                        <option value="london">London</option>
                        <option value="dhaka">dhaka</option>
                        <option value="rosario">rosario</option>
                        <option value="madrid">madrid</option>
                        <option value="koltaka">kolkata</option>
                        <option value="rome">rome</option>
                        <option value="khoksa">khoksa</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <div className="thumb">
                        <img
                          src={require("../../assets2/assets/images/ticket/date.png")}
                          alt="ticket"
                        />
                      </div>
                      <span className="type">date</span>
                      <select className="select-bar">
                        <option value="26-12-19">23/10/2020</option>
                        <option value="26-12-19">24/10/2020</option>
                        <option value="26-12-19">25/10/2020</option>
                        <option value="26-12-19">26/10/2020</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <div className="thumb">
                        <img
                          src={require("../../assets2/assets/images/ticket/cinema.png")}
                          alt="ticket"
                        />
                      </div>
                      <span className="type">event</span>
                      <select className="select-bar">
                        <option value="angular">angular</option>
                        <option value="startup">startup</option>
                        <option value="rosario">rosario</option>
                        <option value="madrid">madrid</option>
                        <option value="koltaka">kolkata</option>
                        <option value="Last-First">Last-First</option>
                        <option value="wish">wish</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="tab-item">
                  <form className="ticket-search-form">
                    <div className="form-group large">
                      <input type="text" placeholder="Search fo Sports" />
                      <button type="submit">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                    <div className="form-group">
                      <div className="thumb">
                        <img
                          src={require("../../assets2/assets/images/ticket/city.png")}
                          alt="ticket"
                        />
                      </div>
                      <span className="type">city</span>
                      <select className="select-bar">
                        <option value="london">London</option>
                        <option value="dhaka">dhaka</option>
                        <option value="rosario">rosario</option>
                        <option value="madrid">madrid</option>
                        <option value="koltaka">kolkata</option>
                        <option value="rome">rome</option>
                        <option value="khoksa">khoksa</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <div className="thumb">
                        <img
                          src={require("../../assets2/assets/images/ticket/date.png")}
                          alt="ticket"
                        />
                      </div>
                      <span className="type">date</span>
                      <select className="select-bar">
                        <option value="26-12-19">23/10/2020</option>
                        <option value="26-12-19">24/10/2020</option>
                        <option value="26-12-19">25/10/2020</option>
                        <option value="26-12-19">26/10/2020</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <div className="thumb">
                        <img
                          src={require("../../assets2/assets/images/ticket/cinema.png")}
                          alt="ticket"
                        />
                      </div>
                      <span className="type">sports</span>
                      <select className="select-bar">
                        <option value="football">football</option>
                        <option value="cricket">cricket</option>
                        <option value="cabadi">cabadi</option>
                        <option value="madrid">madrid</option>
                        <option value="gadon">gadon</option>
                        <option value="rome">rome</option>
                        <option value="khoksa">khoksa</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==========Ticket-Search========== */}
        {/* movie section */}
        <section className="movie-section padding-top padding-bottom bg-two">
          <div className="container">
            <div className="row flex-wrap-reverse justify-content-center">
              <div className="col-lg-3 col-sm-10  mt-50 mt-lg-0">
                <div className="widget-1 widget-facility">
                  <div className="widget-1-body">
                    <ul>
                      <li>
                        <a href="#0">
                          <span className="img">
                            <img
                              src={require("../../assets2/assets/images/sidebar/icons/sidebar01.png")}
                              alt="sidebar"
                            />
                          </span>
                          <span className="cate">24X7 Care</span>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <span className="img">
                            <img
                              src={require("../../assets2/assets/images/sidebar/icons/sidebar02.png")}
                              alt="sidebar"
                            />
                          </span>
                          <span className="cate">100% Assurance</span>
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <span className="img">
                            <img
                              src={require("../../assets2/assets/images/sidebar/icons/sidebar03.png")}
                              alt="sidebar"
                            />
                          </span>
                          <span className="cate">Our Promise</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget-1 widget-banner">
                  <div className="widget-1-body">
                    <a href="#0">
                      <img
                        src={require("../../assets2/assets/images/sidebar/banner/banner01.jpg")}
                        alt="banner"
                      />
                    </a>
                  </div>
                </div>
                <div className="widget-1 widget-trending-search">
                  <h3 className="title">Trending Searches</h3>
                  <div className="widget-1-body">
                    <ul>
                      <li>
                        <h6 className="sub-title">
                          <a href="#0">mars</a>
                        </h6>
                        <p>Movies</p>
                      </li>
                      <li>
                        <h6 className="sub-title">
                          <a href="#0">alone</a>
                        </h6>
                        <p>Movies</p>
                      </li>
                      <li>
                        <h6 className="sub-title">
                          <a href="#0">music event</a>
                        </h6>
                        <p>event</p>
                      </li>
                      <li>
                        <h6 className="sub-title">
                          <a href="#0">NBA Games 2020</a>
                        </h6>
                        <p>Sports</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget-1 widget-banner">
                  <div className="widget-1-body">
                    <a href="#0">
                      <img
                        src={require("../../assets2/assets/images/sidebar/banner/banner02.jpg")}
                        alt="banner"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="article-section padding-bottom">
                  <div className="section-header-1">
                    <h2 className="title">movies</h2>
                    <a className="view-all" href="movie-grid.html">
                      View All
                    </a>
                  </div>
                  <div className="row mb-30-none justify-content-center">
                    <div className="col-sm-6 col-lg-4">
                      <div className="movie-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/movie/movie01.jpg")}
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">alone</a>
                          </h5>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src={require("../../assets2/assets/images/movie/tomato.png")}
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src={require("../../assets2/assets/images/movie/cake.png")}
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="movie-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/movie/movie02.jpg")}
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">mars</a>
                          </h5>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src={require("../../assets2/assets/images/movie/tomato.png")}
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src={require("../../assets2/assets/images/movie/cake.png")}
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="movie-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/movie/movie03.jpg")}
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">venus</a>
                          </h5>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src={require("../../assets2/assets/images/movie/tomato.png")}
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src={require("../../assets2/assets/images/movie/cake.png")}
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="article-section padding-bottom">
                  <div className="section-header-1">
                    <h2 className="title">events</h2>
                    <a className="view-all" href="events.html">
                      View All
                    </a>
                  </div>
                  <div className="row mb-30-none justify-content-center">
                    <div className="col-sm-6 col-lg-4">
                      <div className="event-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/event/event01.jpg")}
                              alt="event"
                            />
                          </a>
                          <div className="event-date">
                            <h6 className="date-title">28</h6>
                            <span>Dec</span>
                          </div>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">Digital Economy Conference 2020</a>
                          </h5>
                          <div className="movie-rating-percent">
                            <span>327 Montague Street</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="event-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/event/event02.jpg")}
                              alt="event"
                            />
                          </a>
                          <div className="event-date">
                            <h6 className="date-title">28</h6>
                            <span>Dec</span>
                          </div>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">web design conference 2020</a>
                          </h5>
                          <div className="movie-rating-percent">
                            <span>327 Montague Street</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="event-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/event/event03.jpg")}
                              alt="event"
                            />
                          </a>
                          <div className="event-date">
                            <h6 className="date-title">28</h6>
                            <span>Dec</span>
                          </div>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">digital thinkers meetup</a>
                          </h5>
                          <div className="movie-rating-percent">
                            <span>327 Montague Street</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="article-section">
                  <div className="section-header-1">
                    <h2 className="title">sports</h2>
                    <a className="view-all" href="sports.html">
                      View All
                    </a>
                  </div>
                  <div className="row mb-30-none justify-content-center">
                    <div className="col-sm-6 col-lg-4">
                      <div className="sports-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sports/sports01.jpg")}
                              alt="sports"
                            />
                          </a>
                          <div className="event-date">
                            <h6 className="date-title">28</h6>
                            <span>Dec</span>
                          </div>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">football league tournament</a>
                          </h5>
                          <div className="movie-rating-percent">
                            <span>327 Montague Street</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="sports-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sports/sports02.jpg")}
                              alt="sports"
                            />
                          </a>
                          <div className="event-date">
                            <h6 className="date-title">28</h6>
                            <span>Dec</span>
                          </div>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">world cricket league 2020</a>
                          </h5>
                          <div className="movie-rating-percent">
                            <span>327 Montague Street</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="sports-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src={require("../../assets2/assets/images/sports/sports03.jpg")}
                              alt="sports"
                            />
                          </a>
                          <div className="event-date">
                            <h6 className="date-title">28</h6>
                            <span>Dec</span>
                          </div>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">basket ball tournament 2020</a>
                          </h5>
                          <div className="movie-rating-percent">
                            <span>327 Montague Street</span>
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
      </>
    </>
  );
};

export default Events;
