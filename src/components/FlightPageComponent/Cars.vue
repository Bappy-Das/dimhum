<script setup>
import fltLogo from "@/assets/img/car-1.png";
import timeShape from "@/assets/img/time-shape-line.png";
import { ref } from "vue";

const visibleIndex = ref(0);
// @/assets/img/flt-logo-1.png
const toggleVisibility = (index) => {
  // visibleIndex.value = visibleIndex.value === index ? null : index;
  visibleIndex.value = visibleIndex.value === index ? null : index;
};
</script>
<template>
  <div class="flex flex-col md:flex-row lg:flex-row items-start justify-between gap-4 md:gap-8 lg:gap-8">
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
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-lg">Payment options</h1>
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
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-lg">Car type</h1>
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
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-lg">Seats</h1>
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
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-lg">Mileage Allowance</h1>
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
      <div class="block w-full mb-5 p-[30px] bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300">
        <h1 class="pb-[25px] mb-[24px] font-bold border-b-2 text-lg">Specifications</h1>
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
      <div
        v-for="(item, index) in 12"
        :key="index"
        class="block w-full pr-4 pl-4 pb-0 pt-4 mb-5 bg-white border border-gray-200 rounded-sm hover:border-[#7040ff] transition duration-300"
      >
        <div class="flex justify-between items-center">
          <div class="border border-gray-200 py-3 px-2">
            <img :src="fltLogo" alt="" srcset="" />
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-lg font-semibold text-gray-700">Economy</div>
            <h1 class="text-md font-normal text-gray-700">Hyundai i10 or Similar</h1>
            <div class="text-gray-700 text-lg flex gap-1 items-center">
              <font-awesome-icon :icon="['fas', 'wheelchair']" /><span>4</span> <font-awesome-icon :icon="['fas', 'briefcase']" /><span>2</span>
            </div>
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
          </div>
          <div class="flex flex-col justify-start gap-1 text-lg font-normal text-gray-700">
            <div><font-awesome-icon :icon="['fas', 'check']" class="text-[#007bff] pr-2" /> Automatic transmission</div>
            <div><font-awesome-icon :icon="['fas', 'check']" class="text-[#007bff] pr-2" /> Unlimited mileage</div>
            <div><font-awesome-icon :icon="['fas', 'check']" class="text-[#007bff] pr-2" /> Free Cancellation</div>
            <div><font-awesome-icon :icon="['fas', 'check']" class="text-[#007bff] pr-2" /> Instant Confirmation</div>
          </div>
          <div class="flex flex-col items-end justify-start">
            <h1 class="text-xs text-gray-600 pr-3">7 days</h1>
            <div class="text-3xl text-[#007bff] font-bold pr-3">$365</div>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-lg uppercase px-8 py-2.5 text-center me-2 mt-1"
            >
              Select
            </button>
          </div>
        </div>
        <div :class="['opacity-100']">
          <div class="pt-5">
            <hr class="border-[#92a7fe]" />
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 py-5">
              <div class="flex flex-col gap-3 w-3/4">
                <h1 class="font-semibold text-gray-600 text-lg">Pick-up</h1>
                <p class="font-normal text-gray-600 text-md">323 West 34Th Street, Manhattan, New York, USA</p>
                <p class="font-normal text-gray-600 text-md">0.51 mi from New York city center</p>
              </div>
              <div class="flex flex-col gap-3 w-3/4">
                <h1 class="font-semibold text-gray-600 text-lg">Drop-off</h1>
                <p class="font-normal text-gray-600 text-md">323 West 34Th Street, Manhattan, New York, USA</p>
                <p class="font-normal text-gray-600 text-md">0.51 mi from New York city center</p>
              </div>
              <div class="flex flex-col gap-1 w-3/4">
                <h1 class="font-semibold text-gray-600 text-lg">Included for Free</h1>
                <div class="font-semibold text-gray-600 text-md">
                  <font-awesome-icon :icon="['fas', 'check']" class="pr-2" /> Automatic transmission
                </div>
                <div class="font-semibold text-gray-600 text-md"><font-awesome-icon :icon="['fas', 'check']" class="pr-2" /> Theft Protection</div>
                <div class="font-semibold text-gray-600 text-md">
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
<script setup></script>
