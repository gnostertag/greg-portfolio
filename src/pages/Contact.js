import React from "react";
import Image1 from "../assets/github-logo.png";
import Image2 from "../assets/linkedin-logo.png";
import video from "../assets/stars.mp4"
function Contact() {
  return (
    <div className="contact-image">
      <video src={video} autoPlay loop muted type="video/mp4" />
      <a href={"https://github.com/gnostertag"} className="github-container">
        <img src={Image1} alt="Github Profile" className="github-logo" />
      </a>
      <a href={"https://www.linkedin.com/in/greg-ostertag/"}>
        <img src={Image2} alt="Linkedin profile" />
      </a>
    </div>
  );
}

export default Contact;
