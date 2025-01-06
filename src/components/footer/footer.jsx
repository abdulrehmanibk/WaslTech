import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <>
        <footer className="footer">
        <div className="footer_intro">
            <div className="footer_intro_logo">
            <h4>Imoringal</h4>
            </div>
            <div className="footer_intro_text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum suscipit nobis sit minima eveniet, optio, dignissimos earum provident magni magnam voluptatem ipsum quam odit eligendi beatae nesciunt illum. Voluptatem id vel aut veniam neque amet tempore facere exercitationem nesciunt magni.</p>
            </div>
            <div className="footer_follow_links">
                <p>follow - </p> 
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-facebook-square"></i>
            </div>
        </div>
        <div className="footer_services">
            <ul>
                <li>Services</li>
                <li>Website Development</li>
                <li>IOS App Development</li>
                <li>Android App Development</li>
            </ul>
        </div>
        <div className="footer_contact">
            <ul>
                <li>Quick Contact</li>
                <li><i className="fas fa-envelope"></i> abrm.ibk@gmail.com</li>
                <li><i className="fab fa-whatsapp-square"></i> +92 314 5443143</li>
                <li><i className="fab fa-whatsapp-square"></i> +92 333 9999999</li>
            </ul>
        </div>
        <div className="footer_copywrite">
            <hr></hr>
            <p>Copyright @ 2024 All Right Reserved</p>
        </div>

    </footer>
    </>
  )
}

export default Footer;