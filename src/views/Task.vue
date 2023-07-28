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
  <div class="main-content px-0 pb-0 mb-5">
    <h5 class="mb-4 ms-3">Task Management</h5>
    <div class="bg-task rounded">
      <!-- Task Header -->
      <div class="row">
        <div class="col-3">
          <div class="d-flex justify-content-between">
            <h6>Projects</h6>
            <AddProjectModal />
          </div>
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
        <template v-for="(task, index) in store.task">
          <TaskBoard :task-master="task" />
          <hr class="mt-4" v-if="index !== store.task.length - 1">
        </template>
      </div>

    </div>
  </div>
</template>

<script setup>
import TaskBoard from '../components/TaskBoard.vue';
import { onMounted, ref } from 'vue'
import { useTaskManagementStore } from '../stores/task_management';
import AddProjectModal from '../components/modal/AddProjectModal.vue';

const store = useTaskManagementStore()

onMounted(() => {
  store.loadTask()
})

</script>