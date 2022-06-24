<template>
  <div class="h-full">
    <Card>
      <div class="flex w-full items-center justify-between mb-3">
        <span class="card_title_1">SERVER STATS</span>
        <i class="las la-expand" />
      </div>
      <Histogram />

      <div class="flex justify-between w-full">
        <div class="w-1/2 flex items-center">
          <DonutChart />
          <div class="flex flex-col w-full gap-1.5">
            <span class="text-[10px] text-[#ffffff80] font-semibold"
              >DISK USAGE</span
            >
            <p class="text-lg">20.04 / 256 GB</p>
            <progressBar />
            <span class="text-xs text-[#ffffff80]">Last updated 1 min ago</span>
          </div>
        </div>

        <div class="flex flex-col"></div>
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
