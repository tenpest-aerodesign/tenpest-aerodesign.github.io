import React from 'react';
import { Link } from 'react-router-dom';
import './Trajectory.css';
import Footer from './Footer';
import Paulo from '../assets/Paulo.png';
import Emilly from '../assets/Emilly.png';
import Miguel from '../assets/Miguel.png';
import Jose from '../assets/Jose.jpg';
import Raphael from '../assets/Raphael.png';
import Matheus from '../assets/Matheus.png';
import Fernando from '../assets/Fernando.png';
import Gildson from '../assets/Gildson.png';
import Olivia from '../assets/Olivia.jpeg'
import Izabella from '../assets/Izabella.jpeg'
import Inaldo from '../assets/Inaldo.jpeg'
import Gustavo from '../assets/Gustavo.jpeg'
import Heitor from '../assets/Heitor.jpeg'
import Guilherme from '../assets/Guilherme.png'
import Giovanna from '../assets/Giovanna.jpeg'
import George from '../assets/George.jpeg'; // Linha corrigida, sem o ponto no final.
import Salles from '../assets/Salles.jpeg'
import Gilfran from '../assets/Gilfran.jpeg'
import Ketsa from '../assets/Ketsa.jpeg'

import Logo_tenpest from '../assets/Logo_tenpest.png';

function Trajectory() {
  return (
    <div className="trajectory-page">
      <main className="trajectory-main">
        <section className="container trajectory-section">
          {/* Botão "Voltar para a página inicial" */}
          <Link to="/" className="back-button">
            &larr; Voltar para a página inicial
          </Link>
          <div className="section-content">
            <h1 className="section-title">Tenpest Aerodesign</h1>
            <h2>Nossa trajetória</h2>
            <p>
              Desde sua fundação, a Tenpest Aerodesign tem se destacado no cenário acadêmico e competitivo. Nossa jornada começou com a paixão pela aviação e o desejo de transformar teoria em prática. Ao longo dos anos, participamos de diversas competições nacionais, aprimorando nossas aeronaves e expandindo nosso conhecimento em áreas como aerodinâmica, estabilidade e modelagem. Cada desafio nos impulsionou a inovar e a construir uma equipe mais coesa e resiliente.
            </p>
            <p>
              Nosso compromisso com a excelência nos levou a conquistar reconhecimentos importantes e a se consolidar como um dos grupos de aerodesign mais promissores do país, sempre com o foco no aprendizado contínuo e na aplicação prática da engenharia.
            </p>
          </div>
        </section>

        <section className="container team-section">
          <h2>Divisão da Equipe</h2>
          <div className="team-grid">

            {/* Membro: Aerodinâmica */}
            <div className="team-member">
              <div className="member-image-container">
                {/* Agrupamento para as fotos e cargos */}
                <div className="photo-group">
                  <img src={Gustavo} alt="Gustavo" />
                  <span className="member-position">Líder de área</span>
                </div>
                <div className="photo-group">
                  <img src={Miguel} alt="Miguel" />
                  <span className="member-position">Membro</span>
                </div>
              </div>
              <div className="member-info-container">
                <h3>Aerodinâmica</h3>
                <p>Responsável pela escolha dos perfis aerodinâmicos das asas e empenagem, além de dimensionar corda e envergadura das asas da aeronave.</p>
              </div>
            </div>

            {/* Membro: Estruturas e Ensaios */}
            <div className="team-member">
              <div className="member-image-container">
                <div className="photo-group">
                  <img src={Raphael} alt="Raphael" />
                  <span className="member-position">Líder de área</span>
                </div>
              </div>
              <div className="member-info-container">
                <h3>Estruturas e Ensaios</h3>
                <p>Foca na resistência e leveza da aeronave, selecionando materiais e projetando e dimensionando estruturas como trem de pouso e fuselagem.</p>
              </div>
            </div>

            {/* Membro: Elétrica */}
            <div className="team-member">
              <div className="member-image-container">
                {/* Agrupamento para as fotos e cargos */}
                <div className="photo-group">
                  <img src={Matheus} alt="Matheus" />
                  <span className="member-position">Líder de área</span>
                </div>
                <div className="photo-group">
                  <img src={Olivia} alt="Olivia" />
                  <span className="member-position">Membro</span>
                </div>
                <div className="photo-group">
                  <img src={Salles} alt="Salles" />
                  <span className="member-position">Membro</span>
                </div>

              </div>
              <div className="member-info-container">
                <h3>Elétrica</h3>
                <p>Cuida dos sistemas de controle, telemetria e da integração dos componentes eletrônicos.</p>
              </div>
            </div>

            {/* Membro: Estabilidade e Controle */}
            <div className="team-member">
              <div className="member-image-container">
                {/* Agrupamento para as fotos e cargos */}
                <div className="photo-group">
                  <img src={Emilly} alt="Emilly" />
                  <span className="member-position">Líder de área</span>
                </div>
                <div className="photo-group">
                  <img src={Jose} alt="Jose" />
                  <span className="member-position">Membro</span>
                </div>
              </div>
              <div className="member-info-container">
                <h3>Estabilidade e Controle</h3>
                <p>É responsável por dimensionar os estabilizadores e as superfícies de controle, garantindo um vôo estável, reto e nivelado.</p>
              </div>
            </div>

            {/* Membro: Desempenho */}
            <div className="team-member">
              <div className="member-image-container">
                {/* Agrupamento para as fotos e cargos */}
                <div className="photo-group">
                  <img src={Paulo} alt="Paulo" />
                  <span className="member-position">Membro</span>
                </div>
                <div className="photo-group">
                  <img src={Guilherme} alt="Guilherme" />
                  <span className="member-position">Membro</span>
                </div>
              </div>
              <div className="member-info-container">
                <h3>Desempenho</h3>
                <p>Calcula o comprimento de pista, velocidades em diferentes condições de vôo e juntamente com elétrica, define o grupo motopropulsor.</p>
              </div>
            </div>

            {/* Membro: Modelagem */}
            <div className="team-member">
              <div className="member-image-container">
                {/* Agrupamento para as fotos e cargos */}
                <div className="photo-group">
                  <img src={Emilly} alt="Emilly" />
                  <span className="member-position">Líder de área</span>
                </div>
                <div className="photo-group">
                  <img src={Heitor} alt="Heitor" />
                  <span className="member-position">Membro</span>
                </div>
              </div>
              <div className="member-info-container">
                <h3>Modelagem</h3>
                <p>Faz a modelagem 3D do avião utilizando o SolidWorks, além de inovar na concepção de encaixes e visual do aerodesign.</p>
              </div>
            </div>

            {/* Membro: Cargas e Aeroelasticidade */}
            <div className="team-member">
              <div className="member-image-container">
                {/* Agrupamento para as fotos e cargos */}
                <div className="photo-group">
                  <img src={Fernando} alt="Fernando" />
                  <span className="member-position">Líder de área</span>
                </div>
                <div className="photo-group">
                  <img src={Miguel} alt="Miguel" />
                  <span className="member-position">Membro</span>
                </div>
              </div>
              <div className="member-info-container">
                <h3>Cargas e Aeroelasticidade</h3>
                <p>Responsável por definir o quanto de peso o aerodesign pode suportar em diversas superfícies, como também o quanto pode realizar esforços nas partes principais do avião.</p>
              </div>
            </div>

            {/* Membro: Gestão de equipe */}
            <div className="team-member">
              <div className="member-image-container">
                {/* Agrupamento para as fotos e cargos */}
                <div className="photo-group">
                  <img src={Giovanna} alt="Giovanna" />
                  <span className="member-position">Líder de área</span>
                </div>
                <div className="photo-group">
                  <img src={Izabella} alt="Izabella" />
                  <span className="member-position">Membro</span>
                </div>
                <div className="photo-group">
                  <img src={Gildson} alt="Gildson" />
                  <span className="member-position">Membro</span>
                </div>

              </div>
              <div className="member-info-container">
                <h3>Gestão de projeto</h3>
                <p>Gerencia o andamento da equipe com a produção do avião, além de organizar cronogramas e reuniões de equipe.</p>
              </div>
            </div>

            {/* Membro: Marketing */}
            <div className="team-member">
              <div className="member-image-container">
                {/* Agrupamento para as fotos e cargos */}
                <div className="photo-group">
                  <img src={Inaldo} alt="Inaldo" />
                  <span className="member-position">Membro</span>
                </div>
                <div className="photo-group">
                  <img src={Ketsa} alt="Ketsa" />
                  <span className="member-position">Membro</span>
                </div>

              </div>
              <div className="member-info-container">
                <h3>Marketing</h3>
                <p>Responsável por dar vida ao projeto nas redes sociais e no ambiente universitário da UPE.</p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-image-container">
                {/* Agrupamento para as fotos e cargos */}
                <div className="photo-group">
                  <img src={Gustavo} alt="Gustavo" />
                  <span className="member-position">Capitão</span>
                </div>
                <div className="photo-group">
                  <img src={Emilly} alt="Emilly" />
                  <span className="member-position">Vice-capitã</span>
                </div>
              </div>
              <div className="member-info-container">
                <h3>Gestores de equipe</h3>
                <p>Membros responsáveis pelo andamento do projeto e sua organização, além de requisitar tarefas e guiar funções para os demais membros</p>
              </div>
            </div>

            {/* Membro: Coordenadores de equipe */}
            <div className="team-member">
              <div className="member-image-container">
                {/* Agrupamento para as fotos e cargos */}
                <div className="photo-group">
                  <img src={George} alt="George" />
                  <span className="member-position">Coordenador</span>
                </div>
                <div className="photo-group">
                  <img src={Gilfran} alt="Gilfran" />
                  <span className="member-position">Coordenador</span>
                </div>
              </div>
              <div className="member-info-container">
                <h3>Coordenadores de equipe</h3>
                <p>Responsáveis por integrar o projeto com a instituição de ensino, coordenanodo e orientando o projeto de extensão como um todo</p>
              </div>
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Trajectory;