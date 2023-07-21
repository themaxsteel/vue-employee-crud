<style>
.h-full-screen {
  height: 100vh;
}

.h-full {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}

.bg-full {
  background-image: url("https://cloud-pms.guestpro.id/assets/img/dashboard.jpg");
}

.no-bar {
  overflow: hidden;
}

.logo-single-2 {
    background: url("https://cloud-pms.guestpro.id/assets/img/logo2.png") no-repeat;
    background-position: 0;
    background-size: contain;
    margin-bottom: 30px;
}
.login-height-half {
    margin-top: calc(50vh - 278px);
}
</style>
<template>
  <div class="px-0 bg-white container-fluid no-bar">
    <div class="row h-100 no-gutters align-items-center">
      <div class="h-full-screen d-sm-none d-none d-md-block col-md-7 col-lg-8 col-12">
        <div class="w-100 h-full-screen bg-full">

        </div>
      </div>
      <div class="h-full-screen position-relative col-sm-12 col-md-5 col-lg-4 col-12">
        <div class="px-5 py-5 login-height-half">
          <div class="form-side my-auto"><a href="/" class="active"><img class="mb-3" src="https://cloud-pms.guestpro.id/assets/img/logo2.png" width="300"></a>
            <form class="">
              <div class="mb-3">
                <label class="form-label">Username</label>
                <input v-model="username" type="text" class="form-control" placeholder="Username...">
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" placeholder="Password..."
                  id="exampleInputPassword1">
              </div>
            </form>
            <button @click="authStore.login(username, password)" class="btn btn-success">LOGIN</button>
          </div>
        </div>
        <div class="position-absolute text-center w-100 bg-white" style="bottom: 10px;">
          <p class="mb-0 text-muted font-weight-bold text-small">© 2019 PT. GuestPro Teknologi Indonesia. All rights
            reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth'
const authStore = useAuthStore()
const username = ref('')
const password = ref('')


</script>