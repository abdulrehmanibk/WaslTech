import React from 'react'
import './home.css';
// import './indextech.css';

const Home = () => {
  return (
    <>
        <div className="index_hero">
        <div className="hero_text">
            <h2>Empowering Businesses with Cutting-Edge Web and Mobile Solutions</h2>
            <div className='hero_btn'>
                <button className="btn1">Learn More</button>
                <button className="btn2">Learn More</button>
            </div>
        </div>
    </div>
    <section className="core_services">
        <div className="core_services_heading">
            <h3>Our <span>F</span>eatures</h3>
        </div>
            <ul className="core_services_detail">
                <li> <i className="fas fa-laptop-code"></i><p>Website Design & Development</p></li>
                <li> <i className="fas fa-mobile-alt"></i><p>Mobile IOS/Android App Development </p></li>
                <li> <i className="fas fa-robot"></i><p>AI Integration In Web & App</p></li>
                <li> <i className="fab fa-intercom"></i><p>Custom Scalabe Applications</p></li>
            </ul>
            <div className="core_services_btn">
                <button className="btn3">Discove more about services</button>
            </div>
    </section>
    

    <section className="section">
        <p>Diving Deep into Technology</p>
            <div className="wrapper">
                <div className="itemLeft" style={{"--i": 1}}><p>Angular</p> </div>
                <div className="itemLeft" style={{"--i": 2}}><p>MongoDb</p> </div>
                <div className="itemLeft" style={{"--i": 3}}><p>Javascrip</p> </div>
                <div className="itemLeft" style={{"--i": 4}}><p>AWS</p> </div>
                <div className="itemLeft" style={{"--i": 5}}><p>React.js</p></div>
                <div className="itemLeft" style={{"--i": 6}}><p>HTML</p> </div>
                <div className="itemLeft" style={{"--i": 7}}><p>DockerHub</p> </div>
                <div className="itemLeft" style={{"--i": 8}}><p>LLM Models</p> </div>
            </div>         
            <div className="wrapper">
                <div className="itemRight" style={{"--i": 1}}><p>CSS</p> </div>
                <div className="itemRight" style={{"--i": 2}}><p>Express.js</p></div>
                <div className="itemRight" style={{"--i": 3}}><p>GitHub</p> </div>
                <div className="itemRight" style={{"--i": 4}}><p>Typescript</p> </div>
                <div className="itemRight" style={{"--i": 5}}><p>Ollama</p> </div>
                <div className="itemRight" style={{"--i": 6}}><p>MySQL</p> </div>
                <div className="itemRight" style={{"--i": 7}}><p>Node.js</p></div>
                <div className="itemRight" style={{"--i": 8}}><p>React-Native</p></div>
            </div>        
    
    </section>


    <section className="whyUs">
        <div className="whyUs_content">
            <h3>Why Choose Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, porro nemo modi voluptates sequi quia.</p>
            <div className="whyus_card">
                <p> <span>Native Dev </span>Cross Platform Development</p>
            </div>
            <div className="whyus_card">
                <p><span>100% </span>Success Rate</p>
            </div>
            <div className="whyus_card">
                <p> <span>6 Month </span>Support & Maintenance</p>
            </div>
            <div className="whyus_card">
                <p><span>Latest </span>Technology We Uses</p>
            </div>
        </div>
        <div className="whyUs_image"></div>
    
    </section>
    <section className="contact">
        <h2>Let’s work together</h2>
        <p>Contact us to build something extraordinary. Supporting businesses for growth and success.</p>
        <a className="btn2" href={'/contact'}>Let’s Start a Project</a>
      </section>
    </>
  )
}

export default Home;