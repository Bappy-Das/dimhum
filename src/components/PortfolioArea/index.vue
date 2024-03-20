<script setup>
import portfolioBG from "@/assets/img/portfoliobg.png";
import portfolio1 from "@/assets/portfolio/port-1.jpg";
import portfolio2 from "@/assets/portfolio/port-2.jpg";
import portfolio3 from "@/assets/portfolio/port-3.jpg";
import portfolio4 from "@/assets/portfolio/port-4.jpg";
import portfolio5 from "@/assets/portfolio/port-5.jpg";
import portfolio6 from "@/assets/portfolio/port-6.jpg";
</script>
<template>
  <div
    class="md:bg-cover md:bg-center lg:bg-cover lg:bg-center md:py-60 lg:py-60 flex felx-col items-center justify-center"
    :style="{ backgroundImage: `url(${portfolioBG})` }"
  >
    <div
      class="max-w-screen-xl w-full mx-auto py-10 md:py-2 lg:py-2 bg-gradient-to-r from-[#9932f5] from-0% via-[#4950f8] via-60% to-[#496cfe] to-100% md:bg-none lg:bg-none"
    >
      <div>
        <div class="flex flex-col justify-center items-center p-4">
          <h1 class="text-xl font-normal uppercase text-white" data-aos="fade-up" data-aos-duration="1000">TAKE A LOOK AT OUR</h1>
          <h1 class="text-4xl md:text-7xl lg:text-7xl font-bold text-white mb-5 mt-2 text-center" data-aos="fade-up" data-aos-duration="1000">
            Recommended Hotels
          </h1>
          <p class="text-center text-white text-sm md:text-xl" data-aos="fade-up" data-aos-duration="1000">
            We've made a list of suggested activities based on your interests.Browse through our most popular <br />
            Hotels!Our Featured Tours can help you find the trip that's perfect for you!.
          </p>
          <!-- <div class="mt-16 flex justify-center items-center gap-4"> -->
          <div class="flex justify-center items-center">
            <div class="mt-16 block grid-rows-2 place-items-center gap-4 md:grid-rows-1 lg:grid-rows-1">
              <button
                type="button"
                class="text-white bg-gradient-to-br from-[#ffaa57] to-[#fe5c76] hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-7 py-2 md:py-4 lg:py-4 m-1 uppercase text-center"
              >
                New York
              </button>
              <button
                type="button"
                class="text-white bg-transparent border border-[#ffffff33] from-[#ffaa57] to-[#fe5c76] hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-7 py-2 md:py-4 lg:py-4 m-1 uppercase text-center"
              >
                London
              </button>
              <button
                type="button"
                class="text-white bg-transparent border border-[#ffffff33] from-[#ffaa57] to-[#fe5c76] hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-7 py-2 md:py-4 lg:py-4 m-1 uppercase text-center"
              >
                paris
              </button>
              <button
                type="button"
                class="text-white bg-transparent border border-[#ffffff33] from-[#ffaa57] to-[#fe5c76] hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-7 py-2 md:py-4 lg:py-4 m-1 uppercase text-center"
              >
                hong kong
              </button>
              <button
                type="button"
                class="text-white bg-transparent border border-[#ffffff33] from-[#ffaa57] to-[#fe5c76] hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-7 py-2 md:py-4 lg:py-4 m-1 uppercase text-center"
              >
                bangkok
              </button>
              <button
                type="button"
                class="text-white bg-transparent border border-[#ffffff33] from-[#ffaa57] to-[#fe5c76] hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-7 py-2 md:py-4 lg:py-4 m-1 uppercase text-center"
              >
                Singapore
              </button>
              <button
                type="button"
                class="text-white bg-transparent border border-[#ffffff33] from-[#ffaa57] to-[#fe5c76] hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-7 py-2 md:py-4 lg:py-4 m-1 uppercase text-center"
              >
                tokyo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 md:gap-8 lg:gap-8 px-4 py-8 lg:py-8"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div
          class="relative border-[#ffffff66] border flex flex-col justify-end items-center h-[350px] px-6 rounded-xl bg-white bg-cover bg-center opacity-80 hover:opacity-100 transition-all duration-300 felx-col"
          :style="{ backgroundImage: `url(${portfolio1})` }"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div
            class="absolute top-0 left-0 h-[80px] w-[80px] bg-gradient-to-r from-[#ffaa57] to-[#fe5c76] flex flex-col justify-center items-center rounded-tl-lg rounded-br-lg"
          >
            <p class="text-white">from</p>
            <p class="text-white"><sup>$</sup> <span class="text-3xl font-semibold">239</span></p>
          </div>

          <div class="mb-5">
            <h1 class="text-[1.2rem] text-white font-bold text-center mb-3">The Millenium Hilton New York</h1>
            <div class="flex justify-center items-center text-white">
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['far', 'star']" class="fa-md" />
              <span class="text-sm">4.5 / 5 (473 reviews)</span>
            </div>
          </div>
        </div>
        <div
          class="relative border-[#ffffff66] border flex flex-col justify-end items-center h-[350px] px-6 rounded-xl bg-white bg-cover bg-center opacity-80 hover:opacity-100 transition-all duration-300 felx-col"
          :style="{ backgroundImage: `url(${portfolio2})` }"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div
            class="absolute top-0 left-0 h-[80px] w-[80px] bg-gradient-to-r from-[#ffaa57] to-[#fe5c76] flex flex-col justify-center items-center rounded-tl-lg rounded-br-lg"
          >
            <p class="text-white">from</p>
            <p class="text-white"><sup>$</sup> <span class="text-3xl font-semibold">239</span></p>
          </div>

          <div class="mb-5">
            <h1 class="text-[1.2rem] text-white font-bold text-center mb-3">The Millenium Hilton New York</h1>
            <div class="flex justify-center items-center text-white">
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['far', 'star']" class="fa-md" />
              <span class="text-sm">4.5 / 5 (473 reviews)</span>
            </div>
          </div>
        </div>
        <div
          class="relative border-[#ffffff66] border flex flex-col justify-end items-center h-[350px] px-6 rounded-xl bg-white bg-cover bg-center opacity-80 hover:opacity-100 transition-all duration-300 felx-col"
          :style="{ backgroundImage: `url(${portfolio3})` }"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div
            class="absolute top-0 left-0 h-[80px] w-[80px] bg-gradient-to-r from-[#ffaa57] to-[#fe5c76] flex flex-col justify-center items-center rounded-tl-lg rounded-br-lg"
          >
            <p class="text-white">from</p>
            <p class="text-white"><sup>$</sup> <span class="text-3xl font-semibold">239</span></p>
          </div>

          <div class="mb-5">
            <h1 class="text-[1.2rem] text-white font-bold text-center mb-3">The Millenium Hilton New York</h1>
            <div class="flex justify-center items-center text-white">
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['far', 'star']" class="fa-md" />
              <span class="text-sm">4.5 / 5 (473 reviews)</span>
            </div>
          </div>
        </div>
        <div
          class="relative border-[#ffffff66] border flex flex-col justify-end items-center h-[350px] px-6 rounded-xl bg-white bg-cover bg-center opacity-80 hover:opacity-100 transition-all duration-300 felx-col"
          :style="{ backgroundImage: `url(${portfolio4})` }"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div
            class="absolute top-0 left-0 h-[80px] w-[80px] bg-gradient-to-r from-[#ffaa57] to-[#fe5c76] flex flex-col justify-center items-center rounded-tl-lg rounded-br-lg"
          >
            <p class="text-white">from</p>
            <p class="text-white"><sup>$</sup> <span class="text-3xl font-semibold">239</span></p>
          </div>

          <div class="mb-5">
            <h1 class="text-[1.2rem] text-white font-bold text-center mb-3">The Millenium Hilton New York</h1>
            <div class="flex justify-center items-center text-white">
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['far', 'star']" class="fa-md" />
              <span class="text-sm">4.5 / 5 (473 reviews)</span>
            </div>
          </div>
        </div>
        <div
          class="relative border-[#ffffff66] border flex flex-col justify-end items-center h-[350px] px-6 rounded-xl bg-white bg-cover bg-center opacity-80 hover:opacity-100 transition-all duration-300 felx-col"
          :style="{ backgroundImage: `url(${portfolio5})` }"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div
            class="absolute top-0 left-0 h-[80px] w-[80px] bg-gradient-to-r from-[#ffaa57] to-[#fe5c76] flex flex-col justify-center items-center rounded-tl-lg rounded-br-lg"
          >
            <p class="text-white">from</p>
            <p class="text-white"><sup>$</sup> <span class="text-3xl font-semibold">239</span></p>
          </div>

          <div class="mb-5">
            <h1 class="text-[1.2rem] text-white font-bold text-center mb-3">The Millenium Hilton New York</h1>
            <div class="flex justify-center items-center text-white">
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['far', 'star']" class="fa-md" />
              <span class="text-sm">4.5 / 5 (473 reviews)</span>
            </div>
          </div>
        </div>
        <div
          class="relative border-[#ffffff66] border flex flex-col justify-end items-center h-[350px] px-6 rounded-xl bg-white bg-cover bg-center opacity-80 hover:opacity-100 transition-all duration-300 felx-col"
          :style="{ backgroundImage: `url(${portfolio6})` }"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div
            class="absolute top-0 left-0 h-[80px] w-[80px] bg-gradient-to-r from-[#ffaa57] to-[#fe5c76] flex flex-col justify-center items-center rounded-tl-lg rounded-br-lg"
          >
            <p class="text-white">from</p>
            <p class="text-white"><sup>$</sup> <span class="text-3xl font-semibold">239</span></p>
          </div>

          <div class="mb-5">
            <h1 class="text-[1.2rem] text-white font-bold text-center mb-3">The Millenium Hilton New York</h1>
            <div class="flex justify-center items-center text-white">
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-md" />
              <font-awesome-icon :icon="['far', 'star']" class="fa-md" />
              <span class="text-sm">4.5 / 5 (473 reviews)</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center mt-10">
        <button
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-lg px-5 py-2.5 uppercase text-center"
        >
          Browse More
        </button>
      </div>
    </div>
  </div>
</template>
