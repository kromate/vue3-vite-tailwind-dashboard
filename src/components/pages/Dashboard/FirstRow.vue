<template>
  <div class="h-full">
    <Card>
      <div class="flex w-full items-center justify-between mb-3">
        <span class="card_title_1">SITE VISITORS</span>
        <i class="las la-expand" />
      </div>
      <div class="flex w-full items-center justify-between mb-3">
        <h3 class="font-semibold text-white">4.2m</h3>

        <BarChart />
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs text-[#ffffff80]">
          <i class="las la-angle-up mr-1" /> 33.3% more than last week
        </span>
        <span class="text-xs text-[#ffffff80]">
          <i class="las la-user mr-1" /> 45.5% new visitors
        </span>
        <span class="text-xs text-[#ffffff80]">
          <i class="las la-times-circle mr-1" /> 3.25% bounce rate
        </span>
      </div>
    </Card>
  </div>

  <div class="h-full">
    <Card>
      <div class="flex w-full items-center justify-between mb-3">
        <span class="card_title_1">STORE SALES</span>
        <i class="las la-expand" />
      </div>
      <div class="flex w-full items-center justify-between mb-3">
        <h3 class="font-semibold text-white">$35.2K</h3>

        <LineChart />
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs text-[#ffffff80]">
          <i class="las la-angle-up mr-1" /> 20.4% more than last week
        </span>
        <span class="text-xs text-[#ffffff80]">
          <i class="las la-shopping-bag mr-1" /> 33.5% new orders
        </span>
        <span class="text-xs text-[#ffffff80]">
          <i class="las la-dollar-sign mr-1" /> 6.21% conversion rate
        </span>
      </div>
    </Card>
  </div>

  <div class="h-full">
    <Card>
      <div class="flex w-full items-center justify-between mb-3">
        <span class="card_title_1">NEW MEMBERS</span>
        <i class="las la-expand" />
      </div>
      <div class="flex w-full items-center justify-between mb-3">
        <h3 class="font-semibold text-white">4,490</h3>

        <PieChart />
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs text-[#ffffff80]">
          <i class="las la-angle-up mr-1" /> 59.5% more than last week
        </span>
        <span class="text-xs text-[#ffffff80]">
          <i class="lab la-facebook-f mr-1" /> 45.5% from facebook
        </span>
        <span class="text-xs text-[#ffffff80]">
          <i class="lab la-youtube mr-1" /> 15.25% from youtube
        </span>
      </div>
    </Card>
  </div>

  <div class="h-full">
    <Card>
      <div class="flex w-full items-center justify-between mb-3">
        <span class="card_title_1">BANDWIDTH</span>
        <i class="las la-expand" />
      </div>
      <div class="flex w-full items-center justify-between mb-3">
        <h3 class="font-semibold text-white">4.5TB</h3>

        <DonutChart />
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs text-[#ffffff80]">
          <i class="las la-angle-up mr-1" /> 5.3% more than last week
        </span>
        <span class="text-xs text-[#ffffff80]">
          <i class="las la-hdd mr-1" /> 10.5% from total usage
        </span>
        <span class="text-xs text-[#ffffff80]">
          <i class="las la-hand-pointer mr-1" /> 2MB per visit
        </span>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import CS from "@/components/core/ComingSoon.vue";
import Card from "@/components/core/Card.vue";
import BarChart from "@/components/charts/BarChart.vue";
import LineChart from "@/components/charts/LineChart.vue";
import PieChart from "@/components/charts/PieChart.vue";
import DonutChart from "@/components/charts/DonutChart.vue";
</script>

<script lang="ts">
export default {};
</script>

<style scoped></style>
