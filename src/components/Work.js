import data from "../assets/data/resumeData.json";
import React from 'react';


function Work (){
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
    return(
        <div className={`fade-in-left ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}>
        <section className="work">
        <h2 className="work-title">WORK</h2>
        <div className="work-list">
            {data.resume.work.map((item, index) => {
                return (
                    <div className="work-item" key={index}>
                        <div className="work-item-company">{item.company}</div>
                        <div className="work-item-title">{item.title}</div>
                        <div className="work-item-years">{item.years}</div>
                        <div className="work-item-description">{item.description}</div>
                    </div>
                )
            })}
        </div>
    </section>
    </div>
    );
}

export default Work;