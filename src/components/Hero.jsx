import React from 'react';
import './Hero.css';
import heroBackgroundImage from '../assets/tenpest.jpg';

function Hero() {
  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${heroBackgroundImage})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Inovação e excelência no aerodesign universitário.
          </h1>
          <p className="hero-subtitle">
            A Tenpest Aerodesign transforma teoria em prática, desenvolvendo projetos
            aeroespaciais de ponta e capacitando futuros engenheiros.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;