// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
  ],
  css: [
    '@/assets/css/app.css'
  ],
  colorMode: {
    classSuffix: '',
  },
  googleFonts: {
    families: {
        Poppins: [300,400,500,600,700],
    }
  },
})
