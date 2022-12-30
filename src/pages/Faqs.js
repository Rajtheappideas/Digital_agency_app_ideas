import { ErrorMessage, Form, FormikProvider, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import Faq from "../components/Faq";
import TitleSection from "../components/TitleSection";
import { getFaqs } from "../redux/ContentSlice";
import * as yup from "yup";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { handleContactUsSubmit } from "../redux/BasicFeaturesSlice";

const Faqs = () => {
  const [formLoading, setFormLoading] = useState(false);

  const { loading, faqs } = useSelector((state) => state.content);

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
    },
    validationSchema: contactUsSchema,
    onSubmit: (values) => {
      setFormLoading(true);
      const response = dispatch(
        handleContactUsSubmit({
          name: values.name,
          email: values.email,
          message: values.message,
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

  useEffect(() => {
    dispatch(getFaqs());
  }, []);
  return (
    <>
      <Helmet title="Faq's" />
      <TitleSection title="Faq's" />
      <section className="faq-page-section">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="title">Some Faq’s</div>
            <h2>Work with a Dedicated Digital Agency Company</h2>
            <div className="text">
              Our approach is to build amazing assets for ours clients. Our
              quality of work has proven through 820+ projects
            </div>
          </div>
          <div className="row clearfix">
            {/* Column */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <ul className="accordion-box">
                {loading ? (
                  <p className="loading">Loading...</p>
                ) : (
                  faqs
                    .slice(0, faqs.length - 3)
                    .map((faq, index) => (
                      <Faq
                        question={faq.question}
                        answer={faq.answer}
                        key={index}
                      />
                    ))
                )}
              </ul>
            </div>
            {/* Column */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <ul className="accordion-box">
                {loading ? (
                  <p className="loading">Loading...</p>
                ) : (
                  faqs
                    .slice(faqs.length - 4, faqs.length - 1)
                    .map((faq, index) => (
                      <Faq
                        question={faq.question}
                        answer={faq.answer}
                        key={index}
                      />
                    ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Faq Page Section */}
      {/* Faq's Form Section */}
      <section className="faq-form-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Form Column */}
            <div className="form-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Sec Title */}
                <div className="sec-title">
                  <div className="title">Your Quesiton</div>
                  <h2>Tell Us Any Question</h2>
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
                            {formLoading ? "Sending..." : "Send Question"}
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
                <div className="image titlt" data-tilt="" data-tilt-max={3}>
                  <img
                    src={require("../assets/images/resource/faq.png")}
                    alt="faq"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;

const TextError = styled.span`
  color: red !important;
  font-weight: 600;
  padding-top: 10px;
  font-size: 1rem;
`;
