export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  modules: ['@nuxtjs/tailwindcss', 'maz-ui/nuxt'],
  mazUi: {
    injectUseToast: true,
  },
  ssr: false,
  app: {
    baseURL: '/spaceguard-parking/',
    buildAssetsDir: '/assets/'
  },  
});
