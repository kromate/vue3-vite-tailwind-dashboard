<template>
  <aside class="aside">
    <div class="flex flex-col">
      <h3 class="menu_header">Navigation</h3>
      <span class="menu_item">
        <router-link to="/" class="menu_link">
          <i class="las la-microchip text-xl mr-3" />
          Dashboard
        </router-link>
      </span>
      <span class="menu_item">
        <router-link to="/" class="menu_link">
          <i class="las la-chart-bar text-xl mr-3" />
          Analytics
        </router-link>
      </span>

      <div class="flex flex-col cursor-pointer">
        <span class="menu_item" @click="toggle">
          <div class="menu_link">
            <i class="las la-envelope text-xl mr-3" />
            Email
            <i class="las la-sort-down text-md ml-auto" />
          </div>
        </span>

        <transition-group
          appear
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
          v-if="show"
        >
          <router-link to="/" class="sub_menu_link" :key="1">Analytics</router-link>
          <router-link to="/" class="sub_menu_link" :key="2">Analytics</router-link>
        </transition-group>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ref } from "vue";
const beforeEnter = (el: any) => {
	el.style.opacity = 0;
	el.style.transform = "translateX(-100px)";
};
const enter = (el: any, done: any) => {
	gsap.to(".sub_menu_link", {
		opacity: 1,
		x: 0,
		duration: 0.3,
		stagger: 0.2,
		onComplete: done,
		ease: "back.out",
	});
};

const show = ref(false);

const toggle = () => (show.value = !show.value);
</script>

<style scoped></style>
