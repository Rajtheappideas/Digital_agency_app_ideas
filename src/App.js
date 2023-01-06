import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import ColorPalate from "./components/ColorPalate";

const Home = lazy(() => import("./pages/Home"));
const Aboutus = lazy(() => import("./pages/Aboutus"));
const Investments = lazy(() => import("./pages/Investments"));
const Contact = lazy(() => import("./pages/Contact"));
const Packages = lazy(() => import("./pages/Packages"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const Services = lazy(() => import("./pages/Services"));
const Signin = lazy(() => import("./pages/Auth/Signin"));
const Signup = lazy(() => import("./pages/Auth/Signup"));
const ForgotPassword = lazy(() => import("./pages/Auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/Auth/ResetPassword"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Faq = lazy(() => import("./pages/Faqs"));
const TermsAndCondition = lazy(() => import("./pages/TermsAndCondition"));
const Seo = lazy(() => import("./pages/Seo"));
const ContentMarketing = lazy(() => import("./pages/ContentMarketing"));
const SocialMarketing = lazy(() => import("./pages/SocialMarketing"));
const AppDevelopment = lazy(() => import("./pages/AppDevelopment"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const Advertising = lazy(() => import("./pages/Advertising"));
const CommingSoon = lazy(() => import("./pages/CommingSoon"));
const Events = lazy(() => import("./pages/Events/Events"));
const EventsDetails = lazy(() => import("./pages/Events/EventsDetails"));
const EventsSpeaker = lazy(() => import("./pages/Events/EventsSpeaker"));
const EventsTicket = lazy(() => import("./pages/Events/EventsTicket"));
const EventsCheckout = lazy(() => import("./pages/Events/EventsCheckout"));
const NewsDetails = lazy(() => import("./pages/NewsDetails"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogsDetails = lazy(() => import("./pages/BlogsDetails"));
const PackageDigitalMarketing = lazy(() =>
  import("./pages/PackageDigitalMarketing")
);
const PackageHosting = lazy(() => import("./pages/PackageHosting"));
const PackageVideoEditing = lazy(() => import("./pages/PackageVideoEditing"));
const PackageMantainance = lazy(() => import("./pages/PackageMantainance"));
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
          {window.location.pathname !== "/comming-soon" && <Header />}
          {/* color palate */}
          {/* {!window.location.pathname == "/" && <ColorPalate />} */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-details/:id" element={<ProjectDetails />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog-details" element={<BlogsDetails />} />
            <Route path="/terms" element={<TermsAndCondition />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/content-marketing" element={<ContentMarketing />} />
            <Route path="/social-marketing" element={<SocialMarketing />} />
            <Route path="/app-development" element={<AppDevelopment />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/advertising" element={<Advertising />} />
            <Route path="/comming-soon" element={<CommingSoon />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events-details" element={<EventsDetails />} />
            <Route path="/events-speaker" element={<EventsSpeaker />} />
            <Route path="/events-ticket" element={<EventsTicket />} />
            <Route path="/events-checkout" element={<EventsCheckout />} />
            <Route path="/news-detail" element={<NewsDetails />} />
            <Route
              path="/package-digital-marketing"
              element={<PackageDigitalMarketing />}
            />
            <Route path="/package-hosting" element={<PackageHosting />} />
            <Route
              path="/package-maintenance"
              element={<PackageMantainance />}
            />
            <Route
              path="/package-video-editing"
              element={<PackageVideoEditing />}
            />
            <Route path="/*" element={<Error404 />} />
          </Routes>
          {/* <!-- Scroll To Top --> */}
          <div
            className="back-to-top scroll-to-target show-back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            TOP
          </div>
          {window.location.pathname !== "/comming-soon" && <Footer />}
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
