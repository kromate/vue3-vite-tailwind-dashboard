<template>
  <aside class="aside">
    <div class="flex flex-col gap-1.5" v-for="(item, ind) in MenuList" :key="ind">
      <h3 class="menu_header">{{item.name}}</h3>

      <div v-for="(subItem, idx) in item.subs" :key="idx">
        <span class="menu_item" v-if="!subItem.subs">
          <router-link :to="subItem.link" class="menu_link">
            <i :class="[subItem.icon , 'text-xl mr-3']" />
            {{subItem.name}}
          </router-link>
        </span>

        <div class="flex flex-col cursor-pointer gap-1.5" v-else>
          <span class="menu_item" @click="toggle">
            <div class="menu_link">
              <i :class="[subItem.icon , 'text-xl mr-3']" />
              {{subItem.name}}
              <i class="las la-sort-down text-md ml-auto" />
            </div>
          </span>

          <TransitionGroup
            appear
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
            v-if="show"
          >
            <router-link
              v-for="(miniSubItem, ids) in subItem.subs"
              :key="ids"
              :to="miniSubItem.link"
              class="sub_menu_link"
              :data-index="ids"
            >{{miniSubItem.name}}</router-link>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ref } from "vue";
import { MenuList } from "@/composables/navigation/useSidebar";

const beforeEnter = (el: any) => {
	el.style.opacity = 0;
	el.style.transform = "translateX(-100px)";
};
const enter = (el: any, done: any) => {
	gsap.to(".sub_menu_link", {
		opacity: 1,
		x: 0,
		duration: 0.3,
		stagger: 0.1,
		onComplete: done,
		delay: el.dataset.index * 0.1,
	});
};
const leave = (el: any, done: any) => {
	console.log("leaving o.....");
	done();
	gsap.to(".sub_menu_link", {
		opacity: 1,
		x: -100,
		duration: 0.3,
		stagger: 0.1,
		onComplete: done,
		delay: el.dataset.index * 0.1,
	});
};

const show = ref(false);

const toggle = () => {
	if (show.value) {
		gsap.to(".sub_menu_link", {
			opacity: 1,
			x: -120,
			duration: 0.3,
			stagger: -0.1,
			onComplete: change,
			// delay: el.dataset.index * 0.1,
		});
	} else {
		show.value = !show.value;
	}
};

const change = () => {
	show.value = !show.value;
};
</script>

<style scoped></style>
