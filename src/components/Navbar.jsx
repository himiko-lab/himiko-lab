import React, { useState } from 'react';
import himikoLogo from '../assets/images/himiko-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl bg-white/60 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-50 transition-all duration-300 ${isOpen ? 'rounded-3xl' : 'rounded-full'}`}>
      
      {/* Bentuk wadah akan otomatis berubah dari bulat (rounded-full) menjadi kotak bersudut tumpul (rounded-3xl) saat menu dibuka */}
      <div className="px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo & Brand Name */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src={himikoLogo} 
                alt="Logo Himiko Lab" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Himiko Lab
              </span>
            </a>
          </div>
          
          {/* Menu Desktop (Sembunyi di HP) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Beranda</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Tentang</a>
            <a href="#application" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Aplikasi</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Kontak</a>
          </div>

          {/* Tombol Menu Mobile (Hamburger / X) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none p-2"
            >
              <svg className="h-6 w-6 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  // Ikon Silang (X)
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Ikon Garis 3
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Daftar Tautan Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-slate-200/50 flex flex-col space-y-4 pb-2 animate-fade-in">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Beranda</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Tentang</a>
            <a href="#application" onClick={() => setIsOpen(false)} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Aplikasi</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Kontak</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
