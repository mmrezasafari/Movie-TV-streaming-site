import { onMounted, onBeforeUnmount } from 'vue'

export default function useClickOutside(elementRef, callback) {
  function handler(event) {
    if (elementRef.value && !elementRef.value.contains(event.target)) {
      callback(event)
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handler)
    document.removeEventListener('touchstart', handler)
  })
} 
