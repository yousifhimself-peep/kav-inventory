import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Relative base so the build works from any sub-path (GitHub Pages, Cloudflare, a folder).
  base: './',
  plugins: [react(), tailwindcss()],
});
