import React from 'react';

const About = () => {
  return (
    <div className="px-6 w-full mx-auto pb-12" id="about">
      <div className="bg-slate-900/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[2.5rem] p-10 md:p-14 text-white overflow-hidden relative">
        
        {/* Subtle radial gradient blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-700/40 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-700/30 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Tambahkan mx-auto di div ini untuk mendorongnya ke tengah */}
        <div className="relative z-10 max-w-3xl mx-auto">
          
          {/* Ubah text-left menjadi text-center */}
          <h2 className="text-3xl font-semibold mb-6 text-center">Tentang Himiko Lab</h2>
          
          <div className="text-slate-300 text-lg md:text-xl font-light leading-relaxed text-justify space-y-4">
            <p>
              Kami percaya bahwa teknologi seharusnya memberikan ketenangan, bukan kerumitan. Misi kami adalah mengembangkan aplikasi harian dengan desain intuitif yang menyatu dengan sempurna ke dalam hidup Anda. 
            </p>
            <p>
              Di Himiko Lab, kami memadukan logika yang sistematis dengan estetika minimalis. Mulai dari manajemen produktivitas hingga perangkat pelacakan cerdas, setiap sistem yang kami bangun didedikasikan untuk mengotomatiskan hal-hal rumit di balik layar. Kami merancang kesederhanaan agar Anda memiliki lebih banyak waktu dan ruang untuk fokus pada hal-hal yang benar-benar bermakna.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
