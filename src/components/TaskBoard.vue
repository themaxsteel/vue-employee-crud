<style>
.taskboard-col{
  height: 100%;
}


</style>

<template>
  <div class="row mt-4">
    <div class="col-3">
      <div class="task-card">
        <div class="p-3 pb-0">
          <div class="d-flex justify-content-between">
            <h6>{{ taskMaster.name }}</h6>
            <font-awesome-icon icon="ellipsis-vertical" />
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
          <p class="mt-2 mb-0">26 Maret 2023</p>
        </div>
      </div>
    </div>
    <div class="col-3">
      <draggable class="taskboard-col"
        :list="taskMaster.todo"
        v-bind="dragOptions"
        :group="taskMaster.id"
        item-key="id"
      >
        <template #item="{element : item}">
          <TaskCard :task-detail="item" status="TODO"/>
        </template>
      </draggable>
      
    </div>
    <div class="col-3">
      <draggable class="taskboard-col"
        :list="taskMaster.doing"
        v-bind="dragOptions"
        :group="taskMaster.id"
        item-key="id"
      >
        <template #item="{element : item}">
          <TaskCard :task-detail="item" status="DOING"/>
        </template>
      </draggable>
    </div>
    <div class="col-3">
      <draggable class="taskboard-col"
        :list="taskMaster.done"
        :group="taskMaster.id"
        item-key="id"
      >
        <template #item="{element : item}">
          <TaskCard :task-detail="item" status="DONE"/>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import TaskCard from './TaskCard.vue';
import { ref} from 'vue'

const { taskMaster } = defineProps({
  taskMaster: {
    required: true,
    type: Object,
  },
})

const dragOptions = ref({
  animation: 200,
  group: "description",
  disabled: false,
  ghostClass: "ghost"
})




</script>