<template>
  <aside class="aside">
    <div class="flex flex-col">
      <h3 class="menu_header">Navigation</h3>
      <span class="menu_item">
        <router-link to="/" class="menu_link">
          <i class="las la-microchip text-xl mr-3" />
          Dashboard</router-link
        >
      </span>
      <span class="menu_item">
        <router-link to="/" class="menu_link">
          <i class="las la-chart-bar text-xl mr-3" />
          Analytics</router-link
        >
      </span>

      <div>
        <span class="menu_item">
          <div class="menu_link">
            <i class="las la-envelope text-xl mr-3" />
            Email
            <i class="las la-sort-down text-md ml-auto" />
          </div>
        </span>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped></style>
