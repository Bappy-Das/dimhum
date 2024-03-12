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
  <div class="absolute top-[530px] left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-6/12">
    <div class="col-10 mx-auto mt-20">
      <div class="bg-white w-full rounded-lg h-[90px] shadow-xl">
        <div class="flex justify-center items-center h-full">
          <div id="select" class="relative w-[250px] px-5">
            <button
              id="toggleButton"
              class="flex w-full h-[53px] items-center justify-between rounded-full bg-white p-2.5 ring-1 ring-gray-300"
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
            <ul :class="[fromRes ? 'show z-2 absolute mt-1 rounded bg-[#496cfe] text-white ring-1 ring-gray-300 w-[220px]' : 'hidden']">
              <li class="cursor-pointer select-none p-2 text-bold hover:bg-gray-200 hover:text-[#496cfe]" @click="setFrom('Dhaka')">Dhaka</li>
              <li class="cursor-pointer select-none p-2 text-bold hover:bg-gray-200 hover:text-[#496cfe]" @click="setFrom('Sylhet')">Sylhet</li>
              <li class="cursor-pointer select-none p-2 text-bold hover:bg-gray-200 hover:text-[#496cfe]" @click="setFrom('Cumilla')">Cumilla</li>
            </ul>
          </div>
          <div id="select" class="relative w-[250px] px-5">
            <button
              id="toggleButton"
              class="flex w-full h-[53px] items-center justify-between rounded-full bg-white p-2.5 ring-1 ring-gray-300"
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
            <ul :class="[toRes ? 'show z-2 absolute mt-1 rounded bg-[#496cfe] text-white ring-1 ring-gray-300 w-[220px]' : 'hidden']">
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
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col md:flex-row lg:flex-row items-start justify-between gap-4 md:gap-8 lg:gap-8 pt-5 md:pt-10 lg:pt-10">
    <div class="w-full md:w-1/4 lg:w-1/4">
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-lg">Filter by Price</h1>
        <div class="flex flex-col items-center justify-between p-1.5">
          <div class="w-full">
            <input id="dual-range" type="range" value="10" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb-1" />
          </div>
        </div>
        <div class="flex items-center justify-center mt-7">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-sm text-xl px-8 py-3 text-center"
          >
            Filter
          </button>
        </div>
      </div>
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-lg">Stops</h1>
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
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-lg">Airlines included</h1>
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
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-lg">Departure time</h1>
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
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-lg">Departure airports</h1>
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
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-lg">Arrival airports</h1>
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
        <div class="flex justify-between gap-2">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full h-[53px] text-sm px-8 py-3 text-center me-2"
          >
            Recommended
          </button>
          <div>
            <div id="select" class="relative w-[250px] px-5">
              <button
                id="toggleButton"
                class="flex w-full h-[53px] items-center justify-between rounded-full bg-white p-2.5 ring-1 ring-gray-300"
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
        v-for="(item, index) in 12"
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
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-8 py-3 text-center me-2 mb-2"
          >
            Book
          </button>
        </div>
        <div :class="[visibleIndex === index ? 'opacity-100 transition-all duration-500 show' : 'opacity-0 h-0 hidden']">
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
                    <div class="text-slate-500 ml-14">HKG - Hong Kong Hong Kong International Airport T2</div>
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
                    <div class="text-slate-500 ml-10">SIN - Singapore Changi Airport T2</div>
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
  border-radius: 10px;
  outline: none;
  width: 100%;
  height: 53px;
  box-sizing: border-box;
  color: rgb(3 7 18) !important;
}
/* 
.dp_pointer {
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid black;
}
.dp_calendar_item {
  padding: 2px !important;
}
.dp_calendar_row {
  margin: 2px 0 !important;
} */
.dp__pointer {
  cursor: pointer;
  border-radius: 25px;
  border: 1px solid rgb(212, 212, 212) !important;
}

#price option {
  background-color: #496cfe;
  padding: 0.5rem 1rem;
}
</style>
