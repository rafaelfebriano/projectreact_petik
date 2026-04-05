import React from 'react';
import dicoding1 from "../assets/dicoding1.png";
import dicoding2 from "../assets/dicoding2.png";
import k3 from "../assets/k3.png";
import pelatihan from "../assets/pelatihan.png";

function Certificates() {
  return (
    <section id="certificates" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-3">
            Certificates
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            The certificate that I have received
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* sertifikat 1 */}
          <div>
            <img 
              src={dicoding1} 
              alt="dicoding1"
              className="w-full h-40 object-contain"
            />
            <div className="text-center mt-2">
              <h3 className="font-bold text-dark-blue text-sm">
                Belajar Dasar JavaScript - Dicoding
              </h3>
              <p className="text-xs text-gray-500">2024</p>
            </div>
          </div>

          {/* sertifikat 2 */}
          <div>
            <img 
              src={dicoding2} 
              alt="dicoding2"
              className="w-full h-40 object-contain"
            />
            <div className="text-center mt-2">
              <h3 className="font-bold text-dark-blue text-sm">
                Belajar Dasar Web - Dicoding
              </h3>
              <p className="text-xs text-gray-500">2024</p>
            </div>
          </div>

          {/* sertifikat 3 */}
          <div>
            <img 
              src={k3} 
              alt="k3"
              className="w-full h-40 object-contain"
            />
            <div className="text-center mt-2">
              <h3 className="font-bold text-dark-blue text-sm">K3</h3>
              <p className="text-xs text-gray-500">2024</p>
            </div>
          </div>

          {/* sertifikat 4 */}
          <div>
            <img 
              src={pelatihan} 
              alt="pelatihan"
              className="w-full h-40 object-contain"
            />
            <div className="text-center mt-2">
              <h3 className="font-bold text-dark-blue text-sm">
                Coding Workshop - SMK Wikrama
              </h3>
              <p className="text-xs text-gray-500">2024</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Certificates;