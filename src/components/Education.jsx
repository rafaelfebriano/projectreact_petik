import React from 'react';

function Education() {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-3">
            Educational background</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l-4 border-accent-blue ml-4 md:ml-8">
          {/* item 1 */}
          <div className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-accent-blue rounded-full -left-2.5 border-4 border-white"></div>
            <div className="bg-soft-gray p-6 rounded-xl shadow-sm">
              <span className="text-sm text-accent-blue font-semibold">2024 - Sekarang</span>
              <h3 className="text-xl font-bold text-dark-blue mt-1">Rekayasa Perangkat Lunak</h3>
              <p className="text-gray-600 font-medium">SMK Wikrama Bogor</p>
              <p className="text-gray-700 mt-2">Fokus pada pengembangan web, database, dan manajemen proyek IT.</p>
            </div>
          </div>

          {/* item 2 */}
          <div className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-accent-blue rounded-full -left-2.5 border-4 border-white"></div>
            <div className="bg-soft-gray p-6 rounded-xl shadow-sm">
              <span className="text-sm text-accent-blue font-semibold">2021 - 2024</span>
              <h3 className="text-xl font-bold text-dark-blue mt-1">-</h3>
              <p className="text-gray-600 font-medium">SMP Negeri 2 Cisarua</p>
              <p className="text-gray-700 mt-2">Aktif dalam organisasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;