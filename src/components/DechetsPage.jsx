import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

const images = [
  "/images/dechets/gd0.png",
  "/images/dechets/gd2.png",
  "/images/dechets/gd3.png",
  "/images/dechets/gd4.png",
  "/images/dechets/gd5.png",
  "/images/dechets/gd6.png",
  "/images/dechets/gd7.png",
  "/images/dechets/gd8.png"
];

function DechetsPage() {
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
        style={{ backgroundImage: "url('/images/dechets/gd01.jpg')" }}
      >
        {/* SUPERPOSITION BLEUE TRANSPARENTE */}
        <div className="absolute inset-0 bg-blue-700 opacity-80"></div>

        {/* CONTENU DU TEXTE */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold">Gestion des Déchets</h2>
          <p className="mt-2 text-lg">Accueil / Gestion des Déchets</p>
        </div>
      </div>

      {/* SECTION PRINCIPALE : CARROUSEL + INFOS */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-start">
        
        {/* CARROUSEL D'IMAGES */}
        <div className="relative w-[80%] h-[430px] overflow-hidden bg-white flex items-center justify-center">
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
            <p className="text-gray-600"><strong>Technologies :</strong> React, Node.js, MongoDB</p>
            <p className="text-gray-600"><strong>Statut :</strong> Projet en cours</p>
            <p className="text-gray-600"><strong>Url du repo :</strong> <a href="https://github.com/Oumou30/PFE_GestionDechets/tree/master/FENTEINGNY_CLEAN" className="text-blue-500 underline">Voir le repo</a></p>
          </div>

          {/* Bloc Description */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-bold text-gray-900">À propos du projet</h3>
            <p className="text-gray-700 mt-4">
              Ce projet vise à améliorer la gestion des déchets dans les villes en proposant une plateforme numérique permettant le suivi des collectes, le tri des déchets et la sensibilisation des citoyens.
            </p>
            <p className="text-gray-700 mt-2">
              Grâce à une interface intuitive et moderne, les utilisateurs peuvent signaler les points de collecte, suivre les statistiques de recyclage et accéder aux informations sur le tri sélectif.
            </p>
            <p className="text-gray-700 mt-2">
              Développé avec JavaScript, ReactJs, Node.js et MongoDB, ce projet met en avant l'importance des technologies web dans l'optimisation des ressources environnementales.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DechetsPage;