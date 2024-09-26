import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      assets: path.resolve(__dirname, './src/assets'),
      icons: path.resolve(__dirname, './src/assets/icons'),
      images: path.resolve(__dirname, './src/assets/images'),
      styles: path.resolve(__dirname, './src/styles'),
      constants: path.resolve(__dirname, './src/constants'),
      store: path.resolve(__dirname, './src/store'),
    },
  }
})