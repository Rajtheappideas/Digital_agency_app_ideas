import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { ErrorMessage, Form, FormikProvider, useFormik } from "formik";
import { handleContactUsSubmit } from "../redux/BasicFeaturesSlice";

const ContactUs = () => {
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
    package: yup.string().required("Package is required").trim(),
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
      package: "",
    },
    validationSchema: contactUsSchema,
    onSubmit: (values) => {
      setFormLoading(true);
      const response = dispatch(
        handleContactUsSubmit({
          name: values.name,
          email: values.email,
          message: values.message,
          pacakge: values.package,
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
    <section className="faq-form-section">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Form Column */}
          <div className="form-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              {/* Sec Title */}
              <div className="sec-title">
                <div className="title">Your Quesiton</div>
                <h2>Choose packages you need for your Business</h2>
                <div className="text">
                  We provide best service for our customer check the list now.
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
                      <select name="package" {...getFieldProps("package")}>
                        <option label="Select a package :" />
                        <option value="Package Maintenance">
                          Package Maintenance
                        </option>
                        <option value="Package Marketing">
                          Package Marketing
                        </option>
                        <option value="Package Hosting">Package Hosting</option>
                      </select>
                      <ErrorMessage name="package" component={TextError} />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Message"
                        id="message"
                        {...getFieldProps("message")}
                      />
                      <ErrorMessage name="message" component={TextError} />
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
          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div
                className="image titlt"
                data-tilt=""
                data-tilt-max={3}
                style={{
                  willChange: "transform",
                  transform: "perspective(300px) rotateX(0deg) rotateY(0deg)",
                }}
              >
                <img
                  src={require("../assets/images/resource/package.png")}
                  alt="package"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

const TextError = styled.span`
  color: red !important;
  font-weight: 600;
  padding-top: 10px;
  font-size: 1rem;
`;
