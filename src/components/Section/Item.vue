<script lang="ts" setup>
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const target = ref<HTMLElement>();

useMotion(target, {
  initial: {
    opacity: 0,
    translateX: "25%",
  },
  visibleOnce: {
    opacity: 1,
    translateX: "0%",
    transition: {
      delay: 500,
    },
  },
});
</script>

<template>
  <section ref="target" :delay="500" class="space-y-4">
    <slot />
  </section>
</template>
