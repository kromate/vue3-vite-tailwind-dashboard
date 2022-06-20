<template>
  <DefaultLayout>
    <div class="row">
      <div class="h-52 cols-4 p-2">
        <Card>Hello</Card>
      </div>
      <div class="h-52 cols-4 p-2">
        <Card>Hello</Card>
      </div>
      <div class="h-52 cols-4 p-2">
        <Card>Hello</Card>
      </div>
      <div class="h-52 cols-4 p-2">
        <Card>Hello</Card>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Card from "@/components/core/Card.vue";
import { onMounted } from "vue";
</script>

<style scoped></style>
