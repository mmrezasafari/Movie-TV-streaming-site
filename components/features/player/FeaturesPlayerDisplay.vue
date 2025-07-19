<script setup>
import { ref, onMounted, computed, onBeforeUnmount } from 'vue'
import Hls from 'hls.js'

const props = defineProps({
  streamDetails: Object,
  poster: String
});

const videoRef = ref(null)
const containerRef = ref(null)
const playing = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const volume = ref(1)
const showSub = ref(true)
const isFullscreen = ref(false)
const showControls = ref(true)
let hideControlsTimer = null


onMounted(() => {
  const video = videoRef.value
  if (Hls.isSupported() && props.streamDetails) {
    const hls = new Hls()
    hls.loadSource(props.streamDetails?.video_url)
    hls.attachMedia(video)
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = props.streamDetails?.video_url
  }
  video.volume = volume.value
  video.addEventListener('timeupdate', () => {
    currentTime.value = video.currentTime
  })
  video.addEventListener('durationchange', () => {
    duration.value = video.duration
  })
  document.addEventListener('fullscreenchange', handleFullscreenChange)
  const container = containerRef.value
  container.addEventListener('mousemove', onMouseMove)
  container.addEventListener('mouseleave', onMouseLeave)
})

onBeforeUnmount(() => {
  const container = containerRef.value
  if (container) {
    container.removeEventListener('mousemove', onMouseMove)
    container.removeEventListener('mouseleave', onMouseLeave)
  }
  document.removeEventListener('fullscreenchange', handleFullscreenChange)
  clearTimeout(hideControlsTimer)
})

function togglePlay() {
  const video = videoRef.value
  if (video.paused) {
    video.play()
    playing.value = true
    startHideControlsTimer()
  } else {
    video.pause()
    playing.value = false
    showControls.value = true
    clearTimeout(hideControlsTimer)
  }
}

function onSeek(e) {
  const video = videoRef.value
  video.currentTime = e.target.value
  currentTime.value = video.currentTime
}

function onVolume(e) {
  const video = videoRef.value
  video.volume = e.target.value
  volume.value = video.volume
}

function toggleSub() {
  showSub.value = !showSub.value
  const tracks = videoRef.value.textTracks
  if (tracks.length) tracks[0].mode = showSub.value ? 'showing' : 'hidden'
}

function formatTime(t) {
  if (!t || isNaN(t)) return '00:00'
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60)
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

function toggleFullscreen() {
  const el = containerRef.value
  if (!document.fullscreenElement) {
    el.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

function handleFullscreenChange() {
  isFullscreen.value = !!document.fullscreenElement
  if (playing.value) {
    startHideControlsTimer()
  } else {
    showControls.value = true
    clearTimeout(hideControlsTimer)
  }
}

function onMouseMove() {
  showControls.value = true
  clearTimeout(hideControlsTimer)
  if (playing.value) {
    startHideControlsTimer()
  }
}

function onMouseLeave() {
  if (playing.value) {
    showControls.value = false
    clearTimeout(hideControlsTimer)
  }
}

function startHideControlsTimer() {
  clearTimeout(hideControlsTimer)
  hideControlsTimer = setTimeout(() => {
    if (playing.value) {
      showControls.value = false
    }
  }, 1000)
}
</script>

<template>
  <div ref="containerRef" class="relative w-full h-[60vh] flex items-center justify-center bg-black rounded overflow-hidden shadow-2xl">
    <video
      ref="videoRef"
      class="w-full h-full object-contain bg-black"
      :controls="false"
      crossorigin="anonymous"
      @click="togglePlay"
      :poster="props.poster"
    >
      <track
        kind="subtitles"
        srclang="fn"
        label="English"
        :src="props.streamDetails?.subtitle"
        default
      />
    </video>
    <!-- Controls Overlay -->
    <div v-if="showControls || !playing" class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-black/0 p-4 flex flex-col gap-2 transition-opacity duration-300">
      <div class="w-full flex flex-col gap-3">
        <div class="w-full" dir="ltr">
          <input type="range" min="0" :max="duration" step="0.1" :value="currentTime" @input="onSeek" class="flex accent-danger w-full" />
        </div>
        <div class="flex w-full flex-row-reverse justify-between">
          <div class="flex flex-row-reverse items-center gap-3">
            <button @click="togglePlay" class="text-light flex items-center justify-center">
              <svg v-if="!playing" class="w-8 h-8" fill="white" viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20"/></svg>
              <svg v-else class="w-8 h-8" fill="white" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            </button>
            <input type="range" min="0" max="1" step="0.01" :value="volume" @input="onVolume" class="w-24 accent-info h-1 ml-2" dir="ltr"/>
            <span class="text-light text-xs">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>
          </div>
          <div class="flex items-center">
            <button @click="toggleFullscreen" class="ml-2 rounded bg-secondary text-light text-xs font-bold border border-light">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4h7M4 4v7M20 20h-7M20 20v-7" />
              </svg>
            </button>
            <button @click="toggleSub" class="ml-2 px-2 py-1 rounded bg-secondary text-light text-xs text-center font-bold border border-light">
              {{ showSub ? 'زیرنویس روشن' : 'زیرنویس خاموش' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  video::-webkit-media-controls {
    display: none !important;
  }
</style> 
