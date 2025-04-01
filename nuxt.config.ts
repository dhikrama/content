// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/fonts'
  ],
  routeRules: {
    '/': { prerender: true }
  }
  
,
  nitro:{
    preset: 'cloudflare_pages',
  },
  

  css: ['~/assets/css/main.css', '~/assets/css/global.css'],
  

  content: {

    build: {
      markdown: {
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: 'github-light',
            // Theme used if `html.dark`
            dark: 'github-dark',
            // Theme used if `html.sepia`
            sepia: 'monokai'
          }
        }
      }
    }
  },
})