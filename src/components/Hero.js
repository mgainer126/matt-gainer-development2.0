import ParticlesBg from "particles-bg";
import github from "../assets/images/github.svg";
import data from "../assets/data/resumeData.json";
import logo from "../assets/images/logo.png";

function Hero() {
  return (
    <div className="hero-container">
      <section className="hero">
        <ParticlesBg color="random" type="square" bg={true} />

        {/* <h1 className="hero-title">{data.main.name}</h1> */}

        <p className="hero-description">
          <img src={logo} alt="logo" className="hero-logo" />
        </p>
        <a href={data.main.github} className="hero-link">
          <div className="hero-btn">
            <img src={github} alt="github" className="hero-btn-icon" />
            <p className="hero-github">GitHub</p>
          </div>
        </a>
      </section>
    </div>
  );
}

export default Hero;
