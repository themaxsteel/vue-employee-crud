<style>
.taskboard-col {
  min-height: 75%;
  padding-top: 24px;
  /* padding-bottom: 16px; */
}
</style>

<template>
  <div class="row">
    <div class="col-3">
      <div class="task-card mt-4">
        <div class="p-3 pb-0">
          <div class="d-flex justify-content-between">
            <h6>{{ taskMaster.name }}</h6>
            <ProjectModal :project="taskMaster" />
          </div>
          <p class="mb-0">{{ taskMaster.description }}</p>
        </div>
        <hr class="my-2">
        <div class="d-flex justify-content-between px-3 pb-3">
          <div>
            <img src="https://avatarfiles.alphacoders.com/280/thumb-280970.png" height="30" width="30" alt="">
            <img src="https://avatarfiles.alphacoders.com/307/thumb-307186.png" height="30" width="30" alt="">
            <img src="https://pbs.twimg.com/profile_images/1429762352157630466/OD7JD85z_400x400.jpg" height="30"
              width="30" alt="">
          </div>
          <p class="mt-2 mb-0">{{ dateFormat(taskMaster.created_at) }}</p>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <AddTaskModal :project-id="taskMaster.id" :project-name="taskMaster.name" />
      </div>

    </div>
    <div class="col-3">
      <draggable class="taskboard-col" :list="taskMaster.todo" v-bind="dragOptions" @change="logTodo"
        :group="{ name: `${taskMaster.id}-todo`, put: `${taskMaster.id}-doing` }" item-key="id">
        <template #item="{ element: item }">
          <TaskCard :task-detail="item" status="TODO" />
        </template>
      </draggable>
    </div>
    <div class="col-3">
      <draggable class="taskboard-col" :list="taskMaster.doing" v-bind="dragOptions" @change="logDoing"
        :group="{ name: `${taskMaster.id}-doing`, put: [`${taskMaster.id}-todo`, `${taskMaster.id}-done`] }"
        item-key="id">
        <template #item="{ element: item }">
          <TaskCard :task-detail="item" status="DOING" />
        </template>
      </draggable>
    </div>
    <div class="col-3">
      <draggable class="taskboard-col" :list="taskMaster.done" v-bind="dragOptions" @change="logDone"
        :group="{ name: `${taskMaster.id}-done`, put: `${taskMaster.id}-doing` }" item-key="id">
        <template #item="{ element: item }">
          <TaskCard :task-detail="item" status="DONE" />
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import TaskCard from '../components/TaskCard.vue'
import { ref } from 'vue'
import AddTaskModal from './modal/AddTaskModal.vue';
import { dateFormat, isEmpty } from '../utils/utils';
import ProjectModal from './modal/ProjectModal.vue';
import { useTaskManagementStore } from '../stores/task_management';

const { taskMaster } = defineProps({
  taskMaster: {
    required: true,
    type: Object,
  },
})

const taskManagementStore = useTaskManagementStore()

const dragOptions = ref({
  animation: 200,
  group: "description",
  disabled: false,
  ghostClass: "ghost"
})

function logTodo(evt) {
  taskManagementStore.moveTask(evt, "TODO")
  console.log(evt.moved)
}

function logDoing(evt) {
  taskManagementStore.moveTask(evt, "DOING")
  console.log(evt)

}

function logDone(evt) {
  taskManagementStore.moveTask(evt, "DONE")
  console.log(evt)
}



</script>