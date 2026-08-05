import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin to make the generated CSS non-render-blocking
function nonBlockingCss() {
  return {
    name: 'non-blocking-css',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g,
        (_, href) =>
          `<link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="${href}"><noscript><link rel="stylesheet" href="${href}"></noscript>`
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), nonBlockingCss()],
  build: {
    cssCodeSplit: false,
  },
})
