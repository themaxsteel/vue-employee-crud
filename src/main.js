import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import './style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import router from './router'
import App from './App.vue'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';
import 'bootstrap/dist/js/bootstrap.js'


const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Vue3Toastify)
app.mount('#app')

