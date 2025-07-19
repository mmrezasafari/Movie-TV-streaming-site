<script setup>
import { ref, computed, onMounted } from 'vue'
import { postVideoRating } from '@/api/index.js'

const props = defineProps({
  maxStars: { type: Number, default: 5 },
  initialRating: { type: Number, default: 0 }, // average rating
  initialVotes: { type: Number, default: 0 },
  id: { type: [String, Number], default: 2501 },
})

const rating = ref(props.initialRating)
const votes = ref(props.initialVotes)
const userRating = ref(0)
const locked = ref(false)

const localStorageKey = computed(() => `stream-rate-locked-${props.id}`)

onMounted(() => {
  if (localStorage.getItem(localStorageKey.value)) {
    locked.value = true
    userRating.value = Number(localStorage.getItem(localStorageKey.value))
  }
})

const stars = computed(() => Array.from({ length: props.maxStars }, (_, i) => i < (locked.value ? userRating.value : rating.value)))

async function setRating(i) {
  if (locked.value) return
  userRating.value = i + 1
  locked.value = true
  localStorage.setItem(localStorageKey.value, userRating.value)
  // Optimistically update UI
  const newVotes = votes.value + 1
  const newAvg = ((rating.value * votes.value) + userRating.value) / newVotes
  rating.value = newAvg
  votes.value = newVotes
  // Post to API
  try {
    await postVideoRating(userRating.value)
  } catch (e) {
    // Optionally handle error, but keep UI locked
  }
}
</script>

<template>
  <div class="flex flex-col items-center gap-1">
    <div class="flex items-center gap-1">
      <template v-for="(_, i) in props.maxStars" :key="i">
        <button
          v-if="!locked"
          @click="setRating(i)"
          :disabled="locked"
          class="focus:outline-none"
        >
          <svg
            class="w-7 h-7 transition-colors"
            :class="i < userRating ? 'text-warning' : 'text-secondary'"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
        </button>
        <svg
          v-else
          class="w-7 h-7 transition-colors"
          :class="i < userRating ? 'text-warning' : 'text-secondary'"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      </template>
    </div>
  </div>
</template>
