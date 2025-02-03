import React from 'react';
import '../styles/style.css';
import image from "../image/django.png";
import image1 from "../image/vs code .png";



// import './skills.css'; // Import CSS file for styling (if applicable)

export default function Skills() {
  return (
    <section className="skills" id="skills">
      {/* Skills Section */}
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills
      </h2>
      <div className="container">
        <div className="row" id="skillsContainer">
          <div className="bar">
            <div className="info">
              <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML5" />
              <span>HTML5</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3" />
              <span>CSS3</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap" />
              <span>Bootstrap</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src="https://img.icons8.com/ios-filled/48/1169ae/jquery.png" alt="jQuery" />
              <span>jQuery</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src="https://img.icons8.com/color/48/000000/python--v1.png" alt="Basic Python" />
              <span>Python</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="Basic MySQL" />
              <span>MySQL</span>
            </div>
          </div>
          
          <div className="bar">
            <div className="info">
              <img src={image} alt="Django" />
              <span>Django</span>
            </div>
          </div>


          <div className="bar">
            <div className="info">
              <img src="https://img.icons8.com/glyph-neue/48/ffffff/github.png" alt="GitHub" />
              <span>GitHub</span>
            </div>
          </div>
          {/* <div className="bar">
            <div className="info">
              <img src="https://img.icons8.com/color/48/000000/wordpress.png" alt="WordPress" />
              <span>WordPress</span>
            </div>
          </div> */}
          {/* <div className="bar">
            <div className="info">
              <img src="/images/shopify.png" alt="Shopify" />
              <span>Shopify</span>
            </div>
          </div> */}
          <div className="bar">
            <div className="info">
            <img src={image1} alt="Visual Studio Code" />
              {/* <img src="/images/vscode.png" alt="Visual Studio Code" /> */}
              <span>Visual Studio Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
