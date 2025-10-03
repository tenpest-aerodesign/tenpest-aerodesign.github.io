import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/", // Garanta que a base seja a raiz para o deploy no GitHub Pages
})