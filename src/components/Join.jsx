import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './Join.css';
import TenpestLogo from '../assets/Logo_tenpest.png'; // Importe a imagem do logo

function Join() {
  return (
    <div className="join-page">
      <main className="join-main">
        {/* Adicione a imagem do logo aqui */}
        <img src={TenpestLogo} alt="Logo Tenpest" className="page-logo" />

        <section className="container join-section">
          {/* Botão "Voltar para a página inicial" */}
          <Link to="/" className="back-button">
            &larr; Voltar para a página inicial
          </Link>
          <div className="section-content">
            <h1 className="section-title">Seja um membro Tenpest</h1>
            <p>
              Junte-se à Tenpest Aerodesign e faça parte de uma equipe dedicada à inovação e excelência em engenharia aeronáutica. Estamos sempre em busca de novos talentos apaixonados por desafios e dispostos a contribuir para nossos projetos ambiciosos.
            </p>
            <p>
              Como membro da Tenpest, você terá a oportunidade de trabalhar em projetos reais, desenvolver suas habilidades técnicas e colaborar com outros estudantes motivados. Oferecemos um ambiente de aprendizado dinâmico, onde a criatividade e o trabalho em equipe são valorizados.
            </p>
            <p>
              Se você é estudante universitário do campus Benfica e deseja fazer parte de uma equipe que está na vanguarda do aerodesign, inscreva-se para se tornar um membro da Tenpest Aerodesign. Estamos ansiosos para receber novas ideias e energia para continuar nossa jornada rumo ao sucesso.
            </p>
            <h2>Inscrições abrirão em novembro de 2025</h2>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Join;