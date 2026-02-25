import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// WICHTIG: Ersetze 'portfolio' mit deinem GitHub Repository-Namen
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
