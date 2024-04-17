import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import {createPinia} from 'pinia';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const pinia = createPinia();


const vuetify = createVuetify({
    components,
    directives,
    theme:{
        defaultTheme:"dark"
    }
  })
  
  createApp(App)
  .use(vuetify)
  .use(pinia)
  .use(router)
  .mount('#app')





