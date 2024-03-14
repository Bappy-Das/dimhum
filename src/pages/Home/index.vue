<script setup>
import Partners from "@/components/Partners/index.vue";
import Banner from "@/components/Banner/index.vue";
import CountArea from "@/components/CounterArea/index.vue";
import EmigrServicesArea from "@/components/EmigrServicesArea/index.vue";
import DealArea from "@/components/DealArea/index.vue";
import WorkArea from "@/components/WorksArea/index.vue";
import PortfolioArea from "@/components/PortfolioArea/index.vue";
import FlightDealArea from "@/components/FlightDealArea/index.vue";
</script>

<template>
  <Banner></Banner>
  <CountArea></CountArea>
  <EmigrServicesArea></EmigrServicesArea>
  <DealArea class="bg-black text-white py-20 font-bold text-6xl mb-32 rounded-xl text-center"></DealArea>
  <WorkArea></WorkArea>
  <PortfolioArea></PortfolioArea>
  <FlightDealArea></FlightDealArea>
  <Partners></Partners>
</template>

<style scoped></style>
