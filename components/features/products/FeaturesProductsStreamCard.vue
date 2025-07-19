<script setup>
import toPersianDigit from "../utils/toPersianDigits.js"

const props = defineProps({
  episode: Object,
  details: Object
});
</script>

<template>
  <!-- Desktop Layout -->
  <div class="group hidden md:flex items-center rounded-xl gap-6 w-full max-w-3xl cursor-pointer">
    <!-- Poster -->
    <div class="relative">
      <img :src="props.episode?.poster" alt="EL CAMINO" class="w-32 h-44 object-cover rounded-lg border-2 border-primary" />
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span class="bg-black/70 rounded-full p-3 flex items-center justify-center">
          <svg class="w-10 h-10 text-light" fill="currentColor" viewBox="0 0 24 24">
            <polygon points="8,5 19,12 8,19" />
          </svg>
        </span>
      </div>
    </div>
    <!-- Info -->
    <div class="flex-1 flex flex-col gap-4">
      <!-- Title -->
      <div class="text-light font-extrabold text-2xl leading-6">
        فیلم
        <span class="ltr:font-black">{{ props?.details?.title_en }}</span>
      </div>
      <!-- Season/Episode -->
      <div class="flex gap-8 w-full justify-between">
        <span class="text-light text-lg">فصل 1</span>
        <span class="text-light text-lg">قسمت 1</span>
      </div>
      <!-- Badges -->
      <div class="flex gap-2 w-full justify-between">
        <div class="flex gap-2">
          <span class="bg-warning text-light font-bold rounded-md px-2 py-1 flex items-center gap-1 text-base">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
              <path d="M5.926 20.574a7.26 7.26 0 0 0 3.039 1.511c.107.035.179-.105.107-.175-2.395-2.285-1.079-4.758-.107-5.873.693-.796 1.68-2.107 1.608-3.865 0-.176.18-.317.322-.211 1.359.703 2.288 2.25 2.538 3.515.394-.386.537-.984.537-1.511 0-.176.214-.317.393-.176 1.287 1.16 3.503 5.097-.072 8.19-.071.071 0 .212.072.177a8.761 8.761 0 0 0 3.003-1.442c5.827-4.5 2.037-12.48-.43-15.116-.321-.317-.893-.106-.893.351-.036.95-.322 2.004-1.072 2.707-.572-2.39-2.478-5.105-5.195-6.441-.357-.176-.786.105-.75.492.07 3.27-2.063 5.352-3.922 8.059-1.645 2.425-2.717 6.89.822 9.808z" fill="white"/>
            </svg>
          </span>
          <span class="bg-info text-light font-bold rounded-md px-4 py-1 flex items-center gap-1 text-base">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="20px" height="20px" viewBox="0 0 512 512">
              <path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM208.1 287.7c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.8-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7l-17.5 30.5c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2.1 48 51.1 70.5 92.3 32.6zm210.4 0c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.5 56.9-172.7 32.1-172.7-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7L430 222.2c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6z"/>
            </svg>
            <span>زیرنویس</span>
          </span>
          <span class="bg-success text-light font-bold rounded-md px-4 py-1 flex items-center gap-1 text-base">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="20px" height="20px" viewBox="-5 0 32 32" version="1.1">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-107.000000, -309.000000)" fill="white">
                  <path d="M118,333 C121.866,333 125,329.866 125,326 L125,316 C125,312.134 121.866,309 118,309 C114.134,309 111,312.134 111,316 L111,326 C111,329.866 114.134,333 118,333 L118,333 Z M129,328 L127,328 C126.089,332.007 122.282,335 118,335 C113.718,335 109.911,332.007 109,328 L107,328 C107.883,332.799 112.063,336.51 117,336.955 L117,339 L116,339 C115.448,339 115,339.448 115,340 C115,340.553 115.448,341 116,341 L120,341 C120.552,341 121,340.553 121,340 C121,339.448 120.552,339 120,339 L119,339 L119,336.955 C123.937,336.51 128.117,332.799 129,328 L129,328 Z" id="microphone" sketch:type="MSShapeGroup"></path>
                </g>
              </g>
            </svg>
            <span>دوبله</span>
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="md:hidden flex rounded-xl gap-3 w-full">
    <!-- Poster -->
    <div class="relative w-24 h-auto">
      <img :src="props?.episode?.poster" alt="EL CAMINO" class="w-full h-full object-cover rounded-lg border-2 border-primary" />
      <div class="absolute flex bottom-1 gap-1">
          <span class="bg-warning text-light font-bold rounded-md  flex items-center gap-1 text-base p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
              <path d="M5.926 20.574a7.26 7.26 0 0 0 3.039 1.511c.107.035.179-.105.107-.175-2.395-2.285-1.079-4.758-.107-5.873.693-.796 1.68-2.107 1.608-3.865 0-.176.18-.317.322-.211 1.359.703 2.288 2.25 2.538 3.515.394-.386.537-.984.537-1.511 0-.176.214-.317.393-.176 1.287 1.16 3.503 5.097-.072 8.19-.071.071 0 .212.072.177a8.761 8.761 0 0 0 3.003-1.442c5.827-4.5 2.037-12.48-.43-15.116-.321-.317-.893-.106-.893.351-.036.95-.322 2.004-1.072 2.707-.572-2.39-2.478-5.105-5.195-6.441-.357-.176-.786.105-.75.492.07 3.27-2.063 5.352-3.922 8.059-1.645 2.425-2.717 6.89.822 9.808z" fill="white"/>
            </svg>
          </span>
          <span class="bg-info text-light font-bold rounded-md flex items-center gap-1 text-base p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="20px" height="20px" viewBox="0 0 512 512">
              <path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM208.1 287.7c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.8-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7l-17.5 30.5c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2.1 48 51.1 70.5 92.3 32.6zm210.4 0c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.5 56.9-172.7 32.1-172.7-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7L430 222.2c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6z"/>
            </svg>
          </span>
          <span class="bg-success text-light font-bold rounded-md p-1 flex items-center gap-1 text-base">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="20px" height="20px" viewBox="-5 0 32 32" version="1.1">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-107.000000, -309.000000)" fill="white">
                  <path d="M118,333 C121.866,333 125,329.866 125,326 L125,316 C125,312.134 121.866,309 118,309 C114.134,309 111,312.134 111,316 L111,326 C111,329.866 114.134,333 118,333 L118,333 Z M129,328 L127,328 C126.089,332.007 122.282,335 118,335 C113.718,335 109.911,332.007 109,328 L107,328 C107.883,332.799 112.063,336.51 117,336.955 L117,339 L116,339 C115.448,339 115,339.448 115,340 C115,340.553 115.448,341 116,341 L120,341 C120.552,341 121,340.553 121,340 C121,339.448 120.552,339 120,339 L119,339 L119,336.955 C123.937,336.51 128.117,332.799 129,328 L129,328 Z" id="microphone" sketch:type="MSShapeGroup"></path>
                </g>
              </g>
            </svg>
          </span>
      </div>
    </div>
    <!-- Info -->
    <div class="flex-1 flex flex-col gap-1">
      <!-- Title -->
      <div class="text-light font-extrabold text-lg leading-5">
        <span class="ltr:font-black">{{props.details?.title_en}}</span>
      </div>
      <div class="text-gray-400 text-sm font-bold">{{props.details?.title_fa}}</div>
        <div class="text-gray-400 text-sm font-bold">اجتماعی،سیاسی،هیجانی</div>
      <div class="text-gray-400 text-sm font-bold">{{toPersianDigit(props.details?.year)}}</div>
      <!-- Ratings Row -->
      <div class="flex items-center gap-1 mt-1 justify-between">
        <span class="flex items-center gap-1">
          <span class="text-sm text-gray-400 font-bold">۱۰ /</span>
          <span class="font-extrabold text-md text-light">{{toPersianDigit(props.details?.user_rating)}}</span>
          <svg class="w-4 h-4 mr-0.5" fill="yellow" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
          </svg>
        </span>
        <span class="flex items-center gap-1">
          <span class="font-extrabold text-md text-light">{{toPersianDigit(props.details?.rotten)}}</span>
          <img src="/rotan.webp" alt="meta" class="w-5 h-5 rounded" />
        </span>
        <span class="flex items-center rounded gap-1">
          <span class="text-sm text-gray-400 font-bold">۱۰ /</span>
          <span class="font-extrabold text-md text-light">۶.۴</span>
          <img src="/imdb.webp" alt="imdb" class="w-5 h-5 rounded" />
        </span>
      </div>
    </div>
  </div>
</template> 
