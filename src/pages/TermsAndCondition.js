import React from "react";
import TitleSection from "../components/TitleSection";
import { Helmet } from "react-helmet";

const TermsAndCondition = () => {
  return (
    <>
      <Helmet title="Terms" />
      <TitleSection title="Terms & Conditions" />
      <section className="privacy-section">
        <div className="auto-container">
          {/* Privacy Content */}
          <div className="privacy-content">
            <h2>Terms &amp; Condition</h2>
            <p>
              PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS
              WEBSITE
            </p>
            <p>
              For each project we establish relationships with partners who we
              know will help us create added value for your project. As well as
              bringing together the public and private sectors, we make
              sector-overarching links to gather knowledge and to learn from
              each other who we know will help us create added value for your
              project.
            </p>
            <div className="date">Updated May 28, 2022</div>
            <ul className="privacy-list">
              <li>By using our Website you accept these terms</li>
              <li>
                By using our Website, you confirm that you accept these terms of
                use and that you agree to comply with them
              </li>
              <li>
                If you do not agree to these terms, you must not use our
                Website.
              </li>
              <li>There are other terms that may apply to you</li>
              <li>
                These terms of use refer to the following additional terms,
                which also apply to your use of our Website:
              </li>
            </ul>
            <h2>Our Website is made available free of charge.</h2>
            <p>
              We do not guarantee that our Website, or any content on it, will
              always be available or be uninterrupted.
            </p>
          </div>
          {/* Privacy Content */}
          <div className="privacy-content">
            <h4>&gt; Do not rely on information on this Website</h4>
            <p>
              The content on our Website is provided for general information
              only. It is not intended to amount to advice on which you should
              rely. You must obtain professional or specialist advice before
              taking, or refraining from, any action on the basis of the content
              on our Website.
            </p>
            <p>
              Although we make reasonable efforts to update the information on
              our Website, we make no representations, warranties or guarantees,
              whether express or implied, that the content on our Website is
              accurate, complete or up to date.
            </p>
          </div>
          {/* Privacy Content */}
          <div className="privacy-content">
            <h4>&gt; We are not responsible for websites we link to</h4>
            <p>
              Where our Website contains links to other websites and resources
              provided by third parties, these links are provided for your
              information only. Such links should not be interpreted as approval
              by us of those linked websites or information you may obtain from
              them.
            </p>
            <p>
              We have no control over the contents of those websites or
              resources.
            </p>
          </div>
          {/* Privacy Content */}
          <div className="privacy-content">
            <h4>&gt; User-generated content is not approved by us</h4>
            <p>
              This Website may include information and materials uploaded by
              other users of the Website, including to bulletin boards and chat
              rooms. This information and these materials have not been verified
              or approved by us. The views expressed by other users on our
              Website do not represent our views or values.
            </p>
          </div>
          {/* Privacy Content */}
          <div className="privacy-content">
            <h2>Security and Retention</h2>
            <p>
              You are responsible for configuring your information technology,
              computer programmes and platform to access our Website. You should
              use your own virus protection software.
            </p>
            <p>
              You must not misuse our Website by knowingly introducing viruses,
              trojans, worms, logic bombs or other material that is malicious or
              technologically harmful. You must not attempt to gain unauthorised
              access to our Website, the server on which our Website is stored
              or any server, computer or database connected to our Website. You
              must not attack our Website via a denial-of-service attack or a
              distributed denial-of service attack. By breaching this provision,
              you would commit a criminal offence under the Computer Misuse Act
              1990. We will report any such breach to the relevant law
              enforcement authorities and we will co-operate with those
              authorities by disclosing your identity to them. In the event of
              such a breach, your right to use our Website will cease
              immediately.
            </p>
          </div>
          {/* Privacy Content */}
          <div className="privacy-content">
            <h2>Rules about linking to our Website</h2>
            <ul className="privacy-list">
              <li>
                You may link to our site, provided you do so in a way that is
                fair and legal and does not damage our reputation or take
                advantage of it
              </li>
              <li>
                You must not establish a link in such a way as to suggest any
                form of association, approval or endorsement on our part where
                none exists
              </li>
              <li>
                You must not establish a link to our Website in any website that
                is not owned by you
              </li>
              <li>
                Our Website must not be framed on any other Website, nor may you
                create a link to any part of our Website other than the home
                page
              </li>
              <li>
                We reserve the right to withdraw linking permission without
                notice
              </li>
            </ul>
          </div>
          {/* Privacy Content */}
          <div className="privacy-content">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this term &amp; condition, please
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

export default TermsAndCondition;
