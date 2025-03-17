import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

const images = [
  "/images/emprunts/accueil.png",
  "/images/emprunts/inscription.png",
  "/images/emprunts/emprunter2.png",
  "/images/emprunts/docsEmprunts.png",
  "/images/emprunts/formEmprunt.png",
  "/images/emprunts/histoPretEmp.png",
  "/images/emprunts/homeInvest.png",
  "/images/emprunts/formInves.png"
];

function EmpruntsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Changement d'image toutes les 2 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      {/* BANNIÈRE AVEC IMAGE DE FOND + SUPERPOSITION */}
      <div className="relative h-[450px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/emprunts/emprunts1.jpg')" }} 
      >
        {/* SUPERPOSITION BLEUE TRANSPARENTE */}
        <div className="absolute inset-0 bg-blue-600 opacity-60"></div>

        {/* CONTENU DU TEXTE */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold">Gestion des Emprunts et Investissements</h2>
          <p className="mt-2 text-lg">Accueil / Gestion des Emprunts et Investissements</p>
        </div>
      </div>

      {/* SECTION PRINCIPALE : CARROUSEL + INFOS */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-start">
        
        {/* CARROUSEL D'IMAGES */}
        <div className="relative w-[80%] h-[600px] overflow-hidden bg-white flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-contain rounded-lg shadow-lg transition-opacity duration-700 ease-in-out"
          />

          {/* Indicateurs (dots) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-400"
                }`}></button>
            ))}
          </div>
        </div>

        {/* BLOC D'INFORMATIONS À DROITE AVEC MARGE À DROITE */}
        <div className="flex flex-col space-y-4 w-full mr-8 pr-4"> 
          {/* Bloc Informations */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Informations</h3>
            <p className="text-gray-600"><strong>Type :</strong> Application Web</p>
            <p className="text-gray-600"><strong>Technologies :</strong> NextJS, MySQL, Python, Django</p>
            <p className="text-gray-600"><strong>Statut :</strong> Projet en cours</p>
            <p className="text-gray-600"><strong>Url du repo :</strong> <a href="https://github.com/Oumou30/LoanExpress.git" className="text-blue-500 underline">Voir le repo</a></p>
          </div>

          {/* Bloc Description */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-bold text-gray-900">À propos du projet</h3>
            <p className="text-gray-700 mt-4">
            Ce projet consiste à créer une plateforme en ligne dédiée à l'octroi de prêts aux étudiants qui sont dans le besoin. <br></br> Contrairement aux offres bancaires traditionnelles, notre service propose des prêts adaptés aux besoins spécifiques de ces étudiants, souvent confrontés à des difficultés pour accéder au financement en raison de l'absence de garanties locales ou d'historique de crédit.
            </p>
            <p className="text-gray-700 mt-2">
              Ce projet a été réalisé en équipe dans le cadre d'une UE de Projet de Developpement Logiciel en Master 1 MIAGE à l'ISTIC avec des technologies de notre choix.
            </p>
            <p className="text-gray-700 mt-2">
              Développé avec NextJs, MySQL, Python et Django, ce projet met en avant l'importance des technologies web dans l'optimisation des ressources financières.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EmpruntsPage;