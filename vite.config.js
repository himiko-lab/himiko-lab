import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Hanya ada satu entri HTML. Berkas untuk tiap halaman dan bahasa ditulis
// scripts/prerender.js dari daftar di src/routes.js.
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
});
