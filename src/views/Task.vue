<style>
.bg-task {
  background-color: #f7f7f7;
  padding: 24px 16px;
}

/* .task-wrapper{
  overflow: scroll;
  height: 72vh;
} */

</style>
<template>
  <div class="main-content px-0 pb-0">
    <h5 class="mb-4 ms-3">Task</h5>
    <div class="bg-task rounded">
      <!-- Task Header -->
      <div class="row">
        <div class="col-3">
          <h6>Master</h6>
        </div>
        <div class="col-3">
          <div class="d-flex">
            <span class="cirlce-dot bg-secondary"></span>
            <h6>To Do</h6>
          </div>
        </div>
        <div class="col-3">
          <div class="d-flex">
            <span class="cirlce-dot bg-warning"></span>
            <h6>Doing</h6>
          </div>
        </div>
        <div class="col-3">
          <div class="d-flex">
            <span class="cirlce-dot bg-success"></span>
            <h6>Done</h6>
          </div>
        </div>
      </div>

      <hr class="mb-0">
      <!-- Task Body -->
      <div class="task-wrapper container-fluid">
        <template v-for="(task,index) in taskList">
      <TaskBoard :task-master="task" />
      <hr v-if="index !== taskList.length - 1">
      </template>
      </div>
      

    </div>
  </div>
</template>

<script setup>
import TaskBoard from '../components/TaskBoard.vue';
import { ref } from 'vue'

const taskList = ref([
  {
    id: 1,
    name: "DirectBooking.id",
    description: "Pengembangan UI dan Fungsi FE User",
    todo: [
      {
        id: 1,
        name: "Login Page - Slicings",
        description: "Slicing halaman login dari figma ke flutter",
      },
    ],
    doing: [
      {
        id: 2,
        name: "Onboad Page - Slicing",
        description: "Slicing halaman onboard dari figma ke flutter"
      },
    ],
    done: [
      {
        id: 3,
        name: "Onboad Page - Figma",
        description: "Slicing halaman onboard dari figma ke flutter"
      },
    ],
  },
  {
    id: 2,
    name: "Flutter Cloud PMS",
    description: "Aplikasi Mobile Android dan iOS Cloud PMS dengan FLutter",
    todo: [
      {
        id: 1,
        name: "Login Page - Figma",
        description: "Buat halaman login cloud pms menggunakan figma dengan skema login username, password, company code"
      },
      {
        id: 2,
        name: "Login Page - Slicing",
        description: "Slicing halaman login dari figma ke flutter"
      },
    ],
    doing: [
      {
        id: 2,
        name: "Onboad Page - Slicing",
        description: "Slicing halaman onboard dari figma ke flutter"
      },
    ],
    done: [
      {
        id: 3,
        name: "Onboad Page - Figma",
        description: "Slicing halaman onboard dari figma ke flutter"
      },
    ],
  }
])


</script>