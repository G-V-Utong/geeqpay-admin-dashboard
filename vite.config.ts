import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import svgr from 'vite-plugin-svgr' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  svgr({
    svgrOptions: {
      
    }
  })],
=======

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> f1754d4925e3e9cd00bb5f8168a5a218485a873d
})
