import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FliqooShowcase from './components/FliqooShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 min-h-screen font-sans">
      <Navbar />
      
      <Hero />
      
      {/* Wadah utama diubah dari max-w-7xl menjadi max-w-5xl agar simetris dengan Navbar */}
      <main className="max-w-5xl mx-auto px-6 flex flex-col gap-10">
        <About />
        <FliqooShowcase />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
