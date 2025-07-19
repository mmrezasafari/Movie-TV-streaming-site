<script setup>
import {ref} from 'vue'
import {getVideoData, getVideoStreamData} from "~/api/index.js"

const videoData = ref(null)
const videoStreamData = ref(null)

onMounted(async() => {
  videoData.value = await getVideoData()
  videoStreamData.value = await getVideoStreamData()
})

</script>

<template>
  <main class="min-w-full min-h-full bg-primary p-4 md:px-20">
    <!-- Desktop Layout -->
    <div v-if="videoData && videoStreamData" class="hidden md:flex flex-col gap-2">
      <!-- Left: Back button -->
      <ShareButton class="w-fit bg-secondary self-end">
        <span>بازگشت</span>
        <svg class="text-light transition-transform" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" data-v-1c77fa44="">
          <rect width="24" height="24" fill="none" data-v-1c77fa44=""></rect>
          <path d="M14.5 17L9.5 12L14.5 7" stroke="white" stroke-linecap="round" stroke-linejoin="round" data-v-1c77fa44=""></path>
        </svg>
      </ShareButton>
      <div class="flex items-center justify-between gap-4">
        <!-- Title Block -->
        <FeaturesDetailsStreamTitle :title_fa="videoData.title_fa" :title_en="videoData.title_en" />
        <div class="flex items-center gap-2">
          <!-- Quality Dropdown -->
          <FeaturesDetailsStreamQuality />
          <!-- Star Rate -->
          <FeaturesDetailsStreamRate />
          <!-- IMDB Rate -->
          <FeaturesDetailsStreamImdbRate :rate="videoData.imdb" />
          <!-- Share/Bookmark icons -->
          <div class="flex gap-2">
            <ShareButton class="bg-secondary p-3 rounded-md text-light">
              <!-- Share Icon -->
              <svg fill="none" width="20px" height="20px" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 5v16l7-5 7 5V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
              </svg>
            </ShareButton>
            <ShareButton class="bg-secondary w-fit rounded-md text-light">
              <!-- Bookmark Icon -->
              <svg fill="none" width="20px" height="20px" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 5v16l7-5 7 5V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
              </svg>
            </ShareButton>
          </div>
        </div>
      </div>
      <section class="flex mt-3 gap-2">
        <div v-if="videoStreamData.video_url" class="flex-1 h-full gap-4">
          <FeaturesPlayerDisplay :stream-details="videoStreamData" :poster="videoData.poster"/>
          <div class="flex justify-between mt-4 gap-2">
            <FeaturesPlayerTypes />
            <FeaturesPlayerIssue />
          </div>
        </div>
        <div v-if="videoData?.episodes?.length">
            <FeaturesProductsStreamCard
              v-for="(episode, index) in videoData.episodes"
              :episode="episode"
              :details="videoData"
            />
        </div>
      </section>
    </div>

    <!-- Mobile Layout -->
    <div v-if="videoData" class="md:hidden flex flex-col gap-5">
      <div class="flex items-center justify-between">
        <div class="flex gap-2">
          <button class="bg-secondary p-3 rounded-md text-light">
            <!-- Share Icon -->
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 5v16l7-5 7 5V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
            </svg>
          </button>
          <button class="bg-secondary p-3 rounded-md text-light">
            <!-- Bookmark Icon -->
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 5v16l7-5 7 5V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
            </svg>
          </button>
        </div>
        <ShareButton class="bg-secondary">
          <span>بازگشت</span>
          <svg class="text-light transition-transform" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" data-v-1c77fa44="">
            <rect width="24" height="24" fill="none" data-v-1c77fa44=""></rect>
            <path d="M14.5 17L9.5 12L14.5 7" stroke="white" stroke-linecap="round" stroke-linejoin="round" data-v-1c77fa44=""></path>
          </svg>
        </ShareButton>
      </div>
      <div class="flex flex-col gap-3">
        <FeaturesDetailsStreamTitle :title_fa="videoData.title_fa" :title_en="videoData.title_en" />
        <div class="flex justify-between">
          <FeaturesDetailsStreamRate />
          <FeaturesDetailsStreamImdbRate :rate="videoData.imdb" />
        </div>
      </div>
      <section class="flex flex-col gap-10">
        <div class="flex-1 h-full gap-4">
          <FeaturesPlayerDisplay />
          <div class="flex flex-col justify-between mt-4 gap-2">
            <FeaturesPlayerIssue />
            <FeaturesPlayerTypes />
          </div>
        </div>
        <div v-if="videoData?.episodes?.length">
          <template v-for="(data, index) in videoData.episodes" :key="index">
            <FeaturesProductsStreamCard :episode="data" :details="videoData" />
          </template>
        </div>
      </section>
    </div>
  </main>
</template>
