<script setup>
import fltLogo from "@/assets/img/car-1.png";
import timeShape from "@/assets/img/time-shape-line.png";
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const referenceData = ref(null);
const price = ref("price");
const toggleDropdown = (event) => {
  referenceData.value = !referenceData.value;
};
const selectPrice = (val) => {
  price.value = val;
  referenceData.value = false;
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
            <div>
              <input
                type="text"
                id="destination"
                class="bg-gray-50 border px-4 h-[43px] md:h-[53px] lg:h-[53px] text-gray-900 text-sm md:text-md lg:text-md rounded-full w-full p-2.5 focus:ring-0 focus:outline-none"
                placeholder="Destination"
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
            <div>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border px-4 h-[43px] md:h-[53px] lg:h-[53px] text-gray-900 text-sm md:text-md lg:text-md rounded-full w-full p-2.5 focus:ring-0 focus:outline-none"
                placeholder="Keywords"
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
  <!-- <div class="absolute top-[530px] left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-6/12">
    <div class="col-10 mx-auto mt-20">
      <div class="bg-white w-full rounded-lg shadow-xl p-5">
        <div class="flex justify-center gap-4 items-center h-full">
          <div>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border px-4 h-[53px] text-gray-900 text-lg rounded-full w-full p-2.5 focus:ring-0 focus:outline-none"
              placeholder="Destination"
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
          <div>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border px-4 h-[53px] text-gray-900 text-lg rounded-full w-full p-2.5 focus:ring-0 focus:outline-none"
              placeholder="Keywords(Optional)"
              required
            />
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="flex flex-col md:flex-row lg:flex-row items-start justify-between gap-4 md:gap-8 lg:gap-8 pt-20 md:pt-30 lg:pt-40">
    <div class="w-full md:w-1/4 lg:w-1/4">
      <div
        class="block w-full mb-5 py-[10px] px-[30px] md:p-[30px] lg:p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <h1 class="pb-2 mb-2 md:pb-[25px] lg:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-xl">Star Rating</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['far', 'star']" class="fa-md" />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="block w-full mb-5 py-[10px] px-[30px] md:p-[30px] lg:p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <h1 class="pb-2 mb-2 md:pb-[25px] lg:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-lg">Payment options</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Pay now <span>(72)</span> </label>
          </div>
          <p>$21</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Pay later <span>(34)</span> </label>
          </div>
          <p>$71</p>
        </div>
      </div>
      <div
        class="block w-full mb-5 py-[10px] px-[30px] md:p-[30px] lg:p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <h1 class="pb-2 mb-2 md:pb-[25px] lg:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-lg">Car type</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Economy <span>(16)</span></label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Compact <span>(16)</span></label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Midsize <span>(16)</span></label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Standard <span>(16)</span></label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Full-size <span>(16)</span></label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Premium <span>(16)</span></label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Premium <span>(16)</span></label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Premium <span>(16)</span></label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Premium <span>(16)</span></label>
          </div>
          <p>$711</p>
        </div>
      </div>
      <div
        class="block w-full mb-5 py-[10px] px-[30px] md:p-[30px] lg:p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <h1 class="pb-2 mb-2 md:pb-[25px] lg:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-lg">Seats</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Less than 4 seats</label>
          </div>
          <p>$1,853.7</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> 4-5 Seats</label>
          </div>
          <p>$1,853.7</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> 7-8 Seats</label>
          </div>
          <p>$1,853.7</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> 9-10 Seats</label>
          </div>
          <p>$1,853.7</p>
        </div>
      </div>
      <div
        class="block w-full mb-5 py-[10px] px-[30px] md:p-[30px] lg:p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <h1 class="pb-2 mb-2 md:pb-[25px] lg:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-lg">Mileage Allowance</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Unlimited Mileage</label>
          </div>
          <p>$711</p>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Limited Mileage</label>
          </div>
          <p>$711</p>
        </div>
      </div>
      <div
        class="block w-full mb-5 py-[10px] px-[30px] md:p-[30px] lg:p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <h1 class="pb-2 mb-2 md:pb-[25px] lg:pb-[25px] md:mb-[24px] lg:mb-[24px] font-bold border-b-2 text-lg">Specifications</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Automatic Transmission</label>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Manual Transmission</label>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <label for="default-checkbox" class="ms-2 text-sm text-gray-900"> Air Conditioning</label>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full md:w-3/4 lg:w-3/4">
      <div class="block w-full p-4 pt-4 pb-7 mb-5 bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <div class="flex flex-col md:flex-row lg:flex-row justify-between gap-2">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full md:h-[53px] lg:h-[53px] text-sm px-8 py-3 text-center md:me-2 lg:me-2"
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
        class="block w-full pr-4 pl-4 pb-0 pt-4 mb-5 bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <div
          class="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between md:items-center lg:items-center gap-3 md:gap-0 lg:gap-0"
        >
          <div class="border w-[200px] border-gray-200 py-3 px-2">
            <img :src="fltLogo" alt="" srcset="" />
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-md md:text-lg lg:text-lg font-semibold text-gray-700">Economy</div>
            <h1 class="text-sm md:text-md lg:text-md font-normal text-gray-700">Hyundai i10 or Similar</h1>
            <div class="text-gray-700 text-xs md:text-lg lg:text-lg flex gap-1 items-center">
              <font-awesome-icon :icon="['fas', 'wheelchair']" /><span>4</span> <font-awesome-icon :icon="['fas', 'briefcase']" /><span>2</span>
            </div>
            <div class="flex items-center pt-2 md:pt-0 lg:pt-0">
              <button
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2"
              >
                4.3/ <span class="text-xs">5</span>
              </button>
              <div>
                <span class="text-purple-600 md:font-semibold lg:font-semibold">Execellent</span>
                <span class="text-xs text-gray-500 md:font-semibold lg:font-semibold">( 86 Reviews )</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-start gap-1 text-sm md:text-lg lg:text-lg font-normal text-gray-700">
            <div><font-awesome-icon :icon="['fas', 'check']" class="text-[#007bff] pr-2" /> Automatic transmission</div>
            <div><font-awesome-icon :icon="['fas', 'check']" class="text-[#007bff] pr-2" /> Unlimited mileage</div>
            <div><font-awesome-icon :icon="['fas', 'check']" class="text-[#007bff] pr-2" /> Free Cancellation</div>
            <div><font-awesome-icon :icon="['fas', 'check']" class="text-[#007bff] pr-2" /> Instant Confirmation</div>
          </div>
          <div class="flex flex-col md:items-end lg:items-end justify-start">
            <h1 class="text-xs text-gray-600 pr-3">7 days</h1>
            <div class="text-3xl text-[#007bff] font-bold pr-3">$365</div>
            <button
              type="button"
              class="text-white w-[120px] md:w-auto lg:w-auto bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm md:text-lg lg:text-lg uppercase md:px-8 lg:px-8 py-2.5 text-center me-2 mt-1"
            >
              Select
            </button>
          </div>
        </div>
        <div :class="['opacity-100']">
          <div class="pt-5">
            <hr class="border-[#92a7fe]" />
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10 lg:gap-10 py-5">
              <div class="flex flex-col md:gap-3 lg:gap-3 w-3/4">
                <h1 class="font-semibold text-gray-600 text-lg">Pick-up</h1>
                <p class="font-normal text-gray-600 text-sm md:text-md lg:text-md">323 West 34Th Street, Manhattan, New York, USA</p>
                <p class="font-normal text-gray-600 text-sm md:text-md lg:text-md">0.51 mi from New York city center</p>
              </div>
              <div class="flex flex-col md:gap-3 lg:gap-3 w-3/4">
                <h1 class="font-semibold text-gray-600 text-lg">Drop-off</h1>
                <p class="font-normal text-sm md:text-md lg:text-md">323 West 34Th Street, Manhattan, New York, USA</p>
                <p class="font-normal text-sm md:text-md lg:text-md">0.51 mi from New York city center</p>
              </div>
              <div class="flex flex-col gap-1 w-3/4">
                <h1 class="font-semibold text-gray-600 text-lg">Included for Free</h1>
                <div class="md:font-semibold lg:font-semibold text-gray-600 text-sm md:text-md lg:text-md">
                  <font-awesome-icon :icon="['fas', 'check']" class="pr-2" /> Automatic transmission
                </div>
                <div class="md:font-semibold lg:font-semibold text-gray-600 text-sm md:text-md lg:text-md">
                  <font-awesome-icon :icon="['fas', 'check']" class="pr-2" /> Theft Protection
                </div>
                <div class="md:font-semibold lg:font-semibold text-gray-600 text-sm md:text-md lg:text-md">
                  <font-awesome-icon :icon="['fas', 'check']" class="pr-2" /> Third Party Liability
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
<style scoped></style>
