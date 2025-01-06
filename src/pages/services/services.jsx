import React from "react";
import "./services.css";

const Services = () => {
  // Array of services
  const services = [
    {
      title: "Data Trading Security",
      description: "Each transaction is safe and secure...",
      link: "Learn More &rarr;",
    },
    {
      title: "Web & Mobile App Development",
      description: "We build applications to suit all needs...",
      link: "Learn More &rarr;",
    },
    {
      title: "Digital Marketing Services",
      description: "Reach your audience with our tailored strategies...",
      link: "Learn More &rarr;",
    },
    {
      title: "Cyber Security Solutions",
      description: "Protect your systems with advanced security...",
      link: "Learn More &rarr;",
    },
    {
      title: "IT Management Service",
      description: "Efficient management for smooth operations...",
      link: "Learn More &rarr;",
    },
    {
      title: "UI/UX & Branding Identity",
      description: "Enhance user experiences with our designs...",
      link: "Learn More &rarr;",
    },
  ];

  return (
    <div className="container">
      <div className="banner">
        <h2>Service</h2>
        <p><a href="/"> Home</a>  {">"} Service</p>
      </div>


      {/* Working Process Section */}
      <section className="working-process">
        <h2>Our working process on how to grow your business</h2>
        <div className="steps-container">
          <div className="step">
            <div className="img"></div>
            <h3>Initiation & Planning</h3>
            <p>We carefully understand and plan each project...</p>
          </div>
          <div className="step">
            <div className="img"></div>
            <h3>Execution & Development</h3>
            <p>We implement the design with innovative solutions...</p>
          </div>
          <div className="step">
            <div className="img"></div>
            <h3>Testing & Maintenance</h3>
            <p>We test and maintain the technological advancement...</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our awesome services to give you success</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service" key={index}>
              <div className="service_icon">
              <i class="fa-solid fa-database"></i>
              <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              <a href="#">{service.link}</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Let’s work together</h2>
        <p>Contact us to build something extraordinary. Supporting businesses for growth and success.</p>
        <a className="btn2" href={'/contact'}>Let’s Start a Project</a>
      </section>
    </div>
  );
};

export default Services;
