import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  base: '/wp-content/plugins/cv-dynamique-plugin/build/',
  build: {
    outDir: path.resolve(__dirname, '../build'),
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: path.resolve(__dirname, 'main.tsx'),
      output: {
        format: 'iife',
        entryFileNames: 'index.js',
        assetFileNames: 'assets/[name].[hash][extname]', // Dynamiser le nom des fichiers statiques
      }
    }
  }
});