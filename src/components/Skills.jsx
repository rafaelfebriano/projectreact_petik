import React from 'react';

function Skills() {
  return (
    <section id="skills" className="py-16 bg-soft-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-3">Skills</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full"></div>
        </div>\

        <div className="grid md:grid-cols-2 gap-8">
        
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-dark-blue mb-6">
              <i className="fas fa-code text-accent-blue mr-2"></i> Hard Skills
            </h3>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700"><i className="fab fa-html5 text-accent-blue mr-2"></i> HTML/CSS</span>
                  <span className="text-accent-blue text-sm">90%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-accent-blue h-2 rounded-full w-[90%]"></div>
                </div>
              </div>

              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700"><i className="fab fa-react text-accent-blue mr-2"></i> JavaScript/React</span>
                  <span className="text-accent-blue text-sm">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-accent-blue h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
  
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700"><i className="fab fa-css3-alt text-accent-blue mr-2"></i> Laravel</span>
                  <span className="text-accent-blue text-sm">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-accent-blue h-2 rounded-full w-[88%]"></div>
                </div>
              </div>
             
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700"><i className="fas fa-paint-brush text-accent-blue mr-2"></i> UI/UX Design</span>
                  <span className="text-accent-blue text-sm">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-accent-blue h-2 rounded-full w-[78%]"></div>
                </div>
              </div>
            </div>
          </div>

         
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-dark-blue mb-6">
              <i className="fas fa-users text-accent-blue mr-2"></i> Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-dark-blue/10 text-dark-blue rounded-full text-sm font-medium">Komunikasi</span>
              <span className="px-4 py-2 bg-dark-blue/10 text-dark-blue rounded-full text-sm font-medium">Kerja Tim</span>
              <span className="px-4 py-2 bg-dark-blue/10 text-dark-blue rounded-full text-sm font-medium">Problem Solving</span>
              <span className="px-4 py-2 bg-dark-blue/10 text-dark-blue rounded-full text-sm font-medium">Manajemen Waktu</span>
              <span className="px-4 py-2 bg-dark-blue/10 text-dark-blue rounded-full text-sm font-medium">Kreativitas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;