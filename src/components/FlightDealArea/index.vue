<script setup>
import shape1 from "@/assets/img/shape_1.png";
import shape2 from "@/assets/img/shape-2.png";
import flight1 from "@/assets/flight/flt_1.jpg";
import flight2 from "@/assets/flight/flt_2.jpg";
import flight3 from "@/assets/flight/flt_3.jpg";
import flight4 from "@/assets/flight/flt_4.jpg";
import flight5 from "@/assets/flight/flt_5.jpg";
import flight6 from "@/assets/flight/flt_6.jpg";
import cat1 from "@/assets/cat_1.jpg";
// import shape2 from "@/assets/img/shape_2.png";
</script>
<template>
  <div class="pb-60 flex felx-col items-center justify-center relative">
    <div class="absolute z-1 top-[300px] left-0 w-[827px] h-[836px] bg-white bg-cover bg-center" :style="{ backgroundImage: `url(${shape1})` }"></div>
    <div
      class="absolute z-2 top-[350px] right-[-40px] md:right-[30px] w-[750px] h-[750px] md:w-[500px] md:h-[500px] bg-white bg-cover bg-center"
      :style="{ backgroundImage: `url(${shape2})` }"
    ></div>
    <div class="max-w-screen-xl w-full mx-auto py-2">
      <div class="mb-28">
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-xl font-normal uppercase text-[#496cfe]" data-aos="fade-up" data-aos-duration="1000">EXPLORE TOP DESTINATIONS</h1>
          <h1 class="text-7xl font-bold mb-5 mt-2 text-black" data-aos="fade-up" data-aos-duration="1000">Top Round-Trip Flight Deals</h1>
          <p class="text-center" data-aos="fade-up" data-aos-duration="1000">
            Get inspired, find the best deals and start an unforgettable journeya.Looking for the best flight deals for your next trip? Find the top
            <br />
            Emigrar deals that are updated daily to book the cheapest flight up to 55% off the average price.
          </p>
        </div>
      </div>

      <div class="w-full md:w-10/12 lg:w-8/12" data-aos="fade-up" data-aos-duration="1000">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-8 lg:gap-8 px-4 py-8 lg:py-8">
          <div class="relative bg-cover bg-center h-[250px] rounded-xl" :style="{ backgroundImage: `url(${flight1})` }">
            <div
              class="p-6 opacity-75 rounded-xl absolute z-40 top-0 left-0 w-full h-full"
              style="background-image: linear-gradient(-8deg, #9932f5 0%, #4933f1 53%, #4950f8 70%, #496cfe 100%)"
            >
              <div class="trip-to uppercase text-white mb-14">
                <p class="text-[17px] font-normal text-white">Trip to</p>
                <h1 class="text-3xl font-bold text-white">Peru</h1>
              </div>
              <div class="trip-from uppercase">
                <p class="text-[17px] font-normal text-white">7 Days</p>
                <h1 class="text-3xl font-bold text-white">$4570</h1>
              </div>
            </div>
          </div>
          <div class="relative bg-cover bg-center h-[250px] rounded-xl" :style="{ backgroundImage: `url(${flight2})` }">
            <div
              class="p-6 opacity-75 rounded-xl absolute z-40 top-0 left-0 w-full h-full"
              style="background-image: linear-gradient(0deg, #fe5c76 0%, #ffaa57 100%)"
            >
              <div class="trip-to uppercase text-white mb-14">
                <p class="text-[17px] font-normal text-white">Trip to</p>
                <h1 class="text-3xl font-bold text-white">Peru</h1>
              </div>
              <div class="trip-from uppercase">
                <p class="text-[17px] font-normal text-white">7 Days</p>
                <h1 class="text-3xl font-bold text-white">$4570</h1>
              </div>
            </div>
          </div>
          <div class="relative bg-cover bg-center h-[250px] rounded-xl" :style="{ backgroundImage: `url(${flight3})` }">
            <div
              class="p-6 opacity-75 rounded-xl absolute z-40 top-0 left-0 w-full h-full"
              style="background-image: linear-gradient(-8deg, #da309b 0%, #b460cd 37%, #8d90ff 100%)"
            >
              <div class="trip-to uppercase text-white mb-14">
                <p class="text-[17px] font-normal text-white">Trip to</p>
                <h1 class="text-3xl font-bold text-white">Peru</h1>
              </div>
              <div class="trip-from uppercase">
                <p class="text-[17px] font-normal text-white">7 Days</p>
                <h1 class="text-3xl font-bold text-white">$4570</h1>
              </div>
            </div>
          </div>
          <div class="relative bg-cover bg-center h-[250px] rounded-xl" :style="{ backgroundImage: `url(${flight4})` }">
            <div
              class="p-6 opacity-75 rounded-xl absolute z-40 top-0 left-0 w-full h-full"
              style="background-image: linear-gradient(-8deg, #034083 0%, #2e69ff 0%, #437afd 37%, #588afb 100%)"
            >
              <div class="trip-to uppercase text-white mb-14">
                <p class="text-[17px] font-normal text-white">Trip to</p>
                <h1 class="text-3xl font-bold text-white">Peru</h1>
              </div>
              <div class="trip-from uppercase">
                <p class="text-[17px] font-normal text-white">7 Days</p>
                <h1 class="text-3xl font-bold text-white">$4570</h1>
              </div>
            </div>
          </div>
          <div class="relative bg-cover bg-center h-[250px] rounded-xl" :style="{ backgroundImage: `url(${flight5})` }">
            <div
              class="p-6 opacity-75 rounded-xl absolute z-40 top-0 left-0 w-full h-full"
              style="background-image: linear-gradient(0deg, #ffaa57 0%, #fe5c76 100%)"
            >
              <div class="trip-to uppercase text-white mb-14">
                <p class="text-[17px] font-normal text-white">Trip to</p>
                <h1 class="text-3xl font-bold text-white">Peru</h1>
              </div>
              <div class="trip-from uppercase">
                <p class="text-[17px] font-normal text-white">7 Days</p>
                <h1 class="text-3xl font-bold text-white">$4570</h1>
              </div>
            </div>
          </div>
          <div class="relative bg-cover bg-center h-[250px] rounded-xl" :style="{ backgroundImage: `url(${flight6})` }">
            <div
              class="p-6 opacity-75 rounded-xl absolute z-40 top-0 left-0 w-full h-full"
              style="background-image: linear-gradient(0deg, #01dfb8 0%, #49e541 100%)"
            >
              <div class="trip-to uppercase text-white mb-14">
                <p class="text-[17px] font-normal text-white">Trip to</p>
                <h1 class="text-3xl font-bold text-white">Peru</h1>
              </div>
              <div class="trip-from uppercase">
                <p class="text-[17px] font-normal text-white">7 Days</p>
                <h1 class="text-3xl font-bold text-white">$4570</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center mb-28">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-lg px-5 py-2.5 uppercase text-center"
          >
            Browse More
          </button>
        </div>
      </div>
      <div
        class="bg-cover bg-center h-full rounded-xl pt-30"
        data-aos="fade-up"
        data-aos-duration="1000"
        :style="{ backgroundImage: `url(${cat1})` }"
      >
        <div class="flex justify-between items-center p-12">
          <div class="text-white">
            <h1 class="text-lg"><span class="font-bold text-2xl">Not sure where to go next?</span> We're here to inspire you</h1>
            <p class="text-xs font-normal pt-2">Send us an email and someone on our team will be in touch with you!</p>
          </div>
          <div>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-lg px-10 py-2.5 uppercase text-center"
            >
              Plan your next trip
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
