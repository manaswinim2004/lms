// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      treeshake: false,   // disables problematic tree-shaking
    },
    minify: false,         // optional: turn off minify to debug easier
  },
  optimizeDeps: {
    esbuildOptions: {
      // prevent weird evaluation issues
      treeShaking: false,
    },
  },
});
