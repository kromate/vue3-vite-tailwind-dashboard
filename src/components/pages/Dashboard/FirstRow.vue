<template>
  <div class="h-full cols-4">
    <Card>
      <div class="flex w-full items-center justify-between mb-2">
        <span class="font-bold uppercase">SITE VISITORS</span>
        <i class="las la-expand" />
      </div>
      <div class="flex w-full items-center justify-between">
        <h3 class="font-bold text-white">4.2m</h3>

        <CS class="w-[130px] md:w-[92px] h-9 text-[10px]" />
      </div>
    </Card>
  </div>

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
import CS from "@/components/core/ComingSoon.vue";
import Card from "@/components/core/Card.vue";
</script>

<style scoped></style>

