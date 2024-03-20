<script setup>
import fltLogo from "@/assets/img/flt-logo-1.png";
import timeShape from "@/assets/img/time-shape-line.png";
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const selectedDate = ref(null);
const referenceData = ref(null);
const price = ref("price");
const fromRes = ref(null);
const from = ref("From");
const toRes = ref(null);
const to = ref("To");

const updateReferenceData = (newDate) => {
  selectedDate.value = newDate;
};

const visibleIndex = ref(0);
const toggleVisibility = (index) => {
  visibleIndex.value = visibleIndex.value === index ? null : index;
};

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
    class="absolute top-[17rem] md:top-[500px] lg:top-[550px] left-0 md:left-2/4 lg:left-2/4 md:transform lg:transform md:-translate-x-2/4 lg:-translate-x-2/4 md:-translate-y-2/4 lg:-translate-y-2/4"
  >
    <div class="" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="0">
      <div class="w-full p-2">
        <div class="bg-white w-full rounded-lg shadow-xl p-5">
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
          <div class="relative grid grid-cols-2 md:grid-cols-5 gap-x-1 md:gap-1 lg:gap-1 lg:grid-cols-5 pb-3 h-[165px] md:h-full lg:h-full">
            <div id="select" class="relative w-auto pt-2 md:pt-0 lg:pt-0">
              <button
                id="toggleButton"
                class="flex w-full h-[43px] md:h-[53px] lg:h-[53px] items-center justify-between rounded-full bg-white p-2.5 ring-1 ring-gray-300"
                @click="toggleFrom($event)"
              >
                <div class="px-2 font-medium flex justify-between w-full">
                  <span class="text-sm md:text-md lg:text-md opacity-75">{{ from }}</span>
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
                  <span class="text-sm md:text-md lg:text-md opacity-75">{{ to }}</span>
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
  </div>

  <div class="flex flex-col md:flex-row lg:flex-row items-start justify-between gap-4 md:gap-8 lg:gap-8 pt-20 md:pt-30 lg:pt-40">
    <div class="w-full md:w-1/4 lg:w-1/4">
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-2 mb-2 md:pb-[25px] lg:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-lg">Filter by Price</h1>
        <div class="flex flex-col items-center justify-between p-1.5">
          <div class="w-full">
            <input id="dual-range" type="range" value="10" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb-1" />
          </div>
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
        <h1 class="pb-2 mb-2 md:pb-[25px] pb:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-lg">Stops</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Nonstop <span>(63)</span> </label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> 1 Stop <span>(34)</span> </label>
          </div>
          <p>$711</p>
        </div>
      </div>
      <div
        class="block w-full mb-5 py-[10px] px-[30px] md:p-[30px] lg:p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <h1 class="pb-2 mb-2 md:pb-[25px] lg:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-lg">Airlines included</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Delta <span>(16)</span></label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Aer Lingus <span>(16)</span></label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Iberia <span>(16)</span></label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> British Airways <span>(16)</span></label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> KLM <span>(16)</span></label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Finnair <span>(16)</span></label>
          </div>
          <p>$711</p>
        </div>
        <router-link :to="{ path: '/' }">
          <p class="p-1 text-[#7040ff] underline">Show more</p>
        </router-link>
      </div>
      <div
        class="block w-full mb-5 py-[10px] px-[30px] md:p-[30px] lg:p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <h1 class="pb-2 mb-2 md:pb-[25px] lg:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-lg">Departure time</h1>
        <div class="p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Morning <span>(5am - 11am)</span></label>
          </div>
        </div>
        <div class="p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Afternoon <span>(12pm - 5:pm)</span></label>
          </div>
        </div>
        <div class="p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Evening <span>(6pm - 11pm)</span></label>
          </div>
        </div>
      </div>
      <div
        class="block w-full mb-5 py-[10px] px-[30px] md:p-[30px] lg:p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <h1 class="pb-2 mb-2 md:pb-[25px] lg:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-lg">Departure airports</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> LHR (London) (82)</label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> LGW (London) (10)</label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> LCY (London) (5)</label>
          </div>
          <p>$711</p>
        </div>
      </div>
      <div
        class="block w-full mb-5 py-[10px] px-[30px] md:p-[30px] lg:p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <h1 class="pb-2 mb-2 md:pb-[25px] lg:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-lg">Arrival airports</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> JFK (New York) (70)</label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> EWR (Newark) (24)</label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> LGA (New York) (3)</label>
          </div>
          <p>$711</p>
        </div>
      </div>
    </div>
    <div class="w-full md:w-3/4 lg:w-3/4">
      <div class="block w-full p-4 pt-4 pb-7 mb-5 bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <div class="flex flex-col md:flex-row lg:flex-row justify-between gap-2">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full h-[45px] md:h-[53px] lg:h-[53px] text-sm px-8 md:py-3 text-center md:me-2 lh:me-2"
          >
            Recommended
          </button>
          <div>
            <div id="select" class="relative md:w-[250px] lg:w-[250px] md:px-5 lg:px-5">
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
              <ul
                :class="[
                  referenceData
                    ? 'show z-40 absolute mt-1 rounded bg-[#496cfe] text-white ring-1 ring-gray-300 w-full md:w-[220px] lg:w-[220px]'
                    : 'hidden',
                ]"
              >
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
        v-for="(item, index) in 12"
        :key="index"
        class="block w-full p-4 pt-4 pb-7 mb-5 bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <div
          class="flex flex-col gap-3 md:gap-0 lg:gap-0 justify-start md:flex-row lg:flex-row md:justify-between lg:justify-between md:items-center"
        >
          <div class="border w-[80px] border-gray-200 py-3 px-2">
            <img :src="fltLogo" alt="" srcset="" />
          </div>
          <div>
            <h1 class="text-lg font-semibold">Scoot</h1>
            <p class="text-xs text-[#666363] font-semibold">TR978 | Airbus A320-212</p>
          </div>
          <div class="flex md:justify-center lg:justify-center items-center gap-2">
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
              class="text-sm md:text-md lg:text-md text-[#007bff] hover:text-[#4573a5] cursor-pointer pt-3 font-normal md:font-semibold lg:font-semibold transition-transform duration-300"
              @click="toggleVisibility(index)"
            >
              Flight details <font-awesome-icon icon="angle-down" class="w-3 h-3 me-2" />
            </h1>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-[#496cfe]">$610</h1>
            <p class="text-sm md:text-md lg:text-md">Roundtrip</p>
          </div>
          <button
            type="button"
            class="text-white w-[100px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-8 py-3 text-center me-2 mb-2"
          >
            Book
          </button>
        </div>
        <div :class="[visibleIndex === index ? 'opacity-100 transition-all duration-500 show' : 'opacity-0 h-0 hidden']">
          <div class="pt-5">
            <hr class="border-[#7040ff]" />
            <div class="flex items-center py-3 md:p-5 lg:p-5">
              <p class="text-xs md:text-md lg:text-md text-[#666363] font-normal md:font-semibold lg:font-semibold">
                Scoot - TR979 | Airbus A320 | Economy
              </p>
              <p class="text-xs ps-4 md:ps-10 lg:ps-10 font-normal md:font-semibold lg:font-semibold">
                <font-awesome-icon :icon="['far', 'clock']" class="w-3 h-3 me-2" />4h5m
              </p>
            </div>
            <div class="md:ml-5 lg:ml-5">
              <div
                class="space-y-2 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[6.8rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
              >
                <div class="relative">
                  <div class="md:flex items-center md:space-x-4">
                    <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div
                        class="flex items-center justify-center bg-dark shadow md:order-1 w-2 h-2 ml-[5px] bg-blue-900 rounded-full -start-1 ring-2 ring-white"
                      ></div>
                      <time class="text-slate-500 text-xs md:text-[16px] lg:text-[16px] font-bold md:font-semibold lg:font-semibold"
                        >Nov 12 10:55</time
                      >
                    </div>
                    <div
                      class="text-slate-500 ml-7 md:ml-14 lg:ml-14 text-xs md:text-[16px] lg:text-[16px] font-normal md:font-semibold lg:font-semibold"
                    >
                      HKG - Hong Kong Hong Kong International Airport T2
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <div class="md:flex items-center md:space-x-4 md:mt-5 lg:mt-5">
                    <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div
                        class="flex items-center justify-center bg-dark shadow md:order-1 w-2 h-2 ml-[5px] bg-blue-900 rounded-full -start-1 ring-2 ring-white"
                      ></div>
                      <time class="text-slate-500 text-xs md:text-[16px] lg:text-[16px] font-bold md:font-semibold lg:font-semibold"
                        >Nov 12 10:55</time
                      >
                    </div>
                    <div
                      class="text-slate-500 ml-7 md:ml-14 lg:ml-14 text-xs md:text-[16px] lg:text-[16px] font-normal md:font-semibold lg:font-semibold"
                    >
                      SIN - Singapore Changi Airport T2
                    </div>
                  </div>
                </div>
              </div>
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
<style>
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
