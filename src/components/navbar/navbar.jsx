import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <nav className="navContainer">
        <div className="logo">
            <h4><a href="/">Imoringal</a></h4>
        </div>
        <div>
            <ul className="navlinks">
                <li><a href="/WaslTech">Home</a></li>
                <li><a href="/WaslTech/services">IT-solutions</a></li>
                {/* <li><a href="#">Engagments</a></li> */}
                <li><a href="/WaslTech/about">About</a></li>
                <li><a href="/WaslTech/contact">Contact Us</a></li>
            </ul>    
        </div>        
        <div className="navbtn">
            <button className="btn1" id="git">Get In Touch</button>
        </div>

    </nav>
    </>
  );
}

export default Navbar;