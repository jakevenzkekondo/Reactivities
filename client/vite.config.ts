import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert';

// A rock-solid, no-nonsense config
export default defineConfig({
  server: { port: 3000 },
  plugins: [
    react(), // Just standard React
    mkcert()
  ],
})