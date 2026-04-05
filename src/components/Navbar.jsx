import React from 'react';

function Navbar() {
  return (
    <nav className="bg-dark-blue shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">
              Rafael's<span className="text-accent-blue">Porto</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="#hero" className="text-gray-300 hover:text-white text-sm">Beranda</a>
            <a href="#profile" className="text-gray-300 hover:text-white text-sm">Profil</a>
            <a href="#skills" className="text-gray-300 hover:text-white text-sm">Skill</a>
            <a href="#education" className="text-gray-300 hover:text-white text-sm">Pendidikan</a>
            <a href="#projects" className="text-gray-300 hover:text-white text-sm">Proyek</a>
            <a href="#certificates" className="text-gray-300 hover:text-white text-sm">Sertifikat</a>
            <a href="#contact" className="text-gray-300 hover:text-white text-sm">Kontak</a>
          </div>

          <div className="md:hidden">
            <i className="fas fa-bars text-gray-300 text-xl"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;