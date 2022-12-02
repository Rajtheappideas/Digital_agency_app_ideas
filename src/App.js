// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

const Home = lazy(() => import("./pages/Home"));
const Aboutus = lazy(() => import("./pages/Aboutus"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Contact = lazy(() => import("./pages/Contact"));
const Packages = lazy(() => import("./pages/Packages"));
const Projects = lazy(() => import("./pages/Projects"));
const Services = lazy(() => import("./pages/Services"));
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Faq = lazy(() => import("./pages/Faq"));
const TermsAndCondition = lazy(() => import("./pages/TermsAndCondition"));
const Seo = lazy(() => import("./pages/Seo"));
const ContentMarketing = lazy(() => import("./pages/ContentMarketing"));
const SocialMarketing = lazy(() => import("./pages/SocialMarketing"));
const AppDevelopment = lazy(() => import("./pages/AppDevelopment"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const Advertising = lazy(() => import("./pages/Advertising"));
const CommingSoon = lazy(() => import("./pages/CommingSoon"));
const Events = lazy(() => import("./pages/Events"));
const NewsDetails = lazy(() => import("./pages/NewsDetails"));
const Error404 = lazy(() => import("./pages/Error404"));

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload();
        }}
      >
        <Suspense
          fallback={
            <div className="preloader">
              <div className="box" />
            </div>
          }
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<TermsAndCondition />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/content-marketing" element={<ContentMarketing />} />
            <Route path="/social-marketing" element={<SocialMarketing />} />
            <Route path="/app-development" element={<AppDevelopment />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/advertising" element={<Advertising />} />
            <Route path="/comming-soon" element={<CommingSoon />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news-detail" element={<NewsDetails />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
