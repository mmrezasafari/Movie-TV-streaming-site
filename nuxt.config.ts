export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl'
      },
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  routeRules: {
    'https://ylnk.site/test/**': {
      proxy: { to: 'https://ylnk.site/test/**', }
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    },
  },
})
