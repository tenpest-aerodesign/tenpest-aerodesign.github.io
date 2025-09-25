import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importe o useLocation
import MobileMenu from './MobileMenu';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Obtém a localização atual

  const isHomePage = location.pathname === '/'; // Verifica se é a página principal

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!isHomePage) {
      // Se não estiver na página inicial, o header deve ser sempre sólido
      setScrolled(true);
      return;
    }

    // Lógica de rolagem somente para a página inicial
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, isHomePage]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <div className="navbar-logo">
            <Link to="/">Tenpest Aerodesign</Link>
          </div>
          <nav className="navbar-links">
            <Link to="/direction">Seja um patrocinador</Link>
            <Link to="/contact">Contato</Link>
            <Link to="/join">Seja Tenpest</Link>
          </nav>
          <button className="hamburger-menu" onClick={toggleMenu}>
            &#9776; {/* Ícone de hambúrguer */}
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
}

export default Navbar;