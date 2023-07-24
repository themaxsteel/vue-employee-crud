
<template >
  <div v-if="route.name == 'Login'">
    <router-view />
  </div>

  <div v-else class="h-100">
    <navbar />
    <div class="sidebar-container">

      <router-link :to="{ name: 'Dashboard'} ">
        <div class="sidebar-item">
          <font-awesome-icon icon="home" class="icon" />
          <h6>Dashboard</h6>
        </div>
      </router-link>
      <router-link :to="{ name: 'Absensi'} ">
        <div class="sidebar-item">
          <font-awesome-icon icon="calendar-check" class="icon" />
          <h6>Absensi</h6>
        </div>
      </router-link>
      <router-link :to="{ name: 'Task'} ">
        <div class="sidebar-item">
          <font-awesome-icon icon="tasks" class="icon" />
          <h6>Task</h6>
        </div>
      </router-link>

    </div>

    <div class="row container-fluid h-100">
      <div class="col-1">

      </div>
      <div class="col-11 bg-content mt-5 pt-3">
        <div class="container-inner h-100">
          <router-view />

        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
const route = useRoute()

</script>