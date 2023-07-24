<template>
  <nav class="navbar fixed-top navbar-dark bg-success pe-5">
    <div class="container-fluid">
      <a class="navbar-brand">Employee CRUD</a>
      <form class="d-flex">
        <li class="nav-item dropdown" style="list-style-type: none;">
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ user.name }}
          </a>
          <ul class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
            <li><a @click="authStore.logout()" class="dropdown-item" href="#">Log Out</a></li>
          </ul>
        </li>
      </form>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';
import { getUser } from '../utils/utils';

const user = getUser()
const authStore = useAuthStore()
</script>