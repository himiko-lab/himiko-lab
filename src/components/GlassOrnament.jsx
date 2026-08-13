import React from 'react';
import himikoLogo from '../assets/images/himiko-logo.svg';
import morvynLogo from '../assets/images/morvyn-logo.svg';

/**
 * Gugus objek kaca melayang, padanan CSS untuk render 3D pada referensi desain.
 * Murni dekoratif, jadi disembunyikan dari pembaca layar.
 */

function GlassTile({ className, style, children }) {
  return (
    <div
      className={`absolute rounded-[1.75rem] border border-white/60 bg-white/35 backdrop-blur-xl animate-drift ${className}`}
      style={{
        boxShadow:
          '0 1px 1px rgba(255,255,255,0.9) inset, 0 -18px 30px -22px rgba(16,99,248,0.35) inset, 0 22px 45px -18px rgba(29,45,105,0.28)',
        ...style,
      }}
    >
      <div className="absolute inset-x-3 top-2 h-px rounded-full bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      {children}
    </div>
  );
}

export default function GlassOrnament() {
  return (
    <div aria-hidden="true" className="pointer-events-none relative h-[22rem] w-full sm:h-[26rem] lg:h-[30rem]">
      {/* Cahaya latar */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400/25 blur-[70px]" />
      <div className="absolute left-[62%] top-[62%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/25 blur-[70px]" />

      {/* Alas kaca */}
      <div className="absolute bottom-6 left-1/2 h-16 w-[19rem] -translate-x-1/2 rounded-[50%] border border-white/60 bg-gradient-to-b from-white/60 to-white/20 backdrop-blur-md sm:w-[22rem]" />

      {/* Tabung tinggi berbeda, seperti batang grafik pada referensi */}
      <div className="absolute bottom-[3.25rem] left-1/2 flex -translate-x-1/2 items-end gap-3">
        {[
          { h: 'h-28 sm:h-36', w: 'w-12 sm:w-14', from: 'from-brand-500/45', delay: '0s' },
          { h: 'h-40 sm:h-52', w: 'w-14 sm:w-16', from: 'from-brand-400/40', delay: '0.7s' },
          { h: 'h-20 sm:h-24', w: 'w-11 sm:w-12', from: 'from-sky-400/40', delay: '1.4s' },
        ].map((bar, i) => (
          <div
            key={i}
            className={`animate-drift rounded-t-[2rem] rounded-b-xl border border-white/60 bg-gradient-to-b ${bar.from} to-white/25 backdrop-blur-md ${bar.h} ${bar.w}`}
            style={{
              '--drift-y': '-8px',
              '--drift-duration': '11s',
              '--drift-delay': bar.delay,
              boxShadow: '0 1px 2px rgba(255,255,255,0.9) inset, 0 18px 30px -18px rgba(29,45,105,0.35)',
            }}
          />
        ))}
      </div>

      {/* Ubin kaca melayang */}
      <GlassTile
        className="left-[4%] top-[10%] h-24 w-24 sm:h-28 sm:w-28"
        style={{ '--drift-y': '-16px', '--drift-duration': '9s', '--drift-rotate': '-6deg', '--drift-rotate-alt': '-2deg' }}
      >
        <div className="flex h-full items-center justify-center gap-2">
          <span className="h-7 w-7 rounded-lg bg-brand-500/80 shadow-sm" />
          <span className="h-7 w-7 rounded-full bg-emerald-400/80 shadow-sm" />
        </div>
      </GlassTile>

      <GlassTile
        className="right-[6%] top-[4%] h-20 w-20 sm:h-24 sm:w-24"
        style={{ '--drift-y': '-20px', '--drift-duration': '10.5s', '--drift-delay': '0.9s', '--drift-rotate': '7deg', '--drift-rotate-alt': '3deg' }}
      >
        {/* Berkas logo membawa latar putihnya sendiri, jadi ia mengisi penuh
            ubin dan dipotong mengikuti lengkungnya agar terbaca sebagai ikon
            aplikasi, sepadan dengan ubin berlogo Himiko. */}
        <span className="absolute inset-0 overflow-hidden rounded-[1.75rem]">
          <img src={morvynLogo} alt="" className="h-full w-full" />
        </span>
      </GlassTile>

      <GlassTile
        className="right-[2%] top-[42%] h-24 w-24 sm:h-28 sm:w-28"
        style={{ '--drift-y': '-13px', '--drift-duration': '12s', '--drift-delay': '1.8s', '--drift-rotate': '-5deg', '--drift-rotate-alt': '-1deg' }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-1.5">
          <span className="h-2.5 w-12 rounded-full bg-brand-500/70" />
          <span className="h-2.5 w-8 rounded-full bg-violet-400/70" />
          <span className="h-2.5 w-10 rounded-full bg-sky-400/70" />
        </div>
      </GlassTile>

      {/* Ubin bertanda logo */}
      <div
        className="absolute left-[10%] top-[52%] h-24 w-24 animate-drift rounded-[1.75rem] border border-white/15 bg-gradient-to-br from-brand-900 to-brand-950 p-5 sm:h-28 sm:w-28"
        style={{
          '--drift-y': '-18px',
          '--drift-duration': '10s',
          '--drift-delay': '0.4s',
          '--drift-rotate': '6deg',
          '--drift-rotate-alt': '2deg',
          boxShadow: '0 1px 1px rgba(255,255,255,0.18) inset, 0 24px 45px -20px rgba(16,32,86,0.65)',
        }}
      >
        <img src={himikoLogo} alt="" className="h-full w-full brightness-0 invert" />
      </div>
    </div>
  );
}
