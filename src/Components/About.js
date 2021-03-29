import React, { Component } from "react";

class About extends Component {
  render() {
    if (!this.props.data) return null;
    const email = this.props.data.email;

    
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Somelina Bitmoji Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
            <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Email me: {email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
