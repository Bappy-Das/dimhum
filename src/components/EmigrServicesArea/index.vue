<script setup>
import emigrServiceBG from "@/assets/dotbg.png";
import s_icon_1 from "@/assets/service-icon/s_icon_1.png";
import s_icon_2 from "@/assets/service-icon/s_icon_2.png";
import s_icon_3 from "@/assets/service-icon/s_icon_3.png";
</script>
<template>
  <div
    class="bg-white bg-cover bg-center md:h-[730px] lg:h-[730px] flex felx-col items-center justify-center"
    :style="{ backgroundImage: `url(${emigrServiceBG})` }"
  >
    <div class="max-w-screen-xl mx-auto py-2">
      <div>
        <div class="flex flex-col justify-center items-center p-4">
          <h1
            class="text-md md:text-lg lg:text-lg font-bold md:font-normal lg:font-normal uppercase text-[#496cfe]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            WHY CHOOSE OUR TRAVEL AGENCY?
          </h1>
          <h1 class="text-4xl md:text-7xl lg:text-7xl font-bold mb-5 mt-2 text-black" data-aos="fade-up" data-aos-duration="1000">Our Core Values</h1>
          <p class="text-center text-sm md:text-xl" data-aos="fade-up" data-aos-duration="1000">
            Our thoughtful team of knowledgeable experts are here to take care of every need, from the second you <br />
            contact us to when you return
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-x-8 lg:gap-x-8 px-4 py-8 lg:py-8">
          <div
            class="bg-[#fff] shadow-lg hover:shadow-2xl transition-shadow duration-700 ease-in-out flex flex-col justify-center items-center h-[350px] mb-9 px-6 rounded-3xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <img :src="s_icon_1" alt="" srcset="" class="mb-5 w-1/3" />
            <div>
              <h1 class="text-[1.5rem] text-[#000] font-bold text-center mb-3">Accommodation</h1>
              <p class="text-center text-[14px] leading-6">
                No matter where you are travelling, Emigrar is here to help you get the best deals in Hotels around the world.
              </p>
            </div>
          </div>
          <div
            class="bg-[#fff] shadow-lg hover:shadow-2xl transition-shadow duration-700 ease-in-out flex flex-col justify-center items-center h-[350px] mb-9 px-6 rounded-3xl"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <img :src="s_icon_2" alt="" srcset="" class="mb-5 w-1/3" />
            <div>
              <h1 class="text-[1.5rem] text-[#000] font-bold text-center mb-3">Transportation</h1>
              <p class="text-center text-[14px] leading-6">
                Whether you are travelling through Air, Sea or Land, Emigrar can arrange transportation according to.
              </p>
            </div>
          </div>
          <div
            class="bg-[#fff] shadow-lg hover:shadow-2xl transition-shadow duration-700 ease-in-out flex flex-col justify-center items-center h-[350px] mb-9 px-6 rounded-3xl"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <img :src="s_icon_3" alt="" srcset="" class="mb-5 w-1/3" />
            <div>
              <h1 class="text-[1.5rem] text-[#000] font-bold text-center mb-3">Expert Trip Planning</h1>
              <p class="text-center text-[14px] leading-6">
                Our Talented and Expert Trip Planning Team can make itinerary that suits our clients the best. We will make your travel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
