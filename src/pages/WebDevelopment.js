import React, { useState } from "react";
import TitleSection from "../components/TitleSection";
import { Helmet } from "react-helmet";
import SidebarLeft from "../components/SidebarLeft";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { ErrorMessage, Form, FormikProvider, useFormik } from "formik";
import { handleContactUsSubmit } from "../redux/BasicFeaturesSlice";

const WebDevelopment = () => {
  const [formLoading, setFormLoading] = useState(false);

  const dispatch = useDispatch();

  const contactUsSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .trim()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(2, "too short")
      .max(30, "too long"),
    email: yup.string().email().required("Email is required").trim(),
    service: yup.string().required("Service is required").trim(),
    message: yup
      .string()
      .required("Message is required")
      .trim()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(3, "too short")
      .max(150, "too long"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      service: "",
    },
    validationSchema: contactUsSchema,
    onSubmit: (values) => {
      setFormLoading(true);
      const response = dispatch(
        handleContactUsSubmit({
          name: values.name,
          email: values.email,
          message: values.message,
          service: values.service,
        })
      );
      if (response) {
        response.then((res) => {
          if (res.payload.status === "success") {
            toast.success("Question sent successfully.");
            setFormLoading(false);
            resetForm();
          }
        });
      }
    },
  });

  const { getFieldProps, handleSubmit, resetForm } = formik;
  return (
    <>
      <Helmet title="Service | Web Development" />
      <TitleSection title="Web Development" />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Sidebar Side */}
            <SidebarLeft title="Services" />
            {/* Content Side */}
            <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
              <div className="service-detail">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src={require("../assets/images/resource/web.png")}
                      alt="web-developement"
                    />
                  </div>
                  <div className="lower-content">
                    <h3>Web Development</h3>
                    <p>
                      With a team of creative minds and experienced web
                      development professionals, App Ideas can assist you in
                      shaping your web presence to the target audience. With
                      every business looking for its own space on the web, it is
                      becoming increasingly competitive, which is why, to assist
                      you in connecting your audience with the brand message, we
                      focus on custom website solutions rather than standard web
                      development.
                    </p>
                    <div className="two-columns">
                      <div className="row clearfix">
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <p>
                            Web development is currently one of the most popular
                            solutions. Nowadays, there are thousands of web
                            solutions available for various services such as
                            e-commerce, food ordering platforms, e-learning
                            apps, dating apps, taxi booking apps, doctor hiring
                            apps, and more.{" "}
                          </p>
                          <p>
                            App Ideas is a skilled software development firm. We
                            have a talented team of web developers who provide
                            the best solutions.
                          </p>
                        </div>
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <div className="image">
                            <img
                              src={require("../assets/images/gifs/4.gif")}
                              alt="web-development"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      We are one of the most well-known web development firms.
                      We provide the best website development services for all
                      types of organizations and industries. We have a lot of
                      expertise and are specialists in providing quality web
                      development services using cutting-edge technologies.
                      We've worked on a variety of website development projects
                      and can offer the finest solution at the greatest price to
                      meet the needs of our clients.
                    </p>
                    <h4>
                      Are you on the lookout for the greatest Website
                      Development services available?
                    </h4>
                    <p>
                      If you answered yes, now is definitely the greatest moment
                      to consider and invest in digitalizing your business with
                      advanced features. We would be delighted to assist you in
                      launching a successful website building service that will
                      be beneficial to your company.
                    </p>
                  </div>
                  <div className="inner-column pb-5">
                    {/* Sec Title */}
                    <div className="sec-title">
                      <div className="title">Your Quesiton</div>
                      <h2>Choose packages you need for your Business</h2>
                      <div className="text">
                        We provide best service for our customer check the list
                        now.
                      </div>
                    </div>
                    {/* Faq's Form */}
                    <div className="faq-form">
                      <FormikProvider value={formik}>
                        <Form autoComplete="off" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              id="name"
                              autoComplete="off"
                              {...getFieldProps("name")}
                            />
                            <ErrorMessage name="name" component={TextError} />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              id="email"
                              autoComplete="off"
                              {...getFieldProps("email")}
                            />
                            <ErrorMessage name="email" component={TextError} />
                          </div>
                          <div className="form-group">
                            <select
                              name="service"
                              {...getFieldProps("service")}
                            >
                              <option label="Select a service :"></option>
                              <option value="Web Design & Development">
                                Web Design &amp; Development
                              </option>
                              <option value="App Design & Development">
                                App Design &amp; Development
                              </option>
                              <option value="Digital-Marketing">
                                Digital-Marketing
                              </option>
                            </select>
                            <ErrorMessage
                              name="service"
                              component={TextError}
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              name="message"
                              placeholder="Message"
                              id="message"
                              {...getFieldProps("message")}
                            />
                            <ErrorMessage
                              name="message"
                              component={TextError}
                            />
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="theme-btn btn-style-three"
                              disabled={formLoading}
                            >
                              <span className="txt">
                                {formLoading ? "Sending..." : "Send"}
                              </span>
                            </button>
                          </div>
                        </Form>
                      </FormikProvider>
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

export default WebDevelopment;

const TextError = styled.span`
  color: red !important;
  font-weight: 600;
  padding-top: 10px;
  font-size: 1rem;
`;
