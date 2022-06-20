<template>
  <DefaultLayout>
    <div class="row">
      <div class="h-full cols-4">
        <Card>Hello</Card>
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
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Card from "@/components/core/Card.vue";
import { onMounted } from "vue";
</script>

<style scoped></style>
