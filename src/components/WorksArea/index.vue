<script setup>
import emigrServiceBG from "@/assets/dotbg.png";
import s_icon_1 from "@/assets/service-icon/s_icon_4.png";
import s_icon_2 from "@/assets/service-icon/s_icon_5.png";
import s_icon_3 from "@/assets/service-icon/s_icon_6.png";
import s_icon_4 from "@/assets/service-icon/s_icon_7.png";
</script>
<template>
  <!-- <div class="bg-white bg-cover bg-center h-[730px] flex felx-col items-center justify-center" :style="{ backgroundImage: `url(${emigrServiceBG})` }"> -->
  <div class="max-w-screen-xl mx-auto py-2">
    <div>
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-xl font-normal uppercase text-[#496cfe]" data-aos="fade-up" data-aos-duration="1000">HERE'S HOW IT WORKS</h1>
        <h1 class="text-7xl font-bold mb-5 mt-2 text-black" data-aos="fade-up" data-aos-duration="1000">Getting Started? It’s Simple</h1>
        <p class="text-center" data-aos="fade-up" data-aos-duration="1000">
          Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are. And there is no one package that <br />
          fits all. That's why we offer customized travel packages.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 md:gap-x-8 lg:gap-x-8 px-4 py-8 lg:py-8">
        <div
          class="bg-[#fff] flex flex-col justify-center items-center h-[350px] mb-9 px-6 rounded-3xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <img :src="s_icon_1" alt="" srcset="" class="mb-5 w-[130px]" />
          <div>
            <h1 class="text-[1.5rem] text-[#000] font-bold text-center mb-3">Search</h1>
            <p class="text-center text-[14px] leading-6">Over 1,200,000 Hotels, Apartments and Hostels</p>
          </div>
        </div>
        <div
          class="bg-[#fff] flex flex-col justify-center items-center h-[350px] mb-9 px-6 rounded-3xl"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <img :src="s_icon_2" alt="" srcset="" class="mb-5 w-[130px]" />
          <div>
            <h1 class="text-[1.5rem] text-[#000] font-bold text-center mb-3">Compare & Book</h1>
            <p class="text-center text-[14px] leading-6">By price, location, rating and more.</p>
          </div>
        </div>
        <div
          class="bg-[#fff] flex flex-col justify-center items-center h-[350px] mb-9 px-6 rounded-3xl"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <img :src="s_icon_3" alt="" srcset="" class="mb-5 w-[130px]" />
          <div>
            <h1 class="text-[1.5rem] text-[#000] font-bold text-center mb-3">Get travel insurance</h1>
            <p class="text-center text-[14px] leading-6">Buy comprehensive cover for your next trips</p>
          </div>
        </div>
        <div
          class="bg-[#fff] flex flex-col justify-center items-center h-[350px] mb-9 px-6 rounded-3xl"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <img :src="s_icon_4" alt="" srcset="" class="mb-5 w-[130px]" />
          <div>
            <h1 class="text-[1.5rem] text-[#000] font-bold text-center mb-3">Book a room</h1>
            <p class="text-center text-[14px] leading-6">By finding the best price for your ideal hotel.</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <button
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-lg px-5 py-2.5 uppercase text-center"
        >
          Tour The World
        </button>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<style></style>
