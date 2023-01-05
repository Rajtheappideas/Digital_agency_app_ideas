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

const Advertising = () => {
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
      <Helmet title="Service | Advertising" />
      <TitleSection title="Advertising" />
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
                      src={require("../assets/images/resource/advertising.png")}
                      alt="Advertising"
                    />
                  </div>
                  <div className="lower-content">
                    <h3>Advertising</h3>
                    <p>
                      Advertising enable you to target specific keywords and/or
                      audiences with highly relevant ads. You only pay when
                      someone interacts with or views your advertisement, making
                      it a cost-effective and measurable way to reach people who
                      are actively searching for or have expressed an interest
                      in your services.
                    </p>
                    <div className="two-columns">
                      <div className="row clearfix">
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <p>
                            Depending on what works best for your business, you
                            can choose from a variety of media campaigns across
                            a number of platforms. This gives you a lot of
                            flexibility and control over your ads and costs, and
                            it can instantly boost your online presence.{" "}
                          </p>
                          <p>
                            Networks provide you targeting options, including
                            demographics, location, keyword usage, and time of
                            day. The ability to cast a wide net with precision
                            can result in extraordinary returns at a high cost.
                            Many businesses, for example, benefit from targeting
                            local customers looking for nearby goods and
                            services.
                          </p>
                        </div>
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <div className="image">
                            <img
                              src={require("../assets/images/gifs/12.gif")}
                              alt="web-development"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4>
                      Are you on the lookout for the greatest Advertising
                      services available?
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

export default Advertising;

const TextError = styled.span`
  color: red !important;
  font-weight: 600;
  padding-top: 10px;
  font-size: 1rem;
`;
