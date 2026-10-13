import React from 'react';
import { EYEBROW } from './styles';

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={EYEBROW}>{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink text-balance sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-slate-600">{subtitle}</p>}
    </div>
  );
}
