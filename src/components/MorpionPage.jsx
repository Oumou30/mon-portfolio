import React from 'react';
import Footer from './Footer';
import Header from './Header';

function MorpionPage() {
  return (
    <>
      <Header />

      {/* BANNIÈRE AVEC IMAGE DE FOND + SUPERPOSITION */}
      <div className="relative h-[450px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/m2.jpg')" }} 
      >
        {/* SUPERPOSITION BLEUE TRANSPARENTE */}
        <div className="absolute inset-0 bg-blue-600 opacity-80"></div>

        {/* CONTENU DU TEXTE */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold">Jeu de Morpions</h2>
          <p className="mt-2 text-lg">Accueil / Jeu-de-Morpions</p>
        </div>
      </div>

      {/* SECTION PRINCIPALE : VIDÉO + INFOS */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-start">
        
        {/* VIDÉO */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Démonstration du Jeu de Morpions</h2>
          <video
            src="/video/morpion.mp4"
            controls
            className="w-[85%] h-[400px] rounded-lg shadow-lg"
          ></video>
        </div>

       
        <div className="flex flex-col space-y-4 w-full mr-8 pr-4">
          {/* Bloc Informations */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Informations</h3>
            <p className="text-gray-600"><strong>Type :</strong> Jeu interactif</p>
            <p className="text-gray-600"><strong>Technologies :</strong> Java, JavaFX, JUnit5</p>
            <p className="text-gray-600"><strong>Statut :</strong> Projet achevé</p>
            <p className="text-gray-600"><strong>Url du repo :</strong> <a href="https://github.com/Oumou30/MorpionJavaFX" className="text-blue-500 underline">Voir le repo</a></p>
          </div>

          {/* Bloc Description */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-bold text-gray-900">À propos du jeu</h3>
            <p className="text-gray-700 mt-4">
                Le jeu de morpion est un projet interactif dans lequel deux joueurs s'affrontent pour aligner trois symboles identiques, que ce soit verticalement, horizontalement ou en diagonale. Le premier joueur à réussir cet alignement remporte la partie. <br></br>
            </p> 
            <p className="text-gray-700 mt-4">
                Une partie prend fin lorsqu'aucune case n'est plus disponible (toutes les cases sont occupées) sans qu'un joueur ait réussi à aligner trois symboles identiques, ou dès qu'un alignement gagnant est réalisé. 
            </p>
            <p className="text-gray-700 mt-2">
                Développé avec Java, JavaFX et JUnit5, ce projet illustre des compétences avancées en logique et en développement logiciel.   
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MorpionPage;
