<script setup>
import notfound from "@/assets/img/404.png";
import Breadcump from "@/components/Breadcump/index.vue";

// const componentName = "Example Component";
const componentData = [
  {
    pageName: "Home",
    path: "/",
    icon: "",
  },
  {
    pageName: "Error",
    path: "/",
    icon: "",
  },
];
</script>
<template>
  <Breadcump title="Error" :data-array="componentData"></Breadcump>
  <div class="bg-white flex flex-col items-center my-48">
    <div class="max-w-xs">
      <img :src="notfound" alt="Your Image" class="w-full h-auto" />
    </div>
    <h1 class="text-xl md:text-3xl lg:text-4xl font-bold py-5">Oops... It looks like you're lost !</h1>
    <p class="font-bold pb-5">The page you were looking for doesn't exist.</p>
    <button
      type="button"
      class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl text-xl px-8 py-2.5 text-center me-2 mb-2"
    >
      Go Back
    </button>
  </div>
</template>
<style></style>
