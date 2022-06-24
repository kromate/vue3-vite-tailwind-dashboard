<template>
  <div
    id="header"
    class="h-13 bg-headerBg fixed inset-x-0 top-0 flex z-50 px-4 items-center justify-between"
  >
    <div id="left-side" class="flex items-center">
      <button id="menuBtn" class="transition-all duration-150" @click="toggleSidebar">
        <i
          class="las la-bars text-2xl text-gray-500 hover:text-white transition-all duration-300"
        ></i>
      </button>

      <div class="ml-8 pc">
        <router-link to="#" class="flex items-center">
          <span class="logo font-semibold h-7 w-7 text-primary text-base"
            >K</span
          >
          <span class="text-[15px] font-medium">KROM ADMIN</span>
        </router-link>
      </div>
    </div>

    <div id="right-side" class="flex items-center gap-8">
      <button id="menuBtn">
        <i class="las la-search text-2xl -rotate-90"></i>
      </button>
      <button id="menuBtn">
        <i class="las la-table text-2xl"></i>
      </button>
      <button id="menuBtn">
        <i class="las la-bell text-2xl"></i>
      </button>

      <div>
        <router-link to="#" class="flex items-center">
          <img
            src="https://pbs.twimg.com/media/ELIRcJNWsAU2Llu?format=jpg&name=900x900"
            alt="profile picture"
            class="h-8 w-8 rounded-full mr-3"
          />
          <span class="text-[15px] font-medium pc">onichan@otaku.com</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sidebarController } from '../../../composables/utils/index';
const {toggleSidebar} = sidebarController()
</script>

<style scoped>
.logo {
  background: url("../../../assets/image/logoBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}
</style>
