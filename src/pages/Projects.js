import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import TitleSection from "../components/TitleSection";
import bgbrochures from "../assets/images/background/pattern-19.jpg";
import brochures from "../assets/document/Appideas-Brochure.pdf";
import SidebarLeft from "../components/SidebarLeft";
import { useDispatch, useSelector } from "react-redux";
import { getProjects, getProjectsById } from "../redux/ContentSlice";

const Projects = () => {
  const { projects, loading } = useSelector((state) => state.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
    dispatch(getProjectsById());
  }, []);
  return (
    <>
      <Helmet title="Projects" />
      <TitleSection title="Projects" />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Sidebar Side */}
            <SidebarLeft />
            {/* Content Side */}
            <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/* Gallery Block */}
                <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src={require("../assets/images/gallery/1.jpg")}
                        alt=""
                      />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/1.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">System Project</div>
                      <h5>
                        <a href="projects-detail.html">Movie Recommendation</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src={require("../assets/images/gallery/2.jpg")}
                        alt=""
                      />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/2.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Machine Learning</div>
                      <h5>
                        <a href="projects-detail.html">Customer Segmentation</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src={require("../assets/images/gallery/3.jpg")}
                        alt=""
                      />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/3.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Web Project</div>
                      <h5>
                        <a href="projects-detail.html">Data Analysis</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src={require("../assets/images/gallery/4.jpg")}
                        alt=""
                      />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/4.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Programming</div>
                      <h5>
                        <a href="projects-detail.html">Detection Project</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src={require("../assets/images/gallery/5.jpg")}
                        alt=""
                      />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/5.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Data Science</div>
                      <h5>
                        <a href="projects-detail.html">Data Scientist</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src={require("../assets/images/gallery/6.jpg")}
                        alt=""
                      />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/6.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Science Projects</div>
                      <h5>
                        <a href="projects-detail.html">Benefits Research</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
