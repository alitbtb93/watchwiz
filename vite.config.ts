import { fileURLToPath, URL } from 'node:url'
import checker from 'vite-plugin-checker'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    checker({
      typescript: true,
      vueTsc: true,
      eslint: {
        lintCommand: 'eslint ./src --ext .js,.ts,.vue'
      },
      overlay: {
        initialIsOpen: false
      },
      enableBuild: false
    }),
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: { port: 3000 }
})
