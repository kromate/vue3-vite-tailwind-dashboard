<template>
  <DefaultLayout>
    <div class="row">
      <div class="h-52 w-1/4 p-1">
        <Card>Hello</Card>
      </div>
      <div class="h-52 w-1/4 p-1">
        <Card>Hello</Card>
      </div>
      <div class="h-52 w-1/4 p-1">
        <Card>Hello</Card>
      </div>
      <div class="h-52 w-1/4 p-1">
        <Card>Hello</Card>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Card from "@/"
import { onMounted } from "vue";
</script>

<style scoped></style>
