import React from 'react';
import Footer from './Footer';
import Header from './Header';

function MotsCroisses() {
  return (
    <>
      <Header />

      {/* BANNIÈRE AVEC IMAGE DE FOND + SUPERPOSITION */}
      <div className="relative h-[450px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/mc1.jpeg')" }}
      >
        {/* SUPERPOSITION BLEUE TRANSPARENTE */}
        <div className="absolute inset-0 bg-blue-700 opacity-80"></div>

        {/* CONTENU DU TEXTE */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold">Jeu de Mots Croissés</h2>
          <p className="mt-2 text-lg">Accueil / Jeu de Mots Croissés</p>
        </div>
      </div>

      {/* SECTION PRINCIPALE : VIDÉO + INFOS */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-start">
        
        {/* VIDÉO */}
        <div className="relative w-full overflow-hidden bg-white flex items-center justify-center">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-4">Démonstration du Jeu</h2>
            <video
              src="/video/motsCroisses.mp4"
              controls
              className="w-full rounded-lg shadow-lg"
            ></video>
          </div>
        </div>

        {/* BLOC D'INFORMATIONS À DROITE */}
        <div className="flex flex-col space-y-4 w-full mr-8 pr-4">
          {/* Bloc Informations */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Informations</h3>
            <p className="text-gray-600"><strong>Type :</strong> Jeu intéractif</p>
            <p className="text-gray-600"><strong>Technologies :</strong> Java, JavaFX, JUnit5</p>
            <p className="text-gray-600"><strong>Statut :</strong> Projet terminé</p>
            <p className="text-gray-600"><strong>Url du repo :</strong> <a href="https://github.com/Oumou30/MotsCroisses" className="text-blue-500 underline">Voir le repo</a></p>
          </div>

          {/* Bloc Description */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-bold text-gray-900">À propos du jeu</h3>
            <p className="text-gray-700 mt-4">
              Le jeu de mots croissés est un projet interactif dans lequel deux joueurs s'affrontent pour aligner trois symboles identiques, que ce soit verticalement, horizontalement ou en diagonale. Le premier joueur à réussir cet alignement remporte la partie.
            </p>
            <p className="text-gray-700 mt-2">
              Une partie prend fin lorsqu'aucune case n'est plus disponible (toutes les cases sont occupées) sans qu'un joueur ait réussi à aligner trois symboles identiques, ou dès qu'un alignement gagnant est réalisé.
            </p>
            <p className="text-gray-700 mt-2">
              Développé avec Java, JavaFX et JUnit5, ce projet illustre des compétences avancées en logique et en développement logiciel.
            </p>
            <p className="text-gray-700 mt-4 font-semibold">
              Une démonstration est disponible sur la vidéo, cliquez dessus pour observer le déroulement d'une partie.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MotsCroisses;