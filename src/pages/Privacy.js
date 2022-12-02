import React from "react";
import TitleSection from "../components/TitleSection";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <>
      <Helmet title="Terms" />
      <TitleSection title="Privacy Policy" />
      <section className="privacy-section">
        <div className="auto-container">
          {/* Privacy Content */}
          <div className="privacy-content">
            <h2>Privacy &amp; Policy</h2>
            <div className="date">Updated May 28, 2022</div>
            <p>
              This policy together with our Terms of Use sets out the basis on
              which any personal data we collect from you, or that you provide
              to us, will be processed by us. Please read the following
              carefully to understand our views and practices regarding your
              personal data and how we will treat it. By visiting
              www.appideas.be (the “Website”) you are accepting and consenting
              to the practices described in this policy as well as consenting to
              our use of cookies in accordance with the terms of this policy.
            </p>
          </div>
          {/* Privacy Content */}
          <div className="privacy-content">
            <h4>&gt; Information we collect from you</h4>
            <p>
              While visiting our website, we may ask you to provide us with
              certain personally identifiale information that can be used to
              contact or identify you. This is for example the case when you
              make an appointment through our website. You control the amount
              and type of information you provide to us. Personally identifiable
              information may include, but is not limited to:
            </p>
            <ul className="privacy-list">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>VAT Number</li>
              <li>Cookies and usage data</li>
            </ul>
          </div>
          {/* Privacy Content */}
          <div className="privacy-content">
            <h4>&gt; Usage Data</h4>
            <p>
              When you visit our website, we automatically collect certain
              non-personal information linked to your device, such as IP
              address, browser type, browser version, the time and date of your
              visit, and other diagnostic data.
            </p>
          </div>
          {/* Privacy Content */}
          <div className="privacy-content">
            <h4>&gt; Tracking and Cookies Data</h4>
            <p>
              Cookies are files with small amount of data stored on your
              computer or mobile device by your web browser. Like many websites,
              we use Cookies to personalize the content of our website to you.
              We don’t place Personally Identifiable Information in Cookies.
              Depending on the web browser you use, you can disable cookies.
              However, if you do not accept cookies, you may not be able to use
              some portions of our site.
            </p>
          </div>
          {/* Privacy Content */}
          <div className="privacy-content">
            <h4>&gt; Camera Surveillance</h4>
            <p>
              Finance Strategies uses camera surveillance where permitted by the
              Belgian law of March 21, 2007. The recording is securely stored
              and only accessible on a need-to-know basis (for example, to look
              into an incident). We are allowed to disclose recording to law
              enforcement bodies. We will also share CCTV images with our
              insurers for purposes of processing an insurance claim as a result
              of an incident. The recordings are typically deleted or
              automatically overwritten after a short period of time unless an
              issue is identified that requires further investigation.
            </p>
          </div>
          {/* Privacy Content */}
          <div className="privacy-content">
            <h2>Use of data</h2>
            <p>
              Finance Strategies may obtain the above information from you to
              better understand your alneeds and provide you better services:
            </p>
            <ul className="privacy-list">
              <li>Internal record keeping</li>
              <li>
                Booking of appointments through our Microsoft Booking System
              </li>
              <li>
                To provide analysis or valuable information so that we can
                improve our website
              </li>
              <li>To monitor the usage of the website</li>
            </ul>
          </div>
          <div className="privacy-content">
            <h2>Service providers</h2>
            <p>
              We may employ third party companies and individuals to facilitate
              our Service (“Service Providers”), to provide the Service on our
              behalf, to perform Service-related services or to assist us in
              analysing how our Service is used. For example, we use Microsoft
              Bookings for our online appointment booking system. These third
              parties have access to your Personal Data only to perform these
              tasks on our behalf and are obligated not to disclose or use it
              for any other purpose.
            </p>
          </div>
          <div className="privacy-content">
            <h2>Links to other sites</h2>
            <p>
              Our Service may contain links to other sites that are not operated
              by us. If you click on a third party link, you will be directed to
              that third party’s site. We strongly advise you to review the
              Privacy Policy of every site you visit. We have no control over
              and assume no responsibility for the content, privacy policies or
              practices of any third party sites or services.
            </p>
          </div>
          <div className="privacy-content">
            <h2>Children’s privacy</h2>
            <p>
              Our Service does not address anyone under the age of 18
              (“Children”). We do not knowingly collect personally identifiable
              information from anyone under the age of 18. If you are a parent
              or guardian and you are aware that your Children has provided us
              with Personal Data, please contact us. If we become aware that we
              have collected Personal Data from children without verification of
              parental consent, we take steps to remove that information from
              our servers.
            </p>
          </div>
          <div className="privacy-content">
            <h2>Changes to this privacy policy</h2>
            <p>
              We may update our Privacy Policy from time to time. When we post
              changes to this privacy policy, we will revise the ‘last updated’
              date at the top of this privacy policy. We recommend that you
              check our Privacy Policy periodically for any changes. Changes to
              this Privacy Policy are effective when they are posted on this
              page.
            </p>
          </div>
          {/* Privacy Content */}
          <div className="privacy-content">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us by email at{" "}
              <a href="mailto:info@appideas.tech">info@appideas.tech</a>
            </p>
          </div>
          <div className="privacy-content">
            <p>
              <strong>Appideas LTD, September 2018</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
