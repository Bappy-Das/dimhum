<script setup>
import { ref } from "vue";
const changeHeader = ref(false);
const onChangeHeader = () => {
  if (window.scrollY >= 140) {
    changeHeader.value = true;
  } else {
    changeHeader.value = false;
  }
};
window.addEventListener("scroll", onChangeHeader);
</script>
<template>
  <!-- <div :class="[changeHeader ? 'hidden' : 'show max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4']"> -->
  <div
    :class="[changeHeader ? 'hidden' : 'block']"
    :style="{ height: changeHeader ? '50px' : 'auto', transition: 'height 0.3s' }"
    class="transition-transform duration-300"
  >
    <!-- <div :class="[changeHeader ? 'hidden transition-transform duration-300 h-[50px]' : 'block h-auto transition-transform duration-300']"> -->
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-5 pb-2 px-4">
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
  </div>
</template>
