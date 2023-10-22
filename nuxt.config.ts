

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', 
  '@mdi/font/css/materialdesignicons.min.css',
  '~/assets/fonts/yekan.css'  ],
  build: {
    transpile: ['vuetify'],
    
  },

app:{
  head: {
    title: 'آرا شیمی کیمیا ',
    htmlAttrs: {
      lang: 'fa',
      dir: 'rtl',
      
    }
  }
},

})