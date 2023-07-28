<template>
  <button class="ellipsis" data-bs-toggle="modal" :data-bs-target="`#projectModal-${project.id}`">
    <font-awesome-icon icon="ellipsis-vertical" />
  </button>

  <!-- Modal -->
  <div class="modal fade" data-bs-backdrop="static" :id="`projectModal-${project.id}`" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="projectModalLabel">Project: {{ project.name }}</h1>
          <button type="button" :id="`projectModalClose-${project.id}`" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <p class="mb-1">{{ project.description }}</p>
          <!-- <p>Status: {{ project.status }}</p> -->
        </div>
        <div class="modal-footer justify-content-start">
          <!-- <button type="button"  class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
          <button @click="onDeleteProject()" :disabled="isDeleting" type="button" class="btn btn-danger">Delete Project</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskManagementStore } from '../../stores/task_management';
import { deleteProject } from '../../services/api';
import { customToast } from '../../utils/toast';
const { project } = defineProps({
  project:{
    required:true,
    type: Object,
  }
})

const taskManagementStore = useTaskManagementStore()
const isDeleting = ref(false)

function onDeleteProject(){
  isDeleting.value = true;
  const promise = new Promise((resolve, reject)=>{
    deleteProject(project.id).then((response)=>{
      resolve(response)

      isDeleting.value = false
      document.getElementById(`projectModalClose-${project.id}`).click()
      taskManagementStore.loadTask()
    }).catch((error)=>{
      reject(error)

      isDeleting.value = false
    })
  })

  customToast(promise)
}
</script>