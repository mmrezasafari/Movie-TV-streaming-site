<script setup>
import { ref } from 'vue'
import Button from '@/components/share/Button.vue'
import useClickOutside from '@/composables/useClickOutside.js'

const qualities = [
  'کیفیت 1080p - webdl',
  'کیفیت 720p - webdl',
  'کیفیت 480p - webdl'
]
const open = ref(false)
const selected = ref(qualities[0])
const dropdownRef = ref(null)
useClickOutside(dropdownRef, () => { open.value = false })

function toggleDropdown() {
  open.value = !open.value
}
function selectQuality(q) {
  selected.value = q
  open.value = false
}
</script>

<template>
  <div class="relative w-fit">
    <ShareButton class="bg-secondary" @click="toggleDropdown">
      <span class="text-light font-medium text-base">{{ selected }}</span>
      <svg class="w-4 h-4 text-light mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
      </svg>
    </ShareButton>
    <transition name="fade">
      <div v-if="open" ref="dropdownRef" class="absolute right-0 mt-2 w-48 bg-secondary rounded-lg shadow-lg z-50">
        <ul class="py-2">
          <li v-for="q in qualities" :key="q">
            <button @click="selectQuality(q)" class="w-full text-right px-4 py-2 text-light hover:bg-primary transition font-medium">
              {{ q }}
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
