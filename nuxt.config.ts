// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // ssr:false,
  css:['~/assets/css/main.css'],
  postcss:{
    plugins:{
      tailwindcss:{},
      autoprefixer:{},
    },
  },
  modules:[
    '@pinia/nuxt',
    'nuxt-lodash',
  ],
  
  runtimeConfig:{
    api_key: process.env.API_KEY,
      
    base_Url:process.env.BASE_URL,
    img_Base_Url:process.env.IMG_BASE_URL,
    
      
    },
    // vue: {  
    //   compilerOptions: {
    //     isCustomElement: (tag) => ['NuxtLink'].includes(tag),
    //   },
    // }
})
