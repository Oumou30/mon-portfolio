import React from 'react';
import Footer from './Footer';

function Contact() {
  return (
    <section id="contact" className="py-1 bg-blue-100 pt-12"> 
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-40">
        
        {/* Bloc "Prendre contact"  */}
        <div className="flex flex-col self-start">
          <h2 className="text-3xl font-bold mb-4">Prendre contact</h2>
          <p className="text-gray-700">
            Vous avez des questions, des commentaires ou un projet intéressant ? N'hésitez pas à me contacter.
            Je suis impatiente de vous entendre et de discuter de la manière dont je peux contribuer à votre succès.
          </p>
        </div>

        {/*  Bloc Informations */}
        <div className="flex flex-col space-y-4">
          
          {/* Informations */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500 text-lg">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span className="text-gray-700">Cesson-Sévigné, France</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-500 text-lg">
                <i className="fas fa-phone"></i>
              </span>
              <span className="text-gray-700">+33 7 44 75 39 79</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-500 text-lg">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="text-gray-700">oumousadio328@gmail.com</span>
            </div>
          </div>

          {/* Icônes sociales */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/oumou-sadio-bah-562132202/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <i className="fab fa-linkedin text-xl text-black"></i>
            </a>
            <a
              href="https://github.com/Oumou30"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <i className="fab fa-github text-xl text-black"></i>
            </a>
          </div>
        </div>

      </div>
      <Footer />
    </section>
  );
}

export default Contact;
