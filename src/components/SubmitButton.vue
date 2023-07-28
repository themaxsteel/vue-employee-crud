<template>
  <button @click="onClick()" :disabled="isLoading" type="button" class="btn btn-success">
    <template v-if="useLoading && isLoading == true">
      <div class="spinner-border text-light" style="height: 24px;
    width: 24px; display: block;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </template>
    <template v-else>
      {{ text }}
    </template>
  </button>
</template>
<script setup>
const { text, isLoading, useLoading, onClick} = defineProps({
  text: {
    required: true,
    type: String,
  },
  isLoading: {
    type: Boolean,
    default: false,    
  },
  useLoading: {
    type: Boolean,
    default: false,
  },
  onClick: {
    required:true,
    type: Function,
  }
})
</script>