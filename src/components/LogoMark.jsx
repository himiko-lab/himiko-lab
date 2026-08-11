import React from 'react';

/*
 * Logo Himiko Lab tersusun dari satu bentuk yang dipakai dua kali: sekali
 * digeser (belahan kiri) dan sekali diputar 180 derajat (belahan kanan).
 * Path dan transform di bawah disalin persis dari berkas logo utama
 * (src/assets/images/himiko-logo.svg), sehingga penguraian di bagian
 * "Arti Logo" memakai geometri yang sama, bukan gambar tiruan.
 */
const PATH_D =
  'M9402.74,2014.28L9402.74,2459.81C9402.74,4901.89 5532.78,4035.49 5532.78,5965.23C5532.78,6959.57 6082.78,7783.91 6082.78,8856.19C6082.78,10103.2 5292.14,11555.2 3951.78,11555.2C3506.22,11555.2 3236.24,11361.8 3236.24,10693.3L3234.33,4752.02C3234.33,3525.03 3689.95,2795.87 4738,2459.81C4738,2459.81 4478.25,2543.1 8257.26,1331.38C8846.98,1142.29 9402.74,1493.99 9402.74,2014.28Z';

const LEFT_TRANSFORM = 'matrix(1,0,0,1,-1610.64,-235.221)';
const RIGHT_TRANSFORM = 'matrix(-1,0,0,-1,14110.6,12599.6)';

const DIM = 'currentColor';

/**
 * @param {'left'|'right'|'slash'|'both'} highlight bagian yang ditonjolkan
 */
export default function LogoMark({ highlight = 'both', className = '', title }) {
  const isOn = (part) => highlight === 'both' || highlight === part;
  const opacity = (part) => (isOn(part) ? 1 : 0.14);

  return (
    <svg
      viewBox="1300 900 9900 10700"
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      aria-hidden={title ? undefined : 'true'}
    >
      <g transform={LEFT_TRANSFORM}>
        <path d={PATH_D} fill={DIM} opacity={opacity('left')} />
      </g>
      <g transform={RIGHT_TRANSFORM}>
        <path d={PATH_D} fill={DIM} opacity={opacity('right')} />
      </g>
      {highlight === 'slash' && (
        <line
          x1="4100"
          y1="11250"
          x2="8380"
          y2="1220"
          stroke={DIM}
          strokeWidth="600"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
