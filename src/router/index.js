import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Absensi from '../views/Absensi.vue'
import Task from '../views/Task.vue'
import { isAccessTokenAvailable, isNull } from "../utils/utils";


const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/absensi',
    name: 'Absensi',
    component: Absensi,
  },
  {
    path: '/task',
    name: 'Task',
    component: Task,
  }
]

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes
})

// router.beforeEach((to, from, next) => {
//   let isAccessTokenAvailable = isAccessTokenAvailable()

//   if (to.path == '/dashboard') {
//     if (!isAccessTokenAvailable) {
//       router.push('/credential-failed')
//       return false
//     } else {
//       if (current_user.access_level == 'ADMIN') {
//         router.push('/admin-dashboard')
//         return false
//       }
//       else if (current_user.access_level == 'CEO') {
//         router.push('/ceo-dashboard')
//         return false
//       }
//       else if (current_user.access_level == 'PETUGAS_VALIDASI') {
//         router.push('/petugas-validasi-dashboard')
//         return false
//       }
//       else if (current_user.access_level == 'PEGAWAI') {
//         router.push('/pegawai-dashboard')
//         return false
//       }
//       else {
//         router.push('/credential-failed-to-validate')
//         return false
//       }
//     }
//   }else{
//     if(!isAccessTokenAvailable && to.path != '/login'){
//       router.push('/login')
//       return false
//     }else{
//       next()
//     }
//   }

// })

export default router