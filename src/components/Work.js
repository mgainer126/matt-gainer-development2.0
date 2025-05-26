import React from "react";

function Work({ work }) {
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
    <section className="work">
      {work && (
        <div
          className={`fade-in-left ${isVisible ? "is-visible" : ""} alignment`}
          ref={domRef}
        >
          <h2 className="work-title">WORK</h2>
          <div className="work-list">
            {work.map((item, index) => {
              return (
                <div className="work-item" key={index}>
                  <div className="work-item-company">{item.company}</div>
                  <div className="work-item-title">{item.title}</div>
                  <div className="work-item-years">{item.years}</div>

                  {item.description.map((item, index) => {
                    return (
                      <p className="work-item-description" key={index}>
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

export default Work;
