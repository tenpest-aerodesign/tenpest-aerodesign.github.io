import React from 'react';
import './Footer.css'; // Criaremos este arquivo de CSS

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <p>© {new Date().getFullYear()} Tenpest Aerodesign — Universidade de Pernambuco</p>
        <p>Desenvolvido pelos integrantes</p>
      </div>
    </footer>
  );
}

export default Footer;