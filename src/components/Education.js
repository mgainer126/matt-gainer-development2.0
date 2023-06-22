import React from 'react';
import data from "../assets/data/resumeData.json";

function Education() {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
  
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
  
      if (domRef.current) {
        observer.observe(domRef.current);
      }
  
      return () => {
        if (domRef.current) {
          observer.unobserve(domRef.current);
        }
      };
    }, []);
  
    return (
        <div className={`fade-in-left ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}>
      <section className="education" >
        <h2 className="education-title">EDUCATION</h2>
        <div className="education-list">
          {data.resume.education.map((item, index) => {
            return (
              <div className="education-item" key={index}>
                <div className="education-item-title">{item.school}</div>
                <div className="education-item-major">{item.degree}</div>
                <div className="education-item-date">{item.graduated}</div>
                <div className="education-item-description">{item.description}</div>
              </div>
            );
          })}
        </div>
      </section>
      </div> 
    );
  }
  
  export default Education;
  