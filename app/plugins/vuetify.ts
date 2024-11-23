
// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
  })

  nuxtApp.vueApp.use(vuetify)

  // check https://vuetify-nuxt-module.netlify.app/guide/nuxt-runtime-hooks.html
  nuxtApp.hook('vuetify:before-create', (options) => {
    if (import.meta.client) {
      console.log('vuetify:before-create', options)
    }
  })
})
