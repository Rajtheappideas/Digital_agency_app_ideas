import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import TitleSection from "../components/TitleSection";
import SidebarLeft from "../components/SidebarLeft";
import { useDispatch, useSelector } from "react-redux";
import { getProjects, getProjectsById } from "../redux/ContentSlice";
import BaseUrl from "../BaseUrl";
import { Link } from "react-router-dom";

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
            <SidebarLeft title="Projects" />
            {/* Content Side */}
            <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
              <div className="row clearfix">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  projects.map((project) => (
                    <div
                      className="gallery-block col-lg-6 col-md-6 col-sm-12"
                      key={project?._id}
                    >
                      <div className="inner-box">
                        <figure className="image-box">
                          <img
                            src={BaseUrl.concat(project?.image?.src)}
                            alt={project?.title}
                          />
                          {/* Overlay Box */}
                          <div className="overlay-box">
                            <div className="overlay-inner">
                              <div className="content">
                                <a
                                  href={BaseUrl.concat(project?.image.src)}
                                  target="_blank"
                                  data-fancybox="gallery"
                                  data-caption=""
                                  className="icon flaticon-plus"
                                />
                              </div>
                            </div>
                          </div>
                        </figure>
                        <div className="lower-content">
                          <div className="title">{project?.category}</div>
                          <h5>
                            <Link to={`/project-details/${project?._id}`}>
                              {project?.title}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
