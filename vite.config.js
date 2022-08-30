/// <reference types="vitest" />
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import { visualizer } from 'rollup-plugin-visualizer'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'

const port = process.env.PORT || 3000

export default defineConfig(({ mode }) => ({
  plugins: [
    svgr(),
    visualizer(),
    react({ fastRefresh: false }),
    qiankun('orchy-react-js-template', { useDevMode: true }),
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/orchy-react-js-template/',
  server: { port },
  test: {
    environment: 'happy-dom',
    mockReset: true
  },
}))
