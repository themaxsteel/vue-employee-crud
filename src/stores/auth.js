import { defineStore } from 'pinia'
import { login } from '../services/auth'
import { loginToast } from '../utils/toast'
import { deleteAccessToken, getAccessToken, setAccessToken } from '../utils/utils'
import router from '../router'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isLoading: false,
    }
  },
  actions: {
    login(username, password) {
      //LOGIN PROMISE
      const promise = new Promise((resolve, reject) => {
        login({
          username: username,
          password: password
        }).then((response) => {
          resolve(response)
          router.push('dashboard')
        }).catch((error) => {
          reject(error) 
        })
      })
      //TOAST
      loginToast(promise)
    },
    logout() {
      deleteAccessToken()
      router.push('login')
    },
  },
})
