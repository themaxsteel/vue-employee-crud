<template>
  <button class="btn btn-outline-success" style="font-size: 14px;" data-bs-toggle="modal"
    :data-bs-target="`#addTaskModal-${projectId}`">
    <font-awesome-icon icon="add" /> Add Task
  </button>

  <!-- Modal -->
  <div class="modal fade" :id="`addTaskModal-${projectId}`" data-bs-backdrop="static" tabindex="-1"
    aria-labelledby="addTaskModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="addTaskModalLabel">Add task on {{ projectName }}</h1>
          <button type="button" @click="closeModal()" class="btn-close" :id="`addTaskModalCloseButton-${projectId}`"
            data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="taskTitle" class="form-label">Task</label>
            <input v-model="state.name" type="text" class="form-control" id="taskTitle"
              :class="(state.name.length > 0 || !v$.name.$error) ? '' : 'is-invalid'" placeholder="Name...">
            <p class="text-danger input-error-message" v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</p>

          </div>
          <div class="mb-3">
            <textarea ref="descriptionInput" v-model="state.description" class="form-control" id="taskTitle"
              placeholder="Description..."
              :class="(state.name.length > 0 || !v$.name.$error) ? '' : 'is-invalid'"></textarea>
            <p class="text-danger input-error-message" v-if="v$.description.$error">{{ v$.description.$errors[0].$message
            }}</p>

          </div>

        </div>
        <div class="modal-footer">
          <button @click="closeModal()" type="button" :id="`addTaskModalCloseButton-${projectId}`"
            class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button @click="saveTask()" :disabled="isLoading" type="button" class="btn btn-success">
            <template v-if="isLoading">
              <div class="spinner-border text-light" style="height: 24px;
    width: 24px; display: block;" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </template>
            <template v-else>
              Save task
            </template>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { addTask } from '../../services/api'
import { customToast, errorToast } from '../../utils/toast';
import { useTaskManagementStore } from '../../stores/task_management';
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
const { projectId, projectName } = defineProps({
  projectId: {
    required: true,
    type: String,
  },
  projectName: {
    required: true,
    type: String,
  }
})

const taskManagementStore = useTaskManagementStore()

const isLoading = ref(false);

const state = ref({
  name: '',
  description: ''
})

const rules = computed(() => {
  return {
    name: { required },
    description: { required, minLength: minLength(6) }
  }
})

const v$ = useVuelidate(rules, state)


function closeModal() {
  state.value.name = ''
  state.value.description = ''
  v$.value.$reset()
}

function saveTask() {
  v$.value.$validate()
  if (!v$.value.$error) {
    isLoading.value = true

    const promise = new Promise((resolve, reject) => {
      addTask(projectId, state.value.name, state.value.description).then((response) => {
        resolve(response)

        taskManagementStore.loadTask()
        document.getElementById(`addTaskModalCloseButton-${projectId}`).click();
        isLoading.value = false

      }).catch((error) => {
        reject(error);
        isLoading.value = false
      })
    })
    customToast(promise)
  }
}


</script>