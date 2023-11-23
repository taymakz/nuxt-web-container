// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@nuxt/content', '@nuxtjs/color-mode'],

  colorMode: {
    classSuffix: '',

  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
  ],
})
