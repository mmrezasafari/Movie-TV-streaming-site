<script setup>
const props = defineProps({
  mobile: { type: Boolean, default: false }
})
</script>

<template>
  <nav :class="props.mobile ? 'flex flex-col gap-2 p-4' : 'hidden md:flex gap-8 items-center mx-5'">
    <NuxtLink to="#" class="text-light font-medium hover:text-warning max-md:p-2 transition max-md:hover:bg-gray-700 rounded-md">دسته بندی ها</NuxtLink>
    <NuxtLink to="#" class="text-light font-medium hover:text-warning max-md:p-2 transition max-md:hover:bg-gray-700 rounded-md">فیلم</NuxtLink>
    <NuxtLink to="#" class="text-light font-medium hover:text-warning max-md:p-2 transition max-md:hover:bg-gray-700 rounded-md">سریال</NuxtLink>
    <NuxtLink to="#" class="text-light font-medium hover:text-warning max-md:p-2 transition max-md:hover:bg-gray-700 rounded-md">جدید ترین دوبله ها</NuxtLink>
    <NuxtLink to="#" class="text-light font-medium hover:text-warning max-md:p-2 transition max-md:hover:bg-gray-700 rounded-md">بازیگران</NuxtLink>
  </nav>
</template> 
