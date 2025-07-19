<script setup>
const emit = defineEmits(['click'])
</script>
<template>
  <button class="md:hidden p-2 rounded-md bg-primary flex items-center justify-center" @click="$emit('click')">
    <svg class="w-6 h-6 text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</template> 
