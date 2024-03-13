<script setup>
import counter_iocn_1 from "@/assets/counter-icon/counter_iocn_1.png";
import counter_iocn_2 from "@/assets/counter-icon/counter_iocn_2.png";
import counter_iocn_3 from "@/assets/counter-icon/counter_iocn_3.png";
</script>
<template>
  <div class="max-w-screen-xl mx-auto py-2 px-4">
    <div class="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 md:gap-x-8 lg:gap-x-8 px-4 py-8 lg:py-8">
      <div class="bg-[#eef2f4] p-5 rounded-md flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="0">
        <div class="w-1/3">
          <img :src="counter_iocn_1" alt="" srcset="" class="group-hover:translate-y-0" />
        </div>
        <div class="w-2/3">
          <h1 class="text-[20px] pb-3">Trusted Members</h1>
          <h1 class="text-[#496cfe] text-5xl font-bold">90,000+</h1>
        </div>
      </div>
      <div class="bg-[#eef2f4] p-5 rounded-md flex items-center" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="0">
        <div class="w-1/3">
          <img :src="counter_iocn_2" alt="" srcset="" />
        </div>
        <div class="w-2/3">
          <h1 class="text-[20px] pb-3">Trusted Members</h1>
          <h1 class="text-[#496cfe] text-5xl font-bold">200</h1>
        </div>
      </div>
      <div class="bg-[#eef2f4] p-5 rounded-md flex items-center" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" data-aos-offset="0">
        <div class="w-1/3">
          <img :src="counter_iocn_3" alt="" srcset="" />
        </div>
        <div class="w-2/3">
          <h1 class="text-[20px] pb-3">Trusted Members</h1>
          <h1 class="text-[#496cfe] text-5xl font-bold">80,000+</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
