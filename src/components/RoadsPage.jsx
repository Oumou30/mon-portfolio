import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

const images = [
  "/images/transports/a1.png",
  "/images/transports/a2.png",
  "/images/transports/a3.png",
  "/images/transports/a4.png",
  "/images/transports/a5.png",
  "/images/transports/a6.png",
  "/images/transports/a7.png",
  "/images/transports/a8.png",
  "/images/transports/a9.png",
  "/images/transports/a10.png"
];

function RoadsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Changement d'image toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      {/* BANNIÈRE AVEC IMAGE DE FOND + SUPERPOSITION */}
      <div className="relative h-[450px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/transports/transportImg.jpg')" }} 
      >
        {/* SUPERPOSITION BLEUE TRANSPARENTE */}
        <div className="absolute inset-0 bg-blue-600 opacity-60"></div>

        {/* CONTENU DU TEXTE */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold">Gestion des moyens de transports</h2>
          <p className="mt-2 text-lg">Accueil / Gestion des moyens de transports</p>
        </div>
      </div>

      {/* SECTION PRINCIPALE : CARROUSEL + INFOS */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-start">
        
        {/* CARROUSEL D'IMAGES */}
        <div className="relative w-[80%] h-[400px] overflow-hidden bg-white flex items-center justify-center">
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

        {/* BLOC D'INFORMATIONS À DROITE */}
        <div className="flex flex-col space-y-4 w-full mr-8 pr-4"> 
          {/* Bloc Informations */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Informations</h3>
            <p className="text-gray-600"><strong>Type :</strong> Application Mobile</p>
            <p className="text-gray-600"><strong>Technologies :</strong> Flutter, Dart, Firebase</p>
            <p className="text-gray-600"><strong>Client :</strong> AG35 Rennes</p>
          </div>

          {/* Bloc Description */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-bold text-gray-900">À propos du projet</h3>
            <p className="text-gray-700 mt-4">
              Cette application mobile vise à améliorer le déplacement urbain et interurbain en Guinée en promouvant les modes de déplacements durables, sécurisés et optimisés avec des coûts fiables et des itinéraires bien établis. Elle promeut également un système de covoiturage qui facilitera le deplacement urbain et interurbain des citoyens et ceci dans un confort et une sécurité absolue.
            </p>
            <p className="text-gray-700 mt-2">
              Grâce à une interface intuitive et moderne, les utilisateurs peuvent faire des recherches d'itinéraires en faisant un choix de modes de transport et d'itinéraire le plus adapté et rapide pour se rendre à une destination voulue tout en sachant à quel coût s'élévera ce trajet.
            </p>
            <p className="text-gray-700 mt-2">
              Développée avec Flutter, Dart, Firebase, cette application met en avant l'importance des technologies web et mobiles dans la vie quotidienne de la société.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RoadsPage;