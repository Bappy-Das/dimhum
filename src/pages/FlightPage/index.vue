<script setup>
import Breadcump from "@/components/Breadcump/index.vue";
import fltLogo from "@/assets/img/flt-logo-1.png";
import timeShape from "@/assets/img/time-shape-line.png";
import { ref } from "vue";

const visibleIndex = ref(true);

const toggleVisibility = (index) => {
  visibleIndex.value = visibleIndex.value === index ? null : index;
};
const componentData = [
  {
    pageName: "Home",
    path: "/",
    icon: "",
  },
  {
    pageName: "Flight",
    path: "/flight",
    icon: "",
  },
];
</script>

<template>
  <Breadcump title="FLight" :data-array="componentData"></Breadcump>
  <!-- <div class="max-w-screen-xl mx-auto mt-20">
    <div class="flex items-center justify-center gap-10">
      <div class="bg-pink-100 w-1/3">gsfd</div>
      <div class="bg-pink-100 w-2/3">fadsbfj</div>
    </div>
  </div> -->
  <div
    class="max-w-screen-xl flex flex-col md:flex-row lg:flex-row items-start justify-between mx-auto gap-4 md:gap-8 lg:gap-8 mt-5 p-4 md:mt-20 lg:mt-20"
  >
    <div class="w-full md:w-1/4 lg:w-1/4">
      <div class="block w-full p-6 bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
        <p class="font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </div>
    <div class="w-full md:w-3/4 lg:w-3/4">
      <div
        v-for="(item, index) in 6"
        :key="index"
        class="block w-full p-4 pt-4 pb-7 mb-5 bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <div class="flex justify-between items-center">
          <div class="border border-gray-200 py-3 px-2">
            <img :src="fltLogo" alt="" srcset="" />
          </div>
          <div>
            <h1 class="text-lg font-semibold">Scoot</h1>
            <p class="text-xs text-[#666363] font-semibold">TR978 | Airbus A320-212</p>
          </div>
          <div class="flex justify-center items-center gap-2">
            <div>
              <h1 class="text-xl font-bold text-dark">10:55</h1>
              <p class="text-xs text-[#666363] font-semibold">HKG T2</p>
            </div>
            <div>
              <img :src="timeShape" alt="" srcset="" />
            </div>
            <div>
              <h1 class="text-xl font-bold text-dark">10:55</h1>
              <p class="text-xs text-[#666363] font-semibold">HKG T2</p>
            </div>
          </div>
          <div class="pt-1">
            <h1 class="text-xs"><font-awesome-icon :icon="['far', 'clock']" class="w-3 h-3 me-2" />4h5m</h1>
            <h1
              class="text-md text-[#007bff] hover:text-[#4573a5] cursor-pointer pt-3 font-semibold transition-transform duration-300"
              @click="toggleVisibility(index)"
            >
              Flight details <font-awesome-icon icon="angle-down" class="w-3 h-3 me-2" />
            </h1>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-[#496cfe]">$610</h1>
            <p>Roundtrip</p>
          </div>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-8 py-3 text-center me-2 mb-2"
          >
            Book
          </button>
        </div>
        <div :class="[visibleIndex === index ? 'opacity-100 transition-all duration-500' : 'opacity-0 h-0']">
          <div class="pt-5">
            <hr class="border-[#7040ff]" />
            <div class="flex items-center p-5">
              <p class="text-xs text-[#666363] font-semibold">Scoot - TR979 | Airbus A320 | Economy</p>
              <p class="text-xs ps-10"><font-awesome-icon :icon="['far', 'clock']" class="w-3 h-3 me-2" />4h5m</p>
            </div>
            <div class="ml-5">
              <div
                class="space-y-2 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[6.8rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
              >
                <div class="relative">
                  <div class="md:flex items-center md:space-x-4">
                    <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div
                        class="flex items-center justify-center bg-dark shadow md:order-1 w-2 h-2 ml-[5px] bg-blue-900 rounded-full -start-1 ring-2 ring-white"
                      ></div>
                      <time class="text-slate-500">Nov 12 10:55</time>
                    </div>
                    <div class="text-slate-500 ml-14">opened the request</div>
                  </div>
                </div>
                <div class="relative">
                  <div class="md:flex items-center md:space-x-4">
                    <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div
                        class="flex items-center justify-center bg-dark shadow md:order-1 w-2 h-2 ml-[5px] bg-blue-900 rounded-full -start-1 ring-2 ring-white"
                      ></div>
                      <time class="text-slate-500">Nov 12 10:55</time>
                    </div>
                    <div class="text-slate-500 ml-10">opened the request</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
