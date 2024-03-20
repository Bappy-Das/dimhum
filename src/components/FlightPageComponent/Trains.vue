<script setup>
import fltLogo from "@/assets/img/flt-logo-1.png";
import timeShape from "@/assets/img/time-shape-line.png";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";

const referenceData = ref(null);
const price = ref("price");
const fromRes = ref(null);
const from = ref("From");
const toRes = ref(null);
const to = ref("To");
const toggleDropdown = (event) => {
  referenceData.value = !referenceData.value;
};
const selectPrice = (val) => {
  price.value = val;
  referenceData.value = false;
};
const toggleFrom = (event) => {
  fromRes.value = !fromRes.value;
};
const setFrom = (val) => {
  from.value = val;
  fromRes.value = false;
};
const toggleTo = (event) => {
  toRes.value = !toRes.value;
};
const setTo = (val) => {
  to.value = val;
  toRes.value = false;
};
</script>
<template>
  <div
    class="absolute top-96 md:top-[500px] lg:top-[550px] left-0 md:left-2/4 lg:left-2/4 md:transform lg:transform md:-translate-x-2/4 lg:-translate-x-2/4 md:-translate-y-2/4 lg:-translate-y-2/4"
  >
    <div class="" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="0">
      <div class="w-full p-2">
        <div class="bg-white w-full rounded-lg shadow-xl p-5">
          <div class="relative grid grid-cols-2 md:grid-cols-5 gap-x-1 md:gap-1 lg:gap-1 lg:grid-cols-5 pb-3 h-[135px] md:h-full lg:h-full">
            <div id="select" class="relative w-auto pt-2 md:pt-0 lg:pt-0">
              <button
                id="toggleButton"
                class="flex w-full h-[43px] md:h-[53px] lg:h-[53px] items-center justify-between rounded-full bg-white p-2.5 ring-1 ring-gray-300"
                @click="toggleFrom($event)"
              >
                <div class="px-2 font-medium flex justify-between w-full">
                  <span>{{ from }}</span>
                  <span
                    ><font-awesome-icon v-if="!fromRes" :icon="['fas', 'angle-up']" />
                    <font-awesome-icon v-else :icon="['fas', 'angle-down']" />
                  </span>
                </div>
              </button>
              <ul :class="[fromRes ? 'show z-40 absolute mt-1 rounded bg-[#496cfe] text-white ring-1 ring-gray-300 w-full' : 'hidden']">
                <li class="cursor-pointer select-none p-2 text-bold hover:bg-gray-200 hover:text-[#496cfe]" @click="setFrom('Dhaka')">Dhaka</li>
                <li class="cursor-pointer select-none p-2 text-bold hover:bg-gray-200 hover:text-[#496cfe]" @click="setFrom('Sylhet')">Sylhet</li>
                <li class="cursor-pointer select-none p-2 text-bold hover:bg-gray-200 hover:text-[#496cfe]" @click="setFrom('Cumilla')">Cumilla</li>
              </ul>
            </div>
            <div id="select" class="relative w-auto pt-2 md:pt-0 lg:pt-0">
              <button
                id="toggleButton"
                class="flex w-full h-[43px] md:h-[53px] lg:h-[53px] items-center justify-between rounded-full bg-white p-2.5 ring-1 ring-gray-300"
                @click="toggleTo($event)"
              >
                <div class="px-2 font-medium flex justify-between w-full">
                  <span>{{ to }}</span>
                  <span
                    ><font-awesome-icon v-if="!toRes" :icon="['fas', 'angle-up']" />
                    <font-awesome-icon v-else :icon="['fas', 'angle-down']" />
                  </span>
                </div>
              </button>
              <ul :class="[toRes ? 'show z-40 absolute mt-1 rounded bg-[#496cfe] text-white ring-1 ring-gray-300 w-full' : 'hidden']">
                <li class="cursor-pointer select-none p-2 text-bold hover:bg-gray-200 hover:text-[#496cfe]" @click="setTo('Dhaka')">Dhaka</li>
                <li class="cursor-pointer select-none p-2 text-bold hover:bg-gray-200 hover:text-[#496cfe]" @click="setTo('Sylhet')">Sylhet</li>
                <li class="cursor-pointer select-none p-2 text-bold hover:bg-gray-200 hover:text-[#496cfe]" @click="setTo('Cumilla')">Cumilla</li>
              </ul>
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
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border px-4 h-[43px] md:h-[53px] lg:h-[53px] text-gray-900 text-sm md:text-md lg:text-md rounded-full w-full p-2.5 focus:ring-0 focus:outline-none"
                placeholder="Train No (Opt)"
                required
              />
            </div>
            <div
              class="absolute left-[43%] top-[110px] md:top-0 lg:top-0 md:bottom-4 lg:bottom-4 md:left-[85%] lg:left-[85%] text-white flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[50px] lg:w-[60px] lg:h-[50px] text-center shadow-xl rounded-md from-purple-600 to-blue-500 bg-gradient-to-br"
            >
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col md:flex-row lg:flex-row items-start justify-between gap-4 md:gap-8 lg:gap-8 pt-20 md:pt-30 lg:pt-40">
    <div class="w-full md:w-1/4 lg:w-1/4">
      <div
        class="block w-full mb-5 py-[10px] px-[30px] md:p-[30px] lg:p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <h1 class="pb-2 mb-2 md:pb-[25px] lg:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-lg">Filter by Price</h1>
        <div class="flex flex-col items-center justify-between p-1.5">
          <div class="w-full">
            <input id="dual-range" type="range" value="10" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb-1" />
            <!-- <input id="dual-range" type="range" value="75" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb-2" /> -->
          </div>
        </div>
        <div class="flex justify-between p-1.5">
          <p>Price</p>
          <p class="text-[#7040ff]">$160-$550</p>
        </div>
        <div class="flex items-center justify-center mt-2 md:mt-7 lg:mt-7">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-sm text-sm md:text-xl lg:text-xl px-8 py-3 text-center"
          >
            Filter
          </button>
        </div>
      </div>
      <div
        class="block w-full mb-5 py-[10px] px-[30px] md:p-[30px] lg:p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <h1 class="pb-2 mb-2 md:pb-[25px] lg:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-xl">Departure Time</h1>
        <div class="flex items-center py-1">
          <input id="default-checkbox" class="" type="checkbox" value="" />
          <label for="default-checkbox" class="ms-2 text-gray-900 text-md"> 00:00-06:00 </label>
        </div>
        <div class="flex items-center py-1">
          <input id="default-checkbox" class="" type="checkbox" value="" />
          <label for="default-checkbox" class="ms-2 text-md text-gray-900"> 06:00-12:00 </label>
        </div>
        <div class="flex items-center py-1">
          <input id="default-checkbox" class="" type="checkbox" value="" />
          <label for="default-checkbox" class="ms-2 text-md text-gray-900"> 12:00-18:00 </label>
        </div>
        <div class="flex items-center py-1">
          <input id="default-checkbox" class="" type="checkbox" value="" />
          <label for="default-checkbox" class="ms-2 text-md text-gray-900"> 18:00-24:00 </label>
        </div>
      </div>
      <div
        class="block w-full mb-5 py-[10px] px-[30px] md:p-[30px] lg:p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <h1 class="pb-2 mb-2 md:pb-[25px] lg:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-xl">Arrival Time</h1>
        <div class="flex items-center py-1">
          <input id="default-checkbox" class="" type="checkbox" value="" />
          <label for="default-checkbox" class="ms-2 text-gray-900 text-md"> 00:00-06:00 </label>
        </div>
        <div class="flex items-center py-1">
          <input id="default-checkbox" class="" type="checkbox" value="" />
          <label for="default-checkbox" class="ms-2 text-md text-gray-900"> 06:00-12:00 </label>
        </div>
        <div class="flex items-center py-1">
          <input id="default-checkbox" class="" type="checkbox" value="" />
          <label for="default-checkbox" class="ms-2 text-md text-gray-900"> 12:00-18:00 </label>
        </div>
        <div class="flex items-center py-1">
          <input id="default-checkbox" class="" type="checkbox" value="" />
          <label for="default-checkbox" class="ms-2 text-md text-gray-900"> 18:00-24:00 </label>
        </div>
      </div>
      <div
        class="block w-full mb-5 py-[10px] px-[30px] md:p-[30px] lg:p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <h1 class="pb-2 mb-2 md:pb-[25px] lg:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-lg">Arrival Station</h1>
        <div class="p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Beijing South</label>
          </div>
        </div>
        <div class="p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Beijing</label>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full md:w-3/4 lg:w-3/4">
      <div class="block w-full p-4 pt-4 pb-7 mb-5 bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <div class="flex flex-col md:flex-row lg:flex-row justify-between gap-2">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full h-[45px] md:h-[53px] lg:h-[53px] text-sm px-8 py-3 text-center md:me-2 lg:me-2"
          >
            Recommended
          </button>
          <div>
            <div id="select" class="relative w-full md:w-[250px] lg:w-[250px] md:px-5 lg:px-5">
              <button
                id="toggleButton"
                class="flex w-full h-[45px] md:h-[53px] lg:h-[53px] items-center justify-between rounded-full bg-white p-2.5 ring-1 ring-gray-300"
                @click="toggleDropdown($event)"
              >
                <div class="px-2 font-medium flex justify-between w-full">
                  <span>{{ price }}</span>
                  <span
                    ><font-awesome-icon v-if="!referenceData" :icon="['fas', 'angle-up']" />
                    <font-awesome-icon v-else :icon="['fas', 'angle-down']" />
                  </span>
                </div>
              </button>
              <ul :class="[referenceData ? 'show z-2 absolute mt-1 rounded bg-[#496cfe] text-white ring-1 ring-gray-300 w-[220px]' : 'hidden']">
                <li class="cursor-pointer select-none p-2 text-bold hover:bg-gray-200 hover:text-[#496cfe]" @click="selectPrice(100)">100</li>
                <li class="cursor-pointer select-none p-2 text-bold hover:bg-gray-200 hover:text-[#496cfe]" @click="selectPrice(200)">200</li>
                <li class="cursor-pointer select-none p-2 text-bold hover:bg-gray-200 hover:text-[#496cfe]" @click="selectPrice(300)">300</li>
              </ul>
            </div>
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
        </div>
      </div>
      <div
        v-for="(item, index) in 6"
        :key="index"
        class="block w-full p-4 pt-4 pb-7 mb-5 bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <div class="flex flex-col md:flex-row lg:flex-row justify-between">
          <div class="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between w-full md:w-1/2 lg:w-1/2">
            <div class="flex md:gap-4 lg:gap-4 justify-between md:pt-2 lg:pt-2">
              <h1 class="font-semibold text-2xl text-[#496cfe] pt-1">G102</h1>
              <ul>
                <li class="text-xl text-[#42435d]"><span class="text-xl">&#x2022; </span>06:26</li>
                <li class="text-xl text-[#42435d]"><span class="text-xl">&#x2022; </span>12:29</li>
              </ul>
            </div>
            <h1 class="text-xs pl-28 md:pl-0 lg:pl-0 md:pt-5 lg:pt-5"><font-awesome-icon :icon="['far', 'clock']" class="w-3 h-3 me-2" />4h5m</h1>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/2 pt-5 md:pt-0 lg:pt-0">
            <div class="flex items-center md:justify-center lg:justify-center gap-5 md:gap-10 lg:gap-10">
              <p class="text-sm md:text-md lg:text-md text-[#333]">2nd Class</p>
              <h1>$ <span class="text-2xl font-bold text-[#007bff]">25.33</span></h1>
              <button
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-8 py-3 text-center me-2 mt-3"
              >
                Book
              </button>
            </div>
            <div class="flex items-center md:justify-center lg:justify-center gap-5 md:gap-10 lg:gap-10">
              <p class="text-sm md:text-md lg:text-md text-[#333]">2nd Class</p>
              <h1>$ <span class="text-2xl font-bold text-[#007bff]">25.33</span></h1>
              <button
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-8 py-3 text-center me-2 mt-3"
              >
                Book
              </button>
            </div>
            <div class="flex items-center md:justify-center lg:justify-center gap-5 md:gap-10 lg:gap-10">
              <p class="text-sm md:text-md lg:text-md text-[#333]">2nd Class</p>
              <h1>$ <span class="text-2xl font-bold text-[#007bff]">25.33</span></h1>
              <button
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-8 py-3 text-center me-2 mt-3"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav class="flex items-center justify-center py-10">
        <ul class="inline-flex -space-x-px text-base h-10 gap-2">
          <li>
            <a
              href="#"
              class="flex items-center justify-center from-purple-600 to-blue-500 hover:bg-gradient-to-br hover:text-white px-4 h-10 ms-0 leading-tight text-gray-500 bg-white rounded-s-lg"
              ><font-awesome-icon :icon="['fas', 'angles-left']"
            /></a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center from-purple-600 to-blue-500 hover:bg-gradient-to-br hover:text-white px-4 h-10 leading-tight text-xl font-bold text-gray-600 bg-white hover:bg-gray-100 rounded-md"
              >01</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center from-purple-600 to-blue-500 hover:bg-gradient-to-br hover:text-white px-4 h-10 leading-tight text-xl font-bold text-gray-600 bg-white hover:bg-gray-100 rounded-md"
              >02</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center from-purple-600 to-blue-500 hover:bg-gradient-to-br hover:text-white px-4 h-10 leading-tight text-xl font-bold text-gray-600 bg-white hover:bg-gray-100 rounded-md"
              >03</a
            >
          </li>

          <li>
            <a
              href="#"
              class="flex items-center justify-center from-purple-600 to-blue-500 hover:bg-gradient-to-br hover:text-white px-4 h-10 leading-tight text-gray-900 bg-white hover:bg-gray-100 rounded-r-lg"
            >
              <font-awesome-icon :icon="['fas', 'angles-right']" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<style scoped></style>
