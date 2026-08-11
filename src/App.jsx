import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Principles from './components/Principles';
import About from './components/About';
import LogoMeaning from './components/LogoMeaning';
import MorvynShowcase from './components/MorvynShowcase';
import Technology from './components/Technology';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />

      <main className="flex flex-col gap-16 sm:gap-24">
        <Principles />
        <About />
        <LogoMeaning />
        <MorvynShowcase />
        <Technology />
      </main>

      <Footer />
    </div>
  );
}
