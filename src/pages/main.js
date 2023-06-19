import * as React from "react";
import data from  '../assets/data/resumeData.json'
import github from '../assets/images/github.svg'
import download from '../assets/images/download.svg'
import emailjs from "emailjs-com";

import ParticlesBg from "particles-bg";
import "primereact/resources/primereact.min.css"; 
import ProgressBar from '../components/ProgressBar';
import portfolio from '../assets/images/01.png';
// import dashboard from '../assets/images/02.png';
import foodiofare from '../assets/images/03.png';
import brewercave from '../assets/images/04.png'
import ecommerce from '../assets/images/05.png'



function Main () {

    function sendEmail(e) {
        e.preventDefault();
  
        emailjs
          .sendForm(
            "service_dfmdol6",
            "template_xr40a7l",
            e.target,
            "user_FgOIAYyl9oNSUlLrdBA5T"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }

     
    
    return (
        <>
            <section className="hero">
            <ParticlesBg color="#191919" type="lines" bg={true} />
                <h1 className="hero-title">
                    {data.main.name}
                </h1>
                <p className="hero-description">
                    {data.main.description}
                </p>
                <div className="hero-btn">
                    <img src={github} alt="github" className="hero-btn-icon"/>
                    <p className="hero-github">GitHub</p>
                </div>
            </section>
            <section className="about">
                <section className="about-me">
                    <h2 className="about-title">About Me</h2>
                    <p className="about-description">{data.main.bio}</p>
                </section>
                <section className="about-contact">     
                    <h2 className="about-title">Contact Details</h2>
                    <p className="about-company">{data.main.name}</p>
                    <p className="about-company">{data.main.address.street}</p>
                    <p className="about-company">{data.main.address.city}</p>
                    <p className="about-company">{data.main.address.state}</p>
                    <p className="about-company">{data.main.address.zip}</p>
                    <p className="about-company">{data.main.phone}</p>
                    <p className="about-company">{data.main.email}</p>
                    <div className="about-resume">
                        <img src={download} alt="download" className="about-resume-icon"/>
                        <a href={data.main.resumeDownload} className="about-resume-btn">Download Resume</a>
                    </div>
                </section>
            </section>
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
            <section className="works">
                <h2 className="works-title">CHECK OUT SOME OF MY WORKS</h2>
                   <div className="works-list">
                    <a href="https://www.mattgainerdevelopment.com/" className="works-item" >
                      <div className="works-item" >
                        <img src={portfolio} alt="project" className="works-item-img"/>
                        <div className="works-item-title">{data.portfolio.projects[0].title}</div>
                      </div>
                    </a>
{/*                     
                    <a href="https://gleaming-cajeta-8effdd.netlify.app/" className="works-item" >
                    <div className="works-item" >
                      <img src={dashboard} alt="project" className="works-item-img"/>
                      <div className="works-item-title">{data.portfolio.projects[1].title}</div>
                    </div>
                    </a> */}
                    <a href="https://www.foodiofare.com/" className="works-item" >
                    <div className="works-item" >
                      <img src={foodiofare} alt="project" className="works-item-img"/>
                      <div className="works-item-title">{data.portfolio.projects[2].title}</div>
                    </div>
                    </a>
                    <a href="https://www.brewercave.com/" className="works-item" >

                    <div className="works-item" >
                      <img src={brewercave} alt="project" className="works-item-img"/>
                      <div className="works-item-title">{data.portfolio.projects[3].title}</div>
                    </div>
                    </a>

                    <a href="https://coolhunterz.netlify.app/" className="works-item" >
                    <div className="works-item" >
                      <img src={ecommerce} alt="project" className="works-item-img"/>
                      <div className="works-item-title">{data.portfolio.projects[4].title}</div>
                    </div>
                    </a>
       </div>
            </section>
            <section className="contact">
                <h2 className="contact-title">GET IN TOUCH</h2>
                <p className="contact-description">{data.main.contactmessage}</p>
                <div className="row">
    
            <div className="eight columns">
              {/* <form action="" method="post" id="contactForm" name="contactForm"> */}
              <form id="contactForm" name="contactForm" onSubmit={sendEmail}>
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                    //   onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                    //   onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                    //   onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              {/* <div id="message-warning"> Error boy</div> */}
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
   


       
        </div>
            </section>

        </>
    )
}

export default Main;