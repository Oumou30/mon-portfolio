import React from 'react';
import { ReactTyped } from 'react-typed'; 


function Hero() {
  return (
    <section
      id="accueil"
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/image3.webp')" }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Oumou Sadio BAH</h1>
        <ReactTyped
          className="text-2xl"
          strings={["Etudiante en Master 1 MIAGE", "Passionnée par le Développement Informatique et la Gestion des Données"]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </div>
    </section>
  );
}

export default Hero;
