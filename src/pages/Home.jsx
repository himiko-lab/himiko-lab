import React from 'react';
import Hero from '../components/Hero';
import MorvynShowcase from '../components/MorvynShowcase';
import Principles from '../components/Principles';
import About from '../components/About';
import Technology from '../components/Technology';

/*
 * Urutannya disengaja: produk tampil tepat setelah pembuka, supaya pengunjung
 * baru langsung melihat apa yang dibuat Himiko Lab sebelum membaca soal studionya.
 */
export default function Home() {
  return (
    <>
      <Hero />

      <div className="flex flex-col gap-16 sm:gap-24">
        <MorvynShowcase />
        <Principles />
        <About />
        <Technology />
      </div>
    </>
  );
}
