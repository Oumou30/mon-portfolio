import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Gestion d\'un club sportif',
      type: 'Site web',
      date: 'Décembre 2023',
      image: '/images/ig2.jpeg',
      link: '/club-sportif',
    },
    {
      id: 2,
      title: 'Jeu de morpions',
      type: 'Application web',
      date: 'Fév. 2024',
      image: '/images/m1.jpg',
      link: '/morpion',
    },
    {
      id: 3,
      title: 'Gestion des déchets',
      type: 'Application web',
      date: 'Juin. 2018',
      image: '/img_morpion.jpg',
      link: '/gestion-dechets',
    },
    {
      id: 4,
      title: 'Jeu de mots croissés',
      type: 'Application',
      date: 'Mars. 2024',
      image: '/img_motscroisses2.jpeg',
      link: '/motsCroisses',
    },
    {
      id: 5,
      title: 'Gestion des emprunts',
      type: 'Application web',
      date: 'Janvier. 2025',
      image: '/images/emprunt2.jpeg',
      link: '/gestion-emprunts',
    },
    {
      id: 6,
      title: 'Gestion des moyens de transports',
      type: 'Application mobile',
      date: 'juin. 2024',
      image: '/images/moyenTransport.jpeg',
      link: '/guinea-roads',
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-100 pt-28 pb-40">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">PROJETS</h2>
        <p className="text-center text-gray-600 mb-10">
          Explorez une sélection de mes projets passés pour avoir un aperçu de mon travail créatif et de mon expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Image du projet */}
              <Link to={project.link}>
                <img src={project.image} alt={project.title} className={
          project.id === 5 || project.id === 6
            ? "w-full h-[480px] object-cover"  
            : "w-full h-auto"             
        } />
              </Link>

              {/* Contenu du projet */}
              <div className="p-4 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                
                {/* Texte & Bouton  */}
                <div className="flex justify-between items-center">
                  <p className="text-blue-600 text-sm">{project.type} / {project.date}</p>
                  
                  {/* Bouton "+" aligné à droite */}
                  <Link to={project.link}>
                    <button className="w-10 h-10 bg-blue-200 text-blue-500 border border-blue-500 rounded-full flex items-center justify-center text-2xl hover:bg-blue-700 hover:text-white transition duration-300">
                      +
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
