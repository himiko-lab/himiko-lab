import React from 'react';
import instagramIcon from '../assets/images/instagram.png';
import emailIcon from '../assets/images/email-icon.png';
import tiktokIcon from '../assets/images/tiktok.png';

const Footer = () => {
  return (
    <footer id="contact" className="mt-20 py-10 bg-white/30 backdrop-blur-md border-t border-white/50">
      <div className="max-w-4xl mx-auto text-center space-y-8 px-6">
        <h2 className="text-3xl font-semibold text-slate-800 tracking-tight">
          Mari ciptakan sesuatu yang nyaman bersama-sama.
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-lg text-slate-600 font-medium">
          <a href="mailto:hi@himikolab.my.id" className="flex items-center gap-3 hover:text-blue-600 transition-colors p-2 rounded-xl hover:bg-white/40">
            <img src={emailIcon} alt="Email" className="w-6 h-6" />
            hi@himikolab.my.id
          </a>

          <span className="hidden md:block text-slate-300">|</span>

          <a href="https://instagram.com/himiko.lab" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-600 transition-colors p-2 rounded-xl hover:bg-white/40">
            <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            @himiko.lab
          </a>

          <span className="hidden md:block text-slate-300">|</span>

          <a href="https://tiktok.com/@himiko.lab" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-600 transition-colors p-2 rounded-xl hover:bg-white/40">
            <img src={tiktokIcon} alt="TikTok" className="w-6 h-6" />
            @himiko.lab
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