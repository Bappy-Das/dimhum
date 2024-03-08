<script setup>
import Breadcump from "@/components/Breadcump/index.vue";
import FlightComponents from "@/components/FlightPageComponent/Flight.vue";
import HotelComponents from "@/components/FlightPageComponent/Hotels.vue";
import CarsComponents from "@/components/FlightPageComponent/Cars.vue";
import TrainsComponents from "@/components/FlightPageComponent/Trains.vue";
import { ref } from "vue";

const navBtnResponse = ref("flight");

const activeBtn = (data) => {
  navBtnResponse.value = data;
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
  <!-- <FlightComponents></FlightComponents> -->

  <div class="max-w-screen-xl mx-auto mt-5 p-4 md:p-0 lg:p-0 md:mt-20 lg:mt-20">
    <div class="py-10">
      <nav class="flex items-center justify-center py-10">
        <ul class="inline-flex -space-x-px text-base h-10 gap-4">
          <li class="w-[65px] h-[65px] cursor-pointer" @click="activeBtn('flight')">
            <div
              :class="[
                navBtnResponse === 'flight' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white' : 'bg-gray-200 text-gray-700',
                'flex flex-col items-center justify-center w-[65px] h-[65px] text-center  shadow-xl rounded-md from-purple-600 to-blue-500 hover:bg-gradient-to-br hover:text-white transition-all duration-100',
              ]"
            >
              <font-awesome-icon :icon="['fas', 'plane-up']" class="text-xl py-1" />
              <span class="text-md">Flight</span>
            </div>
          </li>
          <li class="w-[65px] h-[65px] cursor-pointer" @click="activeBtn('hotel')">
            <div
              :class="[
                navBtnResponse === 'hotel' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white' : 'bg-gray-200 text-gray-700',
                'flex flex-col items-center justify-center w-[65px] h-[65px] text-center  shadow-xl rounded-md from-purple-600 to-blue-500 hover:bg-gradient-to-br hover:text-white transition-all duration-100',
              ]"
            >
              <font-awesome-icon :icon="['fas', 'house']" class="text-xl py-1" />
              <span class="text-md">Hotels</span>
            </div>
          </li>
          <li class="w-[65px] h-[65px] cursor-pointer" @click="activeBtn('cars')">
            <div
              :class="[
                navBtnResponse === 'cars' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white' : 'bg-gray-200 text-gray-700',
                'flex flex-col items-center justify-center w-[65px] h-[65px] text-center  shadow-xl rounded-md from-purple-600 to-blue-500 hover:bg-gradient-to-br hover:text-white transition-all duration-100',
              ]"
            >
              <font-awesome-icon :icon="['fas', 'car']" class="text-xl py-1" />
              <span class="text-md">Cars</span>
            </div>
          </li>
          <li class="w-[65px] h-[65px] cursor-pointer" @click="activeBtn('trains')">
            <div
              :class="[
                navBtnResponse === 'trains' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white' : 'bg-gray-200 text-gray-700',
                'flex flex-col items-center justify-center w-[65px] h-[65px] text-center  shadow-xl rounded-md from-purple-600 to-blue-500 hover:bg-gradient-to-br hover:text-white transition-all duration-100',
              ]"
            >
              <font-awesome-icon :icon="['fas', 'train']" class="text-xl py-1" />
              <span class="text-md">Trains</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>

    <!-- page component based on condition -->
    <FlightComponents v-if="navBtnResponse === 'flight'"></FlightComponents>
    <HotelComponents v-if="navBtnResponse === 'hotel'"></HotelComponents>
    <CarsComponents v-if="navBtnResponse === 'cars'"></CarsComponents>
    <TrainsComponents v-if="navBtnResponse === 'trains'"></TrainsComponents>
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
