import React from 'react';
import InstagramIcon from '../assets/images/instagram-gray.png?react';

const Footer = () => {
  return (
    <footer id="contact" className="mt-20 py-10 bg-white/30 backdrop-blur-md border-t border-white/50">
      <div className="max-w-4xl mx-auto text-center space-y-8 px-6">
        <h2 className="text-3xl font-semibold text-slate-800 tracking-tight">
          Mari ciptakan sesuatu yang nyaman bersama-sama.
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-lg text-slate-600 font-medium">
          <a href="mailto:labhimiko@gmail.com" className="flex items-center gap-3 hover:text-blue-600 transition-colors p-2 rounded-xl hover:bg-white/40">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            labhimiko@gmail.com
          </a>
          
          <span className="hidden md:block text-slate-300">|</span>
          
          <a href="#" className="flex items-center gap-3 hover:text-blue-600 transition-colors p-2 rounded-xl hover:bg-white/40">
            <InstagramIcon className="w-6 h-6" />
            @menyusul (Segera Hadir)
          </a>
        </div>
        
        <div className="pt-8 border-t border-slate-200/50 text-slate-500 text-sm font-medium">
          &copy; 2026 Himiko Lab. Hak cipta dilindungi undang-undang.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
