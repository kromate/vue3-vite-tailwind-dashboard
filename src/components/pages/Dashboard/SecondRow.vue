<template>
  <div class="h-full">
    <Card>
      <div class="flex w-full items-center justify-between mb-3">
        <span class="card_title_1">SERVER STATS</span>
        <i class="las la-expand" />
      </div>

      <Histogram />
    </Card>
  </div>
  <div class="h-full">
    <Card>
      <div class="flex w-full items-center justify-between mb-5">
        <span class="card_title_1">UPCOMING SCHEDULES</span>
        <i class="las la-expand" />
      </div>


      <Calendar/>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Histogram from "@/components/charts/Histogram.vue";
import Calendar from "@/components/utils/Calendar.vue";

</script>

<style scoped></style>
