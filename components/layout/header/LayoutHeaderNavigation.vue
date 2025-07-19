<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
const mobileIconsOpen = ref(false)

function openMobileMenu() {
  mobileMenuOpen.value = true
}
function closeMobileMenu() {
  mobileMenuOpen.value = false
}
function toggleMobileIcons() {
  mobileIconsOpen.value = !mobileIconsOpen.value
}
</script>

<template>
  <div class="bg-secondary w-full md:px-14">
    <div class="flex items-center justify-between px-4 md:px-8 h-16">
      <LayoutHeaderMenuButton @click="openMobileMenu" />
      <!-- Logo -->
      <div class="flex">
        <LayoutHeaderLogo />
        <LayoutHeaderNavLinks />
      </div>
      <div class="flex items-center gap-2 md:hidden relative">
        <button class="flex items-center justify-end">
          <!-- Notification Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9"/></svg>
        </button>
        <button class="p-2 flex items-center" @click="toggleMobileIcons">
          <!-- Chevron Icon -->
          <svg class="text-light transition-transform" :class="{'rotate-[-90deg]': mobileIconsOpen}" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" fill="none"/>
            <path d="M14.5 17L9.5 12L14.5 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <!-- Mobile Icons Dropdown -->
        <transition name="fade">
          <div v-if="mobileIconsOpen" class="absolute left-0 top-14 z-40 bg-secondary rounded-lg shadow-lg p-2 flex flex-col gap-2 w-20">
            <LayoutHeaderIcons />
          </div>
        </transition>
      </div>
      <!-- Desktop: Nav links and icons -->
      <div class="hidden md:flex items-center justify-end gap-6">
        <LayoutHeaderIcons />
      </div>
    </div>
    <!-- Mobile Menu Overlay -->
    <transition name="fade">
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-50 bg-secondary bg-opacity-95 flex flex-col">
        <div class="flex justify-end p-4">
          <button @click="closeMobileMenu" class="p-2 rounded-md bg-primary">
            <svg class="h-6 text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <LayoutHeaderNavLinks mobile />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.rotate-90 {
  transform: rotate(90deg);
}
</style>


