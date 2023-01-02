import React, { useEffect } from "react";
import TitleSection from "../components/TitleSection";
import { Helmet } from "react-helmet";
import admin from "../assets/images/resource/admin.png";
import SidebarLeft from "../components/SidebarLeft";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, getEventsById } from "../redux/ContentSlice";

const Events = () => {
  const { loading } = useSelector((state) => state.content);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
    dispatch(getEventsById());
  }, []);
  return (
    <>
      <Helmet title="Events" />
      <TitleSection title="Events" />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Side */}
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="our-blogs">
                {/* News Block Four */}
                <div className="news-block-four">
                  <div
                    className="inner-box"
                    style={{
                      backgroundImage: `url(${admin})`,
                    }}
                  >
                    <div className="post-date">
                      01 <span>JAN</span>
                    </div>
                    <ul className="post-info">
                      <li>
                        <span className="author-image">
                          <img
                            src={require("../assets/images/resource/author-4.jpg")}
                            alt=""
                          />
                        </span>
                        By: Admin
                      </li>
                      <li>
                        Category:{" "}
                        <span className="theme_color">Web Design</span>
                      </li>
                    </ul>
                    <h3>
                      <a href="#">
                        How to increase your ROI through scientific SEM?
                      </a>
                    </h3>
                  </div>
                </div>
                {/* News Block Four */}
                <div className="news-block-four">
                  <div
                    className="inner-box"
                    style={{
                      backgroundImage: `url(${admin})`,
                    }}
                  >
                    <div className="post-date">
                      19 <span>FEB</span>
                    </div>
                    <ul className="post-info">
                      <li>
                        <span className="author-image">
                          <img
                            src={require("../assets/images/resource/author-4.jpg")}
                            alt=""
                          />
                        </span>
                        By: Admin
                      </li>
                      <li>
                        Category:{" "}
                        <span className="theme_color">Trending App</span>
                      </li>
                    </ul>
                    <h3>
                      <a href="#">
                        How to increase your ROI through scientific SEM?
                      </a>
                    </h3>
                  </div>
                </div>
                {/* News Block Four */}
                <div className="news-block-four">
                  <div
                    className="inner-box"
                    style={{
                      backgroundImage: `url(${admin})`,
                    }}
                  >
                    <div className="post-date">
                      03 <span>MAR</span>
                    </div>
                    <ul className="post-info">
                      <li>
                        <span className="author-image">
                          <img
                            src={require("../assets/images/resource/author-4.jpg")}
                            alt=""
                          />
                        </span>
                        By: Admin
                      </li>
                      <li>
                        Category:{" "}
                        <span className="theme_color">Cyber Security</span>
                      </li>
                    </ul>
                    <h3>
                      <a href="#">
                        How to increase your ROI through scientific SEM?
                      </a>
                    </h3>
                  </div>
                </div>
                {/* News Block Four */}
                <div className="news-block-four">
                  <div
                    className="inner-box"
                    style={{
                      backgroundImage: `url(${admin})`,
                    }}
                  >
                    <div className="post-date">
                      04 <span>APR</span>
                    </div>
                    <ul className="post-info">
                      <li>
                        <span className="author-image">
                          <img
                            src={require("../assets/images/resource/author-4.jpg")}
                            alt=""
                          />
                        </span>
                        By: Admin
                      </li>
                      <li>
                        Category: <span className="theme_color">AI</span>
                      </li>
                    </ul>
                    <h3>
                      <a href="#">
                        How to increase your ROI through scientific SEM?
                      </a>
                    </h3>
                  </div>
                </div>
                {/* News Block Four */}
                <div className="news-block-four">
                  <div
                    className="inner-box"
                    style={{
                      backgroundImage: `url(${admin})`,
                    }}
                  >
                    <div className="post-date">
                      05 <span>MAY</span>
                    </div>
                    <ul className="post-info">
                      <li>
                        <span className="author-image">
                          <img
                            src={require("../assets/images/resource/author-4.jpg")}
                            alt=""
                          />
                        </span>
                        By: Admin
                      </li>
                      <li>
                        Category:{" "}
                        <span className="theme_color">Conference Appideas</span>
                      </li>
                    </ul>
                    <h3>
                      <a href="#">
                        How to increase your ROI through scientific SEM?
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar Side */}
            <SidebarLeft />
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
