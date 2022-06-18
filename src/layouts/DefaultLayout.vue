<template>
  <TopBar />
  <div class="flex pt-12">
    <SideBar />
    <slot class="h-screen" />
  </div>
</template>

<script setup lang="ts">
import TopBar from "@/components/navigations/top/TopBar.vue";
import SideBar from "@/components/navigations/side/SideBar.vue";
</script>

<style scoped></style>
