<script setup>
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import bgshapes from "@/assets/img/bgshapes_1.png";
import dealBg from "@/assets/img/deal-bg.jpg";
const slides = Array.from({ length: 10 }, (_, i) => i + 1);
</script>

<template>
  <div
    class="relative bg-[#4934f1] md:bg-white lg:bg-white bg-cover bg-center pb-10 md:mb-20 lg:mb-20 md:h-[913px] lg:h-[913px]"
    :style="{ backgroundImage: `url(${bgshapes})` }"
  >
    <!-- <div class="max-w-screen-xl mx-auto py-2 px-4"> -->
    <Carousel>
      <Slide v-for="slide in slides" :key="slide">
        <div class="carousel__item">
          <div class="flex flex-col md:flex-row lg:flex-row">
            <div
              class="relative ml-4 md:ml-0 lg:ml-0 mt-28 w-11/12 md:w-5/12 lg:w-5/12 bg-cover bg-center h-[642px] rounded-xl md:rounded-none md:rounded-r-xl lg:rounded-r-xl"
              :style="{ backgroundImage: `url(${dealBg})` }"
            >
              <div class="flex flex-col justify-end h-full w-full p-4 md:px-10 lg:px-10 md:pb-[70px] lg:pb-[70px]">
                <div class="text-md md:text-xl lg:text-xl text-white font-bold text-center md:text-start lg:text-start">
                  14 Day Classic Tour Of Thailand & Beaches
                </div>
                <p class="text-sm text-white font-normal text-center md:text-start lg:text-start">
                  Grab a promo code for extra savings up to 75% on discounted hotels!
                </p>
              </div>
              <!-- <div class="custom-navigation">
                <Navigation />
              </div> -->

              <!-- for custom -->
            </div>
            <div class="w-full md:w-7/12 lg:w-7/12 md:px-6 lg:px-6">
              <div class="flex flex-col justify-start items-start p-4">
                <div
                  class="text-md md:text-lg lg:text-lg md:font-normal lg:font-normal text-xl text-white uppercase font-bold mt-5 md:mt-24 lg:mt-24 pb-5"
                >
                  TAKE A LOOK AT OUR
                </div>
                <h1 class="text-4xl md:text-6xl lg:text-6xl md:mt-2 lg:mt-2 text-start md:text-center lg:text-center text-white font-bold mb-5">
                  Today's Top Deals
                </h1>
                <p class="text-sm text-white font-normal mb-2">Find great experiences, trips, and activities at fantastic prices around the globe.</p>
                <div class="flex flex-col justify-center items-center border border-dotted rounded-sm my-5 p-5 px-8">
                  <p class="blockquete text-sm text-white font-normal">"EXCELLENT"</p>
                  <div class="flex justify-center items-center gap-2 text-[14px] font-normal">
                    <div class="">
                      <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 text-[14px]" />
                      <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 text-[14px]" />
                      <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 text-[14px]" />
                      <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 text-[14px]" />
                      <font-awesome-icon :icon="['far', 'star']" class="text-[14px] text-white" />
                    </div>
                    <span class="text-[14px] font-normal text-white">of 205 Reviews</span>
                  </div>
                  <p class="text-[12px] font-normal text-white">Reviewed by Kim - Denmark</p>
                </div>
                <div class="text-xl md:text-2xl lg:text-2xl font-bold text-white my-2 md:my-6 lg:my-6">Thailand Tours and Holidays 2018/2019</div>
                <p class="text-[14px] text-white font-normal my-2 leading-7 text-wrap text-start w-full md:w-8/12 lg:w-8/12">
                  Thailand is the perfect destination for those who love to spend time outdoors. You can soak up the sunshine on the beautiful beaches
                  of Phuket, or head to the North of the country to Chiang Mai for adventure and outdoor activities like water rafting and trekking.
                  Of course, not to be missed is Bangkok, where you can tour its floating markets or lavish Grand Palace.
                </p>
                <div class="flex flex-col md:flex-row justify-start md:items-center lg:items-center gap-5 mt-5">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm md:text-xl lg:text-xl px-4 md:px-8 lg:px-8 py-3 uppercase text-center"
                  >
                    Read More
                  </button>
                  <button
                    type="button"
                    class="text-white bg-transparent border hover:border-transparent from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm md:text-base lg:text-base px-6 py-3 capitalize text-center transition-all duration-300"
                  >
                    Help Me plan my trip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
    <div class="custom-nav">
      <div class="prev">
        <font-awesome-icon :icon="['fas', 'arrow-left-long']" class="text-[20px]" />
      </div>
      <div class="next">
        <font-awesome-icon :icon="['fas', 'arrow-right-long']" class="text-[20px]" />
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  gap: 20px;
}

.carousel__slide {
  padding-top: 15px;
}
.custom-navigation {
  position: absolute;
  bottom: -30px;
  left: 15%;
  right: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  width: 600px;
}
.carousel__prev,
.carousel__next {
  color: black !important;
  box-sizing: content-box;
  height: 65px !important;
  width: 65px !important;
  border-radius: 50%;
  background-color: white !important;
  /* border: 5px solid white; */
}
.carousel__prev {
  position: absolute;
  left: 70%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.carousel__next {
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

/* custom */
.custom-nav {
  position: absolute;
  bottom: 150px;
  left: 32%;
  display: flex;
  justify-content: end;
  gap: 20px;
}
.prev,
.next {
  color: black !important;
  cursor: pointer !important;
  box-sizing: content-box;
  height: 65px !important;
  width: 65px !important;
  border-radius: 50%;
  background-color: white !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

@media only screen and (max-width: 600px) {
  .custom-navigation {
    position: absolute;
    bottom: -875px;
    left: -330px;
    right: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    /* width: 300px; */
  }
  .custom-nav {
    position: absolute;
    bottom: -30px;
    left: 32%;
    display: flex;
    justify-content: end;
    gap: 20px;
  }
}
</style>
