import { defineStore } from 'pinia'
import { getUsers } from '../services/user'
export const useUserStore = defineStore('user',{
  state:()=>{
    return {
      users:[]
    }
  },
  actions:{
    async loadUsers(){
      this.users = await getUsers()
    }
  }
})