<script setup>
  const props = defineProps({
    title_en: String,
    title_fa: String
  });
</script>

<template>
  <div class="flex items-center gap-2">
    <span class="h-14 hidden md:flex bg-danger rounded p-1 flex-col gap-2 items-center justify-around leading-tight">
      <span class="text-danger w-full leading-none bg-white rounded text-center font-extrabold text-[14px] p-1">1080</span>
      <span class="text-[10px] font-bold leading-none text-light">WebDL</span>
    </span>
    <span class="flex flex-col">
      <span>
        <span class="text-light font-extrabold text-2xl leading-6"> سریال </span>
        <span class="text-light font-extrabold text-2xl leading-6">{{ props.title_en }}</span>
      </span>
      <span class="text-light text-sm mt-1">{{ props.title_fa }}</span>
    </span>
  </div>
</template>
