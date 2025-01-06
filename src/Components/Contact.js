import React, { Component } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "", email: "", subject: "" };
  }
  // saves the user's name entered to state
  nameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  // saves the user's email entered to state
  emailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  // saves the user's subject entered to state
  subjectChange = (event) => {
    this.setState({ subject: event.target.value });
  };

  // saves the user's message entered to state
  messageChange = (event) => {
    this.setState({ feedback: event.target.value });
  };

  //onSubmit of email form
  handleSubmit = (event) => {
    event.preventDefault();

    //This templateId is created in EmailJS.com
    const templateId = "template_8vc7jxi";

    //This is a custom method from EmailJS that takes the information
    //from the form and sends the email with the information gathered
    //and formats the email based on the templateID provided.
    this.sendFeedback(templateId, {
      message: this.state.feedback,
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
    });
  };

  //Custom EmailJS method
  sendFeedback = (templateId, variables) => {
    emailjs
      .send(
        "service_8u9598a",
        templateId,
        variables,
        "user_Nb3MhooBaMJXcENp2FB8s"
      )
      .then((res) => {
        // Email successfully sent alert
        Swal.fire({
          title: "Email Successfully Sent",
          icon: "success",
        });
      })
      // Email Failed to send Error alert
      .catch((err) => {
        Swal.fire({
          title: "Email Failed to Send",
          icon: "error",
        });
        console.error("Email Error:", err);
      });
  };
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form
              action=""
              onSubmit={this.handleSubmit}
              id="contactForm"
              name="contactForm"
            >
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={this.state.name}
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={this.nameChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={this.state.email}
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={this.emailChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    value={this.state.subject}
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={this.subjectChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    value={this.state.message}
                    id="contactMessage"
                    name="contactMessage"
                    onChange={this.messageChange}
                    required
                  ></textarea>
                </div>

                <div>
                  <button className="submit">Submit</button>
                </div>
              </fieldset>
            </form>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {email} <br />
                <br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
