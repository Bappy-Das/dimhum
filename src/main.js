import { createApp } from 'vue'
import router from "./routers"
import './style.css'
import App from './App.vue'

const vueSetup = createApp(App)
vueSetup.use(router)
vueSetup.mount('#app')
