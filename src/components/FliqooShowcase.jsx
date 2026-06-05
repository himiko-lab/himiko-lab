import React from 'react';
import fliqooLogo from '../assets/images/fliqoo-logo.png';

const FliqooShowcase = () => {
  return (
    <div className="px-6 w-full mx-auto pb-12" id="application">
      <div className="bg-white/50 backdrop-blur-lg border border-white/60 shadow-xl rounded-[2.5rem] p-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">

        {/* Left Side: Logo */}
        <div className="flex-shrink-0 flex justify-center lg:justify-start">
          <img
            src={fliqooLogo}
            alt="Logo Fliqoo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-3xl shadow-md object-cover p-1 bg-white border border-slate-100"
          />
        </div>

        {/* Right Side: Content & CTA */}
        <div className="flex-1 text-center lg:text-left flex flex-col justify-center h-full space-y-6 lg:pt-2 w-full">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Fliqoo - Catatan Keuangan AI
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Ambil kendali penuh atas kesehatan finansial Anda melalui penganggaran cerdas dan asisten AI yang terintegrasi.
            </p>
          </div>

          {/* CTA Buttons - Dibuat Membentang Penuh (Full Width) */}
          <div className="flex flex-col gap-4 pt-2 w-full max-w-2xl mx-auto lg:mx-0">
            
            {/* Baris Pertama */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a href="https://fliqoo.himikolab.my.id" target="_blank" rel="noopener noreferrer" className="flex-1 w-full py-3 px-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center text-sm md:text-base">
                🌐 Kunjungi Website
              </a>
              <button className="flex-1 w-full py-3 px-4 rounded-xl border border-slate-300 bg-white/40 text-slate-700 font-medium hover:bg-white/70 transition-all backdrop-blur-md shadow-sm flex items-center justify-center text-sm md:text-base">
                ⏳ Segera Hadir di Play Store
              </button>
            </div>
            
            {/* Baris Kedua */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a href="https://apkpure.com/group/com.himikolab.fliqoo" target="_blank" rel="noopener noreferrer" className="flex-1 w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-md flex items-center justify-center text-sm md:text-base">
                📥 Unduh di APKPure
              </a>
              <a href="#" className="flex-1 w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-md flex items-center justify-center text-sm md:text-base">
                📥 Unduh di Uptodown
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FliqooShowcase;
