import data from "../assets/data/resumeData.json";
import ProgressBar from './ProgressBar';

function Skills (){
    return(
        <section className="skills">
        <h2 className="skills-title">SKILLS</h2>
        <div className="skills-list">
            {data.resume.skills.map((item, index) => {
               const randomColor= '#'+Math.floor(Math.random()*16777215).toString(16);
                return (
                    <div className="skills-item" key={index}>
                        <div className="skills-item-title">{item.name}</div>
                        <ProgressBar key={index} bgcolor={randomColor} completed={item.level} />
                    </div>
                )
            })}
        </div>
    </section>
    );
}

export default Skills;