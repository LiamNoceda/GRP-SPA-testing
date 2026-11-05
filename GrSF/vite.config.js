import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Меняем на абсолютный корень. Это уберет белый экран в preview!
  base: '/', 
  plugins: [
    react()
  ],
  build: {
    rollupOptions: {
      input: {
        main: './grps.html',
      },
    },
  },
});
