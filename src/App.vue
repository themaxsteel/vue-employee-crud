
<template >
  <div v-if="route.name == 'Login'">
    <router-view />
  </div>

  <div v-else class="text-center m-auto" style="height: 100vh;">
    <navbar />
    <router-view />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
const route = useRoute()
// import { onMounted, ref } from 'vue';
// import { useAuthStore } from './stores/auth'
// import {useUserStore} from './stores/user'
// const authStore = useAuthStore()
// const userStore = useUserStore()
// const username = ref('')
// const password = ref('')

// onMounted(()=>{
//   if(authStore.checkAuth()){
//     userStore.loadUsers()
//   }
// })

</script>