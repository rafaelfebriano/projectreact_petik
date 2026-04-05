import React from 'react';
import tabungin from "../assets/tabungin.png";
import daerah from "../assets/daerah.png";
import imt from "../assets/imt.png";

function Projects() {
  return (
    <section id="projects" className="py-16 bg-soft-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-3">
            Project Gallery
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">Top 3 Latest Projects</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {/* card 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
            <div>
              <img 
                src={tabungin}
                alt="tabungin"
                className="w-full object-contain"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-dark-blue mb-2">Tabungin</h3>
              <p className="text-gray-600 text-sm mb-3">
                Transfer, Top Up, Saving Goals
              </p>
              <span className="inline-block px-3 py-1 bg-soft-gray text-accent-blue text-xs rounded-full">
                Laravel
              </span>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
            <div>
              <img 
                src={daerah}
                alt="daerah"
                className="w-full object-contain"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-dark-blue mb-2">
                Daerah di Indonesia
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Website yang menampilkan daerah di indonesia berdasarkan API
              </p>
              <span className="inline-block px-3 py-1 bg-soft-gray text-accent-blue text-xs rounded-full">
                React
              </span>
            </div>
          </div>

          {/* card 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
            <div>
              <img 
                src={imt}
                alt="imt"
                className="w-full object-contain"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-dark-blue mb-2">
                IMT - Index Masa Tubuh
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Hitung Index Masa Tubuh secara instan
              </p>
              <span className="inline-block px-3 py-1 bg-soft-gray text-accent-blue text-xs rounded-full">
                PHP
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;