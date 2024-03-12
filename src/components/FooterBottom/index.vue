<script setup>
import card1 from "@/assets/img/card-1.png";
import card2 from "@/assets/img/card-2.png";
import card3 from "@/assets/img/card-3.png";
import card4 from "@/assets/img/card-4.png";
</script>
<template>
  <div class="bg-slate-900">
    <div class="max-w-screen-xl mx-auto mt-5 p-4 md:p-0 md:px-4 lg:p-0 lg:px-4 md:mt-20 lg:mt-20">
      <div class="py-3">
        <div class="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
          <span class="text-md text-gray-500 sm:text-center">© 2024 <a href="/" class="hover:underline">Dimhum</a>. All Rights Reserved. </span>
          <ul class="flex flex-wrap items-center gap-2 mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
              <img :src="card1" alt="" srcset="" />
            </li>
            <li>
              <img :src="card2" alt="" srcset="" />
            </li>
            <li>
              <img :src="card3" alt="" srcset="" />
            </li>
            <li>
              <img :src="card4" alt="" srcset="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
