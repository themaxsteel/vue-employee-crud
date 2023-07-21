<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand">Navbar</a>
      <form class="d-flex">
        <li class="nav-item dropdown" style="list-style-type: none;">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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