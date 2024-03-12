<script setup>
import Nav from "@/components/Nav/index.vue";
import Footer from "@/components//Footer/index.vue";
</script>
<template>
  <div>
    <Nav></Nav>
    <div><router-view /></div>
    <Footer></Footer>
  </div>
</template>
