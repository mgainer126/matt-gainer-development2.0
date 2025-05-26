import React from "react";

function Education({ education }) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    const currentRef = domRef.current; // Create a local variable

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
    <section className="education">
      {education && (
        <div
          className={`fade-in-left ${isVisible ? "is-visible" : ""} alignment`}
          ref={domRef}
        >
          <h2 className="education-title">EDUCATION</h2>
          <div className="education-list">
            {education.map((item, index) => {
              return (
                <div className="education-item" key={index}>
                  <p className="education-item-title">{item.school}</p>
                  <p className="education-item-major">{item.degree}</p>
                  <p className="education-item-date">{item.graduated}</p>
                  {item.description.map((item, index) => {
                    return (
                      <p className="education-item-description" key={index}>
                        {item}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default Education;
