<template>
  <DefaultLayout>
    <div class="row">
      <FirstRow />

      <div class="h-full cols-2">
        <Card>Hello</Card>
      </div>
      <div class="h-full cols-2">
        <Card>Hello</Card>
      </div>

      <div class="h-full cols-2">
        <Card>Hello</Card>
      </div>
      <div class="h-full cols-2">
        <Card>Hello</Card>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Card from "@/components/core/Card.vue";
import FirstRow from "@/components/pages/Dashboard/FirstRow.vue";
</script>

<style scoped></style>
