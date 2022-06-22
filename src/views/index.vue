<template>
  <DefaultLayout>
    <div class="row">
      <FirstRow />
      <SecondRow />
      <ThirdRow />
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
