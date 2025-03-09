import React from 'react';
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MorpionPage from './components/MorpionPage';
import MotsCroisses from './components/MotsCroisses';
import ClubSportifPage from './components/ClubSportifPage';
import DechetsPage from './components/DechetsPage';
import EmpruntsPage from './components/EmpruntsPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import RoadsPage from './components/RoadsPage';



function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        {/* Page d'accueil complète */}
        <Route path="/" element={
          <div>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>
        } />

        {/* Routes propres pour chaque section */}
        <Route path="/apropos" element={<About />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Pages spécifiques des projets */}
        <Route path="/morpion" element={<MorpionPage />} />
        <Route path="/motsCroisses" element={<MotsCroisses />} />
        <Route path="/club-sportif" element={<ClubSportifPage />} />
        <Route path="/gestion-dechets" element={<DechetsPage />} />
        <Route path="/gestion-emprunts" element={<EmpruntsPage />} />
        <Route path="/guinea-roads" element={<RoadsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
