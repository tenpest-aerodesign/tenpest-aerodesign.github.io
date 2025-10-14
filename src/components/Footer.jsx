import React from 'react';
import './Footer.css';
import instagramIcon from '../assets/Logo_instagram.png';
import linkedinIcon from '../assets/Logo_linkedin.png'; 
import tiktokIcon from '../assets/Logo_tiktok.png'; 

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <p>© {new Date().getFullYear()} Tenpest Aerodesign — Universidade de Pernambuco</p>
        <p>Desenvolvido pelos integrantes</p>
      </div>

      {/* Container para os links das redes sociais */}
      <div className="footer-social-links">
        <a href="https://www.instagram.com/tenpestaerodesign?igsh=MXN0bTdxYXQ1bDI2ZA==" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/company/tenpest-aerodesign/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://www.tiktok.com/@tenpestaerodesign?fbclid=PAVERTVgNatudleHRuA2FlbQIxMAABp1To96MHFAY1_ZIxpd8zX-VFA9phXXjrwhxmrlGUssFSKW0yGH95JGBZG_NS_aem_quiryPkn1JOcvTvsLZIIRg" target="_blank" rel="noopener noreferrer">
          <img src={tiktokIcon} alt="TikTok" className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;