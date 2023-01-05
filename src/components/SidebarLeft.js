import React from "react";
import bgbrochures from "../assets/images/background/pattern-19.jpg";
import brochures from "../assets/document/Appideas-Brochure.pdf";
import { BsArrowRightShort } from "react-icons/bs";
import { useSelector } from "react-redux";

const SidebarLeft = ({ title }) => {
  const { projects, loading, services } = useSelector((state) => state.content);

  return (
    <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
      <aside className="sidebar sticky-top">
        {/* Services */}
        <div className="sidebar-widget">
          <ul className="service-list">
            <li>
              <a href="/services">
                <span className="color-layer" />
                All {title}
                <BsArrowRightShort style={{ float: "right" }} size={25} />
              </a>
            </li>
            {title === "Projects" &&
              projects.length > 0 &&
              projects.map((project) => (
                <li key={project?._id}>
                  <a href="/content-marketing">
                    <span className="color-layer" />
                    {project?.category}
                    <BsArrowRightShort style={{ float: "right" }} size={25} />
                  </a>
                </li>
              ))}
            <li>
              <a href="/social-marketing">
                <span className="color-layer" />
                Social Marketing
                <BsArrowRightShort style={{ float: "right" }} size={25} />
              </a>
            </li>
            <li>
              <a href="/app-development">
                <span className="color-layer" />
                App Development
                <BsArrowRightShort style={{ float: "right" }} size={25} />
              </a>
            </li>
            <li>
              <a href="/seo">
                <span className="color-layer" />
                SEO Optimization
                <BsArrowRightShort style={{ float: "right" }} size={25} />
              </a>
            </li>
            <li>
              <a href="/web-development">
                <span className="color-layer" />
                Web Development
                <BsArrowRightShort style={{ float: "right" }} size={25} />
              </a>
            </li>
            <li>
              <a href="/advertising">
                <span className="color-layer" />
                Advertising
                <BsArrowRightShort style={{ float: "right" }} size={25} />
              </a>
            </li>
          </ul>
        </div>
        {/* Brochures Widget */}
        <div className="broucher-widget">
          <div
            className="widget-content"
            style={{
              backgroundImage: `url(${bgbrochures})`,
            }}
          >
            <h3>Our Brochures</h3>
            <div className="icon flaticon-pdf-1" />
            <div className="text">
              Business is a marketing discipline focused on growing visibility
              in organic (non-paid) technic required.
            </div>
            <a href={brochures} download className="download">
              Download Our Brochure
            </a>
          </div>
        </div>
        {/* Help Widget */}
        <div className="help-widget">
          <div className="widget-content">
            <h4>Need Help ?</h4>
            <div className="text">
              Please feel free to contact us. We will get back to you with 1-2
              business days. Or just call us now
            </div>
            <ul className="help-list">
              <li>
                <a href="tel:0032493986537">
                  <span className="icon fas fa-phone-alt" />
                  (+32) 493 98 65 37
                </a>
              </li>
              <li>
                <a href="mailto:info@appideas.tech">
                  <span className="icon fa fa-envelope" />
                  info@appideas.tech
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SidebarLeft;
