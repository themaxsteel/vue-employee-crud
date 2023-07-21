import axios from "../utils/axios"

export function login(params) {
  axios.defaults.headers.common.Authorization.clear
  return axios.post('auth', params)
} 