<template>
  <TopBar />
  <div class="flex pt-12">
    <SideBar />
    <main class="app">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import TopBar from "@/components/navigations/top/TopBar.vue";
import SideBar from "@/components/navigations/side/SideBar.vue";
</script>

<style scoped></style>
