import React from 'react';
import '../styles/style.css';

// import './styles/style.css'; // Ensure the CSS file path is correct

export default function Header() {
  return (
    <header>
      {/* Navbar Section */}
      <a href="#" className="logo">Abhishek</a>
      <div id="menu" className="fas fa-bars"></div>

      <nav className="navbar">
        <ul>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certificate">Certificate</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
