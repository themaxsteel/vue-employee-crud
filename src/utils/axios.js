import axios from 'axios'
import { BASE_URL } from '../config'
import router from '../router'
import { deleteAccessToken, getAccessToken, setAccessToken, setUser } from './utils'
import { toast } from 'vue3-toastify'
import { useRoute } from 'vue-router'

const axiosClient = axios.create()

axiosClient.defaults.baseURL = BASE_URL
axiosClient.defaults.headers.post['Content-Type'] = 'application/json'
axiosClient.defaults.headers.common.Authorization = `Bearer ${getAccessToken()}`


axiosClient.interceptors.response.use(res=>{
  console.log(res.data)
  if(typeof res.data !== 'object'){
    return Promise.reject(res)
  }

  if(res.status != 200){
    return Promise.reject(res.data)
  }

  if(res.data.access_token){
    setAccessToken(res.data.access_token)
    setUser(res.data.user)
    axiosClient.defaults.headers.common.Authorization = `Bearer ${res.data.access_token}`
  }

  return res.data
}, error => {
  console.log(error)

  //Token Expired
  if(error.response.status == 401){
    toast.error(`Error: ${error.response.data.message}`)
    router.push('login')
  }
  return Promise.reject(error)
})


export default axiosClient  