import { tree } from "#build/ui";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/fonts',
  ],

  // app: {
  //   head: {
  //     link: [
  //       { rel: 'prefetch', href: '/nuxt/entry.js' } // Hanya unduh saat butuh
  //     ]
  //   }
  // },


  // nitro:{
  //   preset: 'cloudflare_pages',
  //   prerender:{
  //     crawlLinks: true,
  //     routes:['/','/blog/**','/sitemap.xml']
  //   }
  // },
  

  // css: ['~/assets/css/main.css', '~/assets/css/global.css'],
  

  // content: {

  //   database:{
  //     type:'d1',
  //     bindingName:'DB'

  //   },

  //   build: {

  //     markdown: {
  //       highlight: {
  //         theme: {
  //           // Default theme (same as single string)
  //           default: 'github-light',
  //           // Theme used if `html.dark`
  //           dark: 'github-dark',
  //           // Theme used if `html.sepia`
  //           sepia: 'monokai'
  //         }
  //       }
  //     }
  //   }
  // },
})