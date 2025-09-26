import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import TenpestLogo from '../assets/Logo_tenpest.png'; // Importe a imagem do logo

function Contact() {
  const formEndpoint = "https://formspree.io/f/xvgwplnb";

  return (
    <div className="contact-page">
      <main className="contact-main">
        {/* Adicione a imagem do logo aqui */}
        <img src={TenpestLogo} alt="Logo Tenpest" className="page-logo" />

        <section className="contact-section">
          {/* Botão "Voltar para a página inicial" */}
          <Link to="/" className="back-button">
            &larr; Voltar para a página inicial
          </Link>
          <h2>Fale Conosco</h2>
          <p>
            Tem alguma pergunta, sugestão ou quer saber mais sobre nosso trabalho?
            Envie uma mensagem e a equipe Tenpest responderá o mais breve possível!
          </p>

          <form action={formEndpoint} method="POST" className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Seu Nome:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Seu Email:</label>
              <input type="email" id="email" name="_replyto" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Sua Mensagem:</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>

            <button type="submit" className="submit-button">Enviar Mensagem</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Contact;