import React from 'react'
import '../styles/style.css';
import image from "../image/degreeCollege.jpg"; 
import image2 from "../image/School-Building.jpg"; 



export default function Education() {
  return (
    <div>
       {/* <!-- education section starts --> */}
    <section class="education" id="education">

        <h1 class="heading"><i class="fas fa-graduation-cap"></i> My <span>Education</span></h1>

        <p class="qoute">Education isn't about storing facts; it's about shaping minds to think critically and
            innovatively.</p>

        <div class="box-container">

            <div class="box">
                <div class="image">
                     <img draggable="false" className="tilt" src={image} alt="Hero Image" />
                    {/* <img draggable="false" src="/image/sahyog-college.jpg" alt=""> */}
                </div>
                <div class="content">
                    <h3> Bachelor of Computer Computer Science(BCs)</h3>
                    <p>VK Krishna Menon College of Commerce and Economics and Science</p>
                    <h4>2020-2023 | Completed </h4>
                </div>
            </div>

            <div class="box">
                <div class="image">
                <img draggable="false" className="tilt" src={image2} alt="Hero Image" />
                {/* <img draggable="false" src={image} alt="S.S. Sangh's" /> */}
                </div>
                <div class="content">
                    <h3> HSC in Science | University of Mumbai</h3>
                    <p>Friends's jr College</p>
                    <h4>2018-2020 | Completed </h4>
                </div>
            </div>

        </div>
    </section>
    {/* <!-- education section ends --> */}
    </div>
  )
}
