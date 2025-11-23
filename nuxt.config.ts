// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss', // Tailwind CSS entegrasyonu
    '@pinia/nuxt',
  ],

  css: [
    'swiper/swiper-bundle.css', // Swiper CSS
    '@fortawesome/fontawesome-svg-core/styles.css', // Font Awesome CSS
  ],

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome', // Font Awesome Vue Bileşeni
    ],
  },

  runtimeConfig: {
    public: {
      firebase: {
        apiKey: "AIzaSyBY-hmJ23h9uADb53XDmj75QRpPxJ9m9DY",
        authDomain: "kodlab-projem.firebaseapp.com",
        projectId: "kodlab-projem",
        storageBucket: "kodlab-projem.appspot.com",
        messagingSenderId: "780049199249",
        appId: "1:780049199249:web:98c7a1f1d5a535c8ed0f30",
        measurementId: "G-L9KWMSMNLN",
      },
    },
  },

  compatibilityDate: "2024-12-21",
});