import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TitleSection from "../components/TitleSection";
import img from "../assets/images/background/pattern-19.jpg";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { ErrorMessage, Form, FormikProvider, useFormik } from "formik";
import { handlePostProjectReview } from "../redux/FeatureSlice";
import { getProjectsById } from "../redux/ContentSlice";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [formLoading, setFormLoading] = useState(false);
  const [rating, setRating] = useState(0);

  const { project, loading } = useSelector((state) => state.content);

  const dispatch = useDispatch();
  const { id } = useParams();

  const contactUsSchema = yup.object().shape({
    fname: yup
      .string()
      .required("First Name is required")
      .trim()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(2, "too short")
      .max(30, "too long"),
    lname: yup
      .string()
      .required("Last Name is required")
      .trim()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(2, "too short")
      .max(30, "too long"),
    email: yup.string().email().required("Email is required").trim(),
    comment: yup.string().required("Comment is required").trim(),
  });

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      comment: "",
    },
    validationSchema: contactUsSchema,
    onSubmit: (values) => {
      toast.dismiss();
      if (rating === 0) {
        toast.error("Choose the rating!!!");
        return false;
      }
      setFormLoading(true);
      const response = dispatch(
        handlePostProjectReview({
          fname: values.fname,
          lname: values.lname,
          email: values.email,
          comment: values.comment,
          rating: rating,
          projectId: id,
        })
      );
      if (response) {
        response.then((res) => {
          if (res.payload.status === "success") {
            toast.success("Review add successfully.");
            setFormLoading(false);
            resetForm();
            setRating(0)
          }
        });
      }
    },
  });

  const { getFieldProps, handleSubmit, resetForm } = formik;

  useEffect(() => {
    dispatch(getProjectsById({ id }));
  }, []);
  return (
    <>
      <Helmet title="Project Details" />
      <TitleSection title="Project Details" />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Side */}
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              {/* News Detail */}
              <div className="news-detail">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src={require("../assets/images/resource/news-14.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="lower-content">
                    <ul className="post-meta">
                      <li>
                        <span className="icon fa fa-user" />
                        Zoya
                      </li>
                      <li>
                        <span className="icon fa fa-calendar" /> November 21,
                        2021
                      </li>
                    </ul>
                    <h2>
                      Absolute Links vs. Relative Links – SEO Intrinsic Value
                    </h2>
                    <p>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci
                      velit.
                    </p>
                    <p>
                      The basic premise of search engine reputation management
                      in to use the greate work Why I say old chap that is,
                      spiffing jolly good a load of old tosh spend a penny
                      tosser arse over{" "}
                    </p>
                    <p>
                      Spring is often associated with a fresh, new, clean start
                      and a renewed sense of life. For many, this getting rid of
                      the old and in with the new takes on the form of spring
                      cleaning. While you may be thinking about the house, why
                      not think of refreshing and reviving your business’
                      website? After all, your website is your business’
                      presence online and is the first interaction customers
                      have with your company.
                    </p>
                    <p>
                      Does your website accurately display your company’s
                      character, personality and culture? Is it current and up
                      to date?
                    </p>
                    <p>
                      Like your home, you may acquire a different taste in décor
                      and choose to go beyond cleaning to overhauling a room’s
                      look. Spring is a great time to do the same for your
                      business website.
                    </p>
                    <blockquote>
                      “I cannot give you the formula for success, but I can give
                      you the formula for failure. It is: Try to please
                      everybody.”
                      <span className="author-name">Bayard Herbert</span>
                    </blockquote>
                    <div className="row clearfix">
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <div className="image">
                          <img
                            src={require("../assets/images/resource/news-15.jpg")}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <div className="image">
                          <img
                            src={require("../assets/images/resource/news-16.jpg")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <h3>
                      Absolute Links vs. Relative Links – SEO Intrinsic Value
                    </h3>
                    <p>
                      Some SEO-related tools such as the Google Keyword Planner
                      and Google Analytics provide quantitative data to help you
                      understand your market, analyze the trends, and know your
                      competitors’ standings. It helps you identify popular and
                      valuable keywords so you can decide how to structure or
                      revise your content. It also gives you insights on your
                      market’s behavior such as location, times of activity,
                      frequency of searches, technologies used, product
                      preferences, etc. All these metrics are useful in helping
                      you get to know your audience, their needs, and their
                      expectations.
                    </p>
                    {/* Post Share Options*/}
                    <div className="post-share-options">
                      <div className="post-share-inner clearfix">
                        <div className="pull-left">
                          <div className="post-title">Tags:</div>
                          <ul className="tags">
                            <li>
                              <a href="#">App,</a>
                            </li>
                            <li>
                              <a href="#">Agencyco,</a>
                            </li>
                            <li>
                              <a href="#">History,</a>
                            </li>
                            <li>
                              <a href="#">Blue,</a>
                            </li>
                            <li>
                              <a href="#">Gold</a>
                            </li>
                          </ul>
                        </div>
                        <ul className="social-box pull-right">
                          <li className="facebook">
                            <a href="#">
                              <span className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li className="twitter">
                            <a href="#">
                              <span className="fab fa-twitter" />
                            </a>
                          </li>
                          <li className="linkedin">
                            <a href="#">
                              <span className="fab fa-google-plus" />
                            </a>
                          </li>
                          <li className="pinterest">
                            <a href="#">
                              <span className="fa fa-pinterest-p" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Author Box */}
                <div className="authors-box">
                  <div className="author-inner">
                    <div className="thumb">
                      <img
                        src={require("../assets/images/resource/author-6.jpg")}
                        alt=""
                      />
                    </div>
                    <div className="author">Author</div>
                    <h4 className="name">Manika Rock</h4>
                    <div className="text">
                      He is attended the State University of New York at Oswego
                      where he majored in English Literature and Creative
                      Writing.
                    </div>
                    <ul className="social-icon clearfix">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-google-plus" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Comments Area*/}
                <div className="comments-area">
                  <div className="group-title">
                    <h4>Read Comments</h4>
                  </div>
                  {/*Comment Box*/}
                  <div className="comment-box">
                    <div className="comment">
                      <div className="author-thumb">
                        <img
                          src={require("../assets/images/resource/author-1.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="comment-inner">
                        <div className="comment-info clearfix">
                          Steven Rich – Dec 17, 2021
                        </div>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star light" />
                        </div>
                        <div className="text">
                          How all this mistaken idea of denouncing pleasure and
                          praising pain was born and I will give you a complete
                          account of the system, and expound the actual
                          teachings.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Comment Box*/}
                  <div className="comment-box reply-comment">
                    <div className="comment">
                      <div className="author-thumb">
                        <img
                          src={require("../assets/images/resource/author-2.png")}
                          alt=""
                        />
                      </div>
                      <div className="comment-inner">
                        <div className="comment-info clearfix">
                          William Cobus – Dec 20, 2021
                        </div>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star-half-empty" />
                        </div>
                        <div className="text">
                          There anyone who loves or pursues or desires to obtain
                          pain itself, because it is pain sed, because
                          occasionally circumstances occur some great pleasure.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Comment Form */}
                <div className="comment-form">
                  <div className="group-title">
                    <h4>Add Your Reviews</h4>
                  </div>
                  <FormikProvider value={formik}>
                    <Form autoComplete="off" onSubmit={handleSubmit}>
                      <div className="rating-box">
                        <div className="text"> Your Rating:</div>
                        <div className="rating" onClick={() => setRating(1)}>
                          <a
                            style={{
                              cursor: "pointer",
                              color: rating === 1 && "#fa9928",
                            }}
                          >
                            {" "}
                            <span className="fa fa-star" />
                          </a>
                        </div>
                        <div className="rating" onClick={() => setRating(2)}>
                          <a
                            style={{
                              cursor: "pointer",
                              color: rating === 2 && "#fa9928",
                            }}
                          >
                            {" "}
                            <span className="fa fa-star" />
                          </a>
                          <a
                            style={{
                              cursor: "pointer",
                              color: rating === 2 && "#fa9928",
                            }}
                          >
                            {" "}
                            <span className="fa fa-star" />
                          </a>
                        </div>
                        <div className="rating" onClick={() => setRating(3)}>
                          <a
                            style={{
                              cursor: "pointer",
                              color: rating === 3 && "#fa9928",
                            }}
                          >
                            {" "}
                            <span className="fa fa-star" />
                          </a>
                          <a
                            style={{
                              cursor: "pointer",
                              color: rating === 3 && "#fa9928",
                            }}
                          >
                            {" "}
                            <span className="fa fa-star" />
                          </a>
                          <a
                            style={{
                              cursor: "pointer",
                              color: rating === 3 && "#fa9928",
                            }}
                          >
                            {" "}
                            <span className="fa fa-star" />
                          </a>
                        </div>
                        <div className="rating" onClick={() => setRating(4)}>
                          <a
                            style={{
                              cursor: "pointer",
                              color: rating === 4 && "#fa9928",
                            }}
                          >
                            {" "}
                            <span className="fa fa-star" />
                          </a>
                          <a
                            style={{
                              cursor: "pointer",
                              color: rating === 4 && "#fa9928",
                            }}
                          >
                            {" "}
                            <span className="fa fa-star" />
                          </a>
                          <a
                            style={{
                              cursor: "pointer",
                              color: rating === 4 && "#fa9928",
                            }}
                          >
                            {" "}
                            <span className="fa fa-star" />
                          </a>
                          <a
                            style={{
                              cursor: "pointer",
                              color: rating === 4 && "#fa9928",
                            }}
                          >
                            {" "}
                            <span className="fa fa-star" />
                          </a>
                        </div>
                        <div className="rating" onClick={() => setRating(5)}>
                          <a
                            style={{
                              cursor: "pointer",
                              color: rating === 5 && "#fa9928",
                            }}
                          >
                            <span className="fa fa-star" />
                          </a>
                          <a
                            style={{
                              cursor: "pointer",
                              color: rating === 5 && "#fa9928",
                            }}
                          >
                            {" "}
                            <span className="fa fa-star" />
                          </a>
                          <a
                            style={{
                              cursor: "pointer",
                              color: rating === 5 && "#fa9928",
                            }}
                          >
                            {" "}
                            <span className="fa fa-star" />
                          </a>
                          <a
                            style={{
                              cursor: "pointer",
                              color: rating === 5 && "#fa9928",
                            }}
                          >
                            {" "}
                            <span className="fa fa-star" />
                          </a>
                          <a
                            style={{
                              cursor: "pointer",
                              color: rating === 5 && "#fa9928",
                            }}
                          >
                            {" "}
                            <span className="fa fa-star" />
                          </a>
                        </div>
                      </div>

                      <div className="row clearfix">
                        <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                          <label>Your Name*</label>
                          <input
                            type="text"
                            name="fname"
                            {...getFieldProps("fname")}
                          />
                          <ErrorMessage name="fname" component={TextError} />
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                          <label>Last Name*</label>
                          <input
                            type="text"
                            name="lname"
                            {...getFieldProps("lname")}
                          />
                          <ErrorMessage name="lname" component={TextError} />
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                          <label>Email*</label>
                          <input
                            type="email"
                            name="email"
                            {...getFieldProps("email")}
                          />
                          <ErrorMessage name="email" component={TextError} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                          <label>Your Comments*</label>
                          <textarea
                            name="comment"
                            {...getFieldProps("comment")}
                          />
                          <ErrorMessage name="comment" component={TextError} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                          <button
                            className="theme-btn btn-style-two"
                            type="submit"
                            name="submit-form"
                            disabled={formLoading}
                          >
                            <span className="txt">
                              {formLoading ? "Submitting..." : "Submit Now"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </Form>
                  </FormikProvider>
                </div>
              </div>
            </div>
            {/* Sidebar Side */}
            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar sticky-top">
                {/* Search */}
                <div className="sidebar-widget search-box">
                  <form>
                    <div className="form-group">
                      <input
                        type="search"
                        name="search-field"
                        defaultValue=""
                        placeholder="Search Here"
                        required=""
                      />
                      <button type="button">
                        <span className="icon fa fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                {/* Categories Widget */}
                <div className="sidebar-widget categories-widget">
                  <div className="sidebar-title">
                    <h4>Categories</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="blog-cat">
                      <li>
                        <a href="#">
                          Content Marketing <span>( 01 )</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Social Marketing <span>( 25 )</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          App Development <span>( 66 )</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          SEO Optimization <span>( 12 )</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Web Development <span>( 11 )</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          PPC Advertising <span>( 02 )</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Categories Widget */}
                <div className="sidebar-widget popular-posts">
                  <div className="sidebar-title">
                    <h4>Recent Post</h4>
                  </div>
                  <div className="widget-content">
                    <article className="post">
                      <figure className="post-thumb">
                        <img src="images/resource/post-thumb-1.jpg" alt="" />
                        <a href="/project-details" className="overlay-box">
                          <span className="icon fa fa-link" />
                        </a>
                      </figure>
                      <div className="text">
                        <a href="/project-details">
                          Google now disregards overlooks all links.
                        </a>
                      </div>
                      <div className="post-info">November 21, 2021</div>
                    </article>
                    <article className="post">
                      <figure className="post-thumb">
                        <img src="images/resource/post-thumb-2.jpg" alt="" />
                        <a href="/project-details" className="overlay-box">
                          <span className="icon fa fa-link" />
                        </a>
                      </figure>
                      <div className="text">
                        <a href="/project-details">
                          How to increase your ROI through scientific SEM?
                        </a>
                      </div>
                      <div className="post-info">November 28, 2021</div>
                    </article>
                    <article className="post">
                      <figure className="post-thumb">
                        <img src="images/resource/post-thumb-3.jpg" alt="" />
                        <a href="/project-details" className="overlay-box">
                          <span className="icon fa fa-link" />
                        </a>
                      </figure>
                      <div className="text">
                        <a href="/project-details">
                          A Guide to Google SEO <br /> Algorithm Updates
                        </a>
                      </div>
                      <div className="post-info">December 04, 2021</div>
                    </article>
                  </div>
                </div>
                {/* Brochures Widget */}
                <div className="broucher-widget">
                  <div
                    className="widget-content"
                    style={{
                      backgroundImage: `url(${img})`,
                    }}
                  >
                    <h3>Our Brochures</h3>
                    <div className="icon flaticon-pdf-1" />
                    <div className="text">
                      Business is a marketing discipline focused on growing
                      visibility in organic (non-paid) technic required.
                    </div>
                    <a
                      href="./document/Appideas-Brochure.pdf"
                      className="download"
                    >
                      Download Our Brochure
                    </a>
                  </div>
                </div>
                {/* Help Widget */}
                <div className="help-widget">
                  <div className="widget-content">
                    <h4>Need Help ?</h4>
                    <div className="text">
                      Please feel free to contact us. We will get back to you
                      with 1-2 business days. Or just call us now
                    </div>
                    <ul className="help-list">
                      <li>
                        <a href="tel:0032493986537">
                          <span className="icon fas fa-phone-alt" />
                          (+32) 493 98 65 37
                        </a>
                      </li>
                      <li>
                        <a href="/cdn-cgi/l/email-protection#dfb6b1b9b09fbeafafb6bbbabeacf1abbabcb7">
                          <span className="icon fa fa-envelope" />
                          <span
                            className="__cf_email__"
                            data-cfemail="6801060e0728091818010c0d091b461c0d0b00"
                          >
                            [email&nbsp;protected]
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Popular Posts */}
                <div className="sidebar-widget popular-tags mt-5">
                  <div className="sidebar-title">
                    <h4>Tags</h4>
                  </div>
                  <div className="widget-content">
                    <a href="#">Business</a>
                    <a href="#">Marketing</a>
                    <a href="#">SEO</a>
                    <a href="#">SEO</a>
                    <a href="#">SMM</a>
                    <a href="#">Solution</a>
                    <a href="#">Tips</a>
                    <a href="#">Startup</a>
                    <a href="#">Strategy</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
const TextError = styled.span`
  color: red !important;
  font-weight: 600;
  padding-top: 10px;
  font-size: 1rem;
`;
