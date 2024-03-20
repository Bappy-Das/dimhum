<script setup>
import { defineProps } from "vue";
import breadcumpImg from "@/assets/img/bredcump.png";

const props = defineProps({
  title: String,
  dataArray: Array,
});
</script>
<template>
  <div class="bg-cover md:p-14 lg:p-14 bg-center min-h-auto max-w-auto" :style="{ backgroundImage: `url(${breadcumpImg})` }">
    <!-- <div class="container md:mx-[10rem] h-[450px]"> -->
    <div
      class="max-w-screen-xl h-[620px] md:h-[450px] lg:h-[450px] flex flex-wrap md:items-center lg:items-center justify-between mx-auto p-4 md:p-1 lg:p-0"
    >
      <div class="pt-36 md:pt-48 lg:pt-48">
        <div class="font-bold pb-4 md:pb-7 lg:10 text-white text-3xl md:text-5xl lg:text-7xl w-full">{{ title }}</div>
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li v-for="(item, index) in dataArray" :key="index" class="inline-flex items-center text-lg font-medium text-white">
              <svg
                v-if="index == 0"
                class="w-3 h-3 me-2 md:w-4 md:h-4 md:me-2.5 lg:w-4 lg:h-4 lg:me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                />
              </svg>
              <span v-if="index !== 0"
                ><font-awesome-icon icon="chevron-right" class="w-3 h-3 pb-0.5 me-2 md:w-4 md:h-4 md:me-2.5 lg:w-4 lg:h-4 lg:me-2.5"
              /></span>
              <span class="hover:text-blue-300 cursor-pointer text-xs md:text-md lg:text-lg">
                {{ item.pageName }}
              </span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
