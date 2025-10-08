import React, { useState, useEffect, useRef } from 'react';
import './Hero.css'; // O CSS que vamos ajustar a seguir

// Importe sua imagem de fundo original
import heroBackgroundImage from '../assets/tenpest.jpg';

// IMPORTANTE: Importe os vídeos que você colocou na pasta 'assets/videos'
// Troque os nomes dos arquivos pelos nomes dos seus vídeos
//import video1 from '../assets/Gravação de Tela 2025-09-14 201009.mp4';
//import video2 from '../assets/Gravação de Tela 2025-09-18 220230.mp4';

// Array com a sequência de vídeos
//const videoSources = [video1, video2];

// Tempo em milissegundos que a imagem ficará na tela (5 segundos)
const IMAGE_DISPLAY_TIME_MS = 5000;

function Hero() {
    const [isShowingImage, setIsShowingImage] = useState(true);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);

    // Efeito para trocar da imagem para o vídeo após o tempo definido
    useEffect(() => {
        const imageTimer = setTimeout(() => {
            setIsShowingImage(false);
        }, IMAGE_DISPLAY_TIME_MS);

        return () => clearTimeout(imageTimer); // Limpa o timer se o componente for desmontado
    }, []); // Array vazio garante que o efeito rode apenas uma vez

    // Efeito para tocar o próximo vídeo quando o índice mudar
    useEffect(() => {
        if (!isShowingImage && videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(error => {
                console.error("Erro ao tentar autoplay do vídeo:", error);
            });
        }
    }, [currentVideoIndex, isShowingImage]);

    // Função para passar para o próximo vídeo da lista
    const handleNextVideo = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    };

    return (
        // A classe 'hero' já existe no seu CSS, vamos mantê-la
        <section id="hero" className="hero">
            {/* Elemento de Mídia (Imagem ou Vídeo) */}
            <div className="hero-media-background">
                {isShowingImage ? (
                    <img src={heroBackgroundImage} alt="Background inicial da Tenpest" />
                ) : (
                    <video
                        ref={videoRef}
                        src={videoSources[currentVideoIndex]}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleNextVideo} // Chama o próximo vídeo quando o atual terminar
                        poster={heroBackgroundImage} // Mostra a imagem enquanto o vídeo carrega
                    />
                )}
            </div>

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