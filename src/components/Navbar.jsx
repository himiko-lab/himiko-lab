import React from 'react';
import himikoLogo from '../assets/images/himiko-logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl bg-white/60 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full z-50 transition-all">
      <div className="px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo & Brand Name */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src={himikoLogo} 
                alt="Himiko Lab Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Himiko Lab
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#application" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Application</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-slate-600 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
