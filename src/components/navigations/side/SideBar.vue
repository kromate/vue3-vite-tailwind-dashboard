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
          <span class="menu_item" @click="toggle(subItem.show)">
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
            v-if="subItem.show.value"
          >
            <router-link
              v-for="(miniSubItem, ids) in subItem.subs"
              :key="ids"
              :to="miniSubItem.link"
              class="sub_menu_link"
              :id="idx"
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
import {
	MenuList,
	beforeEnter,
	enter,
} from "@/composables/navigation/useSidebar";

const toggle = (show: any) => {
	if (show.value) {
		gsap.to(".sub_menu_link", {
			opacity: 1,
			x: -120,
			duration: 0.4,
			stagger: -0.1,
			onComplete: change(show) as any,
			// delay: el.dataset.index * 0.1,
		});
	} else {
		show.value = !show.value;
	}
};

const change = (show: any) => {
	show.value = !show.value;
};
</script>

<style scoped></style>
