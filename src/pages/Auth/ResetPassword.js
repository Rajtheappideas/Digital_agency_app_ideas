import React from "react";
import { Helmet } from "react-helmet";
import "../../assets2/assets/css/bootstrap.min.css";
import "../../assets2/assets/css/all.min.css";
import "../../assets2/assets/css/animate.css";
import "../../assets2/assets/css/magnific-popup.css";
import "../../assets2/assets/css/flaticon.css";
import "../../assets2/assets/css/odometer.css";
import "../../assets2/assets/css/nice-select.css";
import "../../assets2/assets/css/main.css";
import { useFormik, Form, FormikProvider, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import styled from "styled-components";
import { handleResetPassword } from "../../redux/AuthSlice";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { otp, email } = useLocation().state;

  const ResetPasswordSchema = yup.object().shape({
    password: yup
      .string()
      .required("Password is required.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    otp: yup
      .number()
      .typeError("OTP must be a number")
      .required("OTP is required")
      .min(6, "Min 6 numbers required."),
  });

  const formik = useFormik({
    initialValues: {
      email: email,
      password: "",
      otp: "",
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: (values) => {
      toast.dismiss();
      if (values.otp !== otp) {
        toast.error("Wrong OTP, Try again!!!");
        return false;
      }
      const response = dispatch(
        handleResetPassword({
          email: email,
          password: values.password,
          otp: values.otp,
        })
      );
      if (response) {
        response.then((res) => {
          if (res.payload.status === "success") {
            toast.success("Password Change successfully.", { duration: 3000 });
            navigate("/signin");
          }
        });
      }
    },
  });

  const { getFieldProps, handleSubmit, resetForm } = formik;
  return (
    <>
      <Helmet title="Reset Password" />
      <section
        className="account-section bg_img"
        // data-background="./assets/images/account/account-bg.jpg"
      >
        <div className="container">
          <div className="padding-top padding-bottom">
            <div className="account-area">
              <div className="section-header-3">
                <span className="cate">hello</span>
                <h2 className="title">Reset Your Password</h2>
              </div>
              <FormikProvider value={formik}>
                <Form
                  autoComplete="off"
                  onSubmit={handleSubmit}
                  className="account-form"
                >
                  <div className="form-group">
                    <label htmlFor="email1">
                      Email<span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      name="email"
                      {...getFieldProps("email")}
                      disabled={true}
                    />
                    <ErrorMessage name="email" component={TextError} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass1">
                      Password<span>*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      {...getFieldProps("password")}
                    />
                    <ErrorMessage name="password" component={TextError} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="otp">
                      OTP<span>*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="OTP"
                      name="otp"
                      maxLength={6}
                      minLength={6}
                      {...getFieldProps("otp")}
                    />
                    <ErrorMessage name="otp" component={TextError} />
                  </div>
                  <div className="form-group text-center">
                    <input
                      disabled={loading}
                      value={loading ? "Submitting..." : "Submit"}
                      type="submit"
                    />
                  </div>
                </Form>
              </FormikProvider>
              <div className="option">
                Don't have an account? <a href="/signin">Log In</a>
              </div>
              <div className="or">
                <span>Or</span>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#0">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fab fa-google" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;

const TextError = styled.span`
  color: red !important;
  font-weight: 600;
  padding-top: 10px;
  font-size: 1rem;
`;
