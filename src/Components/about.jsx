import React from 'react'
import '../styles/style.css';
import image from "../image/contact1.png";


export default function About() {
    return (
        <div>
            {/* <!-- about section starts --> */}
            <section class="about" id="about">
                <h2 class="heading"><i class="fas fa-user-alt"></i> About <span>Me</span></h2>
                <div class="row">
                    <div class="image">
                        <img draggable="false" className="tilt" src={image} alt="Hero Image" />
                        {/* <img draggable="false" class="tilt" src="/image/about us.jpg" alt=""> */}
                    </div>
                    <div className="content">
                        <h3>I'm Abhishek Nishad</h3>
                        <span class="tag"> Python & Full Stack Web Developer</span>

                        <p>I am a Python Developer and Full Stack Web Developer Graduate  in  a Bachelor of Computer Science (BCS) degree. 
                            Passionate about building scalable and efficient web applications, 
                            I specialize in developing dynamic and responsive websites using Python, Django, JavaScript, React, SQL, and MySQL. 
                            My expertise includes backend development, API integration, and database management. Committed to continuous learning, 
                            I actively enhance my skills to create innovative and impactful web solutions.</p>
                        <div className="box-container">
                            {/* <!-- <div className="box">
                        <p><span> age: </span> 22</p>
                        <p><span> phone : </span> +91 XXX-XXX-XXXX</p>
                    </div> --> */}
                            <div className="box">
                                <p><span> email : </span> nishadabhishek200027@gmail.com</p>
                                <p><span> place : </span> Mumbai, India - 400078</p>
                            </div>
                        </div>
                        <div className="resumebtn">
                            <a href="https://drive.google.com/file/d/1D6r0GFNNEFxxuOCT248fgjPnR2Ukiu8U/view?usp=drive_link
"
                                target="_blank" className="btn" download><span>Resume</span>
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- about section ends --> */}
        </div>
    )
}
