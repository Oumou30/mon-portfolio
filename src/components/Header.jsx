import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll automatique vers la bonne section après navigation
    const sectionId = location.pathname.substring(1); 
    if (document.getElementById(sectionId)) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 w-full z-10 py-4 px-6 ${isScrolled ? "bg-gray-950" : "bg-transparent"} transition-colors duration-300`}>
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Oumou Sadio BAH</h1>

        <ul className="flex space-x-8 text-white">
          <li>
            <button onClick={() => navigate("/")} className="hover:text-blue-500 transition duration-300">
              Accueil
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/apropos")} className="hover:text-blue-500 transition duration-300">
              À propos
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/portfolio")} className="hover:text-blue-500 transition duration-300">
              Portfolio
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/contact")} className="hover:text-blue-500 transition duration-300">
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
