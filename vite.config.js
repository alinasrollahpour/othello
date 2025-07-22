import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    target: 'esnext',
    assetsInlineLimit: Infinity, // inline all assets (images, fonts, etc.)
    cssCodeSplit: false,
    outDir: 'dist',
    rollupOptions: {
      // output: {
      //   manualChunks: () => 'everything.js', // disable code splitting
      // },
    },
  },
})
