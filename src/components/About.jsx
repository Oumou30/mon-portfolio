import React from 'react';

function About() {
  const skills = [
    'PHP, Symfony',
    'Java',
    'Python',
    'JavaScript', 
    'ReactJs, NextJs',
    'ExpressJS, NodeJS',
    'Flutter, Dart'
  ];

  const tools = [
    'Git, GitHub, GitLab',
    'Office',
    'Linux, Windows, Windows Server',
    'MySQL, Oracle, MongoDB, Neo4J, Firebase',
    'Merise, SQL, UML'
  ];

  return (
    <section id="apropos" className="py-10 bg-gray-100 pt-28 flex justify-center ">
      <div className="bg-white shadow-lg rounded-lg p-10 h-[620px] w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* 🔹 Colonne gauche : Image + Infos personnelles + Compétences & Outils */}
          <div className="flex flex-col items-start w-[550px]"> 
          
            <div className="flex items-center w-[800px]">
          
              <img
                src="/images/maphoto.png"
                alt="profil de Oumou"
                className="w-40 h-43 rounded-lg shadow-lg"
              />

              {/*  Bloc Infos personnelles */}
              <div className="text-left ml-9 w-[95%]">
                <h3 className="text-lg font-bold mb-2">Oumou Sadio BAH</h3>
                <p className="text-md mb-2"><strong>Fonction :</strong> Étudiante en Master 1 MIAGE</p>
                <p className="text-md mb-2"><strong>Email :</strong> oumou-sadio.bah@etudiant.univ-rennes.fr</p>
                <p className="text-md"><strong>Téléphone :</strong> +33 7 44 75 39 79</p>
              </div>
            </div>

            {/*  Bloc Compétences & Outils */}
            <div className="pt-10 w-[85%]"> 
              <div className="flex space-x-8">
                {/* Bloc Compétences */}
                <div className="w-1/2">
                  <h4 className="text-lg font-bold mb-3">Compétences</h4>
                  <ul className="list-disc list-inside text-gray-700 gap-2">
                    {skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>

                {/* Bloc Outils */}
                <div className="w-1/2">
                  <h4 className="text-lg font-bold mb-3">Outils</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {tools.map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/*  Colonne droite : "À Propos" */}
          <div className='w-[450px] ml-8'>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              À PROPOS DE MOI
            </h2>
            
            <div className="border-b-2 border-blue-400 w-20 mb-6"></div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Bienvenue sur mon site portfolio ! <br></br> 
              Passionnée par la programmation, les nouvelles technologies et la gestion des données, je conçois des solutions innovantes en combinant développement Back-End, Front-End et manipulation de données.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              J'aime analyser, structurer et optimiser chaque projet pour offrir des expériences performantes et intuitives. Au-delà de la technique, ce qui m'anime, c'est la résolution de problèmes, la recherche d'efficacité et l'impact des solutions numériques sur le monde réel.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Mon portfolio reflète mon engagement, ma rigueur et ma volonté d'apprendre en continu. Chaque projet présenté ici est le fruit de mes compétences, de ma curiosité et de mon envie de relever des défis.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Explorez mes réalisations, découvrez mon univers et n'hésitez pas à me contacter pour échanger !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
