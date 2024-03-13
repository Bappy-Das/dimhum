<script setup></script>
<template>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4">
    <div class="flex items-center gap-4">
      <p class="hover:text-blue-500 cursor-pointer">
        <span class="pr-2"><font-awesome-icon :icon="['fas', 'headset']" /></span>Support
      </p>
      <p class="hover:text-blue-500 cursor-pointer">
        <span class="pr-1"><font-awesome-icon :icon="['fas', 'envelope']" /></span> info@emigrar.com
      </p>
    </div>
    <div class="flex items-center gap-10">
      <div class="text-white flex items-center gap-2">
        <font-awesome-icon :icon="['fas', 'earth-americas']" /> <span>English</span><font-awesome-icon :icon="['fas', 'caret-down']" />
      </div>
      <div class="text-white flex items-center gap-1"><font-awesome-icon :icon="['fas', 'briefcase']" /> <span>My Trips</span></div>
      <div class="text-white flex items-center gap-1"><font-awesome-icon :icon="['far', 'circle-user']" /><span>Sign in | Join</span></div>
    </div>
  </div>
</template>
