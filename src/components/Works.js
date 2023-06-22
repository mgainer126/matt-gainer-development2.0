import data from "../assets/data/resumeData.json";
import portfolio from '../assets/images/01.png';
// import dashboard from '../assets/images/02.png';
import foodiofare from '../assets/images/03.png';
import brewercave from '../assets/images/04.png'
import ecommerce from '../assets/images/05.png'

function Works (){
    return(
        <section className="works">
        <h2 className="works-title">CHECK OUT SOME OF MY WORKS</h2>
           <div className="works-list">
            <a href="https://www.mattgainerdevelopment.com/" >
              <div className="works-item" >
                <img src={portfolio} alt="project" className="works-item-img"/>
                <div className="works-item-title">{data.portfolio.projects[0].title}</div>
              </div>
            </a>
            <a href="https://www.foodiofare.com/" >
            <div className="works-item" >
              <img src={foodiofare} alt="project" className="works-item-img"/>
              <div className="works-item-title">{data.portfolio.projects[2].title}</div>
            </div>
            </a>
            <a href="https://www.brewercave.com/" >
            <div className="works-item" >
              <img src={brewercave} alt="project" className="works-item-img"/>
              <div className="works-item-title">{data.portfolio.projects[3].title}</div>
            </div>
            </a>
            <a href="https://coolhunterz.netlify.app/" >
            <div className="works-item" >
              <img src={ecommerce} alt="project" className="works-item-img"/>
              <div className="works-item-title">{data.portfolio.projects[4].title}</div>
            </div>
            </a>
</div>
    </section>
    );
}

export default Works;