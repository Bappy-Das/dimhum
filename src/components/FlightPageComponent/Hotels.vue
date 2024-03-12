<script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import hotel from "@/assets/img/hotel-1.jpg";
import hotelWifi from "@/assets/img/icon/hottel-cion-1.png";
import hotelDumble from "@/assets/img/icon/hottel-cion-2.png";
import hotelResturent from "@/assets/img/icon/hottel-cion-3.png";
import hotelSofa from "@/assets/img/icon/hottel-cion-4.png";
import hotelAbc from "@/assets/img/icon/hottel-cion-5.png";
import hotelWatter from "@/assets/img/icon/hottel-cion-6.png";
import hotelMusic from "@/assets/img/icon/hottel-cion-7.png";
import hotelcrolstve from "@/assets/img/icon/hottel-cion-8.png";
import hotelDoller from "@/assets/img/icon/hottel-cion-9.png";
const referenceData = ref(null);
const perRoom = ref(null);
const price = ref("price");
const toggleDropdown = (event) => {
  referenceData.value = !referenceData.value;
};
const selectPrice = (val) => {
  price.value = val;
  referenceData.value = false;
};
const guestPerRoom = (event) => {
  perRoom.value = !perRoom.value;
};
const roomFnc = () => {
  perRoom.value = false;
};
</script>
<template>
  <div class="absolute top-[530px] left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-6/12">
    <div class="col-10 mx-auto mt-20">
      <div class="bg-white w-full rounded-lg shadow-xl pb-5">
        <div class="p-2 font-medium flex cursor-pointer" @click="guestPerRoom($event)">
          <span>Guests per room</span>
          <span class="p-1 pl-3">
            <font-awesome-icon v-if="!perRoom" :icon="['fas', 'angle-up']" />
            <font-awesome-icon v-else :icon="['fas', 'angle-down']" />
          </span>
        </div>
        <ul :class="[perRoom ? 'show z-2 absolute mt-1 rounded bg-[#496cfe] text-white ring-1 ring-gray-300 w-[220px]' : 'hidden']">
          <li class="cursor-pointer select-none p-2 text-bold hover:bg-gray-200 hover:text-[#496cfe]" @click="roomFnc('one')">Room One</li>
          <li class="cursor-pointer select-none p-2 text-bold hover:bg-gray-200 hover:text-[#496cfe]" @click="roomFnc('two')">Room Two</li>
        </ul>
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
  </div>
  <div class="flex flex-col md:flex-row lg:flex-row items-start justify-between gap-4 md:gap-8 lg:gap-8 pt-5 md:pt-10 lg:pt-10">
    <div class="w-full md:w-1/4 lg:w-1/4">
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-xl">Star Rating</h1>
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
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-xl">Filter by Price</h1>
        <div class="flex flex-col items-center justify-between p-1.5">
          <div class="w-full">
            <input id="dual-range" type="range" value="10" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb-1" />
            <!-- <input id="dual-range" type="range" value="75" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb-2" /> -->
          </div>
        </div>
        <div>Price: <span class="pl-10 text-[#7040ff]">$160-$500</span></div>
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
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-xl">Booking Policy</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Instant Confirmation</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Free Cancellation</div>
          </div>
        </div>
      </div>
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-xl">Bed Type</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">2 Single beds</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">1 Queen bed</div>
          </div>
        </div>
      </div>
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-xl">Neighborhood</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">New York (and vicinity)</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">New York</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Manhattan</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Brooklyn</div>
          </div>
        </div>
        <router-link :to="{ path: '/' }">
          <p class="p-1 text-[#7040ff] underline">Show more</p>
        </router-link>
      </div>
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-xl">Amenities</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">High-speed Internet</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Air conditioning</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Swimming pool</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Free breakfast</div>
          </div>
        </div>
        <router-link :to="{ path: '/' }">
          <p class="p-1 text-[#7040ff] underline">Show more</p>
        </router-link>
      </div>
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-xl">Property Type</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Hotel</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Private vacation home</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Bed & Breakfast</div>
          </div>
        </div>
        <router-link :to="{ path: '/' }">
          <p class="p-1 text-[#7040ff] underline">Show more</p>
        </router-link>
      </div>
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-xl">Popular Locations</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Central Park</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Times Square</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Statue of Liberty</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Empire State Building</div>
          </div>
        </div>
        <router-link :to="{ path: '/' }">
          <p class="p-1 text-[#7040ff] underline">Show more</p>
        </router-link>
      </div>
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-xl">Accessibility</h1>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Accessible bathroom</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">In-room accessibility</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-1.5">
          <div class="flex items-center">
            <input id="default-checkbox" class="" type="checkbox" value="" />
            <div class="pl-2">Roll-in shower</div>
          </div>
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
        class="block w-full p-4 pt-4 mb-5 bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <div class="flex justify-start items-start gap-8">
          <div class="">
            <img :src="hotel" class="h-[195px] w-full" alt="" srcset="" />
          </div>
          <div class="w-full">
            <div class="flex items-center gap-10">
              <span class="font-semibold text-xl text-gray-600">Candlewood Suites NYC -Times Square</span>
              <div class="flex gap-1">
                <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-xs" />
                <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-xs" />
                <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-xs" />
                <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-xs" />
                <font-awesome-icon :icon="['far', 'star']" class="fa-xs" />
              </div>
            </div>
            <span class="text-gray-600 text-[14px]"
              ><span>Times Square</span> | <span>4.8 km from downtown</span> | <span>Near the subway</span></span
            >
            <div class="flex items-start justify-between">
              <div class="pt-1">
                <div class="flex items-center">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2"
                  >
                    4.3/ <span class="text-xs">5</span>
                  </button>
                  <div>
                    <span class="text-purple-600 font-semibold">Execellent</span>
                    <span class="text-xs text-gray-500 font-semibold">( 86 Reviews )</span>
                  </div>
                </div>
                <button
                  type="button"
                  class="text-green-500 border border-dotted border-green-500 focus:ring-0 focus:outline-none focus:ring-blue-300 rounded-full px-14 py-1.5 text-lg text-center mt-4 me-2"
                >
                  Free Cancellation
                </button>
              </div>
              <div class="pt-2">
                <div class="text-xs text-gray-500 font-semibold">From USD</div>
                <div class="text-3xl text-[#7040ff] font-bold">$365</div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex gap-2">
                <div class="relative flex flex-col items-center group">
                  <img :src="hotelWifi" alt="" srcset="" class="pt-2" />
                  <div class="absolute bottom-0 items-center hidden mb-6 group-hover:flex">
                    <span
                      class="relative w-auto z-10 p-2 text-xs text-center leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md"
                      >WIfi</span
                    >
                  </div>
                </div>
                <div class="relative flex flex-col items-center group">
                  <img :src="hotelDumble" alt="" srcset="" class="pt-2" />
                  <div class="absolute bottom-0 items-center hidden mb-6 group-hover:flex">
                    <span
                      class="relative w-auto z-10 p-2 text-xs text-center leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md"
                      >Dumble</span
                    >
                  </div>
                </div>
                <div class="relative flex flex-col items-center group">
                  <img :src="hotelResturent" alt="" srcset="" class="pt-2" />
                  <div class="absolute bottom-0 items-center hidden mb-6 group-hover:flex">
                    <span
                      class="relative w-auto z-10 p-2 text-xs text-center leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md"
                      >Resturent</span
                    >
                  </div>
                </div>
                <div class="relative flex flex-col items-center group">
                  <img :src="hotelSofa" alt="" srcset="" class="pt-2" />
                  <div class="absolute bottom-0 items-center hidden mb-6 group-hover:flex">
                    <span
                      class="relative w-auto z-10 p-2 text-xs text-center leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md"
                      >Sofa</span
                    >
                  </div>
                </div>
                <div class="relative flex flex-col items-center group">
                  <img :src="hotelAbc" alt="" srcset="" class="pt-2" />
                  <div class="absolute bottom-0 items-center hidden mb-6 group-hover:flex">
                    <span
                      class="relative w-auto z-10 p-2 text-xs text-center leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md"
                      >Resturent</span
                    >
                  </div>
                </div>
                <div class="relative flex flex-col items-center group">
                  <img :src="hotelWatter" alt="" srcset="" class="pt-2" />
                  <div class="absolute bottom-0 items-center hidden mb-6 group-hover:flex">
                    <span
                      class="relative w-auto z-10 p-2 text-xs text-center leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md"
                      >Watter</span
                    >
                  </div>
                </div>
                <div class="relative flex flex-col items-center group">
                  <img :src="hotelMusic" alt="" srcset="" class="pt-2" />
                  <div class="absolute bottom-0 items-center hidden mb-6 group-hover:flex">
                    <span
                      class="relative w-auto z-10 p-2 text-xs text-center leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md"
                      >Music</span
                    >
                  </div>
                </div>
                <div class="relative flex flex-col items-center group">
                  <img :src="hotelcrolstve" alt="" srcset="" class="pt-2" />
                  <div class="absolute bottom-0 items-center hidden mb-6 group-hover:flex">
                    <span
                      class="relative w-auto z-10 p-2 text-xs text-center leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md"
                      >Crolstve</span
                    >
                  </div>
                </div>
                <div class="relative flex flex-col items-center group">
                  <img :src="hotelDoller" alt="" srcset="" class="pt-2" />
                  <div class="absolute bottom-0 items-center hidden mb-6 group-hover:flex">
                    <span
                      class="relative w-auto z-10 p-2 text-xs text-center leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md"
                      >Doller</span
                    >
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 capitalize font-bold rounded-full text-sm px-10 py-3 text-center me-2"
              >
                View details
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
