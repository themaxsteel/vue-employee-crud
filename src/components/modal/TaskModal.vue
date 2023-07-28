<template>
  <button class="ellipsis" data-bs-toggle="modal" :data-bs-target="`#taskModal-${task.id}`">
    <font-awesome-icon icon="ellipsis-vertical" />
  </button>

  <!-- Modal -->
  <div class="modal fade" data-bs-backdrop="static" :id="`taskModal-${task.id}`" tabindex="-1" aria-labelledby="taskModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="taskModalLabel">Task: {{ task.name }}</h1>
          <button type="button" :id="`taskModalClose-${task.id}`" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <p class="mb-1">{{ task.description }}</p>
          <!-- <p>Status: {{ task.status }}</p> -->
        </div>
        <div class="modal-footer justify-content-start">
          <!-- <button type="button"  class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
          <button @click="delTask()" :disabled="isDeleting" type="button" class="btn btn-danger">Delete Task</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { deleteTask } from '../../services/api'
import { useTaskManagementStore } from '../../stores/task_management';
import { customToast } from '../../utils/toast';
import { ref } from 'vue'
const { task } = defineProps({
  task: {
    required: true,
    type: Object,
  }
})

const taskManagementStore = useTaskManagementStore()

const isDeleting = ref(false)

function delTask() {
 

  isDeleting.value = true
  const promise = new Promise((resolve, reject) => {
    deleteTask(task.id).then((response) => {
      resolve(response)
      document.getElementById(`taskModalClose-${task.id}`).click()
      isDeleting.value = false
      taskManagementStore.loadTask()
    }).catch((error) => {
      reject(error)
      isDeleting.value = false
    })
  })

  customToast(promise)
}

</script>