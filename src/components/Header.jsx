import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fonction pour scroller vers une section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Fonction pour naviguer et scroller si nécessaire
  const navigateToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300);
    } else {
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
<header className={`fixed top-0 w-full z-10 py-3 sm:py-4 px-4 sm:px-6 transition-all duration-300 backdrop-blur-lg ${isScrolled ? "bg-gray-950/90" : "bg-gray-950/90"}`}>
  <nav className="container mx-auto flex justify-between items-center h-10">
        <h1 className="text-2xl sm:text-2xl font-bold text-white">Oumou Sadio BAH</h1>

        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-white">
          <li><button onClick={() => navigateToSection("accueil")} className="hover:text-blue-500 transition duration-300">Accueil</button></li>
          <li><button onClick={() => navigateToSection("apropos")} className="hover:text-blue-500 transition duration-300">À propos</button></li>
          <li><button onClick={() => navigateToSection("portfolio")} className="hover:text-blue-500 transition duration-300">Portfolio</button></li>
          <li><button onClick={() => navigateToSection("contact")} className="hover:text-blue-500 transition duration-300">Contact</button></li>
        </ul>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 mt-2 py-3 px-4 rounded-lg">
          <ul className="flex flex-col space-y-3 text-white">
            <li><button onClick={() => navigateToSection("accueil")} className="w-full text-left hover:text-blue-500 transition duration-300">Accueil</button></li>
            <li><button onClick={() => navigateToSection("apropos")} className="w-full text-left hover:text-blue-500 transition duration-300">À propos</button></li>
            <li><button onClick={() => navigateToSection("portfolio")} className="w-full text-left hover:text-blue-500 transition duration-300">Portfolio</button></li>
            <li><button onClick={() => navigateToSection("contact")} className="w-full text-left hover:text-blue-500 transition duration-300">Contact</button></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
