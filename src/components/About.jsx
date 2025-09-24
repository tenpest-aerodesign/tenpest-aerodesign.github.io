import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        {/* Lado esquerdo: Título e Botão */}
        <div className="about-left-side">
          <h2 className="section-title">Sobre a Tenpest</h2>
          <button>
          <Link to="/trajectory" className="hero-button">
            Saiba mais sobre o projeto
          </Link>
          </button>
          <h2 className="section-title">Sobre os patrocinadores</h2>
          <button>
          <Link to="/destiny" className="hero-button">
            Saiba mais sobre os nossos parceiros
          </Link>
          </button>
        </div>

        {/* Lado direito: Descrição do projeto */}
        <div className="about-right-side">
          <p>
            A Tenpest Aerodesign é um projeto de extensão da Universidade de Pernambuco que se dedica ao desenvolvimento de aeronaves,
            participação em competições, e fomento ao ensino e à pesquisa em engenharia aeroespacial e design aeronáutico.
          </p>
          <p>
            O grupo promove a aplicação prática de conhecimentos em aerodinâmica, estruturas, inovação e trabalho em equipe, oferecendo
            oportunidades de aprendizado e crescimento para os alunos envolvidos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;