// App.jsx
import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="banner">
        <h2>About Us</h2>
        <p><a href="/"> Home</a>  {">"} About Us</p>
      </div>

      {/* Exclusive Technology Section */}
      <section className="exclusive-technology">
      <div className="exclusive-images">
          {/* <img src="/path-to-image1.jpg" alt="Team collaboration" /> */}
        </div>
        <div className="exclusive-content">
          <h2>Exclusive technology to provide IT solutions</h2>
          <ul>
            <li><p>Early Build Custom Reports And Dashboards</p></li>
            <li><p>Legacy Software Modernization</p></li>
            <li><p>Software For The Open Enterprise</p></li>
          </ul>
          <button className="learn-more">More details</button>
        </div>

      </section>

      {/* IT Solutions Section */}
      <section className="it-solutions">
        <div className="solutions-content">
          <h2>Providing IT solutions & services for startups</h2>
          <ul>
            <li>
              <h3>Quality Solutions for Business</h3>
              <p>Expert team delivering scalable business solutions.</p>
            </li>
            <li>
              <h3>Amazing Expert Teams</h3>
              <p>Skilled individuals ready to tackle different challenges.</p>
            </li>
            <li>
              <h3>Urgent Support for Clients</h3>
              <p>Round-the-clock support for urgent needs.</p>
            </li>
          </ul>
        </div>
        <div className="solutions-images"></div>
      </section>
      <section className="contact">
        <h2>Let’s work together</h2>
        <p>Contact us to build something extraordinary. Supporting businesses for growth and success.</p>
        <a className="btn2" href={'/contact'}>Let’s Start a Project</a>
      </section>
    </div>
  );
};

export default About;
