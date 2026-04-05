import React from 'react';

function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-dark-blue min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col justify-center">
       
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Hi!, I'm <span className="text-accent-blue">Rafael Febriano</span>
        
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Students majoring in software and game development
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="px-6 py-3 bg-accent-blue text-white font-medium rounded-lg shadow-lg">
            Contact me <i className="fas fa-arrow-right ml-2"></i>
          </a>
          <a href="#projects" className="px-6 py-3 border border-gray-500 text-gray-200 font-medium rounded-lg">
            View Projects<i className="fas fa-code ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;