import React from 'react';

const About = () => {
  return (
    <div className="px-6 w-full mx-auto pb-12" id="about">
      <div className="bg-slate-900/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[2.5rem] p-10 md:p-14 text-white overflow-hidden relative">
        
        {/* Subtle radial gradient blobs inside the card */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-700/40 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-700/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">Tentang Studio</h2>
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
            Kami percaya bahwa teknologi seharusnya memberikan ketenangan, bukan kerumitan. Misi kami adalah mengembangkan aplikasi harian dengan desain intuitif yang menyatu dengan sempurna ke dalam hidup Anda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
