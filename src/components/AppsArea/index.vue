<script setup>
import appBg from "@/assets/img/app_bg.png";
import shape3 from "@/assets/img/shape-3.png";
import mblApp from "@/assets/img/app-mbl.png";
</script>
<template>
  <div
    class="relative bg-white bg-cover h-[850px] bg-center py-60 flex felx-col items-center justify-center"
    :style="{ backgroundImage: `url(${appBg})` }"
  >
    <div
      class="absolute top-40 md:top-0 lg:top-0 left-[-2px] w-full md:w-1/3 lg:w-1/3 h-2/6 md:h-5/6 lg:h-5/6 bg-cover bg-center transform translate-z-0 -translate-y-4.21346 apps-parallax"
      :style="{ backgroundImage: `url(${shape3})` }"
    ></div>
    <div class="absolute top-[-80px] max-w-screen-xl mx-auto py-20 px-4 w-full">
      <div class="flex justify-center flex-col md:flex-row lg:flex-row items-center gap-2">
        <div class="md:w-5/12 lg:md:w-5/12 md:p-6 lg:p-6">
          <img :src="mblApp" class="w-full" alt="" srcset="" />
        </div>
        <div class="w-full md:w-7/12 lg:w-7/12">
          <div class="flex flex-col">
            <h1
              class="text-md text-start md:text-lg lg:text-lg font-bold md:font-normal lg:font-normal uppercase text-[#496cfe]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              ITINERARIES THAT IMPRESS.
            </h1>
            <h1 class="text-4xl md:text-7xl lg:text-7xl font-bold text-[#496cfe] mb-5 mt-2 text-start" data-aos="fade-up" data-aos-duration="1000">
              Download App
            </h1>
            <p class="text-start text-sm md:text-xl" data-aos="fade-up" data-aos-duration="1000">
              All your travel plans, in one place.You handle the booking.Access reservations, maps, and more on your favorite device!View trending
              destinations. Discover popular trips. Listen to your heart. Experience the world.Find or create your perfect trip. Meet fellow
              travellers. Experience different cultures. Create unforgettable memories.Keep up-to-date with active trips, view your favourites, visit
              previous adventures. Managing a trip has never been easier.
            </p>
            <p class="text-start text-sm md:text-xl mt-5 md:mt-16 lg:mt-16" data-aos="fade-up" data-aos-duration="1000">
              Download the Emigrar app and join our ever-growing community of passionate travellers. Find lasting friendships, discover new adventures
              and create unforgettable memories.
            </p>
            <div class="flex flex-col md:flex-row lg:flex-row gap-2 md:gap-7 lg:gap-7 pt-10">
              <button
                type="button"
                class="text-white w-48 flex justify-between items-center gap-3 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 rounded-xl px-7 py-1.5 uppercase"
              >
                <div>
                  <font-awesome-icon :icon="['fab', 'google-play']" size="2xl" />
                </div>
                <div class="flex flex-col">
                  <span class="font-semibold">Get it on</span>
                  <span class="font-bold text-lg">Playtore</span>
                </div>
              </button>
              <button
                type="button"
                class="text-white w-48 flex justify-between items-center gap-3 bg-gradient-to-br from-[#01dfb8] to-[#49e541] hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 rounded-xl px-7 py-1.5 uppercase"
              >
                <div>
                  <font-awesome-icon :icon="['fab', 'apple']" size="2xl" />
                </div>
                <div class="flex flex-col">
                  <span class="font-semibold">Get it on</span>
                  <span class="font-bold text-lg">appstore</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.apps-parallax {
  /* -webkit-transform: translateZ(0px) translateY(-0.399882px);
  transform: translateZ(0px) translateY(-0.399882px); */
}
</style>
