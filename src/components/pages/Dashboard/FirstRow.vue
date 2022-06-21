<template>
  <dicv class="h-full cols-4">
    <Card>
      <div class="flex w-full items-center justify-between">
        <span class="font-bold uppercase">SITE VISITORS</span>
        <i class="las la-expand" />
      </div>
      <div class="flex w-full items-center justify-between">
        <h3 class="font-bold text-white">4.2m</h3>
        <div class="w">
          <BarChart />
        </div>
      </div>
    </Card>
  </dicv>

  <div class="h-full cols-4">
    <Card>Hello</Card>
  </div>
  <div class="h-full cols-4">
    <Card>Hello</Card>
  </div>
  <div class="h-full cols-4">
    <Card>Hello</Card>
  </div>
</template>

<script setup lang="ts">
import BarChart from "@/components/charts/BarChart.vue";
import Card from "@/components/core/Card.vue";
</script>

<style scoped></style>
