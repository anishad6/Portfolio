import React from 'react';
import '../styles/style.css';
import image from "../image/contact.png"; 


export default function Contacts() {
  const sendEmail = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    console.log('Form submitted!');
  };

  return (
    <div>
      {/* Contact section starts */}
      <section className="contact" id="contact">
        <h2 className="heading">
          <i className="fas fa-headset"></i> Get in <span>Touch</span>
        </h2>
        <div className="container">
          <div className="content">
            <div className="image-box">
               <img draggable="false" className="tilt" src={image} alt="Hero Image" />
              {/* <img draggable="false" src="/image/contact.png" alt="" /> */}
            </div>
            <form id="contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <div className="field">
                  <input type="text" name="name" placeholder="Name" required />
                  <i className="fas fa-user"></i>
                </div>
                <div className="field">
                  <input type="text" name="email" placeholder="Email" required />
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="field">
                  <input type="text" name="phone" placeholder="Phone" />
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="message">
                  <textarea placeholder="Message" name="message" required></textarea>
                  <i className="fas fa-comment-dots"></i>
                </div>
              </div>
              <div className="button-area">
                <button type="submit">
                  Submit <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
