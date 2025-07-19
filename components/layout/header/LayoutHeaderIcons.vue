<template>
  <div class="flex flex-col md:flex-row gap-2">
    <button class="hidden md:flex bg-primary rounded-md p-3 items-center justify-center hover:bg-gray-700">
      <!-- Notification Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9"/>
      </svg>
    </button>
    <button class="bg-primary rounded-md p-3 flex items-center justify-center hover:bg-gray-700">
      <!-- Bookmark Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-width="2" d="M5 5v16l7-5 7 5V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"/>
      </svg>
    </button>
    <button class="bg-primary rounded-md p-3 flex items-center justify-center hover:bg-gray-700">
      <!-- Search Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="11" cy="11" r="7" stroke-width="2"/>
        <path stroke-width="2" d="M21 21l-4.35-4.35"/>
      </svg>
    </button>
    <button class="bg-primary rounded-md p-3 flex items-center justify-center hover:bg-gray-700">
      <!-- User Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="8" r="4" stroke-width="2"/>
        <path stroke-width="2" d="M4 20c0-4 8-4 8-4s8 0 8 4"/>
      </svg>
    </button>
  </div>
</template> 
