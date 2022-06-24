<template>
  <div class="h-full">
    <Card>
      <div class="flex w-full items-center justify-between mb-3">
        <span class="card_title_1">SERVER STATS</span>
        <i class="las la-expand" />
      </div>
      <Histogram />

      <div class="flex flex-col md:flex-row justify-between w-full mt-4 gap-4">
        <div class="md:w-1/2 w-full flex items-center">
          <DonutChart class="-ml-7" />
          <div class="flex flex-col w-full gap-1">
            <span class="text-[10px] text-[#ffffff80] font-semibold"
              >DISK USAGE</span
            >
            <p class="text-lg">20.04 / 256 GB</p>
            <progressBar />
            <span class="text-xs text-[#ffffff80]">Last updated 1 min ago</span>
            <div class="flex items-center w-full">
              <div class="rounded-full h-1.5 w-1.5 mr-3 bg-primary" />
              <span>DISK C</span> <span class="ml-auto"> 19.56GB</span>
            </div>
            <div class="flex items-center w-full">
              <div class="rounded-full h-1.5 w-1.5 mr-3 bg-primary" />
              <span>DISK D</span> <span class="ml-auto"> 0.50GB </span>
            </div>
          </div>
        </div>

        <div class="md:w-1/2 w-full flex items-center">
          <DonutChart class="-ml-7" />
          <div class="flex flex-col w-full gap-1">
            <span class="text-[10px] text-[#ffffff80] font-semibold"
              >DISK USAGE</span
            >
            <p class="text-lg">20.04 / 256 GB</p>
            <progressBar />
            <span class="text-xs text-[#ffffff80]">Last updated 1 min ago</span>
            <div class="flex items-center w-full">
              <div class="rounded-full h-1.5 w-1.5 mr-3 bg-primary" />
              <span>DISK C</span> <span class="ml-auto"> 19.56GB</span>
            </div>
            <div class="flex items-center w-full">
              <div class="rounded-full h-1.5 w-1.5 mr-3 bg-primary" />
              <span>DISK D</span> <span class="ml-auto"> 0.50GB </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
  <div class="h-full">
    <Card>
      <div class="flex w-full items-center justify-between mb-5">
        <span class="card_title_1">UPCOMING SCHEDULES</span>
        <i class="las la-expand" />
      </div>

      <Calendar />
    </Card>
  </div>
</template>

<script setup lang="ts">
import Histogram from "@/components/charts/Histogram.vue";
import DonutChart from "@/components/charts/DonutChart.vue";
import Calendar from "@/components/utils/Calendar.vue";
import progressBar from "@/components/utils/progressBar.vue";
</script>

<style scoped></style>
