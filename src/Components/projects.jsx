import React from 'react';
import '../styles/style.css';
import image1 from "../image/dashboard.png";
import image2 from "../image/ngo.png";
import image3 from "../image/petshop.png";

const projectsData = [
    {
        image: image1,
        alt: "Department Management",
        title: "Department Management",
        description: "A responsive Department Management for Managing Department and Employee, built with Python Django, HTML, CSS, Redux, and integrated with modern payment gateways.",
        github: "https://github.com/anishad6/DepartmentManagement",
        live: "https://abhishekn27.pythonanywhere.com"
    },
    {
        image: image2,
        alt: "Earthmai",
        title: "Earthmai Foundation",
        description: "This is an NGO project focused on environmental and social initiatives,incorporating user authentication, donation functionalities, volunteerparticipation, and informational content.",
        github: "https://github.com/anishad6/EarthmaiFoundation",
        // live: "https://estilocus.com/"
    },
    {
        image: image3,
        alt: "Petshop",
        title: "petShop",
        description: "An e-commerce platform for purchasing pets, featuring product browsing, cart management, paymentintegration with Razorpay, admin panel operations, user authentication, and filtering, sorting, andsearch functionalities.",
        github: "https://github.com/anishad6/petProject1"
    }
];

export default function Projects() {
    return (
        <div>
            <section id="projects">
                <h1 className="heading">My <span>Projects</span></h1>
                <p>Take a look at some of the exciting projects I have worked on!</p>
                <section className="projects-section">
                    <div className="projects-container">
                        {projectsData.map((project, index) => (
                            <div className="project-card" key={index}>
                                <img src={project.image} alt={project.alt} className="project-image" />
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-links">
                                        <a href={project.github} className="btn github" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i> GitHub
                                        </a>
                                        {project.live && (
                                            <a href={project.live} className="btn live" target="_blank" rel="noopener noreferrer">
                                                <i className="fas fa-globe"></i> Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </div>
    );
}
