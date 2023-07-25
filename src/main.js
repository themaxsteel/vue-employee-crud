import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import router from './router'
import App from './App.vue'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';
import 'bootstrap/dist/js/bootstrap.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClock, faHome, faPhone, faUserSecret, faCalendarCheck, faTasks, faList, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faHome, faClock, faPhone, faCalendarCheck, faTasks, faList, faEllipsisVertical)

const pinia = createPinia()
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.use(Vue3Toastify)
app.mount('#app')

