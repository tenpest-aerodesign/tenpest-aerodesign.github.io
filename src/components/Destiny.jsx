import React from 'react';
import { Link } from 'react-router-dom';
import './Destiny.css';
import Footer from './Footer';
import SolidworksLogo from '../assets/Solidworks.png';
import WoodpeckerLogo from '../assets/Woodpecker.png';
import AnsysLogo from '../assets/Ansys.png';
import TenpestLogo from '../assets/Logo_tenpest.png';

function Destiny() {
  return (
    <div className="destiny-page">
      <main className="destiny-main">
        <img src={TenpestLogo} alt="Logo Tenpest" className="page-logo" />
        <section className="container destiny-section">
          {/* Botão "Voltar para a página inicial" */}
          <Link to="/" className="back-button">
            &larr; Voltar para a página inicial
          </Link>
          <div className="section-content">
            <h1 className="section-title">Parcerias Tenpest</h1>
            <h2>Nossos patrocinadores</h2>
            <div className="partners-grid">
                {/* Contêiner do patrocinador Solidworks */}
                <div className="partner-container">
                    <img src={SolidworksLogo} alt="Solidworks Logo" className="partner-logo" />
                    <div className="partner-overlay">
                        <p className="partner-description">
                            A SolidWorks é nossa parceira no desenvolvimento de modelos 3D e na criação visual do nosso aerodesign, otimizando o design e a produção.
                        </p>
                    </div>
                </div>

                {/* Contêiner do patrocinador Woodpecker */}
                <div className="partner-container">
                    <img src={WoodpeckerLogo} alt="Woodpecker Logo" className="partner-logo" />
                    <div className="partner-overlay">
                        <p className="partner-description">
                            Woodpecker fornece materiais de alta qualidade para a construção de nossas aeronaves, garantindo leveza e resistência estrutural.
                        </p>
                    </div>
                </div>

                {/* Contêiner do patrocinador Ansys */}
                <div className="partner-container bottom-image">
                    <img src={AnsysLogo} alt="Ansys Logo" className="partner-logo" />
                    <div className="partner-overlay">
                        <p className="partner-description">
                            Ansys é nossa parceira em simulações de engenharia avançada, como análise de fluidos e stress, essenciais para a otimização de desempenho.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Destiny;