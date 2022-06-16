import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@pinia/nuxt',
  ],
  vite: {
    optimizeDeps: {
      exclude: ['class-validator']
    }
  },
  app: {
    head: {
      title: "thumbs up",
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        
      ],
      link: [
        { rel: 'icon', href: './assets/like-thumb-up-svgrepo-com.svg' }
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
      ]
    },
  }
})