import React, { useState } from "react";

const WhatWeOffer = () => {
  const [activeId, setActiveId] = useState(null);

  const ThingsToDo = [
    {
      id: 1,
      Thing: "Review Your Metrics",
      answer:
        "Most successful websites record a range of data. This includes tracking how visitors behave, your best traffic sources, and the content that drives the most conversions. By regularly analysing your metrics, you can pinpoint problems that need to be addressed. Here, speed is everything. To remain competitive, it helps to review this data weekly.",
    },
    {
      id: 2,
      Thing: "Back Up Your Site",
      answer:
        " Creating regular backups is one of the most important items on your to-do list. If you fall behind, then you risk losing all of your recent work — or even your entire website. While you can create backups manually, some hosting providers can perform this vital maintenance task for you. For example, at Appideas, we offer automated daily backups.",
    },
    {
      id: 3,
      Thing: "Moderate Comments",
      answer:
        "A lively comment section encourages visitors to interact with your site. However, comment sections can have a dark side. Attackers may try to trick you into publishing malicious content in the form of comment spam. Some comments may also contain irrelevant or offensive content. This can reflect poorly on your website. For this reason, you may want to use a comment moderation plugin such as Akismet Anti-Spam.",
    },
    {
      id: 4,
      Thing: "Update Your Themes and Plugins",
      answer:
        " According to research, 86% of hacked WordPress websites contain an outdated plugin or theme or even an out-dated version of WordPress. To keep the bad guys out, it’s smart to regularly check the WordPress dashboard for any available updates. We’re including this task in our maintenance checklist,",
    },
    {
      id: 5,
      Thing: "Check and Fix Broken Links",
      answer:
        "A broken link is a web-page that can’t be found or accessed by a user, Here are some examples of error codes",
      list: [
        { id: 1, list: "404 Page Not Found" },
        { id: 2, list: "400 Bad Request" },
        { id: 3, list: "Bad host" },
        { id: 4, list: "Bad URL" },
        { id: 5, list: "Timeout" },
      ],
      answer1:
        "The App Ideas can help you build broken links with precision and elevate your website’s rankings on SERPs. Contact us today to learn more.",
    },
    {
      id: 6,
      Thing: "Schedule User Testing",
      answer:
        "This is where you evaluate how intuitive your website is by testing it on real-life users. To ensure that you continue to provide good experience we recommend scheduling annual testing for your website.",
    },
    {
      id: 7,
      Thing: "Scan for Malware",
      answer:
        "It’s important to check for malware. We will perform weekly checking for malware to your website. To keep your site secure it’s important to check for malware. We will perform weekly checking for malware to your website.",
    },
    {
      id: 8,
      Thing: "Test Your Site’s Speed",
      answer:
        "Your site’s performance has a huge impact on its success. Page speed can also impact your SEO. So we will regularly perform site speed check in your website to keep your website performance up to date.",
    },
    {
      id: 9,
      Thing: "Create New Content",
      answer:
        "Regularly publishing interesting, relevant content is a tried-and-tested way to convert one-off visitors into loyal repeat customers. It can be as simple as swapping out some graphics, products, promotions or writing a new blog post. To ensure that you’re winning the Search Engine Optimization game, you need an experienced SEO team. Our experts can create and publish SEO friendly content to your website to help you to get best ranking.",
    },
    {
      id: 10,
      Thing:
        "Check and remove spam comments, form submissions and user accounts",
      answer:
        " Some comments may contain irrelevant or offensive content. This can reflect poorly on your website. If you withhold comments for review, it’s smart to check this queue at least once per week.",
    },

    {
      id: 11,
      Thing: "Improve Your Site’s SEO",
      answer:
        "With 40–60 billion searches happening on Google in the U.S. every single month, SEO is one maintenance task that you can’t afford to overlook. SEO(Search Engine Optimization) is one of the most important services that will help your business mobile app or website to gain visibility on the search engine. We have developed our portfolio on digital marketing by offering the overall packages as well as the best services. If you want to make your business successful then feel free to reach us for SEO services.",
    },
  ];
  return (
    <section className="faq-page-section">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <div className="title">What we offer</div>
          <h2>Tasks you need to do on your website(s)</h2>
          <p className="text">
            Our aim is to keep your website secure and up-to-date so that your
            website would not be a challenge for your business growth.
          </p>
        </div>
        <div className="row clearfix">
          {/* Column */}
          <div className="column col-lg-6 col-md-12 col-sm-12">
            <ul className="accordion-box">
              {ThingsToDo.slice(0, 6).map((thing, index) => (
                <li
                  className={`accordion block ${
                    thing?.id === activeId && "active-block"
                  }`}
                  key={index}
                  onClick={() => {
                    setActiveId(activeId === null ? thing.id : null);
                    console.log(thing.id);
                  }}
                >
                  <div
                    className={`acc-btn ${thing.id === activeId && "active"}`}
                  >
                    {thing.id}. {thing.Thing} :
                    <div className="icon flaticon-right-arrow-1"></div>
                  </div>
                  <div
                    className={`acc-content ${
                      thing.id === activeId && "current"
                    }`}
                  >
                    <div className="content">
                      <p className="text">
                        {thing.answer}
                        <br />
                      </p>
                      {thing.list && (
                        <>
                          <ul>
                            {thing.list &&
                              thing.list.map((list) => <li>• {list.list}</li>)}
                          </ul>
                          <br /> {thing.answer1 && thing.answer1}
                        </>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Column */}
          <div className="column col-lg-6 col-md-12 col-sm-12">
            <ul className="accordion-box">
              {ThingsToDo.slice(6).map((thing, index) => (
                <li
                  className={`accordion block ${
                    thing?.id === activeId && "active-block"
                  }`}
                  key={index}
                  onClick={() => {
                    setActiveId(activeId === null ? thing.id : null);
                    console.log(index);
                  }}
                >
                  <div
                    className={`acc-btn ${thing.id === activeId && "active"}`}
                  >
                    {thing.id}. {thing.Thing} :
                    <div className="icon flaticon-right-arrow-1"></div>
                  </div>
                  <div
                    className={`acc-content ${
                      thing.id === activeId && "current"
                    }`}
                  >
                    <div className="content">
                      <p className="text">
                        {thing.answer}
                        <br />
                      </p>
                      {thing.list && (
                        <>
                          <ul>
                            {thing.list &&
                              thing.list.map((list) => <li>• {list.list}</li>)}
                          </ul>
                          <br /> {thing.answer1 && thing.answer1}
                        </>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
