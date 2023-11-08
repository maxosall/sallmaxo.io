// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
  ],
  image: {
    provider:'storyblock',
    baseUrl:{}
  },
  alias:{
    '@': resolve(__dirname, '/')
  },  
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
})
