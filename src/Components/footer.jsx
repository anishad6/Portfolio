import React from 'react';
import '../styles/style.css';

const Footer = () => {
  const sendEmail = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const form = document.getElementById("contact-form");
    const formData = new FormData(form);

    const emailParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    console.log(emailParams);
    window.emailjs
      .send("service_w97hwwm", "template_8sskyjo", emailParams)
      .then((response) => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Failed to send email: ", error);
      });
  };

  return (
    <div>
      {/* Footer section starts */}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Abhishek Nishad</h3>
            <p>
              Thank you for visiting my personal portfolio website. Connect with me over socials. <br /> <br />
              Keep Rising 🚀. Connect with me over live chat!
            </p>
          </div>
          <div className="box">
            <h3>Quick Links</h3>
            <a href="#home"><i className="fas fa-chevron-circle-right"></i> Home</a>
            <a href="#about"><i className="fas fa-chevron-circle-right"></i> About</a>
            <a href="#skills"><i className="fas fa-chevron-circle-right"></i> Skills</a>
            <a href="#education"><i className="fas fa-chevron-circle-right"></i> Education</a>
            <a href="#work"><i className="fas fa-chevron-circle-right"></i> Work</a>
            <a href="#experience"><i className="fas fa-chevron-circle-right"></i> Experience</a>
          </div>
          <div className="box">
            <h3>Contact Info</h3>
            <p><i className="fas fa-phone"></i> 7208665472</p>
            <p><i className="fas fa-envelope"></i> nishadabhishek200027@gmail.com</p>
            <p><i className="fas fa-map-marked-alt"></i> Mumbai, India- 400078</p>
            <div className="share">
              <a href="https://linkedin.com/in/abhishek-nishad10/" className="fab fa-linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://github.com/anishad6" className="fab fa-github" aria-label="GitHub" target="_blank" rel="noopener noreferrer"></a>
              <a href="mailto:nishadabhishek200027@gmail.com" className="fas fa-envelope" aria-label="Mail" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://t.me/yourusername" className="fab fa-telegram-plane" aria-label="Telegram" target="_blank" rel="noopener noreferrer"></a>
            </div>
          </div>
        </div>
        <h1 className="credit">
          Designed with <i className="fa fa-heart pulse"></i> by <a href="https://linkedin.com/in/abhishek-nishad10/">Abhishek Nishad</a>
        </h1>
      </section>

      {/* Scroll to Top */}
      <div id="scroll-top" className="fas fa-arrow-up"></div>
    </div>
  );
};

export default Footer;
