import { fileURLToPath, URL } from 'node:url';
import checker from 'vite-plugin-checker';

import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

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
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag)
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom'
  },
  server: { port: 3000 }
});
