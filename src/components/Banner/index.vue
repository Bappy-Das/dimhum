<script setup>
import bannerBg from "@/assets/img/banner01.png";
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const navBtnResponse = ref("flight");

const activeBtn = (data) => {
  navBtnResponse.value = data;
};
</script>
<template>
  <div class="bg-white bg-cover bg-center h-[850px] md:h-[1080px] lg:h-[1080px]" :style="{ backgroundImage: `url(${bannerBg})` }">
    <div class="mx-auto w-full h-full max-w-screen-xl">
      <div class="flex items-center h-full px-3 md:px-0 lg:px-0">
        <div class="mt-36 md:mt-0 lg:mt-0">
          <h1
            class="font-extrabold pb-4 md:pb-7 lg:10 text-[#000] text-4xl md:text-[60px] lg:text-[75px] lg:leading-[90px] w-full"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            Explore <br />
            The World!
          </h1>
          <p
            class="w-full font-sm md:font-normal lg:font-normal text-[14px] md:text-[20px] lg:text-[20px] md:w-3/5 lg:3/5 md:mb-14 lg:mb-16"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            You can create a Custom Trip.Search Our Lowest Fares to Your Favorite Destinations.Find a better way to travel
          </p>
          <div class="" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1500" data-aos-offset="0">
            <div class="w-full md:w-9/12 lg:w-9/12">
              <div class="bg-white w-full rounded-lg shadow-xl p-5">
                <!-- <div class="flex gap-4 items-center pb-3"> -->
                <div class="grid grid-cols-2 md:grid-cols-5 gap-2 lg:grid-cols-5 md:pb-3 lg:pb-3">
                  <div class="flex items-center item">
                    <input
                      id="link-radio"
                      type="radio"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 focus:outline-none dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="link-radio" class="ms-2 text-sm font-medium text-gray-600">One Way</label>
                  </div>
                  <div class="flex items-center item">
                    <input
                      id="link-radio"
                      type="radio"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="link-radio" class="ms-2 text-sm font-medium text-gray-600">Round-trip </label>
                  </div>
                  <div class="flex items-center item">
                    <input
                      id="link-radio"
                      type="radio"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="link-radio" class="ms-2 text-sm font-medium text-gray-600">Multi-city </label>
                  </div>
                  <div class="flex items-center gap-1 item"><span>1 Adult</span> <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" /></div>
                  <div class="flex items-center gap-1 item"><span>Economy</span> <font-awesome-icon :icon="['fas', 'angle-down']" size="sm" /></div>
                </div>

                <!-- hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh -->
                <!-- <div class="flex justify-center gap-4 items-center h-full"> -->
                <div class="relative grid grid-cols-2 md:grid-cols-5 gap-x-1 md:gap-1 lg:gap-1 lg:grid-cols-5 pb-3 h-[165px] md:h-full lg:h-full">
                  <div class="flex items-center gap-2">
                    <input
                      type="text"
                      id="From"
                      class="bg-gray-50 border px-4 h-[40px] md:h-[53px] lg:h-[53px] text-gray-900 text-sm md:text-lg lg:text-lg rounded-full w-full p-2.5 focus:ring-0 focus:outline-none"
                      placeholder="From"
                      required
                    />
                  </div>
                  <div class="flex items-center gap-2">
                    <input
                      type="text"
                      id="to"
                      class="bg-gray-50 border px-4 h-[40px] md:h-[53px] lg:h-[53px] text-gray-900 text-sm md:text-lg lg:text-lg rounded-full w-full p-2.5 focus:ring-0 focus:outline-none"
                      placeholder="To"
                      required
                    />
                  </div>
                  <div>
                    <VueDatePicker
                      placeholder="Depart"
                      v-model="selectedDate"
                      @input="updateReferenceData"
                      :type="date"
                      :showTimePicker="false"
                      auto-apply
                      class="rounded-2xl"
                    ></VueDatePicker>
                  </div>
                  <div>
                    <VueDatePicker
                      placeholder="Return"
                      v-model="selectedDate"
                      @input="updateReferenceData"
                      :type="date"
                      :showTimePicker="false"
                      auto-apply
                    ></VueDatePicker>
                  </div>
                  <div
                    class="absolute left-[43%] top-[135px] md:top-0 lg:top-0 md:bottom-4 lg:bottom-4 md:left-[85%] lg:left-[85%] text-white flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[50px] lg:w-[60px] lg:h-[50px] text-center shadow-xl rounded-md from-purple-600 to-blue-500 bg-gradient-to-br"
                  >
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="" data-aos="fade-up" data-aos-duration="2000">
            <nav class="flex items-center justify-center md:justify-start lg:justify-start py-10">
              <ul class="inline-flex -space-x-px text-base h-10 gap-4">
                <li class="cursor-pointer" @click="activeBtn('flight')">
                  <div
                    :class="[
                      navBtnResponse === 'flight' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white' : 'bg-white text-gray-700',
                      'flex flex-col items-center justify-center w-[60px] h-[60px] md:w-[60px] md:h-[75px] lg:w-[75px] lg:h-[75px] text-center  shadow-xl rounded-md from-purple-600 to-blue-500 hover:bg-gradient-to-br hover:text-white transition-all duration-100',
                    ]"
                  >
                    <font-awesome-icon :icon="['fas', 'plane-up']" class="text-xl py-1" />
                    <span class="text-sm md:text-md lg:text-md">Flight</span>
                  </div>
                </li>
                <li class="cursor-pointer" @click="activeBtn('hotel')">
                  <div
                    :class="[
                      navBtnResponse === 'hotel' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white' : 'bg-white text-gray-700',
                      'flex flex-col items-center justify-center w-[60px] h-[60px] md:w-[60px] md:h-[75px] lg:w-[75px] lg:h-[75px] text-center  shadow-xl rounded-md from-purple-600 to-blue-500 hover:bg-gradient-to-br hover:text-white transition-all duration-100',
                    ]"
                  >
                    <font-awesome-icon :icon="['fas', 'house']" class="text-xl py-1" />
                    <span class="text-sm md:text-md lg:text-md">Hotels</span>
                  </div>
                </li>
                <li class="cursor-pointer" @click="activeBtn('cars')">
                  <div
                    :class="[
                      navBtnResponse === 'cars' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white' : 'bg-white text-gray-700',
                      'flex flex-col items-center justify-center w-[60px] h-[60px] md:w-[60px] md:h-[75px] lg:w-[75px] lg:h-[75px] text-center  shadow-xl rounded-md from-purple-600 to-blue-500 hover:bg-gradient-to-br hover:text-white transition-all duration-100',
                    ]"
                  >
                    <font-awesome-icon :icon="['fas', 'car']" class="text-xl py-1" />
                    <span class="text-sm md:text-md lg:text-md">Cars</span>
                  </div>
                </li>
                <li class="cursor-pointer" @click="activeBtn('trains')">
                  <div
                    :class="[
                      navBtnResponse === 'trains' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white' : 'bg-white text-gray-700',
                      'flex flex-col items-center justify-center w-[60px] h-[60px] md:w-[60px] md:h-[75px] lg:w-[75px] lg:h-[75px] text-center  shadow-xl rounded-md from-purple-600 to-blue-500 hover:bg-gradient-to-br hover:text-white transition-all duration-100',
                    ]"
                  >
                    <font-awesome-icon :icon="['fas', 'train']" class="text-xl py-1" />
                    <span class="text-sm md:text-md lg:text-md">Trains</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.item:last-child:nth-child(3n - 2) {
  grid-column-end: 5;
}
.dp--tp-wrap {
  display: none !important;
}
.dp__input {
  border-radius: 10px !important;
  outline: none !important;
  width: 100% !important;
  height: 53px !important;
  box-sizing: border-box !important;
  color: rgb(3 7 18) !important;
}
.dp__pointer {
  cursor: pointer !important;
  border-radius: 25px !important;
  border: 1px solid rgb(212, 212, 212) !important;
}
@media only screen and (max-width: 600px) {
  .dp__input {
    border-radius: 10px !important;
    outline: none !important;
    width: 100% !important;
    height: 40px !important;
    box-sizing: border-box !important;
    color: rgb(3 7 18) !important;
  }
  .dp__pointer {
    cursor: pointer !important;
    border-radius: 25px !important;
    border: 1px solid rgb(212, 212, 212) !important;
  }
}
</style>
