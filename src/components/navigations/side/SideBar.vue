<template>
  <aside>
    <div class="flex flex-col">
      <h3 class="menu_header">Navigation</h3>
      <span class="menu_item">
        <i class="las la-microchip text-xl mr-3"></i>
        <router-link to="/">Dashboard</router-link>
      </span>
      <span class="menu_item">
        <i class="las la-chart-bar text-xl mr-3"></i>
        <router-link to="/">Analytics</router-link>
      </span>
      <span class="menu_item">
        <i class="las la-envelope text-xl mr-3"></i>
        <router-link to="/">Email</router-link>
      </span>
    </div>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped></style>
