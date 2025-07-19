<script setup>
import toPersianDigit from "../utils/toPersianDigits.js"

const props = defineProps({
  rate: Number
});

</script>

<template>
  <div class="flex gap-2 rounded-md">
    <span class="text-light text-lg font-bold">
      <span>۱۰</span>
      <span> / </span>
      <span v-if="props.rate" class="text-3xl font-extrabold">{{ toPersianDigit(props.rate) }}</span>
    </span>
    <span>
      <img class="w-8 h-8 bg-none rounded-md" src="/imdb.webp" alt="imdb rate" />
    </span>
  </div>
</template>
