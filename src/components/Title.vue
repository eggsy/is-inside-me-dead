<script lang="ts" setup>
defineProps({
  size: {
    type: String,
    required: false,
    default: "1"
  }
})
</script>

<template>
  <Component
    :is="`h${size}`"
    :class="{
      'font-bold text-white': true,
      'text-4xl md:text-6xl': size === '1',
      'text-2xl': size === '2',
      'text-xl': size === '3',
    }"
  >
    <slot />
  </Component>
</template>