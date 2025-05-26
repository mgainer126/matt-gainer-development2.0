import React from "react";

function Works({ projects }) {
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
    <section className="works">
      {projects && (
        <div
          className={`fade-in-left ${isVisible ? "is-visible" : ""}`}
          ref={domRef}
        >
          <h2 className="works-title">CHECK OUT SOME OF MY WORKS</h2>
          <div className="works-list">
            {projects.map((project, index) => {
              return (
                <a href={project.url} key={index}>
                  <div className="works-item">
                    <img
                      src={project.image}
                      alt="project"
                      className="works-item-img"
                    />
                    <div className="works-item-title">{project.title}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default Works;
