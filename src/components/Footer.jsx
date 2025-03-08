import React from 'react';

function Footer() {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  return (
    <footer className="bg-blue-600 text-white py-6 mt-10 relative">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm">
          © Copyright <span className="font-bold">Oumou Sadio B.</span> All Rights Reserved
        </p>

      </div>

    </footer>
  );
}

export default Footer;
