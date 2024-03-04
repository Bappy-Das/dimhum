<script setup>
import breadcumpImg from "@/assets/img/bredcump.png";
</script>
<template>
  <div class="bg-cover p-14 bg-center min-h-auto max-w-auto" :style="{ backgroundImage: `url(${breadcumpImg})` }">
    <div class="container mx-[24rem] h-[450px]">
      <div class="grid grid-cols-12">
        <div class="pt-72">
          <div class="font-bold pb-10 text-white text-2xl md:text-6xl lg:text-7xl">Breadcrumb</div>
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center">
                <a href="#" class="inline-flex items-center text-lg font-medium hover:text-blue-600 text-white">
                  <svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                    />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div class="flex items-center">
                  <svg
                    class="rtl:rotate-180 w-3 h-3 text-white mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <a href="#" class="pb-1 inline-flex items-center text-lg font-medium hover:text-blue-600 text-white">x</a>
                </div>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg
                    class="rtl:rotate-180 w-3 h-3 text-white mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span class="pb-1 inline-flex items-center text-lg font-medium hover:text-blue-600 text-white">y</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
