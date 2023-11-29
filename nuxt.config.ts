export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: ['@nuxtjs/tailwindcss', 'maz-ui/nuxt'],
  mazUi: {
    injectUseToast: true,
  }
})
