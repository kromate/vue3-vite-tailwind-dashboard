<template>
  <TopBar />
  <div class="flex pt-12">
    <SideBar />
    <main class="app" id="app">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import TopBar from "@/components/navigations/top/TopBar.vue";
import SideBar from "@/components/navigations/side/SideBar.vue";
</script>

<script lang="ts">
export default {};
</script>

<style scoped></style>
