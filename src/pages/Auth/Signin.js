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
import { handleSignin, handleSignup } from "../../redux/AuthSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SigninSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SigninSchema,
    onSubmit: (values) => {
      const response = dispatch(
        handleSignin({
          email: values.email,
          password: values.password,
        })
      );
      if (response) {
        response.then((res) => {
          if (res.payload.status === "success") {
            toast.success("Sign up successfully.");
            navigate("/");
            resetForm();
          }
        });
      }
    },
  });

  const { getFieldProps, handleSubmit, resetForm } = formik;
  return (
    <>
      <Helmet title="Sign In" />
      <section
        className="account-section bg_img"
        // data-background="./assets/images/account/account-bg.jpg"
      >
        <div className="container">
          <div className="padding-top padding-bottom">
            <div className="account-area">
              <div className="section-header-3">
                <span className="cate">hello</span>
                <h2 className="title">welcome back</h2>
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
                  <div className="form-group checkgroup">
                    {/* <input
                      type="checkbox"
                      id="bal2"
                      required=""
                      defaultChecked=""
                    />
                    <label htmlFor="bal2">remember password</label> */}
                    <a href="/forgotpassword" className="forget-pass">
                      Forget Password ?
                    </a>
                  </div>
                  <div className="form-group text-center">
                    <input
                      disabled={loading}
                      value={loading ? "Logging in..." : "Log in"}
                      type="submit"
                    />
                  </div>
                </Form>
              </FormikProvider>
              <div className="option">
                Don't have an account? <a href="/signup">sign up now</a>
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

export default Signin;

const TextError = styled.span`
  color: red !important;
  font-weight: 600;
  padding-top: 10px;
  font-size: 1rem;
`;
