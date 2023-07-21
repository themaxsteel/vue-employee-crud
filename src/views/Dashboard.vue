<template>
     <p>Dashboard</p>
     <p>{{ user.name }}</p>
    <button @click="authStore.logout()" class="btn rounded px-4 py-2 bg-red-600 text-white">Logout</button>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '../stores/auth'
import {useUserStore} from '../stores/user'
import { getUser } from '../utils/utils';
const authStore = useAuthStore()
const userStore = useUserStore()
const user = getUser()


onMounted(()=>{
    userStore.loadUsers()
})
</script>