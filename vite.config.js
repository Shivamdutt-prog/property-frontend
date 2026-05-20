import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api": {
       target: "https://property-backend-of4t.onrender.com",
        changeOrigin: true,
      },
    },
  },
})