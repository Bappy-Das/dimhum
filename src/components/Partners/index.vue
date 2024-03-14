<script setup>
import brand1 from "@/assets/img/brands/brands-1.png";
import brand2 from "@/assets/img/brands/brands-2.png";
import brand3 from "@/assets/img/brands/brands-3.png";
import brand4 from "@/assets/img/brands/brands-4.png";
</script>
<template>
  <div class="bg-white mb-9 bg-cover bg-center min-h-auto">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-1 px-4 py-8 lg:py-8">
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-xl font-normal uppercase text-[#496cfe]" data-aos="fade-up" data-aos-duration="1000">TAKE A LOOK AT OUR</h1>
          <h1 class="text-7xl font-bold mb-5 mt-2 text-black" data-aos="fade-up" data-aos-duration="1000">Trusted Partners</h1>
          <p class="text-center" data-aos="fade-up" data-aos-duration="1000">
            We are committed to being the best partner.Emigrar believes in being your trusted partner and earning that trust <br />
            through confidence and performance in service and support.
          </p>
          <div class="w-9/12 mt-12" data-aos="fade-up" data-aos-duration="1000">
            <div class="grid grid-cols-4 place-items-stretch px-4 py-6 lg:py-8">
              <div class="flex justify-center items-center py-[40px] px-[30px] border-r-2 border-b-2 border-[#cdd9e6]">
                <img
                  :src="brand1"
                  class="w-4/5 hover:translate-y-[-5px] hover:skew-x-6 hover:blur-[1px] transition duration-300 cursor-pointer"
                  alt="brand1"
                  srcset=""
                />
              </div>
              <div class="flex justify-center items-center py-[40px] px-[30px] border-r-2 border-b-2 border-[#cdd9e6]">
                <img
                  :src="brand2"
                  alt="brand1"
                  class="w-4/5 hover:translate-y-[-5px] hover:skew-x-6 hover:blur-[1px] transition duration-300 cursor-pointer"
                  srcset=""
                />
              </div>
              <div class="flex justify-center items-center py-[40px] px-[30px] border-r-2 border-b-2 border-[#cdd9e6]">
                <img
                  :src="brand3"
                  alt="brand1"
                  class="w-4/5 hover:translate-y-[-5px] hover:skew-x-6 hover:blur-[1px] transition duration-300 cursor-pointer"
                  srcset=""
                />
              </div>
              <div class="flex justify-center items-center py-[40px] px-[30px] border-b-2 border-[#cdd9e6]">
                <img
                  :src="brand4"
                  alt="brand1"
                  class="w-4/5 hover:translate-y-[-5px] hover:skew-x-6 hover:blur-[1px] transition duration-300 cursor-pointer"
                  srcset=""
                />
              </div>
              <div class="flex justify-center items-center py-[40px] px-[30px] border-r-2 border-[#cdd9e6]">
                <img
                  :src="brand4"
                  alt="brand1"
                  class="w-4/5 hover:translate-y-[-5px] hover:skew-x-6 hover:blur-[1px] transition duration-300 cursor-pointer"
                  srcset=""
                />
              </div>
              <div class="flex justify-center items-center py-[40px] px-[30px] border-r-2 border-[#cdd9e6]">
                <img
                  :src="brand3"
                  alt="brand1"
                  class="w-4/5 hover:translate-y-[-5px] hover:skew-x-6 hover:blur-[1px] transition duration-300 cursor-pointer"
                  srcset=""
                />
              </div>
              <div class="flex justify-center items-center py-[40px] px-[30px] border-r-2 border-[#cdd9e6]">
                <img
                  :src="brand2"
                  alt="brand1"
                  class="w-4/5 hover:translate-y-[-5px] hover:skew-x-6 hover:blur-[1px] transition duration-300 cursor-pointer"
                  srcset=""
                />
              </div>
              <div class="flex justify-center items-center py-[40px] px-[30px]">
                <img
                  :src="brand1"
                  alt="brand1"
                  class="w-4/5 hover:translate-y-[-5px] hover:skew-x-6 hover:blur-[1px] transition duration-300 cursor-pointer"
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
