import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router'

import MozaicVue from '@mozaic-ds/vue-3';
import '@mozaic-ds/vue-3/dist/mozaic-vue.css';

createApp(App)
.use(router)
.use(MozaicVue)
.mount('#app')
