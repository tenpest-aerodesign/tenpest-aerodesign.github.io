import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './Direction.css';

function Direction() {
  return (
    <div className="direction-page">
      <main className="direction-main">
        <section className="container direction-section">
          {/* Botão "Voltar para a página inicial" */}
          <Link to="/" className="back-button">
            &larr; Voltar para a página inicial
          </Link>
          <div className="section-content">
            <h1 className="section-title">Seja um patrocinador</h1>
            <p>
              O sucesso da Tenpest Aerodesign é impulsionado por nossos patrocinadores. Juntos, transformamos a paixão pela engenharia em projetos inovadores e talentos de ponta.
            </p>
            <p>
              Ao patrocinar nosso grupo, sua empresa associa sua marca à inovação, excelência e à formação de futuros engenheiros. Oferecemos diferentes níveis de parceria, com visibilidade em competições, mídias sociais e eventos universitários.
            </p>
            <p>
              Sua contribuição é vital para a aquisição de materiais, equipamentos e para a viabilização da participação em competições, permitindo-nos alcançar resultados ainda mais ambiciosos.
            </p>
          </div>
        </section>

        <section className="container contact-info">
          <h2>Entre em contato</h2>
          <p>Para mais informações sobre como se tornar um patrocinador e os benefícios de parceria, entre em contato conosco:</p>
          <p>
            Email: <a href="mailto:contato@tenpest.com">tenspestaerodesign@gmail.com</a>
          </p>
          <p>
            Telefone: (81) 7120-5686
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Direction;