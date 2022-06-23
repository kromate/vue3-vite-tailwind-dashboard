<template>
  <div class="h-full cols-2">
    <Card>
      <div class="flex w-full items-center justify-between mb-3">
        <span class="card_title_1">SERVER STATS</span>
        <i class="las la-expand" />
      </div>

      <Histogram />
    </Card>
  </div>
  <div class="h-full cols-2">
    <Card>
      <div class="flex w-full items-center justify-between mb-3">
        <span class="card_title_1">TRAFFIC ANALYTICS</span>
        <i class="las la-expand" />
      </div>

      <!-- <WorldMap /> -->
    </Card>
  </div>
</template>

<script setup lang="ts">
import Histogram from "@/components/charts/Histogram.vue";
</script>

<style scoped></style>
