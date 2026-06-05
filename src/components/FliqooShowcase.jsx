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
            alt="Fliqoo Logo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-3xl shadow-md object-cover p-1 bg-white border border-slate-100"
          />
        </div>

        {/* Right Side: Content & CTA */}
        <div className="flex-1 text-center lg:text-left flex flex-col justify-center h-full space-y-6 lg:pt-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Fliqoo - AI Finance Tracker
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Take absolute control of your financial health with smart budgeting and integrated AI assistance.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-2">
            <button className="px-6 py-3 rounded-full border border-slate-300 bg-white/40 text-slate-700 font-medium hover:bg-white/70 transition-all backdrop-blur-md shadow-sm">
              ⏳ Coming Soon to Play Store
            </button>
            <a href="https://apkpure.com/group/com.himikolab.fliqoo" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-md flex items-center justify-center">
              📥 Get it on APKPure
            </a>
            <a href="#" className="px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-md flex items-center justify-center">
              📥 Get it on Uptodown
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FliqooShowcase;
