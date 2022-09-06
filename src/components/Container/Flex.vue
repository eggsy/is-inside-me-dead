<script lang="ts" setup>
defineProps<{
  full?: boolean;
  padding?: boolean;
  relative?: boolean;
  dense?: boolean;
  flexMobile?: boolean;
}>();
</script>

<template>
  <div
    class="space-x-4"
    :class="{
      'md:flex': flexMobile === false,
      'flex flex-wrap': flexMobile === true,
      'md:justify-between': dense === false,
      'py-16': padding === true,
      relative: relative === true,
      'h-screen items-center flex text-center md:text-left flex-col md:flex-row space-x-0 space-y-4 md:space-y-0 justify-center md:justify-start':
        full === true,
    }"
  >
    <slot />
  </div>
</template>
