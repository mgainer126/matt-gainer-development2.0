import data from "../assets/data/resumeData.json";
import emailjs from "emailjs-com";


function Contact (){
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


    return(
        <section className="contact">
        <h2 className="contact-title">GET IN TOUCH.</h2>
        <p className="contact-description">{data.main.contactmessage}</p>
        <div className="row">

    <div className="eight columns">
      {/* <form action="" method="post" id="contactForm" name="contactForm"> */}
      <form id="contactForm" name="contactForm" onSubmit={sendEmail}>
        <fieldset>
          <div className="form-element">
            <label htmlFor="contactName" className="form-label">
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              defaultValue=""
              size="35"
              id="contactName"
              name="contactName"
              className="form-input"
            //   onChange={this.handleChange}
            />
          </div>

          <div className="form-element">
            <label htmlFor="contactEmail" className="form-label">
              Email <span className="required">*</span>
            </label>
            <input
              type="text"
              defaultValue=""
              size="35"
              id="contactEmail"
              name="contactEmail"
              className="form-input"
            //   onChange={this.handleChange}
            />
          </div>

          <div className="form-element">
            <label htmlFor="contactSubject" className="form-label">Subject</label>
            <input
              type="text"
              defaultValue=""
              size="35"
              id="contactSubject"
              name="contactSubject"
              className="form-input"
            //   onChange={this.handleChange}
            />
          </div>

          <div className="form-element">
            <label htmlFor="contactMessage" className="form-label">
              Message <span className="required">*</span>
            </label>
            <textarea
              cols="50"
              rows="15"
              id="contactMessage"
              name="contactMessage"
              className="form-input-message"
            ></textarea>
          </div>

          <div>
            <button className="submit">SUBMIT</button>
            <span id="image-loader">
              <img alt="" src="images/loader.gif" />
            </span>
          </div>
        </fieldset>
      </form>

      {/* <div id="message-warning"> Error boy</div> */}
      {/* <div id="message-success">
        <i className="fa fa-check"></i>Your message was sent, thank you!
        <br />
      </div> */}
    </div>




</div>
    </section>
    );
}

export default Contact;