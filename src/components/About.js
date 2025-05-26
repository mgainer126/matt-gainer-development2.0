import download from "../assets/images/download.svg";
import React from "react";

function About({ bio, bioDescription, contactInfo, profileImg }) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    const currentRef = domRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div>
      {bio && bioDescription && contactInfo && profileImg && (
        <section className="about">
          <div
            className={`fade-in-left ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
          >
            <section className="about-about">
              <img src={`https:${profileImg}`} alt="me" className="about-img" />
              <section className="about-me">
                <h2 className="about-title">About Me</h2>
                <p className="about-description">{bio}</p>
                {bioDescription.map((item, index) => {
                  return (
                    <p className="about-description" key={index}>
                      {item}
                    </p>
                  );
                })}
              </section>
            </section>
            <section className="about-contact">
              <div>
                <h2 className="about-title">Contact Details</h2>
                <p className="about-company">{contactInfo.companyName}</p>
                <p className="about-company">{contactInfo.address}</p>
                <p className="about-company">
                  {contactInfo.city} {contactInfo.province} {contactInfo.postal}{" "}
                </p>
                <p className="about-company">{contactInfo.email}</p>
              </div>
              <div>
                <div className="about-resume">
                  <img
                    src={download}
                    alt="download"
                    className="about-resume-icon"
                  />
                  <a
                    href="https://1drv.ms/b/s!AtKTEtRydYtmmEZNXg9i5obAU9F4?e=F403a6"
                    className="about-resume-btn"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
      )}
    </div>
  );
}

export default About;
