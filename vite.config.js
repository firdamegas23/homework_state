import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        tugas32_1: "tugas32-1.html",
        tugas32_2: "tugas32-2.html",
        tugas32_3: "tugas32-3.html",
        tugas32_4: "tugas32-4.html"
      }
    }
  }
})
