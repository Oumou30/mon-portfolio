import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const images = [
  "/images/s0.png",
  "/images/s1.png",
  "/images/s2.png",
  "/images/s3.png",
  "/images/s4.png",
  "/images/s51.png",
  "/images/s52.png",
  "/images/s6.png",
  "/images/s7.png"
];

function ClubSportifPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 2000); // Change d'image toutes les 2 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <>

      {/* BANNIÈRE AVEC IMAGE DE FOND + SUPERPOSITION */}
      <div className="relative h-[450px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ig5.jpg')" }} 
      >
        {/* SUPERPOSITION BLEUE TRANSPARENTE */}
        <div className="absolute inset-0 bg-blue-600 opacity-60"></div>

        {/* CONTENU DU TEXTE */}
        <div className="relative z-10">
          <h2 className="text-5xl font-bold">Gestion d'un Club Sportif</h2>
          <p className="mt-2 text-lg">Accueil / Club-Sportif</p>
        </div>
      </div>

      {/* SECTION PRINCIPALE : CARROUSEL + INFOS À DROITE */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-start">
        
        {/* CARROUSEL 70% DE LARGEUR */}
        <div className="relative w-[80%] h-[400px] overflow-hidden bg-white flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-contain rounded-lg shadow-lg transition-opacity duration-700 ease-in-out"
          />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* BLOC À DROITE (INFOS + Clubsportif) */}
        <div className="flex flex-col  space-y-4 w-full pr-4">
          {/* Bloc Informations */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Informations</h3>
            <p className="text-gray-600"><strong>Catégorie :</strong> Développement Web</p>
            <p className="text-gray-600"><strong>Client :</strong> Projet Universitaire</p>
            <p className="text-gray-600"><strong>Url du repo :</strong> <a href="https://github.com/Oumou30/p2_projet_clubSportif_sym" className="text-blue-500 underline">Voir le repo</a></p>
          </div>

          {/* Bloc Description de projet */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-bold text-gray-900">Club Sportif</h3>
            <p className="text-gray-700 mt-4">
              Ce projet propose une plateforme numérique facilitant la gestion des clubs sportifs.
              Il permet aux administrateurs de gérer les licenciés, éducateurs et catégories sportives tout en optimisant la communication via un système d'envoi de mails automatisé.
            </p>
            <p className="text-gray-700 mt-2">
              Développé avec Symfony, Bootstrap et Twig, cette application assure une interface moderne, intuitive et responsive.
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default ClubSportifPage;
