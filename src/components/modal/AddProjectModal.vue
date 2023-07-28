<template>
  <button class="btn btn-outline-success" style="font-size: 15px;" sty data-bs-toggle="modal"
    data-bs-target="#addProjectModal">
    <font-awesome-icon icon="add" /> Add Project
  </button>

  <!-- Modal -->
  <div class="modal fade" id="addProjectModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="addProjectLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="addProjectLabel">Add New Project</h1>
          <button @click="closeModal()" id="addProjectModalCloseButton" type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="projectTitle" class="form-label">Project</label>
            <input v-model="state.name" type="text" class="form-control" id="projectTitle"
              :class="(state.name.length > 0 || !v$.name.$error) ? '' : 'is-invalid'" placeholder="Name...">
            <p class="text-danger input-error-message" v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</p>

          </div>
          <div class="mb-3">
            <textarea ref="descriptionInput" v-model="state.description" class="form-control" id="projectTitle"
              placeholder="Description..."
              :class="(state.name.length > 0 || !v$.name.$error) ? '' : 'is-invalid'"></textarea>
            <p class="text-danger input-error-message" v-if="v$.description.$error">{{ v$.description.$errors[0].$message
            }}</p>

          </div>
        </div>
        <div class="modal-footer">
          <SubmitButton :on-click="onClickAddProject" :is-loading="isLoading" text="Save Project" />
          <!-- <button @click="console.log(onClickAddProject)">Click</button> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import SubmitButton from '../SubmitButton.vue';
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import { addProject } from '../../services/api'; 
import { customToast } from '../../utils/toast';
import { useTaskManagementStore } from '../../stores/task_management';

const state = ref({
  name: '',
  description: '',
})

const rules = computed(() => {
  return {
    name: { required },
    description: { required, minLength: minLength(6) }
  }
})

const taskManagementStore = useTaskManagementStore()
const v$ = useVuelidate(rules, state)
const isLoading = ref(false)

function closeModal() {
  state.value.name = ''
  state.value.description = ''
  v$.value.$reset()
}

function onClickAddProject() {
  v$.value.$validate()
  if (!v$.value.$error) {
    isLoading.value = true
    const promise = new Promise((resolve, reject)=>{
      addProject(state.value.name, state.value.description).then((response)=>{
        resolve(response)
        
        taskManagementStore.loadTask()
        document.getElementById('addProjectModalCloseButton').click();
        isLoading.value = false
      }).catch((error)=>{
        reject(error)
        isLoading.value = false
      })
    })

    customToast(promise)
  }
}

</script>