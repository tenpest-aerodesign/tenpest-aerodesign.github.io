import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'; // Crie este arquivo CSS para estilizar

function Contact() {
  const formEndpoint = "https://formspree.io/f/xvgwplnb"; // Substitua por sua URL do Formspree (Fazer login e pedir uma URL)

  return (
    <div className="contact-page">
      <Link to="/" className="back-button">
        &larr; Voltar para a página inicial
      </Link>
      <main className="contact-main">
        <section className="contact-section">
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