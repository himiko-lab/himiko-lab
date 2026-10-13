// Kelas Tailwind yang dipakai berulang di banyak komponen.
export const BTN_BASE =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors sm:px-6';

export const BTN_PRIMARY = `${BTN_BASE} bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-600`;

export const BTN_SECONDARY = `${BTN_BASE} border border-brand-500/15 bg-white/70 text-slate-700 backdrop-blur hover:border-brand-500/30 hover:bg-white`;

export const EYEBROW = 'text-xs font-semibold uppercase tracking-[0.18em] text-brand-600';

export const TEXT_LINK =
  'inline-flex items-center gap-1.5 font-semibold text-brand-600 underline-offset-4 hover:underline';
