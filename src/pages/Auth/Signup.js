import React from "react";
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
import { handleSignup } from "../../redux/AuthSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Signup = () => {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignupSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Too much sort")
      .max(25, "Too much long"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    checkBox: yup
      .boolean()
      .oneOf([true], "Please tick check box")
      .required("Please tick check box"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkBox: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      const response = dispatch(
        handleSignup({
          name: values.name,
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
      <Helmet title="Sign Up" />
      <section
        className="account-section bg_img"
        // style={{ backgroundImage: `url(${img})` }}
      >
        <div className="container">
          <div className="padding-top padding-bottom">
            <div className="account-area">
              <div className="section-header-3">
                <span className="cate">welcome</span>
                <h2 className="title">to AppIdeas </h2>
              </div>
              <FormikProvider value={formik}>
                <Form
                  autoComplete="off"
                  onSubmit={handleSubmit}
                  className="account-form"
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      Name<span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      id="name"
                      {...getFieldProps("name")}
                    />
                    <ErrorMessage name="name" component={TextError} />
                  </div>
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
                  <div className="form-group">
                    <label htmlFor="pass2">
                      Confirm Password<span>*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="confirmPassword"
                      {...getFieldProps("confirmPassword")}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component={TextError}
                    />
                  </div>
                  <div className="form-group checkgroup">
                    <input
                      type="checkbox"
                      name="checkBox"
                      {...getFieldProps("checkBox")}
                    />

                    <label htmlFor="bal">
                      I agree to the{" "}
                      <a href="/privacy">Terms, Privacy Policy</a> and{" "}
                      <a href="#0">Fees</a>
                    </label>
                    <ErrorMessage name="checkBox" component={TextError} />
                  </div>
                  <div className="form-group text-center">
                    <input
                      type="submit"
                      value={loading ? "Submitting..." : "Sign Up"}
                      disabled={loading}
                    ></input>
                  </div>
                </Form>
              </FormikProvider>

              <div className="option">
                Already have an account? <a href="/signin">Login</a>
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

export default Signup;

const TextError = styled.span`
  color: red !important;
  font-weight: 600;
  padding-top: 10px;
  font-size: 1rem;
`;
