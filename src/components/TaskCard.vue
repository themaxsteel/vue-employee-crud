<style>
.task-card {
  background-color: #fff;
  border-radius: 8px;
  border: #ededed solid 1px;
  margin-bottom: 12px;
}

.task-card h6 {
  margin-bottom: 4px;
  font-weight: 600;
  font-size: 16px;
}

.task-card p {
  font-size: 13px;
  color: #808080;
}

.task-card hr {
  color: #b5b5b5;
}

.task-card img {
  height: 26px;
  width: 26px;
  border-radius: 50px;
  object-fit: cover;
  background-color: #fff;
  border: #0000004f solid 1px;
  margin-right: 6px;
}

.task-card .user-name {
  font-size: 14px;
  font-weight: 400;
  margin-top: 2px;
}

p.status {
  font-size: 12px;
  font-weight: 500;
}

.task-card .ellipsis {
  border: none;
  background-color: transparent;
}
</style>
<template>
  <div class="task-card">
    <div class="p-3 pb-0">
      <div class="d-flex justify-content-between">
        <h6>{{ taskDetail.name }}</h6>

        <!-- Button trigger modal -->
        <button class="ellipsis" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <font-awesome-icon icon="ellipsis-vertical" />
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-0">{{ taskDetail.description }}</p>
    </div>
    <hr class="my-2">
    <div class="d-flex align-middle justify-content-between px-3 pb-2">
      <a href="#" class="d-flex">
        <img src="https://pbs.twimg.com/profile_images/1429762352157630466/OD7JD85z_400x400.jpg" alt="">
        <p class="user-name mb-0">Turbowisesa</p>
      </a>
      <div class="d-flex">
        <span class="cirlce-dot" :class="statusColor()"></span>
        <p class="mb-0 status">{{ statusState() }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const { taskDetail, status } = defineProps({
  taskDetail: {
    required: true,
    type: Object
  },
  status: {
    default: 'TODO',
    type: String,
  }
})

function statusState() {
  if (status == "TODO") {
    return 'To Do'
  } else if (status == "DOING") {
    return 'Doing'
  } else {
    return 'Done'
  }
}

function statusColor() {
  if (status == "TODO") {
    return 'bg-secondary'
  } else if (status == "DOING") {
    return 'bg-warning'
  } else {
    return 'bg-success'
  }
}

</script>