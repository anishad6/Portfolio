import React from 'react'
import '../styles/style.css';
import image from "../image/abhi.jpeg"; 

export default function Hero() {
  return (
    <div>
      {/* <!-- hero section starts --> */}
    <section class="home" id="home">
        <div id="particles-js"></div>
        <div class="content">
            <h2>Hi There,<br /> I'am Abhishek <span>Nishad</span></h2>
            <p>i am into <span class="typing-text"></span></p>
            <a href="#about" class="btn">
                <span>About Me</span>
                <i class="fas fa-arrow-circle-down"></i>
            </a>
            <div class="socials">
                <ul class="social-icons">
                    <li><a class="linkedin" aria-label="LinkedIn" href="https://linkedin.com/in/abhishek-nishad10/"
                            target="_blank"><i class="fab fa-linkedin"></i></a></li>
                    <li><a class="github" aria-label="GitHub" href="https://github.com/anishad6" target="_blank"><i
                                class="fab fa-github"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="image">
        <img draggable="false" className="tilt" src={image} alt="Hero Image" />
        </div>
    </section>
    {/* <!-- hero section ends --> */}
    </div>
  )
}
