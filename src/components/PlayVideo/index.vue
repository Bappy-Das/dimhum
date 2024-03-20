<script setup>
import videoBG from "@/assets/img/videobg.png";
import playVideo from "@/assets/img/play-video-bg.png";
</script>
<template>
  <div class="relative mt-96 md:mt-0 lg:mt-0">
    <div
      class="absolute top-0 left-0 right-0 bg-white bg-cover mb-20 bg-center py-60 h-[700px]"
      :style="{ backgroundImage: `url(${videoBG})` }"
    ></div>
    <div class="relative max-w-screen-xl w-full mx-auto py-2 px-4 bg-white md:bg-transparent lg:bg-transparent">
      <div class="w-full md:w-9/12 lg:w-9/12 mx-auto">
        <div
          class="bg-black w-full h-[500px] flex justify-center items-center rounded-3xl bg-cover bg-center"
          :style="{ backgroundImage: `url(${playVideo})` }"
        >
          <span class="relative flex h-20 w-20">
            <span class="absolute top-1 left-1 h-10 w-10">
              <font-awesome-icon :icon="['fas', 'circle-play']" class="text-white" style="font-size: 74px" />
            </span>
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"> </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
