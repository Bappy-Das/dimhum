<script setup>
import Topheader from "@/components/TopHeader/index.vue";
import logo from "@/assets/logo-removebg-preview.png";
import { ref } from "vue";
const changeHeader = ref(false);
const isOpen = ref(false);
const onChangeHeader = () => {
  if (window.scrollY >= 140) {
    changeHeader.value = true;
  } else {
    changeHeader.value = false;
  }
};
window.addEventListener("scroll", onChangeHeader);

const handleClick = () => {
  isOpen.value = !isOpen.value;
  console.log("isOpen is now:", isOpen.value);
};
</script>
<!-- isDrawerOpen ? "-translate-y-0" : "translate-y-full" -->

<template>
  <!-- <nav :class="[changeHeader ? ' border-gray-200 absolute w-full p-2 bg-transparent' : 'border-gray-200 absolute w-full p-3 bg-transparent']"> -->
  <nav :class="[changeHeader ? 'fixed bg-white  z-50 w-full' : 'overflow-hidden']">
    <div
      class="border-gray-200 absolute w-full"
      :class="[changeHeader ? 'p-0 bg-white top-0 left-0 right-0  translate-y-0 transition-all duration-700 shadow-xl w-full' : 'bg-transparent']"
    >
      <Topheader></Topheader>
      <div class="md:max-w-screen-xl lg:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto" :class="[changeHeader ? 'p-4 ' : 'p-4']">
        <div class="w-52">
          <router-link :to="{ path: '/' }">
            <img :src="logo" alt="" srcset="" />
          </router-link>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center bg-gray-100 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          @click="handleClick"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-normal flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
          >
            <li
              :class="[
                changeHeader
                  ? 'block cursor-pointer text-lg py-2 px-3 text-gray-800 font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#007bff] md:hover:text-blue-300 md:p-0'
                  : 'block cursor-pointer text-lg py-2 px-3 text-gray-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#007bff] md:hover:text-blue-300 md:p-0',
              ]"
            >
              <router-link :to="{ path: '/' }"> Home </router-link>
            </li>
            <li
              :class="[
                changeHeader
                  ? 'block cursor-pointer text-lg py-2 px-3 text-gray-800 font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#007bff] md:hover:text-blue-300 md:p-0'
                  : 'block cursor-pointer text-lg py-2 px-3 text-gray-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#007bff] md:hover:text-blue-300 md:p-0',
              ]"
            >
              <router-link :to="{ path: '/flights' }"> Trip Package </router-link>
            </li>
            <li
              :class="[
                changeHeader
                  ? 'block cursor-pointer text-lg py-2 px-3 text-gray-800 font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#007bff] md:hover:text-blue-300 md:p-0'
                  : 'block cursor-pointer text-lg py-2 px-3 text-gray-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#007bff] md:hover:text-blue-300 md:p-0',
              ]"
            >
              <router-link :to="{ path: '/flights' }"> Service </router-link>
            </li>
            <li
              :class="[
                changeHeader
                  ? 'block cursor-pointer text-lg py-2 px-3 text-gray-800 font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#007bff] md:hover:text-blue-300 md:p-0'
                  : 'block cursor-pointer text-lg py-2 px-3 text-gray-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#007bff] md:hover:text-blue-300 md:p-0',
              ]"
            >
              <router-link :to="{ path: '/flights' }"> Blog </router-link>
            </li>
            <li>
              <button
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-xl px-8 py-4 uppercase text-center"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        <!-- mobile -->
        <div :class="[isOpen ? 'w-full block bg-white z-40 rounded-b-xl shadow-lg' : 'hidden']">
          <ul class="font-normal flex flex-col items-center p-4 rounded-lg rtl:space-x-reverse transition-all ease-in-out duration-300">
            <li
              class="block cursor-pointer text-lg py-2 px-3 text-gray-800 font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#007bff]"
            >
              Home
            </li>
            <li
              class="block cursor-pointer text-lg py-2 px-3 text-gray-800 font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#007bff]"
            >
              Trip Package
            </li>
            <li
              class="block cursor-pointer text-lg py-2 px-3 text-gray-800 font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#007bff]"
            >
              Service
            </li>
            <li
              class="block cursor-pointer text-lg py-2 px-3 text-gray-800 font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#007bff]"
            >
              Blog
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
