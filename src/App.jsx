import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Trajectory from './components/Trajectory';
import ScrollToTop from './components/ScrollToTop';
import Destiny from './components/Destiny';
import Direction from './components/Direction';
import Join from './components/Join';
import Contact from './components/Contact';

import './styles/global.css';

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <main>
              <Hero />
              <About />
            </main>
            <Footer />
          </>
        } />
        <Route path="/trajectory" element={<Trajectory />} />
        <Route path="/destiny" element={<Destiny />} />
        <Route path="/direction" element={<Direction />} /> {/* Nova rota para patrocinadores */}
        <Route path="/join" element={<Join />} /> {/* Nova rota para membros */}
        <Route path="/contact" element={<Contact />} /> {/* Nova rota para contato */}
      </Routes>
    </Router>
  );
}

export default App;