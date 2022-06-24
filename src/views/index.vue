<template>
  <DefaultLayout>
    <div class="row">
      <div class="cols-4"><FirstRow /></div>
      <div class="cols-2"><SecondRow /></div>
      <div class="cols-2"><ThirdRow /></div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Card from "@/components/core/Card.vue";
import FirstRow from "@/components/pages/Dashboard/FirstRow.vue";
import SecondRow from "@/components/pages/Dashboard/SecondRow.vue";
import ThirdRow from "@/components/pages/Dashboard/ThirdRow.vue";
</script>

<style scoped></style>
ta