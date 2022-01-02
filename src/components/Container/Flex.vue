<script lang="ts" setup>
defineProps({
  full: {
    type: Boolean,
    required: false,
    default: false,
  },
  padding: {
    type: Boolean,
    required: false,
    default: false,
  },
  relative: {
    type: Boolean,
    required: false,
    default: false,
  },
  dense: {
    type: Boolean,
    required: false,
    default: false,
  },
  flexMobile: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <div
    class="space-x-4"
    :class="{
      'md:flex': flexMobile === false,
      'flex flex-wrap': flexMobile === true,
      'md:justify-between': dense === false,
      'py-16': padding === true,
      'relative': relative === true,
      'h-screen items-center flex text-center md:text-left flex-col md:flex-row space-x-0 space-y-4 md:space-y-0 justify-center md:justify-start': full === true
    }"
  >
    <slot />
  </div>
</template>