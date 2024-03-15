<script setup>
import videoBG from "@/assets/img/videobg.png";
import playVideo from "@/assets/img/play-video-bg.png";
</script>
<template>
  <div class="bg-white bg-cover h-[700px] bg-center py-60 flex felx-col items-center justify-center" :style="{ backgroundImage: `url(${videoBG})` }">
    <div class="max-w-screen-xl w-full mx-auto py-2 px-4">
      <div class="w-9/12 mx-auto">
        <div
          class="bg-black w-full h-[500px] flex justify-center items-center rounded-3xl bg-cover bg-center"
          :style="{ backgroundImage: `url(${playVideo})` }"
        >
          <span class="relative flex h-14 w-14">
            <span class="absolute top-3 left-3 h-10 w-10">
              <font-awesome-icon :icon="['fas', 'circle-play']" size="2xl" class="text-white w-10" />
            </span>
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"> </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
