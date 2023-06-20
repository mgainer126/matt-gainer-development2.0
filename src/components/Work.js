import data from "../assets/data/resumeData.json";


function Work (){
    return(
        <section className="work">
        <h2 className="work-title">WORK</h2>
        <div className="work-list">
            {data.resume.work.map((item, index) => {
                return (
                    <div className="work-item" key={index}>
                        <div className="work-item-title">{item.company}</div>
                        <div className="work-item-position">{item.title}</div>
                        <div className="work-item-date">{item.years}</div>
                        <div className="work-item-description">{item.description}</div>
                    </div>
                )
            })}
        </div>
    </section>
    );
}

export default Work;