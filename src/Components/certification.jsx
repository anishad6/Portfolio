import React from 'react';
import '../styles/style.css';
import image1 from '../image/image.png';
import image2 from '../image/sql.jpg';
import image3 from '../image/advanceweb.jpg';

// Certifications Component in React
const Certifications = () => {
  const certificates = [
    {
      id: 1,
      image: image1, // Use the imported image variable
      title: 'IBM For Python',
      link: 'https://courses.itvedant.skillsnetwork.site/certificates/7f4cb7e28144487a836b8d4adc8af7bb',
    },
    {
      id: 2,
      image: image2, // Use the imported image variable
      title: 'SQL',
      link: 'https://courses.itvedant.skillsnetwork.site/certificates/7f4cb7e28144487a836b8d4adc8af7bb',
    },
    {
      id: 3,
      image: image3, // Use the imported image variable
      title: 'Advance Web Design',
      link: 'https://courses.itvedant.skillsnetwork.site/certificates/7f4cb7e28144487a836b8d4adc8af7bb',
    },
    {
      id: 4,
      image: image1, // Reusing image1 for Shopify
      title: 'Shopify Website Development',
      link: 'https://courses.itvedant.skillsnetwork.site/certificates/7f4cb7e28144487a836b8d4adc8af7bb',
    },
  ];

  return (
    <section className="certificate" id="certificate">
      <h2 className="heading">
        <i className="fa fa-cogs"></i> Certification
      </h2>
      <div className="certificate-cards">
        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.id}>
            <img src={certificate.image} alt={certificate.title} className="project-image" />
            <div className="certificate-content">
              <h3 className="project-title">{certificate.title}</h3>
              <div className="certificate-links">
                <a
                  href={certificate.link}
                  className="btn github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
