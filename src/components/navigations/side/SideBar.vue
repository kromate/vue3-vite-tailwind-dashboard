<template>
  <div class="">
    <transition name="slide" appear>
      <aside class="aside hidden md:block" id="sidebar">
        <div class="flex flex-col" v-for="(item, ind) in MenuList" :key="ind">
          <h3 class="menu_header">{{ item.name }}</h3>

          <div v-for="(subItem, idx) in item.subs" :key="idx">
            <span class="menu_item" v-if="!subItem.subs">
              <router-link :to="subItem.link" class="menu_link">
                <i :class="[subItem.icon, 'text-xl mr-3']" />
                {{ subItem.name }}
              </router-link>
            </span>

            <div class="flex flex-col cursor-pointer gap-1.5" v-else>
              <span
                class="menu_item"
                @click="subItem.show.value = !subItem.show.value"
              >
                <div class="menu_link">
                  <i :class="[subItem.icon, 'text-xl mr-3']" />
                  {{ subItem.name }}
                  <i
                    :class="[
                      subItem.show.value ? 'rotate-180' : '',
                      ' las la-sort-down text-md ml-auto transition-all duration-300',
                    ]"
                  />
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
                  :data-index="ids"
                  >{{ miniSubItem.name }}</router-link
                >
              </TransitionGroup>
            </div>
          </div>
        </div>
      </aside>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ref, onMounted } from "vue";
import { sidebarController } from "../../../composables/utils/index";
import {
  MenuList,
  beforeEnter,
  enter,
} from "@/composables/navigation/useSidebar";

// const {showMenu}= sidebarController()
</script>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

// .router-link-active.router-link-exact-active {
//   @apply text-white;
//   .las{
//      @apply text-primary
//   }
// }
</style>
