import React from 'react';
import profile from "../assets/profile.png";

function Profile() {
  return (
    <section id="profile" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
      
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-3">Profile</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-dark-blue to-accent-blue flex items-center justify-center shadow-xl overflow-hidden">
            <img 
              src={profile} 
              alt="profile" 
              className="w-full h-full object-cover object-[center_20%]"
            />
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left">
            <p className="text-gray-700 leading-relaxed">
              Saya <strong className="text-dark-blue">Rafael Febriano</strong>, siswa kelas XI jurusan 
              Pengembangan Perangkat Lunak dan Gim di SMK Wikrama Bogor. Saya memiliki ketertarikan besar dalam 
              dunia pengembangan web, desain antarmuka, dan teknologi modern.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Saat ini saya aktif mengerjakan berbagai proyek dan membangun portofolio digital. 
              Saya percaya bahwa desain yang baik harus memadukan estetika dan fungsionalitas.
            </p>

            <div className="flex flex-wrap gap-4 pt-3 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-dark-blue">
                <i className="fas fa-map-marker-alt text-accent-blue"></i>
                <span>Bogor, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-dark-blue">
                <i className="fas fa-envelope text-accent-blue"></i>
                <span>rafrael@sch.id</span>
              </div>
              <div className="flex items-center gap-2 text-dark-blue">
                <i className="fas fa-calendar-alt text-accent-blue"></i>
                <span>Bergabung 2024</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Profile;