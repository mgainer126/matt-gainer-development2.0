import data from "../assets/data/resumeData.json";

function Education (){
    return(
        <section className="education">
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
                )
            })}
        </div>
    </section>
    );
}

export default Education;