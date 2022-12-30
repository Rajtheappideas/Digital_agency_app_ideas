import React, { useState } from "react";
import TitleSection from "../components/TitleSection";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Form, FormikProvider, useFormik } from "formik";
import { handleContactUsSubmit } from "../redux/BasicFeaturesSlice";
import * as yup from "yup";
import styled from "styled-components";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

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
    phone: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .required("Phone is required"),
    subject: yup
      .string()
      .required("Subejct is required")
      .trim()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(2, "too short")
      .max(50, "too long"),
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
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: contactUsSchema,
    onSubmit: (values) => {
      setLoading(true);
      const response = dispatch(
        handleContactUsSubmit({
          name: values.name,
          phone: values.phone,
          email: values.email,
          subject: values.subject,
          message: values.message,
        })
      );
      if (response) {
        response.then((res) => {
          if (res.payload.status === "success") {
            toast.success("Message sent successfully.");
            setLoading(false);
            resetForm();
          }
        });
      }
    },
  });

  const { getFieldProps, handleSubmit, resetForm } = formik;
  return (
    <>
      <Helmet title="Contactus" />
      <TitleSection title="Contactus" />
      <>
        <section className="contact-info-section">
          <div className="auto-container">
            {/* Sec Title */}
            <div className="sec-title centered">
              <div className="title">Follow Our Info</div>
              <h2>Contact information</h2>
              <div className="text">
                Give us a call or drop by anytime, we endeavour to answer all
                enquiries within 24 hours on business days. <br /> We will be
                happy to answer your questions.
              </div>
            </div>
            <div className="inner-container">
              <div className="row clearfix">
                {/* Column */}
                <div className="column col-lg-6 col-md-6 col-sm-12">
                  <div className="info-box">
                    <div className="box-inner">
                      <div className="icon flaticon-clock" />
                      09:00am to 5:00pm <br /> Weekend Closed
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className="column col-lg-6 col-md-6 col-sm-12">
                  <div className="info-box">
                    <div className="box-inner">
                      <div className="icon flaticon-pin" />
                      Wolstraat 70, <br /> 1000 Brussel
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className="column col-lg-6 col-md-6 col-sm-12">
                  <div className="info-box">
                    <div className="box-inner">
                      <div className="icon flaticon-phone-call" />
                      <a href="tel:+3227906098">(+32) 2 790 60 98</a>
                      <a href="mailto:info@appideas.tech">info@appideas.tech</a>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className="column col-lg-6 col-md-6 col-sm-12 d-none">
                  <ul className="social-box">
                    <span>
                      Our Socials Links{" "}
                      <i>
                        Print this page to PDF for the complete set of vectors.
                      </i>
                    </span>
                    <li className="facebook">
                      <a className="fab fa-facebook-f" href="#" />
                    </li>
                    <li className="twitter">
                      <a className="fab fa-twitter" href="#" />
                    </li>
                    <li className="linkedin">
                      <a href="#" className="fab fa-google-plus" />
                    </li>
                    <li className="pinterest">
                      <a href="#" className="fa fa-pinterest-p" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Map Boxed */}
            <div className="map-boxed">
              {/* Map Outer */}
              <div className="map-outer">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.739567983044!2d4.350216916082161!3d50.83598767953035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c46343a80793%3A0xd5b0192a46cebd06!2sWolstraat%2C%201000%20Brussel!5e0!3m2!1snl!2sbe!4v1653904680576!5m2!1snl!2sbe"
                  width="100%"
                  height="560px"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Info Section */}
        {/* Contact Form Section */}
        <section className="contact-form-section">
          <div className="auto-container">
            {/* Sec Title */}
            <div className="sec-title centered">
              <div className="title">Don’t Hesitate To Contact With us</div>
              <h2>Now Very Easy</h2>
              <div className="text">
                Our approach to SEO is uniquely built around what we know
                works…and what we know <br /> doesn’t work. With over 200
                verified factors in play.
              </div>
            </div>
            <div className="inner-container">
              {/* Contact Form */}
              <div className="contact-form">
                {/*Contact Form*/}
                <FormikProvider value={formik}>
                  <Form autoComplete="off" onSubmit={handleSubmit}>
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label
                          htmlFor="username"
                          className="icon flaticon-user-2"
                        />
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
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label
                          htmlFor="phone"
                          className="icon flaticon-phone-call"
                        />
                        <input
                          type="tel"
                          maxLength={10}
                          name="phone"
                          placeholder="Your Phone"
                          id="phone"
                          autoComplete="off"
                          {...getFieldProps("phone")}
                        />
                        <ErrorMessage name="phone" component={TextError} />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label
                          htmlFor="email"
                          className="icon flaticon-big-envelope"
                        />
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
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label
                          htmlFor="subject"
                          className="icon flaticon-notepad"
                        />
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          id="subject"
                          autoComplete="off"
                          {...getFieldProps("subject")}
                        />
                        <ErrorMessage name="subject" component={TextError} />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <label
                          htmlFor="message"
                          className="icon flaticon-message"
                        />
                        <textarea
                          name="message"
                          placeholder="Message"
                          id="message"
                          {...getFieldProps("message")}
                        />
                        <ErrorMessage name="message" component={TextError} />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                        <button
                          className="theme-btn btn-style-three"
                          type="submit"
                          disabled={loading}
                        >
                          <span className="txt">
                            {loading ? "Submitting..." : "Submit Now"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </Form>
                </FormikProvider>
                {/*End Contact Form */}
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Contact;

const TextError = styled.span`
  color: red !important;
  font-weight: 600;
  padding-top: 10px;
  font-size: 1rem;
`;
